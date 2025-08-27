/* app.js – Pedido a Proveedores (Damy Edition)
   Requiere:
   - PapaParse (CDN)
   - jsPDF + autoTable (CDN)
   - promos.csv con columnas: id, marca, nombre, codigo, desc, familia, talles, precio_uno, precio_tres, precio_cantidad
*/

//////////////////////////////
// Estado global
//////////////////////////////
let PROMOS = [];
let promoActual = null;        // { id, marca, nombre, talles[], precios{}, items[] }
let pedido = [];               // [{codigo, desc, talle, cantidad}]

const LS_KEY = "pedido_v1";

//////////////////////////////
// Utils
//////////////////////////////
const $ = (sel) => document.querySelector(sel);
const $all = (sel, root=document) => Array.from(root.querySelectorAll(sel));

function parseNumber(n) {
  if (n == null) return 0;
  const s = String(n).trim();
  if (!s) return 0;
  // Soporta "10.230,50" y "10230.50"
  const normalized = s.replace(/\./g, "").replace(",", ".");
  const num = Number(normalized);
  return Number.isFinite(num) ? num : 0;
}

function toLocalDateStr(d = new Date()) {
  // YYYY-MM-DD
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function unionUnique(arrA, arrB) {
  return Array.from(new Set([...(arrA || []), ...(arrB || [])]));
}

//////////////////////////////
// Carga + modelado de PROMOS
//////////////////////////////
function cargarPromos(callback) {
  Papa.parse("promos.csv", {
    download: true,
    header: true,
    complete: function (results) {
      try {
        const rows = (results.data || []).filter(r => r && r.id && r.codigo);
        PROMOS = agruparPromos(rows);
        rellenarDatalist();
        if (typeof callback === "function") callback();
      } catch (e) {
        console.error("Error procesando CSV:", e);
        alerta("No se pudo procesar promos.csv");
      }
    },
    error: function (err) {
      console.error("Error cargando CSV:", err);
      alerta("No se pudo cargar promos.csv");
    }
  });
}

function agruparPromos(rows) {
  const map = new Map();
  for (const r of rows) {
    const id = String(r.id || "").trim();
    if (!id) continue;

    const talles = String(r.talles || "")
      .split("|")
      .map(t => t.trim())
      .filter(Boolean);

    const precios = {
      uno: parseNumber(r.precio_uno),
      tres: parseNumber(r.precio_tres),
      cantidad: parseNumber(r.precio_cantidad)
    };

    const item = {
      codigo: String(r.codigo || "").trim(),
      desc: String(r.desc || "").trim(),
      familia: String(r.familia || "").trim()
    };

    if (!item.codigo) continue;

    if (!map.has(id)) {
      map.set(id, {
        id,
        marca: String(r.marca || "").trim(),
        nombre: String(r.nombre || "").trim(),
        talles: talles,
        precios,
        items: [item]
      });
    } else {
      const p = map.get(id);
      p.items.push(item);
      // Unir talles por si vienen repetidos en filas
      p.talles = unionUnique(p.talles, talles);
      // Último precio gana (o podrías hacer promedios si quisieras)
      p.precios = precios;
    }
  }

  // Orden visible
  const list = Array.from(map.values());
  list.sort((a, b) => {
    const A = (a.marca + " " + a.nombre).toLowerCase();
    const B = (b.marca + " " + b.nombre).toLowerCase();
    return A.localeCompare(B, "es");
  });
  return list;
}

//////////////////////////////
// UI: datalist + selección promo
//////////////////////////////
function rellenarDatalist() {
  const dl = $("#promosList");
  if (!dl) return;
  dl.innerHTML = PROMOS.map(p => {
    const label = `${p.id} - ${p.marca} - ${p.nombre}`;
    return `<option value="${escapeHtml(label)}"></option>`;
  }).join("");
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m]
  ));
}

function enlazarBusquedaPromo() {
  const input = $("#promoSearch") || $("#promo") || $("#promoInput");
  if (!input) return;

  input.addEventListener("change", () => {
    seleccionarPromoPorTexto(input.value);
  });
  input.addEventListener("input", () => {
    // Para UX: cuando coincida exacto, seleccionar
    seleccionarPromoPorTexto(input.value, { onlyExact: true });
  });
}

function seleccionarPromoPorTexto(txt, opts = {}) {
  const v = String(txt || "").trim().toLowerCase();
  if (!v) return;

  let p =
    PROMOS.find(p => (`${p.id} - ${p.marca} - ${p.nombre}`).toLowerCase() === v) ||
    PROMOS.find(p => p.id.toLowerCase() === v) ||
    (!opts.onlyExact && PROMOS.find(p => (`${p.marca} ${p.nombre}`).toLowerCase().includes(v))) ||
    (!opts.onlyExact && PROMOS.find(p => p.id.toLowerCase().includes(v)));

  if (p) {
    promoActual = p;
    setText("pm", `${p.marca} – ${p.nombre}`);
    renderArticulos(p);
    renderTalles(p);
    // Reset contadores selección
    setText("cm", "0");
    setText("sm", "0");
  }
}

//////////////////////////////
// UI: artículos y talles
//////////////////////////////
function renderArticulos(promo) {
  const cont = $("#artList");
  if (!cont) return;
  const items = promo?.items || [];
  cont.innerHTML = items.map(it => `
    <label class="chk">
      <input type="checkbox" name="art" value="${escapeHtml(it.codigo)}" data-desc="${escapeHtml(it.desc)}">
      <span>${escapeHtml(it.codigo)} – ${escapeHtml(it.desc || "")}${it.familia ? ` <em>(${escapeHtml(it.familia)})</em>` : ""}</span>
    </label>
  `).join("");

  // Evento para contar seleccionados
  $all('input[name="art"]', cont).forEach(chk => {
    chk.addEventListener("change", () => {
      const c = $all('input[name="art"]:checked', cont).length;
      setText("cm", String(c || 0));
    });
  });

  // “Todos”
  const allToggle = $("#artAll");
  if (allToggle) {
    allToggle.checked = false;
    allToggle.onchange = () => {
      const checked = allToggle.checked;
      $all('input[name="art"]', cont).forEach(chk => {
        chk.checked = checked;
      });
      setText("cm", String(checked ? items.length : 0));
    };
  }

  // Limpiar selección
  const btnClear = $("#clearSel");
  if (btnClear) {
    btnClear.onclick = () => {
      const talles = $("#talles");
      $all('input[type="checkbox"]', cont).forEach(chk => chk.checked = false);
      if (talles) $all('input[type="checkbox"]', talles).forEach(chk => chk.checked = false);
      setText("cm", "0");
      setText("sm", "0");
      if ($("#artAll")) $("#artAll").checked = false;
      if ($("#talleAll")) $("#talleAll").checked = false;
    };
  }
}

function renderTalles(promo) {
  const cont = $("#talles");
  if (!cont) return;
  const list = (promo?.talles || []).slice();

  // Ordenar talles: si son números, por número; si no, alfabético
  list.sort((a, b) => {
    const na = Number(a), nb = Number(b);
    const aN = Number.isFinite(na), bN = Number.isFinite(nb);
    return aN && bN ? na - nb : String(a).localeCompare(String(b), "es");
  });

  cont.innerHTML = list.map(t => `
    <label class="chk">
      <input type="checkbox" name="talle" value="${escapeHtml(t)}">
      <span>${escapeHtml(t)}</span>
    </label>
  `).join("");

  $all('input[name="talle"]', cont).forEach(chk => {
    chk.addEventListener("change", () => {
      const c = $all('input[name="talle"]:checked', cont).length;
      setText("sm", String(c || 0));
    });
  });

  const allToggle = $("#talleAll");
  if (allToggle) {
    allToggle.checked = false;
    allToggle.onchange = () => {
      const checked = allToggle.checked;
      $all('input[name="talle"]', cont).forEach(chk => {
        chk.checked = checked;
      });
      setText("sm", String(checked ? list.length : 0));
    };
  }
}

//////////////////////////////
// Pedido (agregar, surtido, render)
//////////////////////////////
function getSeleccionadosArticulos() {
  const cont = $("#artList");
  return cont ? $all('input[name="art"]:checked', cont) : [];
}

function getSeleccionadosTalles() {
  const cont = $("#talles");
  return cont ? $all('input[name="talle"]:checked', cont) : [];
}

function agregarNormal() {
  if (!promoActual) return alerta("Elegí una promoción primero.");
  const arts = getSeleccionadosArticulos();
  const talls = getSeleccionadosTalles();
  const cant = parseInt($("#cantidad")?.value || $("#qty")?.value || "0", 10) || 0;

  if (!arts.length) return alerta("Seleccioná al menos un artículo.");
  if (!talls.length) return alerta("Seleccioná al menos un talle.");
  if (cant <= 0) return alerta("Ingresá una cantidad válida.");

  for (const art of arts) {
    for (const t of talls) {
      pedido.push({
        codigo: art.value,
        desc: art.dataset.desc || "",
        talle: t.value,
        cantidad: cant
      });
    }
  }
  renderPedido();
}

function agregarSurtido() {
  if (!promoActual) return alerta("Elegí una promoción primero.");
  const arts = getSeleccionadosArticulos();
  let talls = getSeleccionadosTalles().map(t => t.value);
  const total = parseInt($("#cantidad")?.value || $("#qty")?.value || "0", 10) || 0;

  if (!arts.length) return alerta("Seleccioná al menos un artículo.");
  if (!talls.length) talls = (promoActual.talles || []).slice();
  if (!talls.length) return alerta("No hay talles disponibles.");
  if (total <= 0) return alerta("Ingresá una cantidad válida.");

  const base = Math.floor(total / talls.length);
  let resto = total % talls.length;

  const reparto = talls.map(t => ({ talle: t, qty: base + (resto-- > 0 ? 1 : 0) }))
                       .filter(r => r.qty > 0);

  for (const art of arts) {
    for (const r of reparto) {
      pedido.push({
        codigo: art.value,
        desc: art.dataset.desc || "",
        talle: r.talle,
        cantidad: r.qty
      });
    }
  }
  renderPedido();
}

function renderPedido() {
  const wrap = $("#pedidoWrap") || $("#pedidoSalida");
  if (!wrap) return;

  if (!pedido.length) {
    wrap.innerHTML = `<div class="empty">Sin ítems en el pedido.</div>`;
    setText("count", "0");
    guardarLS();
    return;
    }

  // Tabla HTML
  const rows = pedido.map(p => `
    <tr>
      <td>${escapeHtml(p.codigo)}</td>
      <td>${escapeHtml(p.desc || "")}</td>
      <td class="talle">${escapeHtml(String(p.talle))}</td>
      <td class="num">${escapeHtml(String(p.cantidad))}</td>
    </tr>
  `).join("");

  wrap.innerHTML = `
    <table class="tabla">
      <thead>
        <tr><th>ART</th><th>DESCRIPCIÓN</th><th>TALLE</th><th>CANT.</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;

  setText("count", String(pedido.length));
  guardarLS();
}

//////////////////////////////
// Portapapeles + PDF
//////////////////////////////
async function copiarPedido() {
  if (!pedido.length) return alerta("No hay nada para copiar.");
  const lines = pedido.map(p => [p.codigo, p.desc || "", p.talle, p.cantidad].join("\t")).join("\n");
  try {
    await navigator.clipboard.writeText(lines);
    alerta("Pedido copiado al portapapeles.");
  } catch (e) {
    console.error(e);
    alerta("No se pudo copiar (permiso denegado).");
  }
}

function exportarPDF() {
  if (!pedido.length) return alerta("No hay nada para exportar.");
  const { jsPDF } = window.jspdf || {};
  if (!jsPDF || !window.jspdf || !window.jspPDF) {
    // (autoTable cuelga de window.jspdf)
  }
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const local = $("#sucursal")?.value || "Sin sucursal";
  const fecha = toLocalDateStr();

  doc.setFontSize(14);
  doc.text(`LOCAL: ${local}`, 40, 40);
  doc.text(`PEDIDO SEMANAL – ${fecha}`, 40, 60);

  const body = pedido.map(p => [p.codigo, p.desc || "", String(p.talle), String(p.cantidad)]);
  doc.autoTable({
    head: [["ART", "DESCRIPCIÓN", "TALLE", "CANT."]],
    body,
    startY: 80,
    styles: { fontSize: 10, halign: "left" },
    headStyles: { halign: "center" },
    columnStyles: {
      0: { cellWidth: 90 },
      1: { cellWidth: 300 },
      2: { cellWidth: 70, halign: "center" },
      3: { cellWidth: 70, halign: "center" }
    }
  });

  doc.save(`Pedido_${local}_${fecha}.pdf`);
}

//////////////////////////////
// Persistencia
//////////////////////////////
function guardarLS() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(pedido));
  } catch {}
}

function cargarLS() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) {
        pedido = arr.filter(x => x && x.codigo);
      }
    }
  } catch {}
}

//////////////////////////////
// Helpers UI
//////////////////////////////
function alerta(msg) {
  // reemplazá por un toast si querés
  if (msg) console.log("INFO:", msg);
  const target = $("#alerta");
  if (target) {
    target.textContent = msg;
    target.style.display = "block";
    setTimeout(() => { target.style.display = "none"; }, 2500);
  } else {
    // fallback
    alert(msg);
  }
}

function enlazarBotones() {
  $("#btnAgregar") && ($("#btnAgregar").onclick = agregarNormal);
  $("#addBtn") && ($("#addBtn").onclick = agregarNormal); // alias

  $("#btnSurtido") && ($("#btnSurtido").onclick = agregarSurtido);

  $("#vaciar") && ($("#vaciar").onclick = () => {
    pedido = [];
    renderPedido();
  });

  $("#copiar") && ($("#copiar").onclick = copiarPedido);

  $("#btnPDF") && ($("#btnPDF").onclick = exportarPDF);
}

//////////////////////////////
// Init
//////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  cargarLS();
  renderPedido();
  cargarPromos(() => { /* listo para usar */ });
  enlazarBusquedaPromo();
  enlazarBotones();

  // KPIs iniciales
  setText("pm", "—");
  setText("cm", "0");
  setText("sm", "0");
});
