// ===================
// Datos de ejemplo (extensible)
const PROMOS = [
 {
  id: 'conjuntos-trenda',
  marca: 'TRENDA',
  nombre: 'PROMO CONJUNTOS TRENDA',
  precios: {
    uno: 10000,    // $10.000 en todas las listas
    tres: 10000,
    cantidad: 10000
  },
  talles: ['85','90','95','100','105'], // ajustá si necesitás otros
  items: [
    { codigo:'12-100', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-103', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-114', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-117', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-120', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-130', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-131', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-132', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-141', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-160', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-162', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-164', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-190', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-201', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-202', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-203', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-204', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-205', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-206', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-1082', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2001', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2008', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2011', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-930', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-1083', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-1084', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-1085', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-161', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-163', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-806', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2004', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-207', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-1086', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2010', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-1087', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-1088', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-1089', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-1098', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-1099', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-165', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-166', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-167', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-168', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2014', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2015', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2016', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-208', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5040', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5042', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5043', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5045', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5047', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5049', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5020', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5030', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5041', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2005', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2006', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5048', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5046', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5051', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5052', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5053', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5054', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5055', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5056', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5057', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5058', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-230', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-232', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-212', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-214', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-213', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-20003', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-222', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-223', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-224', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-333', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-444', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2000', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-206V', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-921', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-1544', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-105', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-106', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-102', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-215', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-220', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-64', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-181', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-183', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-199', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-200', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-280', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-281', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-282', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-283', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-284', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-285', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-287', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-291', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-295', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-351', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-380', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-382', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-933', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-981', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2009', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-3001', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-3003', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-184', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-290', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2002', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-286', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-3002', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5100', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5101', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5103', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-732', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5000', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5001', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-2003', desc:'Conjunto TRENDA', familia:'Conjuntos' },
    { codigo:'12-5002', desc:'Conjunto TRENDA', familia:'Conjuntos' }
  ]
}
,
 {
  id: 'boxer-ciudadela',
  marca: 'BOXER TOM',
  nombre: 'PROMO BOXER CIUDADELA',
  precios: {
    uno: 5000,     // 1 por $5.000
    tres: 4000,    // 3 por $4.000 c/u ($12.000)
    cantidad: 3000 // por docena $3.000 c/u ($36.000)
  },
  talles: ['S','M','L','XL','XXL'], // ajustá si tenés los talles específicos
  items: [
    { codigo:'48-5114', desc:'Boxer TOM', familia:'Boxer' }
  ]
},
{
  id: 'promo-avril',
  marca: 'AVRIL',
  nombre: 'PROMO AVRIL',
  precios: {
    uno: 4500,    // $ 4.500 en todas las listas
    tres: 4500,
    cantidad: 4500
  },
  // Ajustá talles si tenés los específicos de esta promo
  talles: ['S','M','L','XL'],
  items: [
    { codigo:'27-1000', desc:'Avril', familia:'AVRIL' },
    { codigo:'27-2000', desc:'Avril', familia:'AVRIL' },
    { codigo:'27-2004', desc:'Avril', familia:'AVRIL' },
    { codigo:'27-2005', desc:'Avril', familia:'AVRIL' },
    { codigo:'27-3000', desc:'Avril', familia:'AVRIL' },
    { codigo:'27-3001', desc:'Avril', familia:'AVRIL' },
    { codigo:'27-3002', desc:'Avril', familia:'AVRIL' },
    { codigo:'27-3003', desc:'Avril', familia:'AVRIL' },
    { codigo:'27-3004', desc:'Avril', familia:'AVRIL' },
    { codigo:'27-5000', desc:'Avril', familia:'AVRIL' },
    { codigo:'27-5001', desc:'Avril', familia:'AVRIL' }
  ]
}
,
{
  id: 'promo-pack',
  marca: 'PACK',
  nombre: 'PROMO PACK',
  precios: {
    uno: 4000,   // tomamos el mayor para referencia
    tres: 4000,
    cantidad: 4000
  },
  talles: ['ÚNICO'], // podés cambiar si hay talles específicos
  items: [
    { codigo:'27-111', desc:'Pack Dama', familia:'PACK', precio:2800 },
    { codigo:'27-112', desc:'Pack Nenas', familia:'PACK', precio:4000 },
    { codigo:'27-113', desc:'Pack', familia:'PACK' }
  ]
}
,
{
  id: 'conjuntos-avril-kaury',
  marca: 'AVRIL KAURY',
  nombre: 'PROMO CONJUNTOS AVRIL KAURY',
  precios: {
    uno: 7500,     // 1 por $7.500
    tres: 6000,    // 3 por $6.000 c/u
    cantidad: 5385 // por cantidad $5.385 c/u
  },
  talles: ['85','90','95','100','105'], // ajustá si necesitás talles específicos
  items: [
    { codigo:'27-061', desc:'Conjunto Avril Kaury', familia:'Conjuntos' },
    { codigo:'27-062', desc:'Conjunto Avril Kaury', familia:'Conjuntos' },
    { codigo:'27-063', desc:'Conjunto Avril Kaury', familia:'Conjuntos' }
  ]
}
,
{
  id: 'conjuntos-moncherie',
  marca: 'MONCHERIE',
  nombre: 'PROMO CONJUNTOS MONCHERIE',
  precios: {
    uno: 6000,   // $6.000 en listas 2 y 3
    tres: 6000,
    cantidad: 6000
  },
  talles: ['85','90','95','100'], // ajustá según los talles disponibles
  items: [
    { codigo:'98-5208', desc:'Conjunto Moncherie', familia:'Conjuntos' },
    { codigo:'98-5217', desc:'Conjunto Moncherie', familia:'Conjuntos' },
    { codigo:'98-5233', desc:'Conjunto Moncherie', familia:'Conjuntos' },
    { codigo:'98-5234', desc:'Conjunto Moncherie', familia:'Conjuntos' },
    { codigo:'98-5237', desc:'Conjunto Moncherie', familia:'Conjuntos' },
    { codigo:'98-5242', desc:'Conjunto Moncherie', familia:'Conjuntos' },
    { codigo:'98-5218', desc:'Conjunto Moncherie', familia:'Conjuntos' },
    { codigo:'98-5223', desc:'Conjunto Moncherie', familia:'Conjuntos' },
    { codigo:'98-5235', desc:'Conjunto Moncherie', familia:'Conjuntos' },
    { codigo:'98-5227', desc:'Conjunto Moncherie', familia:'Conjuntos' },
    { codigo:'98-5238', desc:'Conjunto Moncherie', familia:'Conjuntos' },
    { codigo:'98-5204', desc:'Conjunto Moncherie', familia:'Conjuntos' },
    { codigo:'98-5216', desc:'Conjunto Moncherie', familia:'Conjuntos' },
    { codigo:'98-5224', desc:'Conjunto Moncherie', familia:'Conjuntos' }
  ]
}
,
{
  id: 'mora-medias-3000',
  marca: 'MORA',
  nombre: 'PROMO MEDIAS MORA',
  precios: { uno: 3000, tres: 3000, cantidad: 3000 },
  talles: ['ÚNICO'],
  items: [
    { codigo:'09-2556', desc:'Media soquete transparente', familia:'Medias' },
    { codigo:'09-2519', desc:'Media 3/4 fantasía', familia:'Medias' },
    { codigo:'09-1364', desc:'Soquete piqué colores', familia:'Medias' },
    { codigo:'09-2562', desc:'Soquete gloria', familia:'Medias' },
    { codigo:'09-1347', desc:'Tobillera yoga toeless', familia:'Medias' },
    { codigo:'09-2492', desc:'Panty Fantasía Flower', familia:'Medias' },
    { codigo:'09-2462', desc:'Medias panty algodón rayas', familia:'Medias' },
    { codigo:'09-1302', desc:'Tobilleras algodón lycra invisible', familia:'Medias' },
    { codigo:'09-2483', desc:'Medias 3/4 escocia gruesa', familia:'Medias' },
    { codigo:'09-2482', desc:'Panty escocia', familia:'Medias' },
    { codigo:'09-2467', desc:'Medias 3/4 comic', familia:'Medias' },
    { codigo:'09-2554', desc:'Panty life', familia:'Medias' },
    { codigo:'09-2605', desc:'Media Mora', familia:'Medias' },
    { codigo:'09-2566', desc:'Panty', familia:'Medias' },
    { codigo:'09-2394', desc:'Media 3/4 finas', familia:'Medias' },
    { codigo:'09-2429', desc:'Panty lycra fina hojas', familia:'Medias' },
    { codigo:'09-2436', desc:'Medias Ultra Opaca Morley', familia:'Medias' },
    { codigo:'09-2417', desc:'Panty brillos lurex', familia:'Medias' },
    { codigo:'09-2496', desc:'Panty media fina lycra mini fantasía', familia:'Medias' },
    { codigo:'09-2555', desc:'Media transparente rayada', familia:'Medias' },
    { codigo:'09-2579', desc:'Soquete cuore', familia:'Medias' },
    { codigo:'09-2509', desc:'Panty kitty infantil', familia:'Medias' },
    { codigo:'09-2518', desc:'Panty ribbon', familia:'Medias' },
    { codigo:'09-2584', desc:'Media soquete lurex', familia:'Medias' }
  ]
}
,
{
  id: 'mora-bombachas-3000',
  marca: 'MORA',
  nombre: 'PROMO BOMBACHAS MORA',
  precios: { uno: 3000, tres: 3000, cantidad: 3000 },
  talles: ['S','M','L','XL'],
  items: [
    { codigo:'09-87', desc:'Wonder Mod Tiro Corto Clásica', familia:'Bombachas' },
    { codigo:'09-043', desc:'Vedetina algodón lycra estampada/puntilla', familia:'Bombachas' },
    { codigo:'09-88', desc:'Wonder Mod Short', familia:'Bombachas' },
    { codigo:'09-042', desc:'Colaless algodón puntilla', familia:'Bombachas' },
    { codigo:'09-422', desc:'Colaless viena microfibra', familia:'Bombachas' },
    { codigo:'09-423', desc:'Vedetina viena microfibra', familia:'Bombachas' },
    { codigo:'09-451', desc:'Culote animal print', familia:'Bombachas' },
    { codigo:'09-424', desc:'Culoteless microfibra viena', familia:'Bombachas' }
  ]
}
,
{
  id: 'mora-medias-4000',
  marca: 'MORA',
  nombre: 'PROMO MEDIAS MORA',
  precios: { uno: 4000, tres: 4000, cantidad: 4000 },
  talles: ['ÚNICO'],
  items: [
    { codigo:'09-2577', desc:'Mini medias soquete gloria', familia:'Medias' },
    { codigo:'09-2565', desc:'Soquete charo lycra rosas', familia:'Medias' },
    { codigo:'09-2617', desc:'Media caña escocesa', familia:'Medias' },
    { codigo:'09-2616', desc:'Media caña escocesa', familia:'Medias' },
    { codigo:'09-2574', desc:'Media 3/4 velvet fantasía', familia:'Medias' },
    { codigo:'09-1241', desc:'Media soquete con moño razo', familia:'Medias' },
    { codigo:'09-1354', desc:'Media 3/4 tramas winter', familia:'Medias' },
    { codigo:'09-1505', desc:'Panty multifilamento transparente', familia:'Medias' },
    { codigo:'09-2528', desc:'Panty Kids corazón rodilla', familia:'Medias' },
    { codigo:'09-2612', desc:'Media 3/4 fantasía finas', familia:'Medias' }
  ]
}
,
{
  id: 'mora-medias-6000',
  marca: 'MORA',
  nombre: 'PROMO MEDIAS MORA',
  precios: { uno: 6000, tres: 6000, cantidad: 6000 },
  talles: ['ÚNICO'],
  items: [
    { codigo:'09-2549', desc:'Panty kids Había una vez', familia:'Medias' },
    { codigo:'09-2548', desc:'Panty kids lunas y estrellas', familia:'Medias' },
    { codigo:'09-1270', desc:'Medias liga bucanera', familia:'Medias' },
    { codigo:'09-2500', desc:'Panty fantasía estrellas', familia:'Medias' },
    { codigo:'09-2495', desc:'Panty can can Kitty Teens', familia:'Medias' },
    { codigo:'1-20900', desc:'Mora. Pijama', familia:'Medias' },
    { codigo:'09-2499', desc:'Medias opacas fibra lycra triángulos', familia:'Medias' },
    { codigo:'09-2481', desc:'Media Mora', familia:'Medias' },
    { codigo:'09-2473', desc:'Panty kids Había una vez', familia:'Medias' },
    { codigo:'09-1247', desc:'Minimedia Massage', familia:'Medias' },
    { codigo:'09-2477', desc:'Panty big stars', familia:'Medias' },
    { codigo:'09-2501', desc:'Media 3/4 comic', familia:'Medias' },
    { codigo:'09-2606', desc:'Panty lycra fina rombos', familia:'Medias' },
    { codigo:'09-2484', desc:'Media Mora', familia:'Medias' },
    { codigo:'09-2491', desc:'Panty sweet', familia:'Medias' },
    { codigo:'09-2529', desc:'Media 3/4 comic', familia:'Medias' },
    { codigo:'09-2493', desc:'Panty muare', familia:'Medias' },
    { codigo:'09-2463', desc:'Calza algodón cebra', familia:'Medias' },
    { codigo:'09-2459', desc:'Panty Drops', familia:'Medias' },
    { codigo:'09-2559', desc:'Panty Red fantasía', familia:'Medias' },
    { codigo:'09-2498', desc:'Panty media', familia:'Medias' },
    { codigo:'09-2537', desc:'Panty Spring', familia:'Medias' }
  ]
}
,
{
  id: 'mora-pijamas-4000',
  marca: 'MORA',
  nombre: 'PROMO PIJAMAS MORA',
  precios: { uno: 4000, tres: 4000, cantidad: 4000 },
  talles: ['S','M','L','XL'],
  items: [
    { codigo:'09-2489', desc:'Legging print', familia:'Pijamas' },
    { codigo:'09-1742', desc:'Camiseta asimétrica una manga', familia:'Pijamas' },
    { codigo:'09-117', desc:'Remera Fantasy', familia:'Pijamas' },
    { codigo:'09-101', desc:'Calza algodón lycra', familia:'Pijamas' },
    { codigo:'09-1842', desc:'Camiseta musculosa', familia:'Pijamas' },
    { codigo:'09-2490', desc:'Calza lycra lisa', familia:'Pijamas' },
    { codigo:'09-2597', desc:'Remera sin mangas red', familia:'Pijamas' },
    { codigo:'09-276', desc:'Pijama Camisón Maternal Lola', familia:'Pijamas' },
    { codigo:'09-294', desc:'Vestido Saisha', familia:'Pijamas' },
    { codigo:'09-287', desc:'Vestido Bruna', familia:'Pijamas' },
    { codigo:'09-277', desc:'Vestido maternal Helena', familia:'Pijamas' }
  ]
}
,
{
  id: 'pack-maxima-seduccion',
  marca: 'MÁXIMA SEDUCCIÓN',
  nombre: 'PACK – PROMO MÁXIMA SEDUCCIÓN',
  precios: {
    uno: 3500,   // 1 por $3.500
    tres: 3000,  // usamos 3000 c/u como referencia para el “2x $3000 c/u”
    cantidad: 3000
  },
  talles: ['ÚNICO'], // cambiá si aplica
  items: [
    { codigo:'13-11',  desc:'Pack', familia:'PACK' },
    { codigo:'13-12',  desc:'Pack', familia:'PACK' },
    { codigo:'13-26',  desc:'Pack', familia:'PACK' },
    { codigo:'13-27',  desc:'Pack', familia:'PACK' }
  ]
}
,
{
  id: 'pack-rosa-maxima-seduccion',
  marca: 'MÁXIMA SEDUCCIÓN',
  nombre: 'PACK ROSA – PROMO MÁXIMA SEDUCCIÓN',
  precios: { uno: 3500, tres: 3500, cantidad: 3500 },
  talles: ['ÚNICO'],
  items: [
    { codigo:'13-2027', desc:'Pack Rosa', familia:'PACK' }
  ]
}
,{
  id: 'conjuntos-maia',
  marca: 'MAIA',
  nombre: 'PROMO MAIA – CONJUNTOS',
  precios: { uno: 5000, tres: 5000, cantidad: 5000 },
  talles: ['85','90','95','100','105'], // ajustá si MAIA maneja otros
  items: [
    { codigo:'23-960',  desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-980',  desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-1220', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-1250', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-1290', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-1300', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-1900', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-2040', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-2110', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-2115', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-3400', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-3500', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-3700', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-4010', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-4150', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-4160', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-4230', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-4250', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-4350', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-4360', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-4440', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-4445', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-5010', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-5040', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-5060', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-5090', desc:'Conjunto MAIA', familia:'Conjuntos' },
    { codigo:'23-60',   desc:'Conjunto MAIA', familia:'Conjuntos' }
  ]
}
,{
  id: 'pack-maia-2800',
  marca: 'MAIA',
  nombre: 'PACK – MAIA',
  precios: { uno: 2800, tres: 2800, cantidad: 2800 },
  talles: ['ÚNICO'],
  items: [
    { codigo:'23-7120', desc:'Pack', familia:'PACK' },
    { codigo:'23-7125', desc:'Pack', familia:'PACK' },
    { codigo:'23-7220', desc:'Pack', familia:'PACK' },
    { codigo:'23-7225', desc:'Pack', familia:'PACK' }
  ]
}
,{
  id: 'maia-rio-pack-bombachas',
  marca: 'MAIA',
  nombre: 'PROMO MAIA – RÍO (Pack Bombachas)',
  precios: { uno: 3500, tres: 3000, cantidad: 2660 }, // 1x3500 · 6x3000 c/u · por cantidad 2660
  talles: ['S','M','L','XL'],
  items: [
    { codigo:'23-100',  desc:'Pack bombachas', familia:'PACK' },
    { codigo:'23-200',  desc:'Pack bombachas', familia:'PACK' },
    { codigo:'23-300',  desc:'Pack bombachas', familia:'PACK' },
    { codigo:'1-30211', desc:'Pack bombachas', familia:'PACK' },
    { codigo:'1-30212', desc:'Pack bombachas', familia:'PACK' },
    { codigo:'1-30213', desc:'Pack bombachas', familia:'PACK' }
  ]
}
,{
  id: 'maia-kids-conjuntos',
  marca: 'MAIA KIDS',
  nombre: 'PROMO CONJUNTOS NENA MAIA',
  precios: { uno: 7000, tres: 6000, cantidad: 4790 }, // 1x7000 · 3x6000 c/u · por cantidad 4790
  talles: ['6','8','10','12','14'],
  items: [
    { codigo:'23-2100', desc:'Conjunto nena MAIA', familia:'Conjuntos Kids' },
    { codigo:'23-2150', desc:'Conjunto nena MAIA', familia:'Conjuntos Kids' },
    { codigo:'23-3200', desc:'Conjunto nena MAIA', familia:'Conjuntos Kids' },
    { codigo:'23-4300', desc:'Conjunto nena MAIA', familia:'Conjuntos Kids' },
    { codigo:'23-3250', desc:'Conjunto nena MAIA', familia:'Conjuntos Kids' },
    { codigo:'23-4350N', desc:'Conjunto nena MAIA', familia:'Conjuntos Kids' }
  ]
}
,{
  id: 'maia-kids-pack-bombachas',
  marca: 'MAIA KIDS',
  nombre: 'PROMOBOMBACHAS KIDS MAIA',
  precios: { uno: 8000, tres: 6000, cantidad: 6000 }, // 1x8000 · 3x6000 c/u
  talles: ['6','8','10','12','14'],
  items: [
    { codigo:'23-0100', desc:'Pack bombachas nena', familia:'PACK Kids' }
  ]
}
,{
  id: 'maia-kids-pack-conjuntos',
  marca: 'MAIA KIDS',
  nombre: 'PACK – CONJUNTOS NENA MAIA',
  precios: { uno: 5000, tres: 3000, cantidad: 3000 }, // 1x5000 · 3x3000 c/u
  talles: ['6','8','10','12','14'],
  items: [
    { codigo:'23-110', desc:'Pack conjuntos nena', familia:'PACK Kids' },
    { codigo:'23-210', desc:'Pack conjuntos nena', familia:'PACK Kids' }
  ]
}
,{
  id: 'kiero-conjuntos-7500',
  marca: 'KIERO',
  nombre: 'KIERO – CONJUNTOS',
  precios: { uno: 7500, tres: 7500, cantidad: 7500 },
  talles: ['85','90','95','100','105'],
  items: [
    { codigo:'19-5640', desc:'Conjunto KIERO', familia:'Conjuntos' },
    { codigo:'19-5660', desc:'Conjunto KIERO', familia:'Conjuntos' },
    { codigo:'19-5690', desc:'Conjunto KIERO', familia:'Conjuntos' },
    { codigo:'19-5720', desc:'Conjunto KIERO', familia:'Conjuntos' },
    { codigo:'19-5680', desc:'Conjunto KIERO', familia:'Conjuntos' },
    { codigo:'19-5670', desc:'Conjunto KIERO', familia:'Conjuntos' },
    { codigo:'19-5740', desc:'Conjunto KIERO', familia:'Conjuntos' },
    { codigo:'19-5700', desc:'Conjunto KIERO', familia:'Conjuntos' },
    { codigo:'19-5710', desc:'Conjunto KIERO', familia:'Conjuntos' },
    { codigo:'19-5630', desc:'Conjunto KIERO', familia:'Conjuntos' },
    { codigo:'19-5730', desc:'Conjunto KIERO', familia:'Conjuntos' },
    { codigo:'19-5650', desc:'Conjunto KIERO', familia:'Conjuntos' },
    { codigo:'19-5540', desc:'Conjunto KIERO', familia:'Conjuntos' },
    { codigo:'19-5610', desc:'Conjunto KIERO', familia:'Conjuntos' }
  ]
}
,{
    "id": "kiero-pack-nena",
    "marca": "KIERO",
    "nombre": "PACK NIÑA KIERO",
    "precios": {
      "uno": 3800,
      "tres": 3200,
      "cantidad": 2940
    },
    "talles": [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    "items": [
      {
        "codigo": "19-339",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-389",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-419",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-879",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-869",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-129",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-6009",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-639",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-139",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-109",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-379",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-629",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-619",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-979",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-609",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-759",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-839",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-939",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-949",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-369",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-969",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      },
      {
        "codigo": "19-6109",
        "desc": "Pack Niña",
        "familia": "PACK Niña"
      }
    ]
  },
  {
    "id": "kiero-pack-dama",
    "marca": "KIERO",
    "nombre": "PACK DAMA KIERO",
    "precios": {
      "uno": 4800,
      "tres": 4200,
      "cantidad": 3985
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "19-2974",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32201",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32211",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2111",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2972",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2971",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2267",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2212",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2394",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2397",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2211",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2214",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2391",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2102",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2262",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2206",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2204",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2207",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2115",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2104",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32391",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32117",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2098",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2012",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2108",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2101",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2011",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2015",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2201",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2022",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2217",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2975",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2266",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2265",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2091",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2001",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2116",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2021",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2107",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2027",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2977",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32027",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32107",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32977",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32098",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32102",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32207",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32012",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32108",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32092",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32971",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32091",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32021",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32217",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-36061",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-36062",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32022",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32111",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32097",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2092",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32101",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2014",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32011",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2106",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2004",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2007",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2395",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2024",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2112",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2117",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32002",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32202",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2002",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2261",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-32261",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      },
      {
        "codigo": "19-2005",
        "desc": "Pack Dama",
        "familia": "PACK Dama"
      }
    ]
  },
  {
    "id": "aiam-pack-3000",
    "marca": "AIAM",
    "nombre": "PROMO AIAM – PACK",
    "precios": {
      "uno": 3000,
      "tres": 3000,
      "cantidad": 3000
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "08-10",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-11",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-13",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-14",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-15",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-20",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-21",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-23",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-24",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-25",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-30",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-40",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-41",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-70",
        "desc": "Pack AIAM",
        "familia": "PACK"
      },
      {
        "codigo": "08-75",
        "desc": "Pack AIAM",
        "familia": "PACK"
      }
    ]
  },
  {
    "id": "aiam-conjuntos-6000",
    "marca": "AIAM",
    "nombre": "PROMO CONJUNTOS AIAM",
    "precios": {
      "uno": 6000,
      "tres": 6000,
      "cantidad": 6000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100",
      "105"
    ],
    "items": [
      {
        "codigo": "08-100",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-110",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-120",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-130",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-140",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-160",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-200",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-210",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-215",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-300",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-310",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-400",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-410",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-415",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-420",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-430",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-440",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-450",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-460",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-470",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-500",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-600",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-610",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-620",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-630",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-700",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-900",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      },
      {
        "codigo": "08-910",
        "desc": "Conjunto AIAM",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "vella-pack-x2",
    "marca": "VELLA",
    "nombre": "PACK X 2 VELLA",
    "precios": {
      "uno": 4200,
      "tres": 3500,
      "cantidad": 3100
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "58-23",
        "desc": "Pack Vella",
        "familia": "PACK"
      },
      {
        "codigo": "58-24",
        "desc": "Pack Vella",
        "familia": "PACK"
      },
      {
        "codigo": "58-28",
        "desc": "Pack Vella",
        "familia": "PACK"
      },
      {
        "codigo": "58-50",
        "desc": "Pack Vella",
        "familia": "PACK"
      }
    ]
  },
  {
    "id": "vella-conjuntos",
    "marca": "VELLA",
    "nombre": "PROMO CONJUNTOS VELLA",
    "precios": {
      "uno": 6000,
      "tres": 5000,
      "cantidad": 5000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "58-71",
        "desc": "Conjunto Vella",
        "familia": "Conjuntos"
      },
      {
        "codigo": "58-72",
        "desc": "Conjunto Vella",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "fairuz-conjuntos-6000",
    "marca": "FAIRUZ",
    "nombre": "PROMO CONJUNTOS FAIRUZ",
    "precios": {
      "uno": 6000,
      "tres": 6000,
      "cantidad": 6000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "61-2088",
        "desc": "Conjunto Fairuz",
        "familia": "Conjuntos"
      },
      {
        "codigo": "61-2089",
        "desc": "Conjunto Fairuz",
        "familia": "Conjuntos"
      },
      {
        "codigo": "61-2230",
        "desc": "Conjunto Fairuz",
        "familia": "Conjuntos"
      },
      {
        "codigo": "61-3132",
        "desc": "Conjunto Fairuz",
        "familia": "Conjuntos"
      },
      {
        "codigo": "61-3133",
        "desc": "Conjunto Fairuz",
        "familia": "Conjuntos"
      },
      {
        "codigo": "61-3133/E",
        "desc": "Conjunto Fairuz",
        "familia": "Conjuntos"
      },
      {
        "codigo": "61-232",
        "desc": "Conjunto Fairuz",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "fairuz-pack-2500",
    "marca": "FAIRUZ",
    "nombre": "PACK FAIRUZ",
    "precios": {
      "uno": 2500,
      "tres": 2500,
      "cantidad": 1850
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "61-500",
        "desc": "Pack Fairuz",
        "familia": "PACK"
      },
      {
        "codigo": "61-530",
        "desc": "Pack Fairuz",
        "familia": "PACK"
      },
      {
        "codigo": "61-532",
        "desc": "Pack Fairuz",
        "familia": "PACK"
      },
      {
        "codigo": "61-600",
        "desc": "Pack Fairuz",
        "familia": "PACK"
      },
      {
        "codigo": "61-627",
        "desc": "Pack Fairuz",
        "familia": "PACK"
      }
    ]
  },
  {
    "id": "fairuz-conjuntos-8000",
    "marca": "FAIRUZ",
    "nombre": "PROMO CONJUNTOS FAIRUZ",
    "precios": {
      "uno": 8000,
      "tres": 8000,
      "cantidad": 8000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "61-2048",
        "desc": "Conjunto Fairuz",
        "familia": "Conjuntos"
      },
      {
        "codigo": "61-2055",
        "desc": "Conjunto Fairuz",
        "familia": "Conjuntos"
      },
      {
        "codigo": "61-2057",
        "desc": "Conjunto Fairuz",
        "familia": "Conjuntos"
      },
      {
        "codigo": "61-2065",
        "desc": "Conjunto Fairuz",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "fairuz-conjuntos-6000-b",
    "marca": "FAIRUZ",
    "nombre": "PROMO CONJUNTOS FAIRUZ (2)",
    "precios": {
      "uno": 6000,
      "tres": 6000,
      "cantidad": 6000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "61-2092",
        "desc": "Conjunto Fairuz",
        "familia": "Conjuntos"
      },
      {
        "codigo": "61-2230",
        "desc": "Conjunto Fairuz",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "lebnem-pack-nena-2500",
    "marca": "LEBNEN",
    "nombre": "PACK x2 BOMBACHAS NENA LEBNEN",
    "precios": {
      "uno": 2500,
      "tres": 2500,
      "cantidad": 2500
    },
    "talles": [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    "items": [
      {
        "codigo": "41-310",
        "desc": "Pack bombachas nena",
        "familia": "PACK"
      }
    ]
  },
  {
    "id": "lebnem-pack-nena-3500",
    "marca": "LEBNEN",
    "nombre": "PACK x2 BOMBACHAS NENA LEBNEN",
    "precios": {
      "uno": 3500,
      "tres": 3500,
      "cantidad": 3500
    },
    "talles": [
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    "items": [
      {
        "codigo": "13-2027",
        "desc": "Pack bombachas nena",
        "familia": "PACK"
      },
      {
        "codigo": "41-130R",
        "desc": "Pack bombachas nena",
        "familia": "PACK"
      },
      {
        "codigo": "41-140R",
        "desc": "Pack bombachas nena",
        "familia": "PACK"
      },
      {
        "codigo": "41-310R",
        "desc": "Pack bombachas nena",
        "familia": "PACK"
      }
    ]
  },
  {
    "id": "denny-camiseta",
    "marca": "DENNY",
    "nombre": "CAMISETA DENNY",
    "precios": {
      "uno": 10000,
      "tres": 20000,
      "cantidad": 20000
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "51-62",
        "desc": "Camiseta Denny",
        "familia": "Camisetas"
      },
      {
        "codigo": "51-63",
        "desc": "Camiseta Denny",
        "familia": "Camisetas"
      }
    ]
  },
  {
    "id": "denny-bombachas-docena",
    "marca": "DENNY",
    "nombre": "BOMBACHAS x DOCENA",
    "precios": {
      "uno": 12000,
      "tres": 12000,
      "cantidad": 12000
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "51-2224",
        "desc": "Bombachas Denny",
        "familia": "Bombachas"
      },
      {
        "codigo": "51-2225",
        "desc": "Bombachas Denny",
        "familia": "Bombachas"
      },
      {
        "codigo": "51-3323",
        "desc": "Bombachas Denny",
        "familia": "Bombachas"
      },
      {
        "codigo": "51-3324",
        "desc": "Bombachas Denny",
        "familia": "Bombachas"
      },
      {
        "codigo": "51-3325",
        "desc": "Bombachas Denny",
        "familia": "Bombachas"
      },
      {
        "codigo": "51-3326",
        "desc": "Bombachas Denny",
        "familia": "Bombachas"
      }
    ]
  },
  {
    "id": "pijamas-inv-mk",
    "marca": "MK/ANDRESSA/DISNEY",
    "nombre": "PROMO PIJAMAS INVIERNO",
    "precios": {
      "uno": 35000,
      "tres": 28000,
      "cantidad": 28000
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "05-8010",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "05-8011",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "05-7011",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "05-7005",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "05-7016",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "05-7003",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "05-8006",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "05-5003",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "40-20138",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "40-20135",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "28-4237",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "28-4238",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "28-4239",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "28-4240",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "28-4242",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "28-4241",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "28-4243",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "28-4245",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "28-4247",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      },
      {
        "codigo": "28-4248",
        "desc": "Pijama Invierno",
        "familia": "Pijamas"
      }
    ]
  },
  {
    "id": "mk-medias-2500-1800",
    "marca": "MK",
    "nombre": "PROMO MEDIAS MK",
    "precios": {
      "uno": 2500,
      "tres": 1800,
      "cantidad": 1800
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "28-6000",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6045",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6047",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6054",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6055",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6070",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6075",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6084",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6200",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62100",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62100.1",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62100.2",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62100.3",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62100.4",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62102",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62102.1",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62102.2",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62102.3",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62102.4",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62102.5",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62102.6",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62102.7",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62102.8",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62102.9",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62102.10",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62102.11",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62103",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62103.1",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62103.2",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62104",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62104.1",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62104.2",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62104.3",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62104.4",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62105",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62105.1",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62105.2",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62105.3",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62105.4",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62114",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62114.1",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62114.2",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62114.3",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6244",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62112.1",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62112.3",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-62112.5",
        "desc": "Media MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6276",
        "desc": "Media MK",
        "familia": "Medias"
      }
    ]
  },
  {
    "id": "mk-conjuntos-8000",
    "marca": "MK",
    "nombre": "PROMO CONJUNTOS MK $8.000",
    "precios": {
      "uno": 8000,
      "tres": 8000,
      "cantidad": 8000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "28-5536",
        "desc": "Conjunto MK",
        "familia": "Conjuntos"
      },
      {
        "codigo": "28-5675",
        "desc": "Conjunto MK",
        "familia": "Conjuntos"
      },
      {
        "codigo": "28-5568",
        "desc": "Conjunto MK",
        "familia": "Conjuntos"
      },
      {
        "codigo": "28-5681",
        "desc": "Conjunto MK",
        "familia": "Conjuntos"
      },
      {
        "codigo": "28-5718",
        "desc": "Conjunto MK",
        "familia": "Conjuntos"
      },
      {
        "codigo": "28-5648",
        "desc": "Conjunto MK",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "mk-conjuntos-10000",
    "marca": "MK",
    "nombre": "PROMO CONJUNTOS MK $10.000",
    "precios": {
      "uno": 10000,
      "tres": 10000,
      "cantidad": 10000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "28-5598",
        "desc": "Conjunto MK",
        "familia": "Conjuntos"
      },
      {
        "codigo": "28-5646",
        "desc": "Conjunto MK",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "mk-of1000",
    "marca": "MK",
    "nombre": "PROMO CONJUNTOS MK OF1000",
    "precios": {
      "uno": 12000,
      "tres": 10000,
      "cantidad": 10000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "28-OF1000",
        "desc": "Conjunto MK OF1000",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "mk-medias-termicas",
    "marca": "MK",
    "nombre": "PROMO MEDIAS TÉRMICAS MK",
    "precios": {
      "uno": 7000,
      "tres": 5000,
      "cantidad": 4500
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "28-65112.1",
        "desc": "Media térmica MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-65112.2",
        "desc": "Media térmica MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-65112.3",
        "desc": "Media térmica MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-65112.4",
        "desc": "Media térmica MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6500",
        "desc": "Media térmica MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6501",
        "desc": "Media térmica MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6560",
        "desc": "Media térmica MK",
        "familia": "Medias"
      },
      {
        "codigo": "28-6564",
        "desc": "Media térmica MK",
        "familia": "Medias"
      }
    ]
  },
  {
    "id": "coa-ninos-medias",
    "marca": "COA COA",
    "nombre": "PROMO MEDIAS NIÑOS COA COA",
    "precios": {
      "uno": 2000,
      "tres": 1800,
      "cantidad": 1800
    },
    "talles": [
      "T0",
      "T1",
      "T2",
      "T3",
      "T4",
      "T5",
      "T6",
      "T7"
    ],
    "items": [
      {
        "codigo": "14-2000",
        "desc": "Media niños",
        "familia": "Medias Niños"
      },
      {
        "codigo": "14-2100",
        "desc": "Media niños",
        "familia": "Medias Niños"
      },
      {
        "codigo": "14-2250",
        "desc": "Media niños",
        "familia": "Medias Niños"
      },
      {
        "codigo": "14-2500",
        "desc": "Media niños",
        "familia": "Medias Niños"
      },
      {
        "codigo": "14-2600",
        "desc": "Media niños",
        "familia": "Medias Niños"
      },
      {
        "codigo": "14-4500",
        "desc": "Media niños",
        "familia": "Medias Niños"
      }
    ]
  },
  {
    "id": "coa-medias",
    "marca": "COA COA",
    "nombre": "PROMO MEDIAS COA COA",
    "precios": {
      "uno": 2300,
      "tres": 2000,
      "cantidad": 1800
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "14-1203",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-1501",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-1502",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-1503",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-2000M",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-2050",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-2070",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-2090",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-2100M",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-2500M",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-2510",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-2530",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-2600M",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "1-6140",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3000",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3010",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "1-6141",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3020",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3030",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3040",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3041",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3042",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3044",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3046",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3048",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3049",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3050",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3060",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "1-6142",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3070",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3090",
        "desc": "Media COA COA",
        "familia": "Medias"
      },
      {
        "codigo": "14-3100",
        "desc": "Media COA COA",
        "familia": "Medias"
      }
    ]
  },
  {
    "id": "intermezzo-boxer",
    "marca": "INTERMEZZO",
    "nombre": "PROMO BOXER INTERMEZZO",
    "precios": {
      "uno": 5000,
      "tres": 5000,
      "cantidad": 5000
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "14-950",
        "desc": "Boxer Intermezzo",
        "familia": "Boxer"
      }
    ]
  },
  {
    "id": "pijamas-mujer-disney-mk",
    "marca": "MK/DISNEY",
    "nombre": "PROMO PIJAMAS MUJER (DISCONTINUAS)",
    "precios": {
      "uno": 20000,
      "tres": 20000,
      "cantidad": 20000
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "28-OF4002",
        "desc": "Pijama mujer",
        "familia": "Pijamas Mujer"
      },
      {
        "codigo": "28-4489",
        "desc": "Pijama mujer",
        "familia": "Pijamas Mujer"
      }
    ]
  },
  {
    "id": "mk-medias-segunda",
    "marca": "MK",
    "nombre": "MEDIAS MK 2DA",
    "precios": {
      "uno": 2200,
      "tres": 1700,
      "cantidad": 1400
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "1-2801",
        "desc": "Media MK 2da",
        "familia": "Medias"
      },
      {
        "codigo": "1-2802",
        "desc": "Media MK 2da",
        "familia": "Medias"
      },
      {
        "codigo": "1-2803",
        "desc": "Media MK 2da",
        "familia": "Medias"
      },
      {
        "codigo": "1-2804",
        "desc": "Media MK 2da",
        "familia": "Medias"
      },
      {
        "codigo": "1-2805",
        "desc": "Media MK 2da",
        "familia": "Medias"
      },
      {
        "codigo": "1-2806",
        "desc": "Media MK 2da",
        "familia": "Medias"
      }
    ]
  },
  {
    "id": "mk-medias-hombre",
    "marca": "MK",
    "nombre": "PROMO MEDIAS HOMBRE MK",
    "precios": {
      "uno": 4000,
      "tres": 3333,
      "cantidad": 2600
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "28-6744",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-67113.1",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-67113.2",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-67113.3",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-67113.4",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-67115.1",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-67115.2",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-67115.3",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-67115.4",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-67116.1",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-67116.2",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-67202.1",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-67202.2",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-6775",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-6777",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-6784",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-6787",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-6354",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-6700",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-6701",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-67103,1",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-6300",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-6305",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-6358",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      },
      {
        "codigo": "28-6363",
        "desc": "Media hombre MK",
        "familia": "Medias Hombre"
      }
    ]
  },
  {
    "id": "mk-pantuflas",
    "marca": "MK",
    "nombre": "PANTUFLAS MK",
    "precios": {
      "uno": 10000,
      "tres": 10000,
      "cantidad": 10000
    },
    "talles": [
      "S",
      "M",
      "L"
    ],
    "items": [
      {
        "codigo": "1-2292",
        "desc": "Pantufla MK",
        "familia": "Pantuflas"
      },
      {
        "codigo": "28-8022",
        "desc": "Pantufla MK",
        "familia": "Pantuflas"
      },
      {
        "codigo": "28-8024",
        "desc": "Pantufla MK",
        "familia": "Pantuflas"
      }
    ]
  },
  {
    "id": "pijamas-ninos-disney",
    "marca": "DISNEY/CHINA",
    "nombre": "PROMO PIJAMAS INVIERNO NIÑOS",
    "precios": {
      "uno": 20000,
      "tres": 15000,
      "cantidad": 15000
    },
    "talles": [
      "2",
      "4",
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    "items": [
      {
        "codigo": "1-7027",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20319",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20305",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20501",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20306",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20520",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20335",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20309",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20521",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20326",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20509",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20513",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20503",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20328",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20327",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20325",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "40-20519",
        "desc": "Pijama niños",
        "familia": "Pijamas Niños"
      }
    ]
  },
  {
    "id": "pijamas-ninos-mk",
    "marca": "MK",
    "nombre": "PROMO PIJAMAS INVIERNO NIÑOS MK",
    "precios": {
      "uno": 25000,
      "tres": 20000,
      "cantidad": 20000
    },
    "talles": [
      "2",
      "4",
      "6",
      "8",
      "10",
      "12",
      "14"
    ],
    "items": [
      {
        "codigo": "28-4244",
        "desc": "Pijama niños MK",
        "familia": "Pijamas Niños"
      },
      {
        "codigo": "28-4246",
        "desc": "Pijama niños MK",
        "familia": "Pijamas Niños"
      }
    ]
  },
  {
    "id": "cocot-dufour-medias-3500-3000",
    "marca": "COCOT/DUFOUR",
    "nombre": "PROMO MEDIAS COCOT - DUFOUR",
    "precios": {
      "uno": 3500,
      "tres": 3000,
      "cantidad": 2100
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "40-3671",
        "desc": "Medias COCOT/DUFOUR",
        "familia": "Medias"
      },
      {
        "codigo": "40-3324",
        "desc": "Medias COCOT/DUFOUR",
        "familia": "Medias"
      },
      {
        "codigo": "21-2534",
        "desc": "Medias COCOT/DUFOUR",
        "familia": "Medias"
      },
      {
        "codigo": "21-2605",
        "desc": "Medias COCOT/DUFOUR",
        "familia": "Medias"
      },
      {
        "codigo": "21-2597",
        "desc": "Medias COCOT/DUFOUR",
        "familia": "Medias"
      }
    ]
  },
  {
    "id": "dufour-cocot-coa-3000-2500",
    "marca": "DUFOUR/COCOT/COA COA",
    "nombre": "PROMO MEDIAS (mix)",
    "precios": {
      "uno": 3000,
      "tres": 2500,
      "cantidad": 1375
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "14-1501",
        "desc": "Medias mixtas",
        "familia": "Medias"
      },
      {
        "codigo": "14-1502",
        "desc": "Medias mixtas",
        "familia": "Medias"
      },
      {
        "codigo": "14-1503",
        "desc": "Medias mixtas",
        "familia": "Medias"
      },
      {
        "codigo": "21-2140",
        "desc": "Medias mixtas",
        "familia": "Medias"
      },
      {
        "codigo": "21-2119",
        "desc": "Medias mixtas",
        "familia": "Medias"
      },
      {
        "codigo": "21-2357",
        "desc": "Medias mixtas",
        "familia": "Medias"
      },
      {
        "codigo": "40-3230",
        "desc": "Medias mixtas",
        "familia": "Medias"
      },
      {
        "codigo": "40-3335",
        "desc": "Medias mixtas",
        "familia": "Medias"
      },
      {
        "codigo": "40-3233",
        "desc": "Medias mixtas",
        "familia": "Medias"
      }
    ]
  },
  {
    "id": "disney-medias-4000-3000",
    "marca": "DISNEY",
    "nombre": "PROMO MEDIAS DISNEY",
    "precios": {
      "uno": 4000,
      "tres": 3000,
      "cantidad": 3000
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "40-21101",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21102",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21103",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21104",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21105",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21200",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21201",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21202",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21203",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21204",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21205",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21300",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21301",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21302",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21350",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21351",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21352",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21404",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21406",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21407",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21408",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21500",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21501",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21502",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21503",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21504",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21505",
        "desc": "Medias Disney",
        "familia": "Medias"
      },
      {
        "codigo": "40-21506",
        "desc": "Medias Disney",
        "familia": "Medias"
      }
    ]
  },
  {
    "id": "dufour-medias-3500-2400",
    "marca": "DUFOUR",
    "nombre": "PROMO MEDIAS DUFOUR",
    "precios": {
      "uno": 3500,
      "tres": 2400,
      "cantidad": 2400
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "21-2379",
        "desc": "Medias Dufour",
        "familia": "Medias"
      },
      {
        "codigo": "21-2216",
        "desc": "Medias Dufour",
        "familia": "Medias"
      },
      {
        "codigo": "21-2211",
        "desc": "Medias Dufour",
        "familia": "Medias"
      },
      {
        "codigo": "21-2474",
        "desc": "Medias Dufour",
        "familia": "Medias"
      },
      {
        "codigo": "21-2015",
        "desc": "Medias Dufour",
        "familia": "Medias"
      }
    ]
  },
  {
    "id": "cocot-dufour-1800-1500",
    "marca": "COCOT/DUFOUR",
    "nombre": "PROMO MEDIAS COCOT - DUFOUR (II)",
    "precios": {
      "uno": 1800,
      "tres": 1500,
      "cantidad": 875
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "21-2331",
        "desc": "Medias C/D",
        "familia": "Medias"
      },
      {
        "codigo": "21-2599",
        "desc": "Medias C/D",
        "familia": "Medias"
      },
      {
        "codigo": "40-3153",
        "desc": "Medias C/D",
        "familia": "Medias"
      },
      {
        "codigo": "40-3318",
        "desc": "Medias C/D",
        "familia": "Medias"
      },
      {
        "codigo": "40-3270",
        "desc": "Medias C/D",
        "familia": "Medias"
      },
      {
        "codigo": "40-3328",
        "desc": "Medias C/D",
        "familia": "Medias"
      },
      {
        "codigo": "40-3315",
        "desc": "Medias C/D",
        "familia": "Medias"
      },
      {
        "codigo": "40-3320",
        "desc": "Medias C/D",
        "familia": "Medias"
      },
      {
        "codigo": "40-3323",
        "desc": "Medias C/D",
        "familia": "Medias"
      },
      {
        "codigo": "40-3319",
        "desc": "Medias C/D",
        "familia": "Medias"
      },
      {
        "codigo": "40-3288",
        "desc": "Medias C/D",
        "familia": "Medias"
      }
    ]
  },
  {
    "id": "dufour-medias-docena",
    "marca": "DUFOUR",
    "nombre": "PROMO MEDIAS DUFOUR X DOCENA",
    "precios": {
      "uno": 875,
      "tres": 875,
      "cantidad": 875
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "21-2331",
        "desc": "Medias Dufour docena",
        "familia": "Medias"
      }
    ]
  },
  {
    "id": "cocot-pack-medias",
    "marca": "COCOT",
    "nombre": "PROMO PACK MEDIAS COCOT",
    "precios": {
      "uno": 4500,
      "tres": 4000,
      "cantidad": 4000
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "40-3253.3",
        "desc": "Pack medias COCOT",
        "familia": "Medias"
      },
      {
        "codigo": "40-3124.3",
        "desc": "Pack medias COCOT",
        "familia": "Medias"
      }
    ]
  },
  {
    "id": "disney-boxer-20700",
    "marca": "DISNEY",
    "nombre": "BOXER DISNEY",
    "precios": {
      "uno": 4000,
      "tres": 3200,
      "cantidad": 2500
    },
    "talles": [
      "S",
      "M",
      "L"
    ],
    "items": [
      {
        "codigo": "40-20700",
        "desc": "Boxer Disney",
        "familia": "Boxer"
      }
    ]
  },
  {
    "id": "disney-boxer-20701",
    "marca": "DISNEY",
    "nombre": "BOXER DISNEY (modelo 20701)",
    "precios": {
      "uno": 3500,
      "tres": 3000,
      "cantidad": 2355
    },
    "talles": [
      "S",
      "M",
      "L"
    ],
    "items": [
      {
        "codigo": "40-20701",
        "desc": "Boxer Disney",
        "familia": "Boxer"
      }
    ]
  },
  {
    "id": "disney-boxer-20702-20750",
    "marca": "DISNEY",
    "nombre": "BOXER DISNEY (otros)",
    "precios": {
      "uno": 4200,
      "tres": 4200,
      "cantidad": 3235
    },
    "talles": [
      "S",
      "M",
      "L"
    ],
    "items": [
      {
        "codigo": "40-20702",
        "desc": "Boxer Disney",
        "familia": "Boxer"
      },
      {
        "codigo": "40-20750",
        "desc": "Boxer Disney",
        "familia": "Boxer"
      }
    ]
  },
  {
    "id": "disney-bombachas",
    "marca": "DISNEY",
    "nombre": "BOMBACHAS DISNEY",
    "precios": {
      "uno": 3000,
      "tres": 2500,
      "cantidad": 2500
    },
    "talles": [
      "S",
      "M",
      "L"
    ],
    "items": [
      {
        "codigo": "40-20800",
        "desc": "Bombachas Disney",
        "familia": "Bombachas"
      },
      {
        "codigo": "40-20802",
        "desc": "Bombachas Disney",
        "familia": "Bombachas"
      },
      {
        "codigo": "40-20803",
        "desc": "Bombachas Disney",
        "familia": "Bombachas"
      },
      {
        "codigo": "40-20806",
        "desc": "Bombachas Disney",
        "familia": "Bombachas"
      },
      {
        "codigo": "1-20800",
        "desc": "Bombachas Disney",
        "familia": "Bombachas"
      },
      {
        "codigo": "1-20802",
        "desc": "Bombachas Disney",
        "familia": "Bombachas"
      },
      {
        "codigo": "1-20803",
        "desc": "Bombachas Disney",
        "familia": "Bombachas"
      },
      {
        "codigo": "1-20806",
        "desc": "Bombachas Disney",
        "familia": "Bombachas"
      }
    ]
  },
  {
    "id": "dufour-boxer-ninos",
    "marca": "DUFOUR",
    "nombre": "PROMO BOXER NIÑOS DUFOUR",
    "precios": {
      "uno": 3500,
      "tres": 2800,
      "cantidad": 2200
    },
    "talles": [
      "2",
      "4",
      "6",
      "8",
      "10",
      "12"
    ],
    "items": [
      {
        "codigo": "21-11976",
        "desc": "Boxer niños Dufour",
        "familia": "Boxer Niños"
      },
      {
        "codigo": "21-11977.6",
        "desc": "Boxer niños Dufour",
        "familia": "Boxer Niños"
      },
      {
        "codigo": "21-12093",
        "desc": "Boxer niños Dufour",
        "familia": "Boxer Niños"
      },
      {
        "codigo": "21-11774",
        "desc": "Boxer niños Dufour",
        "familia": "Boxer Niños"
      },
      {
        "codigo": "21-11933",
        "desc": "Boxer niños Dufour",
        "familia": "Boxer Niños"
      }
    ]
  },
  {
    "id": "dufour-zorba-boxer",
    "marca": "DUFOUR/ZORBA",
    "nombre": "PROMO BOXER (mix)",
    "precios": {
      "uno": 3800,
      "tres": 2900,
      "cantidad": 2350
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "21-11831",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11971",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "59-185",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11812",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11855",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11789",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "26-A772",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "26-B026",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "26-B114",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "26-B175",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "26-B703",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "26-B704",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "26-B933",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "26-B934",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "26-B946",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "26-B947",
        "desc": "Boxer mix",
        "familia": "Boxer"
      },
      {
        "codigo": "26-B948",
        "desc": "Boxer mix",
        "familia": "Boxer"
      }
    ]
  },
  {
    "id": "dufour-boxer-docena",
    "marca": "DUFOUR",
    "nombre": "PROMO BOXER DUFOUR POR DOCENA",
    "precios": {
      "uno": 27000,
      "tres": 27000,
      "cantidad": 27000
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "21-11812.9",
        "desc": "Boxer Dufour docena",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11788.9",
        "desc": "Boxer Dufour docena",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11737.9",
        "desc": "Boxer Dufour docena",
        "familia": "Boxer"
      }
    ]
  },
  {
    "id": "dufour-pack-boxer-x3",
    "marca": "DUFOUR",
    "nombre": "PROMO PACK BOXER DUFOUR (x3)",
    "precios": {
      "uno": 8500,
      "tres": 7000,
      "cantidad": 6500
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "21-11737.4",
        "desc": "Pack boxer Dufour",
        "familia": "Boxer"
      }
    ]
  },
  {
    "id": "dufour-boxer",
    "marca": "DUFOUR",
    "nombre": "PROMO BOXER DUFOUR",
    "precios": {
      "uno": 7000,
      "tres": 6000,
      "cantidad": 5000
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "21-11754",
        "desc": "Boxer Dufour",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11755",
        "desc": "Boxer Dufour",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11756",
        "desc": "Boxer Dufour",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11757",
        "desc": "Boxer Dufour",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11758",
        "desc": "Boxer Dufour",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11778",
        "desc": "Boxer Dufour",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11779",
        "desc": "Boxer Dufour",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11785",
        "desc": "Boxer Dufour",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11794",
        "desc": "Boxer Dufour",
        "familia": "Boxer"
      },
      {
        "codigo": "21-11843",
        "desc": "Boxer Dufour",
        "familia": "Boxer"
      },
      {
        "codigo": "21-12051",
        "desc": "Boxer Dufour",
        "familia": "Boxer"
      },
      {
        "codigo": "21-12058",
        "desc": "Boxer Dufour",
        "familia": "Boxer"
      }
    ]
  },
  {
    "id": "cocot-calzas",
    "marca": "COCOT",
    "nombre": "PROMO CALZAS COCOT",
    "precios": {
      "uno": 12000,
      "tres": 10000,
      "cantidad": 10000
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "40-21000",
        "desc": "Calza COCOT",
        "familia": "Calzas"
      },
      {
        "codigo": "40-21001",
        "desc": "Calza COCOT",
        "familia": "Calzas"
      }
    ]
  },
  {
    "id": "cocot-pack-medias-x3",
    "marca": "COCOT",
    "nombre": "PACK MEDIAS COCOT x3",
    "precios": {
      "uno": 7500,
      "tres": 4125,
      "cantidad": 4125
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "40-3334.3M",
        "desc": "Pack x3 COCOT",
        "familia": "Medias"
      }
    ]
  },
  {
    "id": "cocot-inv-articulos",
    "marca": "COCOT",
    "nombre": "PROMO ART. DE INVIERNO COCOT",
    "precios": {
      "uno": 20000,
      "tres": 20000,
      "cantidad": 20000
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "40-21060",
        "desc": "Art. Invierno COCOT",
        "familia": "Invierno"
      },
      {
        "codigo": "40-21063",
        "desc": "Art. Invierno COCOT",
        "familia": "Invierno"
      },
      {
        "codigo": "40-20106",
        "desc": "Art. Invierno COCOT",
        "familia": "Invierno"
      },
      {
        "codigo": "40-21064",
        "desc": "Art. Invierno COCOT",
        "familia": "Invierno"
      },
      {
        "codigo": "40-21069",
        "desc": "Art. Invierno COCOT",
        "familia": "Invierno"
      },
      {
        "codigo": "40-21070",
        "desc": "Art. Invierno COCOT",
        "familia": "Invierno"
      },
      {
        "codigo": "40-21072",
        "desc": "Art. Invierno COCOT",
        "familia": "Invierno"
      },
      {
        "codigo": "40-21073",
        "desc": "Art. Invierno COCOT",
        "familia": "Invierno"
      }
    ]
  },
  {
    "id": "cocot-corpino-10000",
    "marca": "COCOT",
    "nombre": "PROMO CORPIÑO COCOT",
    "precios": {
      "uno": 10000,
      "tres": 10000,
      "cantidad": 10000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100",
      "105"
    ],
    "items": [
      {
        "codigo": "40-6238",
        "desc": "Corpiño COCOT",
        "familia": "Corpiños"
      },
      {
        "codigo": "40-6248",
        "desc": "Corpiño COCOT",
        "familia": "Corpiños"
      },
      {
        "codigo": "40-6047",
        "desc": "Corpiño COCOT",
        "familia": "Corpiños"
      },
      {
        "codigo": "40-5535",
        "desc": "Corpiño COCOT",
        "familia": "Corpiños"
      },
      {
        "codigo": "40-6044",
        "desc": "Corpiño COCOT",
        "familia": "Corpiños"
      },
      {
        "codigo": "40-6239",
        "desc": "Corpiño COCOT",
        "familia": "Corpiños"
      },
      {
        "codigo": "40-6247",
        "desc": "Corpiño COCOT",
        "familia": "Corpiños"
      },
      {
        "codigo": "40-6157",
        "desc": "Corpiño COCOT",
        "familia": "Corpiños"
      }
    ]
  },
  {
    "id": "xy-kaury-natubel-acrobata-boxer",
    "marca": "XY/KAURY MEN/NATUBEL/ACROBATA/RIO",
    "nombre": "PROMO BOXER XY-KAURY MEN - NATUBEL - ACROBATA",
    "precios": {
      "uno": 10000,
      "tres": 8000,
      "cantidad": 7000
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "52-33",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-37",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-J87",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-10",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-11",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-12",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-15",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-20",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-21",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-22",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-23",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-25",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-26",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-32",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-34",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-35",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-36",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-38",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-16 SLIP",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "52-17 SLIP",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "38-75",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "1-5249",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "1-5241",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1381",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1387",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1600",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-001",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1302",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1304",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1307",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1311",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1312",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1313",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1317",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1318",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1321",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1322",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1324",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1327",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1328",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1337",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1352",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1354",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1355",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1356",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1357",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1370",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1374",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1390",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1395",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1396",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1397",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-1398",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-3900",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-2300",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-2426",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-2438",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-2490",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "24-2700",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "49-5034",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "49-5048",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "49-5051",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "49-5056",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "49-5061",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "49-5072",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "49-5086",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "49-5087",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "49-5114",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "49-5123",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "49-5125",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "49-5118",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      },
      {
        "codigo": "49-5063",
        "desc": "Boxer varias marcas",
        "familia": "Boxer"
      }
    ]
  },
  {
    "id": "boxer-generico-6000-5000-4000",
    "marca": "VARIOS",
    "nombre": "PROMO BOXER",
    "precios": {
      "uno": 6000,
      "tres": 5000,
      "cantidad": 4000
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "52-J110",
        "desc": "Boxer",
        "familia": "Boxer"
      },
      {
        "codigo": "1-2069",
        "desc": "Boxer",
        "familia": "Boxer"
      },
      {
        "codigo": "1-5031",
        "desc": "Boxer",
        "familia": "Boxer"
      },
      {
        "codigo": "1-5467",
        "desc": "Boxer",
        "familia": "Boxer"
      }
    ]
  },
  {
    "id": "xy-camisetas",
    "marca": "XY",
    "nombre": "PROMO CAMISETAS XY",
    "precios": {
      "uno": 20000,
      "tres": 15000,
      "cantidad": 15000
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "24-6000",
        "desc": "Camiseta XY",
        "familia": "Camisetas"
      },
      {
        "codigo": "24-6001",
        "desc": "Camiseta XY",
        "familia": "Camisetas"
      }
    ]
  },
  {
    "id": "natubel-conjuntos-varios-1",
    "marca": "NATUBEL",
    "nombre": "PROMO CONJUNTOS NATUBEL",
    "precios": {
      "uno": 9000,
      "tres": 7500,
      "cantidad": 7500
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "38-22",
        "desc": "Conjunto Natubel",
        "familia": "Conjuntos"
      },
      {
        "codigo": "38-25",
        "desc": "Conjunto Natubel",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "natubel-conjuntos-varios-2",
    "marca": "NATUBEL",
    "nombre": "PROMO CONJUNTOS NATUBEL",
    "precios": {
      "uno": 6500,
      "tres": 6500,
      "cantidad": 5500
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "38-4115",
        "desc": "Conjunto Natubel",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "natubel-conjuntos-varios-3",
    "marca": "NATUBEL",
    "nombre": "PROMO CONJUNTOS NATUBEL",
    "precios": {
      "uno": 12000,
      "tres": 10000,
      "cantidad": 8500
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "38-380",
        "desc": "Conjunto Natubel",
        "familia": "Conjuntos"
      },
      {
        "codigo": "38-350",
        "desc": "Conjunto Natubel",
        "familia": "Conjuntos"
      },
      {
        "codigo": "38-340",
        "desc": "Conjunto Natubel",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "kaury-men-boxer-largo",
    "marca": "KAURY MEN",
    "nombre": "PROMO BOXER LARGO KAURY MEN",
    "precios": {
      "uno": 10000,
      "tres": 10000,
      "cantidad": 10000
    },
    "talles": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "items": [
      {
        "codigo": "52-18",
        "desc": "Boxer largo KAURY MEN",
        "familia": "Boxer Largo"
      },
      {
        "codigo": "52-19",
        "desc": "Boxer largo KAURY MEN",
        "familia": "Boxer Largo"
      }
    ]
  },
  {
    "id": "tiento-oferta-conjuntos",
    "marca": "TIENTO",
    "nombre": "PROMO CONJUNTOS DE OFERTA TIENTO",
    "precios": {
      "uno": 8500,
      "tres": 7500,
      "cantidad": 7500
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "18-611",
        "desc": "Conjunto Tiento (oferta)",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-666",
        "desc": "Conjunto Tiento (oferta)",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-667",
        "desc": "Conjunto Tiento (oferta)",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-668",
        "desc": "Conjunto Tiento (oferta)",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-669",
        "desc": "Conjunto Tiento (oferta)",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-670",
        "desc": "Conjunto Tiento (oferta)",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-800P",
        "desc": "Conjunto Tiento (oferta)",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-555",
        "desc": "Conjunto Tiento (oferta)",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "tiento-conjuntos-9000",
    "marca": "TIENTO",
    "nombre": "PROMO TIENTO",
    "precios": {
      "uno": 9000,
      "tres": 9000,
      "cantidad": 9000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "18-409",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-411",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-706",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-759",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-771",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-779",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-802",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-808",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-810",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-495",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-602",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-609",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-661",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-702",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-721",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-754",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-914",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-242",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      },
      {
        "codigo": "18-777",
        "desc": "Conjunto/Body/Camisolín Tiento",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "tiento-conjuntos-9500-8500",
    "marca": "TIENTO",
    "nombre": "PROMO TIENTO",
    "precios": {
      "uno": 9500,
      "tres": 8500,
      "cantidad": 8500
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "18-769",
        "desc": "Conjunto Tiento 2",
        "familia": "Conjuntos/Body"
      },
      {
        "codigo": "18-913",
        "desc": "Conjunto Tiento 2",
        "familia": "Conjuntos/Body"
      },
      {
        "codigo": "18-720",
        "desc": "Conjunto Tiento 2",
        "familia": "Conjuntos/Body"
      },
      {
        "codigo": "18-662",
        "desc": "Conjunto Tiento 2",
        "familia": "Conjuntos/Body"
      },
      {
        "codigo": "18-472",
        "desc": "Conjunto Tiento 2",
        "familia": "Conjuntos/Body"
      },
      {
        "codigo": "18-617",
        "desc": "Conjunto Tiento 2",
        "familia": "Conjuntos/Body"
      },
      {
        "codigo": "18-917",
        "desc": "Conjunto Tiento 2",
        "familia": "Conjuntos/Body"
      },
      {
        "codigo": "18-727",
        "desc": "Conjunto Tiento 2",
        "familia": "Conjuntos/Body"
      },
      {
        "codigo": "18-793",
        "desc": "Conjunto Tiento 2",
        "familia": "Conjuntos/Body"
      },
      {
        "codigo": "18-762",
        "desc": "Conjunto Tiento 2",
        "familia": "Conjuntos/Body"
      },
      {
        "codigo": "18-1768",
        "desc": "Conjunto Tiento 2",
        "familia": "Conjuntos/Body"
      }
    ]
  },
  {
    "id": "tiento-conjunto-10000-8000",
    "marca": "TIENTO",
    "nombre": "PROMO CONJUNTO TIENTO",
    "precios": {
      "uno": 10000,
      "tres": 8000,
      "cantidad": 8000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "18-222",
        "desc": "Conjunto Tiento",
        "familia": "Conjunto"
      }
    ]
  },
  {
    "id": "sexy-lali-1",
    "marca": "SEXY LALI",
    "nombre": "PROMO SEXY LALI 1",
    "precios": {
      "uno": 10000,
      "tres": 10000,
      "cantidad": 10000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "33-900",
        "desc": "Conjunto Sexy Lali 1",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-910",
        "desc": "Conjunto Sexy Lali 1",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-2080",
        "desc": "Conjunto Sexy Lali 1",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-1055",
        "desc": "Conjunto Sexy Lali 1",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-1060",
        "desc": "Conjunto Sexy Lali 1",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-1065",
        "desc": "Conjunto Sexy Lali 1",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-1066",
        "desc": "Conjunto Sexy Lali 1",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-1070",
        "desc": "Conjunto Sexy Lali 1",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-1082",
        "desc": "Conjunto Sexy Lali 1",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-1085",
        "desc": "Conjunto Sexy Lali 1",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "sexy-lali-2",
    "marca": "SEXY LALI",
    "nombre": "PROMO SEXY LALI 2",
    "precios": {
      "uno": 13000,
      "tres": 13000,
      "cantidad": 13000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "33-2045",
        "desc": "Conjunto Sexy Lali 2",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-2042",
        "desc": "Conjunto Sexy Lali 2",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-2042/E",
        "desc": "Conjunto Sexy Lali 2",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-2043",
        "desc": "Conjunto Sexy Lali 2",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-2047",
        "desc": "Conjunto Sexy Lali 2",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-2061",
        "desc": "Conjunto Sexy Lali 2",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-2056",
        "desc": "Conjunto Sexy Lali 2",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "sexy-lali-3",
    "marca": "SEXY LALI",
    "nombre": "PROMO SEXY LALI 3",
    "precios": {
      "uno": 6000,
      "tres": 6000,
      "cantidad": 6000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "33-1001",
        "desc": "Conjunto Sexy Lali 3",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-1003",
        "desc": "Conjunto Sexy Lali 3",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-1050",
        "desc": "Conjunto Sexy Lali 3",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-2038",
        "desc": "Conjunto Sexy Lali 3",
        "familia": "Conjuntos"
      },
      {
        "codigo": "33-2040",
        "desc": "Conjunto Sexy Lali 3",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "kaury-conjunto-j",
    "marca": "KAURY",
    "nombre": "CONJUNTO J KAURY",
    "precios": {
      "uno": 10000,
      "tres": 8000,
      "cantidad": 6720
    },
    "talles": [
      "85",
      "90",
      "95",
      "100",
      "105"
    ],
    "items": [
      {
        "codigo": "29-J41",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J49",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J50",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J51",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J53",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J54",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J56",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-j57",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J58",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J61",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J62",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J63",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-j64",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J73",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J74",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J75",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J76",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J78",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J80",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J81",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J84",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J85",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J88",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J89",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J90",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J93",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J94",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J18",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J101",
        "desc": "Conjunto J KAURY",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "kaury-conjuntos-12000",
    "marca": "KAURY",
    "nombre": "PROMO KAURY – CONJUNTOS",
    "precios": {
      "uno": 12000,
      "tres": 12000,
      "cantidad": 12000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "29-8148",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-8097",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-8145",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-7070",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-8120",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-8118",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-8099",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-8182",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-0001",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-7080",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-8070",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-4440",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-8155",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-302",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-8178",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-8203",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-8092",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      },
      {
        "codigo": "29-8180",
        "desc": "Kaury",
        "familia": "Kaury Varios"
      }
    ]
  },
  {
    "id": "kaury-conjuntos-j107",
    "marca": "KAURY",
    "nombre": "PROMO CONJUNTOS KAURY J107",
    "precios": {
      "uno": 11000,
      "tres": 9000,
      "cantidad": 6500
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "29-J107",
        "desc": "Conjunto KAURY J107",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J109",
        "desc": "Conjunto KAURY J107",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "kaury-conjuntos-j37",
    "marca": "KAURY",
    "nombre": "PROMO CONJUNTOS KAURY J37",
    "precios": {
      "uno": 9000,
      "tres": 7500,
      "cantidad": 6500
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "29-J37",
        "desc": "Conjunto KAURY J37",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "kaury-packs-varios",
    "marca": "KAURY/NATUBEL",
    "nombre": "PROMO PACK KAURY Y NATUBEL",
    "precios": {
      "uno": 5000,
      "tres": 4000,
      "cantidad": 3500
    },
    "talles": [
      "ÚNICO"
    ],
    "items": [
      {
        "codigo": "29-J35",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      },
      {
        "codigo": "29-J34",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      },
      {
        "codigo": "29-A2",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      },
      {
        "codigo": "29-A3",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      },
      {
        "codigo": "29-J4",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      },
      {
        "codigo": "29-J6",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      },
      {
        "codigo": "29-S23",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      },
      {
        "codigo": "29-J5",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      },
      {
        "codigo": "29-J28",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      },
      {
        "codigo": "29-J55",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      },
      {
        "codigo": "29-J72",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      },
      {
        "codigo": "29-j92",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      },
      {
        "codigo": "29-J29",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      },
      {
        "codigo": "38-101",
        "desc": "Pack Kaury/Natubel",
        "familia": "PACK"
      }
    ]
  },
  {
    "id": "kaury-conjuntos-otros",
    "marca": "KAURY",
    "nombre": "PROMO CONJUNTOS KAURY",
    "precios": {
      "uno": 7500,
      "tres": 6500,
      "cantidad": 5500
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "29-J77",
        "desc": "Conjunto KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J12",
        "desc": "Conjunto KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J14",
        "desc": "Conjunto KAURY",
        "familia": "Conjuntos"
      },
      {
        "codigo": "29-J15",
        "desc": "Conjunto KAURY",
        "familia": "Conjuntos"
      }
    ]
  },
  {
    "id": "kaury-pantuflas-nena",
    "marca": "KAURY",
    "nombre": "PANTUFLAS NENA KAURY",
    "precios": {
      "uno": 8000,
      "tres": 8000,
      "cantidad": 8000
    },
    "talles": [
      "6",
      "8",
      "10",
      "12"
    ],
    "items": [
      {
        "codigo": "29-302",
        "desc": "Pantuflas nena",
        "familia": "Pantuflas"
      }
    ]
  },
  {
    "id": "kaury-corset-body",
    "marca": "KAURY",
    "nombre": "PROMO CORSET/BODY KAURY",
    "precios": {
      "uno": 20000,
      "tres": 20000,
      "cantidad": 20000
    },
    "talles": [
      "85",
      "90",
      "95",
      "100"
    ],
    "items": [
      {
        "codigo": "29-8206",
        "desc": "Corset/Body KAURY",
        "familia": "Corset/Body"
      },
      {
        "codigo": "29-8177",
        "desc": "Corset/Body KAURY",
        "familia": "Corset/Body"
      }
    ]
  }


];

// ===================
// Estado
let activePromo = PROMOS[0];
let selectedArts = new Set();
let selectedTalles = new Set();
let pedido = []; // {sucursal,promoId,promo,articulo,talle,cantidad,desc}

// ===================
// Utilidades
const $ = sel => document.querySelector(sel);
function money(n){
  if(!n || isNaN(n)) return '—';
  return n.toLocaleString('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0});
}
function todayStamp(){
  const d = new Date();
  const pad = n => String(n).padStart(2,'0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}`;
}

// ===================
// Render Chips + Buscador
function renderChips(){
  const c = $('#chips');
  c.innerHTML = '';
  PROMOS.forEach(p=>{
    const chip = document.createElement('button');
    chip.className = 'chip' + (p.id===activePromo.id ? ' active':'');
    chip.textContent = `${p.marca} · ${p.nombre}`;
    chip.title = chip.textContent;
    chip.onclick = ()=>{ setPromo(p.id); };
    c.appendChild(chip);
  });
  const dl = $('#promosList');
  dl.innerHTML = PROMOS.map(p=>`<option value="${p.nombre}">${p.marca}</option>`).join('');
}

$('#search').addEventListener('keydown', (e)=>{
  if(e.key==='Enter'){
    const q = e.target.value.toLowerCase();
    const found = PROMOS.find(p => (p.nombre+ ' ' + p.marca).toLowerCase().includes(q));
    if(found) setPromo(found.id);
  }
});

// ===================
// Render Promo panel
function setPromo(id){
  const p = PROMOS.find(x=>x.id===id) || PROMOS[0];
  activePromo = p; selectedArts.clear(); selectedTalles.clear(); $('#artAll').checked=false; $('#talleAll').checked=false; $('#qty').value=1;
  renderChips();
  renderPromo();
}

function renderPromo(){
  $('#promo-title').textContent = `${activePromo.nombre}`;

  // precios
  $('#p1').textContent = money(activePromo.precios.uno);
  $('#p3').textContent = money(activePromo.precios.tres);
  $('#pc').textContent = money(activePromo.precios.cantidad);
  $('#pm').textContent = activePromo.marca;

  // artículos
  const wrap = $('#artList');
  wrap.querySelectorAll('.row').forEach(x=>x.remove());
  activePromo.items.forEach(it=>{
    const r = document.createElement('div');
    r.className='row';
    r.innerHTML = `
      <div><input type="checkbox" data-code="${it.codigo}" class="artChk"></div>
      <div><div style="font-weight:600">${it.codigo}</div><div class="muted" style="font-size:12px">${it.desc||''}</div></div>
      <div class="muted">${it.familia||''}</div>`;
    wrap.appendChild(r);
  });

  // talles
  const tWrap = $('#talles');
  tWrap.innerHTML = '';
  activePromo.talles.forEach(t=>{
    const b = document.createElement('button');
    b.className='talle'; b.textContent=t; b.dataset.talle=t;
    b.onclick=()=>{ toggleTalle(t); };
    tWrap.appendChild(b);
  });

  // eventos check all
  $('#artAll').onchange = (e)=>{
    const on = e.target.checked;
    document.querySelectorAll('.artChk').forEach(chk=>{ chk.checked = on; if(on) selectedArts.add(chk.dataset.code); else selectedArts.delete(chk.dataset.code); });
  };
  document.querySelectorAll('.artChk').forEach(chk=>{
    chk.onchange = (e)=>{ const code=e.target.dataset.code; if(e.target.checked) selectedArts.add(code); else selectedArts.delete(code); };
  });
  $('#talleAll').onchange = (e)=>{
    const on=e.target.checked;
    selectedTalles.clear();
    document.querySelectorAll('.talle').forEach(btn=>{
      btn.classList.toggle('active', on);
      if(on) selectedTalles.add(btn.dataset.talle);
    });
  }
}

function toggleTalle(t){
  const btn = Array.from(document.querySelectorAll('.talle')).find(b=>b.dataset.talle===t);
  const on = !btn.classList.contains('active');
  btn.classList.toggle('active', on);
  if(on) selectedTalles.add(t); else selectedTalles.delete(t);
  $('#talleAll').checked = selectedTalles.size===activePromo.talles.length;
}

// ===================
// Agregar a lista
$('#addBtn').onclick = ()=>{
  const qty = Math.max(1, parseInt($('#qty').value||'1',10));
  if(selectedArts.size===0){ alert('Elegí al menos un artículo.'); return; }
  if(selectedTalles.size===0){ alert('Elegí al menos un talle.'); return; }
  const suc = $('#sucursal').value;
  const artList = activePromo.items.filter(it=>selectedArts.has(it.codigo));
  const talles = Array.from(selectedTalles);
  artList.forEach(it=>{
    talles.forEach(t=>{
      pedido.push({ sucursal:suc, promoId:activePromo.id, promo:activePromo.nombre, articulo:it.codigo, desc:it.desc||'', talle:t, cantidad:qty });
    });
  });
  renderPedido();
};

$('#clearSel').onclick = ()=>{ selectedArts.clear(); selectedTalles.clear(); $('#artAll').checked=false; $('#talleAll').checked=false; document.querySelectorAll('.artChk').forEach(c=>c.checked=false); document.querySelectorAll('.talle').forEach(b=>b.classList.remove('active')); $('#qty').value=1; };

// ===================
// Lista del pedido
function renderPedido() {
  const salida = document.getElementById('pedidoSalida');
  const hoy = new Date();
  const fecha = hoy.toLocaleDateString('es-AR');

  let html = `
    <pre>
LOCAL: ${document.getElementById('selectSucursal').value}
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


window.delItem = function(i){ pedido.splice(i,1); renderPedido(); }

$('#vaciar').onclick = ()=>{ if(confirm('¿Vaciar la lista?')){ pedido = []; renderPedido(); } };
$('#copiar').onclick = ()=>{
  const txt = pedido.map(it=> `${it.articulo};${it.talle};${it.cantidad};${it.promo};${it.sucursal}`).join('\n');
  navigator.clipboard.writeText(txt).then(()=>alert('Copiado al portapapeles.'));
}
$('#descargar').onclick = ()=>{
  if(pedido.length===0){ alert('No hay ítems para descargar.'); return; }
  const header = '# codigo;talle;cantidad;promo;sucursal\n';
  const lines = pedido.map(it=> `${it.articulo};${it.talle};${it.cantidad};${it.promo};${it.sucursal}`).join('\n');
  const blob = new Blob([header+lines], {type:'text/plain;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `pedido_${todayStamp()}.txt`;
  a.click();
  URL.revokeObjectURL(a.href);
};
document.getElementById('btnSurtido').addEventListener('click', () => {
  const cantidadTotal = parseInt(document.getElementById('cantidad').value) || 0;
  if (cantidadTotal <= 0) return alert("Ingresá una cantidad válida");

  const tallesSeleccionados = getSelectedTalles(); // función que devuelve array de talles marcados
  const articulosSeleccionados = getSelectedArticulos(); // idem para artículos

  if (tallesSeleccionados.length === 0 || articulosSeleccionados.length === 0) {
    return alert("Seleccioná al menos un artículo y un talle");
  }

  // Distribuir cantidades
  const base = Math.floor(cantidadTotal / tallesSeleccionados.length);
  let resto = cantidadTotal % tallesSeleccionados.length;

  articulosSeleccionados.forEach(art => {
    tallesSeleccionados.forEach(talle => {
      let cant = base;
      if (resto > 0) { cant += 1; resto--; }

      if (cant > 0) {
        agregarAlPedido({
          codigo: art.codigo,
          desc: art.desc,
          talle: talle,
          cantidad: cant
        });
      }
    });
  });

  renderPedido();
});

// Init
renderChips();
renderPromo();
renderPedido();
