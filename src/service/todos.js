import '../style.css'

const app = document.querySelector('#todos');
let currentPage = 1;
const limit = 9; 

// 1. Estructura base con Navbar corregido y Contenedor
const initApp = () => {
  app.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark shadow-sm" style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);">
    <div class="container">
      <a class="navbar-brand fw-black fs-4" href="/index.html">
        <i class="bi bi-cpu-fill me-2"></i>JSON<span class="fw-light">Hub</span>
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item"><a class="nav-link" href="/index.html"><i class="bi bi-house-door-fill me-1"></i>Inicio</a></li>
          <li class="nav-item"><a class="nav-link" href="/posts.html">Posts</a></li>
          <li class="nav-item"><a class="nav-link active fw-semibold" href="/todos.html">Todos</a></li>
          <li class="nav-item"><a class="nav-link" href="/users.html">Usuarios</a></li>
          <!-- Botón Sobre el Proyecto con letra blanca -->
          <li class="nav-item ms-lg-3">
            <a class="nav-link btn btn-outline-light text-white px-4 rounded-pill fw-bold shadow-sm" href="/about.html">
              <i class="bi bi-info-circle-fill me-1"></i> Sobre el Proyecto
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container my-5">
    <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
      <div>
        <h2 class="fw-bold"><i class="bi bi-list-task text-primary me-2"></i>Listado de Todos</h2>
        <p class="text-muted mb-0">Explorando página <span id="page-number" class="badge bg-primary rounded-pill">${currentPage}</span></p>
      </div>
      <a href="/index.html" class="btn btn-outline-primary rounded-pill px-4 shadow-sm">
        <i class="bi bi-arrow-left me-2"></i>Volver al Inicio
      </a>
    </div>
    
    <div class="row g-3" id="todos-container">
      <div class="text-center p-5">
        <div class="spinner-border text-primary" role="status"></div>
      </div>
    </div>

    <!-- Paginación -->
    <nav class="mt-5">
      <ul class="pagination justify-content-center gap-2">
        <li class="page-item">
          <button class="btn btn-outline-primary rounded-pill px-4 shadow-sm" id="prev-btn" disabled>
            <i class="bi bi-chevron-left me-1"></i> Anterior
          </button>
        </li>
        <li class="page-item">
          <button class="btn btn-outline-primary rounded-pill px-4 shadow-sm" id="next-btn">
            Siguiente <i class="bi bi-chevron-right ms-1"></i>
          </button>
        </li>
      </ul>
    </nav>
  </div>

  <footer class="bg-white border-top py-5 mt-5">
    <div class="container text-center">
      <p class="text-muted mb-2">© 2026 <span class="fw-bold text-primary italic">JSONHub</span>. Proyecto Académico.</p>
      <p class="small text-secondary">Realizado por: <span class="fw-semibold">Mariana Maynez Jacinto</span> y <span class="fw-semibold">Angel Emilio Martínez Camacho</span>.</p>
    </div>
  </footer>
  `;

  document.getElementById('prev-btn').addEventListener('click', () => changePage(-1));
  document.getElementById('next-btn').addEventListener('click', () => changePage(1));
};

const fetchTodos = async (page) => {
  const container = document.querySelector('#todos-container');
  container.innerHTML = `<div class="text-center p-5"><div class="spinner-border text-primary"></div></div>`;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);
    const data = await response.json();
    renderTodos(data);
    updatePaginationUI(page);
  } catch (error) {
    container.innerHTML = `<p class="text-danger text-center">Error al cargar datos.</p>`;
  }
};

const renderTodos = (todos) => {
  const container = document.querySelector('#todos-container');
  container.innerHTML = ''; 

  todos.forEach(todo => {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4';
    card.innerHTML = `
      <div class="card h-100 border-0 shadow-sm rounded-4 p-2 transition-hover">
        <div class="card-body">
          <div class="d-flex align-items-start mb-3">
            <div class="bg-primary-subtle text-primary px-3 py-2 rounded-3 me-3">
               <i class="bi bi-hash fw-bold"></i>${todo.id}
            </div>
            <h6 class="card-title fw-bold text-dark text-capitalize mb-0" style="line-height: 1.4;">
              ${todo.title}
            </h6>
          </div>
          <hr class="opacity-10">
          <div class="d-flex justify-content-between align-items-center">
            <small class="text-muted">User ID: ${todo.userId}</small>
            <i class="bi bi-file-earmark-code text-secondary opacity-50"></i>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
};

const changePage = (step) => {
  currentPage += step;
  fetchTodos(currentPage);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const updatePaginationUI = (page) => {
  document.getElementById('page-number').innerText = page;
  document.getElementById('prev-btn').disabled = (page === 1);
  document.getElementById('next-btn').disabled = (page >= 23);
};

initApp();
fetchTodos(currentPage);