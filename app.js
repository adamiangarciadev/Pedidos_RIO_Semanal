let PROMOS = [];
let promoActual = null;
let pedido = [];

// NUEVO: estado de extras
let addCinta = false;
let bolsas = { Chicas:false, Medianas:false, Grandes:false };

const LS_KEY = "pedido_v1";

const SUCURSALES = [
  "NAZCA","AVELLANEDA 2","LAMARCA","SARMIENTO","CORRIENTES","CORRIENTES2","CASTELLI","QUILMES","MORENO","PUEYRREDON"
];

const $  = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

function parseNumber(n){ if(n==null) return 0; const s=String(n).trim(); if(!s) return 0; const x=s.replace(/\./g,"").replace(",","."); const v=Number(x); return Number.isFinite(v)?v:0; }
function toLocalDateStr(d=new Date()){const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,"0"),day=String(d.getDate()).padStart(2,"0");return `${y}-${m}-${day}`;}
function setText(id, t){ const el=document.getElementById(id); if(el) el.textContent=t; }
function escapeHtml(str){return String(str).replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function unionUnique(a,b){ return Array.from(new Set([...(a||[]),...(b||[])])); }

function alerta(msg){
  if(msg) console.log("INFO:", msg);
  const target=$("#alerta"); if(target){ target.textContent=msg; target.style.display="block"; setTimeout(()=>{target.style.display="none";},2300);} else alert(msg);
}

/* ===== Agrupar pedido ===== */
function agruparPedido(lineas){
  const map=new Map();
  for(const p of lineas){
    const codigo=String(p.codigo||"").trim();
    const talle=String(p.talle||"").trim();
    const desc=String(p.desc||"");
    const key=(codigo+"||"+talle).toLowerCase();
    const prev=map.get(key);
    if(!prev) map.set(key,{codigo,desc,talle,cantidad:Number(p.cantidad)||0});
    else {
      prev.cantidad+=Number(p.cantidad)||0;
      if(!prev.desc && desc) prev.desc = desc;
    }
  }

  return Array.from(map.values()).sort((a,b)=>{
    const ad = (a.desc||"").toLowerCase();
    const bd = (b.desc||"").toLowerCase();
    if(ad !== bd) return ad.localeCompare(bd,"es");
    return String(a.talle).localeCompare(String(b.talle),"es",{numeric:true});
  });
}
const getPedidoAgrupado=()=>agruparPedido(pedido);

/* ===== Sucursal ===== */
function initSucursalSelect(){
  const sel=$("#sucursalSelect"); if(!sel) return;
  sel.innerHTML=SUCURSALES.map(s=>`<option value="${s}">${s}</option>`).join("");
}

/* ===== Cargar promos ===== */
function cargarPromos(){
  Papa.parse("promos.csv",{
    download:true, header:true,
    complete: (res)=>{
      try{
        const rows=(res.data||[]).filter(r=>r&&r.id&&r.codigo);
        PROMOS=agruparPromos(rows);
        rellenarDatalist();
        renderPromosGrid();
      }catch(e){console.error(e); alerta("No se pudo procesar promos.csv");}
    },
    error: (err)=>{ console.error(err); alerta("No se pudo cargar promos.csv"); }
  });
}

function agruparPromos(rows){
  const map=new Map();
  for(const r of rows){
    const id=String(r.id||"").trim(); if(!id) continue;
    const talles=String(r.talles||"").split("|").map(t=>t.trim()).filter(Boolean);
    const precios={ uno:parseNumber(r.precio_uno), tres:parseNumber(r.precio_tres), cantidad:parseNumber(r.precio_cantidad) };
    const item={ codigo:String(r.codigo||"").trim(), desc:String(r.desc||"").trim(), familia:String(r.familia||"").trim() };
    if(!item.codigo) continue;

    if(!map.has(id)){
      map.set(id,{ id, marca:String(r.marca||"").trim(), nombre:String(r.nombre||"").trim(), talles, precios, items:[item] });
    }else{
      const p=map.get(id); p.items.push(item); p.talles=unionUnique(p.talles,talles); p.precios=precios;
    }
  }
  return Array.from(map.values()).sort((a,b)=> (a.marca+" "+a.nombre).toLowerCase().localeCompare((b.marca+" "+b.nombre).toLowerCase(),"es"));
}

/* ===== Buscador ===== */
function rellenarDatalist(){
  const dl=$("#promosList"); if(!dl) return;
  const optsPromo = PROMOS.map(p => `<option value="${escapeHtml(`${p.id} - ${p.marca} - ${p.nombre}`)}"></option>`);
  const optsArt = PROMOS.flatMap(p => (p.items||[]).map(it => `<option value="${escapeHtml(it.codigo)}"></option>`));
  dl.innerHTML = optsPromo.concat(optsArt).join("");
}
function enlazarBusquedaPromo(){
  const input=$("#promoSearch"); if(!input) return;
  input.addEventListener("change", ()=> seleccionarPorTexto(input.value));
  input.addEventListener("input", ()=> seleccionarPorTexto(input.value,{onlyExact:true}));
}
function seleccionarPorTexto(txt,{onlyExact=false}={}){ /* (queda igual) */ }

/* ===== Render de tarjetas ===== */
function renderPromosGrid(){ /* (queda igual) */ }
function expandirPromoCard(promoId){ /* (queda igual) */ }
function renderArticulosEn(card, promo){ /* (queda igual) */ }
function getCodigosSeleccionados(card){ /* (queda igual) */ }
function limpiarCard(card){ /* (queda igual) */ }
function toggleTodosArticulos(card){ /* (queda igual) */ }

/* ===== Talles ===== */
function renderTallesEn(card, promo){ /* (queda igual) */ }
function getTallesSeleccionados(card){ /* (queda igual) */ }
function limpiarTalles(card){ /* (queda igual) */ }
function toggleTodosTalles(card){ /* (queda igual) */ }

/* ===== Agregar al pedido ===== */
function agregarDesdeCard(card, p, {modo}){ /* (queda igual) */ }

/* ===== Pedido ===== */
function renderPedido(){ /* (queda igual) */ }

/* ===== Copiar & PDF ===== */
async function copiarPedido(){
  const agrupado=getPedidoAgrupado(); if(!agrupado.length) return alerta("No hay nada para copiar.");
  const txt=agrupado.map(p=>[p.codigo,p.desc||"",p.talle,p.cantidad].join("\t")).join("\n");
  await navigator.clipboard.writeText(txt); alerta("Pedido copiado.");
}

function buildExtrasLegend(){
  const parts = [];
  if(addCinta) parts.push("Se agregan cintas");
  const selBolsas = Object.entries(bolsas).filter(([,v])=>v).map(([k])=>k);
  if(selBolsas.length) parts.push(`Se agregan bolsas: ${selBolsas.join(", ")}`);
  return parts.join(" · ");
}

function exportarPDF(){
  const agrupado=getPedidoAgrupado(); if(!agrupado.length) return alerta("No hay nada para exportar.");
  const { jsPDF }=window.jspdf; const doc=new jsPDF({unit:"pt",format:"a4"});
  const pageW = doc.internal.pageSize.getWidth();

  doc.setFontSize(14);
  doc.text(`LOCAL: ${$("#sucursalSelect")?.value||"sin-sucursal"}`,40,40);
  doc.text(`PEDIDO – ${toLocalDateStr()}`,40,60);

  // EXTRA EN PDF
  const extrasTxt = buildExtrasLegend();
  if(extrasTxt){
    doc.setFontSize(11);
    doc.text(extrasTxt, pageW-40, 40, { align: 'right' });
  }

  doc.autoTable({ head:[["ART","DESCRIPCIÓN","TALLE","CANT."]],
    body: agrupado.map(p=>[p.codigo,p.desc||"",String(p.talle),String(p.cantidad)]), startY:80 });

  const suc = $("#sucursalSelect")?.value||"sin-sucursal";
  doc.save(`Pedido_${suc}_${toLocalDateStr()}.pdf`);
}

/* ===== UI de extras ===== */
function updateExtrasUI(){
  const cintaChip=$("#cintaChip");
  cintaChip.textContent = `Cinta: ${addCinta? 'sí':'no'}`;
  cintaChip.classList.toggle('on', addCinta);
  cintaChip.classList.toggle('muted', !addCinta);

  const bolsasChip=$("#bolsasChip");
  const sel = Object.entries(bolsas).filter(([,v])=>v).map(([k])=>k);
  bolsasChip.textContent = sel.length ? `Bolsas: ${sel.join(', ')}` : 'Bolsas: —';
  bolsasChip.classList.toggle('on', sel.length>0);
  bolsasChip.classList.toggle('muted', sel.length===0);
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", ()=>{
  initSucursalSelect();
  cargarLS(); renderPedido();
  cargarPromos();
  enlazarBusquedaPromo();

  $("#copiar").onclick=copiarPedido;
  $("#vaciar").onclick=()=>{ pedido=[]; renderPedido(); };
  $("#btnPDF").onclick=exportarPDF;

  // Eventos de extras
  $("#btnCinta").onclick = ()=>{ addCinta = !addCinta; updateExtrasUI(); };

  $("#btnBolsas").onclick = ()=>{ $("#bolsasPicker").classList.toggle("show"); };

  $("#bolsasPicker").onchange = (ev)=>{
    if(ev.target && ev.target.name==="bolsaOpt"){
      bolsas[ev.target.value] = ev.target.checked;
      updateExtrasUI();
    }
  };

  updateExtrasUI();
});

function cargarLS(){ try{ const raw=localStorage.getItem(LS_KEY); if(raw){ const arr=JSON.parse(raw); if(Array.isArray(arr)) pedido=arr; } }catch{} }
function guardarLS(){ try{ localStorage.setItem(LS_KEY, JSON.stringify(pedido)); }catch{} }
