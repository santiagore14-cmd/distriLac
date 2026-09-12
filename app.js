const $ = (s) => document.querySelector(s);

const store = {
  get(key, fallback = []) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (err) {
      console.warn(`No se pudo leer ${key}`, err);
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

const defaultsClientes = [
  { id: 1, nombre: 'Brito Market', zona: 'La Plata', telefono: '' },
  { id: 2, nombre: 'Arguello', zona: '', telefono: '' },
  { id: 3, nombre: 'Juan', zona: '', telefono: '' },
  { id: 4, nombre: 'Mati', zona: '', telefono: '' },
];

const defaultsProductos = [
  { id: 1, nombre: 'Reggianito Negro', proveedor: 'Mauro / Nonna Pia', precio: 18990 },
  { id: 2, nombre: 'Reggianito Sin Pintar', proveedor: 'Mauro / Nonna Pia', precio: 18690 },
  { id: 3, nombre: 'Parmesano', proveedor: 'Mauro / Nonna Pia', precio: 19190 },
  { id: 4, nombre: 'Barra Tybo Los Vasquitos', proveedor: 'Mauro / Nonna Pia', precio: 10990 },
  { id: 5, nombre: 'Cremoso', proveedor: 'Mauro / Nonna Pia', precio: 8290 },
  { id: 6, nombre: 'Sardo', proveedor: 'FM', precio: 0 },
  { id: 7, nombre: 'Chimichurri Original 260 g', proveedor: 'Metti', precio: 0 },
];

let clientes = store.get('clientes', defaultsClientes);
let productos = store.get('productos', defaultsProductos);
let pedidos = store.get('pedidos', []);
let clientePedido = null;
let itemsPedido = [];

function normalizar(texto) {
  return String(texto || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function esc(texto) {
  return String(texto ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function moneda(valor) {
  return Number(valor || 0).toLocaleString('es-AR');
}

function activarTab(id) {
  document.querySelectorAll('.tab').forEach((tab) => tab.classList.remove('active'));
  document.querySelectorAll('[data-tab]').forEach((btn) => btn.classList.remove('active'));
  $(`#${id}`)?.classList.add('active');
  document.querySelector(`[data-tab="${id}"]`)?.classList.add('active');
}

document.querySelectorAll('[data-tab]').forEach((btn) => {
  btn.addEventListener('click', () => activarTab(btn.dataset.tab));
});

function filtrarClientes(q = '') {
  const needle = normalizar(q);
  return clientes.filter((c) => normalizar(`${c.nombre} ${c.zona} ${c.telefono}`).includes(needle));
}

function filtrarProductos(q = '') {
  const needle = normalizar(q);
  return productos.filter((p) => normalizar(`${p.nombre} ${p.proveedor}`).includes(needle));
}

function renderClientes(q = '') {
  const lista = filtrarClientes(q);
  $('#listaClientes').innerHTML = lista.length
    ? lista
        .map(
          (c) => `
          <div class="row">
            <div>
              <b>${esc(c.nombre)}</b>
              <div class="muted">${esc(c.zona || 'Sin zona')}${c.telefono ? ` · ${esc(c.telefono)}` : ''}</div>
            </div>
            <button type="button" data-action="borrar-cliente" data-id="${c.id}" aria-label="Borrar ${esc(c.nombre)}">×</button>
          </div>`,
        )
        .join('')
    : '<p class="muted">Sin resultados</p>';
}

function renderProductos(q = '') {
  const lista = filtrarProductos(q);
  $('#listaProductos').innerHTML = lista.length
    ? lista
        .map(
          (p) => `
          <div class="row">
            <div>
              <b>${esc(p.nombre)}</b>
              <div class="muted">${esc(p.proveedor)} · $${moneda(p.precio)}</div>
            </div>
            <button type="button" data-action="borrar-producto" data-id="${p.id}" aria-label="Borrar ${esc(p.nombre)}">×</button>
          </div>`,
        )
        .join('')
    : '<p class="muted">Sin resultados</p>';
}

function renderPedidoClientes(q = '') {
  const lista = filtrarClientes(q);
  $('#pedidoClientes').innerHTML = lista.length
    ? lista
        .map(
          (c) => `
          <button type="button" class="row selectable ${clientePedido === c.id ? 'selected' : ''}" data-action="seleccionar-cliente" data-id="${c.id}">
            <div>
              <b>${esc(c.nombre)}</b>
              <div class="muted">${esc(c.zona || 'Sin zona')}</div>
            </div>
            <span aria-hidden="true">›</span>
          </button>`,
        )
        .join('')
    : '<p class="muted">No se encontró cliente</p>';
}

function renderPedidoProductos(q = '') {
  const lista = filtrarProductos(q);
  $('#pedidoProductos').innerHTML = lista.length
    ? lista
        .map(
          (p) => `
          <div class="row">
            <div>
              <b>${esc(p.nombre)}</b>
              <div class="muted">${esc(p.proveedor)} · $${moneda(p.precio)}</div>
            </div>
            <button type="button" data-action="agregar-item" data-id="${p.id}">Agregar</button>
          </div>`,
        )
        .join('')
    : '<p class="muted">No se encontró producto</p>';
}

function renderPedido() {
  const cliente = clientes.find((c) => c.id === clientePedido);
  const total = itemsPedido.reduce((acc, item) => acc + Number(item.precio || 0) * Number(item.cantidad || 0), 0);

  const clienteHtml = cliente
    ? `<p><span class="badge">Cliente</span> <b>${esc(cliente.nombre)}</b></p>`
    : '<p class="muted">Seleccioná un cliente</p>';

  const itemsHtml = itemsPedido
    .map(
      (item) => `
      <div class="row">
        <div>
          <b>${esc(item.nombre)}</b>
          <div class="muted">${esc(item.proveedor)} · $${moneda(item.precio)}</div>
        </div>
        <div class="qty-controls">
          <input data-action="cambiar-cantidad" data-id="${item.id}" type="number" min="1" step="1" value="${item.cantidad}" aria-label="Cantidad de ${esc(item.nombre)}">
          <button type="button" data-action="quitar-item" data-id="${item.id}" aria-label="Quitar ${esc(item.nombre)}">×</button>
        </div>
      </div>`,
    )
    .join('');

  $('#pedidoSeleccion').innerHTML = `${clienteHtml}${itemsHtml}<p class="pedido-total"><b>Total: $${moneda(total)}</b></p>`;
}

function renderPedidos() {
  $('#listaPedidos').innerHTML = pedidos.length
    ? pedidos
        .slice()
        .reverse()
        .map((p) => {
          const fecha = p.fecha ? new Date(p.fecha).toLocaleString('es-AR') : '';
          return `
          <div class="row">
            <div>
              <b>${esc(p.cliente)}</b>
              <div class="muted">${esc(fecha)} · ${p.items?.length || 0} ítems · deuda $${moneda(p.deuda)}</div>
            </div>
            <b>$${moneda(p.total)}</b>
          </div>`;
        })
        .join('')
    : '<p class="muted">Todavía no hay pedidos</p>';
}

function refrescarPantallas() {
  renderClientes($('#buscarCliente')?.value || '');
  renderProductos($('#buscarProducto')?.value || '');
  renderPedidoClientes($('#pedidoClienteBuscar')?.value || '');
  renderPedidoProductos($('#pedidoProductoBuscar')?.value || '');
  renderPedido();
  renderPedidos();
}

$('#clienteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = $('#clienteNombre').value.trim();
  if (!nombre) return;

  clientes.push({
    id: Date.now(),
    nombre,
    zona: $('#clienteZona').value.trim(),
    telefono: $('#clienteTelefono').value.trim(),
  });
  store.set('clientes', clientes);
  e.currentTarget.reset();
  $('#buscarCliente').value = '';
  refrescarPantallas();
});

$('#productoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = $('#productoNombre').value.trim();
  if (!nombre) return;

  productos.push({
    id: Date.now(),
    nombre,
    proveedor: $('#productoProveedor').value,
    precio: Number($('#productoPrecio').value || 0),
  });
  store.set('productos', productos);
  e.currentTarget.reset();
  $('#buscarProducto').value = '';
  refrescarPantallas();
});

$('#buscarCliente').addEventListener('input', (e) => renderClientes(e.target.value));
$('#buscarProducto').addEventListener('input', (e) => renderProductos(e.target.value));
$('#pedidoClienteBuscar').addEventListener('input', (e) => renderPedidoClientes(e.target.value));
$('#pedidoProductoBuscar').addEventListener('input', (e) => renderPedidoProductos(e.target.value));

$('#listaClientes').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action="borrar-cliente"]');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  clientes = clientes.filter((c) => c.id !== id);
  if (clientePedido === id) clientePedido = null;
  store.set('clientes', clientes);
  refrescarPantallas();
});

$('#listaProductos').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action="borrar-producto"]');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  productos = productos.filter((p) => p.id !== id);
  itemsPedido = itemsPedido.filter((p) => p.id !== id);
  store.set('productos', productos);
  refrescarPantallas();
});

$('#pedidoClientes').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action="seleccionar-cliente"]');
  if (!btn) return;
  clientePedido = Number(btn.dataset.id);
  renderPedidoClientes($('#pedidoClienteBuscar').value);
  renderPedido();
});

$('#pedidoProductos').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action="agregar-item"]');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const producto = productos.find((p) => p.id === id);
  if (!producto) return;
  const existente = itemsPedido.find((item) => item.id === id);
  if (existente) existente.cantidad += 1;
  else itemsPedido.push({ ...producto, cantidad: 1 });
  renderPedido();
});

$('#pedidoSeleccion').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action="quitar-item"]');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  itemsPedido = itemsPedido.filter((item) => item.id !== id);
  renderPedido();
});

$('#pedidoSeleccion').addEventListener('change', (e) => {
  const input = e.target.closest('[data-action="cambiar-cantidad"]');
  if (!input) return;
  const id = Number(input.dataset.id);
  const item = itemsPedido.find((i) => i.id === id);
  if (!item) return;
  item.cantidad = Math.max(1, Math.floor(Number(input.value) || 1));
  renderPedido();
});

$('#guardarPedido').addEventListener('click', () => {
  if (!clientePedido) return alert('Seleccioná un cliente');
  if (!itemsPedido.length) return alert('Agregá al menos un producto');

  const cliente = clientes.find((c) => c.id === clientePedido);
  if (!cliente) return alert('El cliente seleccionado ya no existe');

  const total = itemsPedido.reduce((acc, item) => acc + Number(item.precio || 0) * Number(item.cantidad || 0), 0);
  const deuda = Math.max(0, Number($('#deudaAnterior').value || 0));

  pedidos.push({
    id: Date.now(),
    fecha: new Date().toISOString(),
    cliente: cliente.nombre,
    clienteId: cliente.id,
    items: itemsPedido.map((item) => ({ ...item })),
    total,
    deuda,
  });
  store.set('pedidos', pedidos);

  itemsPedido = [];
  clientePedido = null;
  $('#deudaAnterior').value = 0;
  $('#pedidoClienteBuscar').value = '';
  $('#pedidoProductoBuscar').value = '';
  refrescarPantallas();
  alert('Pedido guardado');
});

refrescarPantallas();
