// app.js
// =============================
// Carga de promociones desde promos.csv
// =============================

// Array principal de promociones
let PROMOS = [];

// Función para cargar el CSV y parsearlo
function cargarPromos(callback) {
  Papa.parse("promos.csv", {
    download: true,
    header: true,
    complete: function(results) {
      PROMOS = results.data.map(row => ({
        id: row.id,
        marca: row.marca,
        nombre: row.nombre,
        precios: {
          uno: parseFloat(row.precio_uno) || 0,
          tres: parseFloat(row.precio_tres) || 0,
          cantidad: parseFloat(row.precio_cantidad) || 0
        },
        talles: row.talles ? row.talles.split("|") : [],
        items: [
          {
            codigo: row.codigo,
            desc: row.desc,
            familia: row.familia
          }
        ]
      }));
      console.log("✅ Promos cargadas:", PROMOS);
      if (callback) callback();
    }
  });
}

// =============================
// Funciones de interfaz
// =============================

// Pedido acumulado
let pedido = [];

// Agregar manualmente
function agregarAlPedido(item) {
  pedido.push(item);
  renderPedido();
}

// Render de la salida en formato profesional
function renderPedido() {
  const salida = document.getElementById("pedidoSalida");
  const hoy = new Date();
  const fecha = hoy.toLocaleDateString("es-AR");

  let html = `
<pre>
LOCAL: ${document.getElementById("selectSucursal")?.value || "No seleccionado"}
PEDIDO SEMANAL DE ${fecha}

ART        DESCRIPCIÓN           TALLE   CANTIDAD
------------------------------------------------
`;

  pedido.forEach(item => {
    html += `${item.codigo.padEnd(10)} ${item.desc.padEnd(20)} ${String(item.talle).padEnd(6)} ${item.cantidad}\n`;
  });

  html += "------------------------------------------------</pre>";

  salida.innerHTML = html;
}

// =============================
// Inicializar
// =============================

// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  // Cargar promos desde el CSV
  cargarPromos(() => {
    // acá podrías rellenar selects de promos/artículos en la UI
  });

  // Botón “Agregar a la lista”
  document.getElementById("btnAgregar")?.addEventListener("click", () => {
    const cantidad = parseInt(document.getElementById("cantidad").value) || 0;
    if (!cantidad) return alert("Ingresá una cantidad válida");

    // ejemplo: agregar el primer item de prueba
    const articulo = PROMOS[0]?.items[0];
    if (!articulo) return;

    agregarAlPedido({
      codigo: articulo.codigo,
      desc: articulo.desc,
      talle: "M",
      cantidad
    });
  });

  // Botón “Pedir surtido”
  document.getElementById("btnSurtido")?.addEventListener("click", () => {
    const cantidadTotal = parseInt(document.getElementById("cantidad").value) || 0;
    if (cantidadTotal <= 0) return alert("Ingresá una cantidad válida");

    const talles = ["S","M","L","XL"]; // se puede mejorar leyendo del CSV
    const base = Math.floor(cantidadTotal / talles.length);
    let resto = cantidadTotal % talles.length;

    const articulo = PROMOS[0]?.items[0];
    if (!articulo) return;

    talles.forEach(talle => {
      let cant = base;
      if (resto > 0) { cant++; resto--; }
      agregarAlPedido({
        codigo: articulo.codigo,
        desc: articulo.desc,
        talle,
        cantidad: cant
      });
    });
  });
});
