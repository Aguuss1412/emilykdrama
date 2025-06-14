function cargarDatos(clave) {
  return JSON.parse(localStorage.getItem(clave)) || [];
}

function guardarDatos(clave, datos) {
  localStorage.setItem(clave, JSON.stringify(datos));
}

function agregarVisto() {
  const titulo = document.getElementById("titulo").value;
  const puntaje = document.getElementById("puntaje").value;
  const comentario = document.getElementById("comentario").value;

  if (!titulo) return alert("¡Falta el título!");

  const lista = cargarDatos("vistos");
  lista.push({ titulo, puntaje, comentario });
  guardarDatos("vistos", lista);
  mostrarVistos();
}

function agregarWishlist() {
  const titulo = document.getElementById("wishTitulo").value;
  const motivo = document.getElementById("motivo").value;

  if (!titulo) return alert("¡Falta el título!");

  const lista = cargarDatos("wishlist");
  lista.push({ titulo, motivo });
  guardarDatos("wishlist", lista);
  mostrarWishlist();
}

function mostrarVistos() {
  const lista = cargarDatos("vistos");
  const ul = document.getElementById("lista-vistos");
  ul.innerHTML = "";
  lista.forEach(d => {
    ul.innerHTML += `<li><strong>${d.titulo}</strong> (${d.puntaje}/10) – ${d.comentario}</li>`;
  });
}

function mostrarWishlist() {
  const lista = cargarDatos("wishlist");
  const ul = document.getElementById("lista-wishlist");
  ul.innerHTML = "";
  lista.forEach(d => {
    ul.innerHTML += `<li><strong>${d.titulo}</strong> – ${d.motivo}</li>`;
  });
}

mostrarVistos();
mostrarWishlist();

