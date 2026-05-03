import '../style.css'

const app = document.querySelector('#posts-app');
let currentPage = 1;

const initUI = () => {
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
          <li class="nav-item"><a class="nav-link active fw-semibold" href="/posts.html">Posts</a></li>
          <li class="nav-item"><a class="nav-link" href="/todos.html">Todos</a></li>
          <li class="nav-item"><a class="nav-link" href="/users.html">Usuarios</a></li>
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
    <div class="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
      <div>
        <h2 class="display-5 fw-bold mb-0 text-dark"><i class="bi bi-journal-text text-primary me-2"></i>Muro de Posts</h2>
        <p class="text-muted mb-0">Explorando la página <span id="page-label" class="badge bg-primary rounded-pill">1</span></p>
      </div>
      <a href="/index.html" class="btn btn-outline-primary rounded-pill px-4 shadow-sm">
        <i class="bi bi-arrow-left me-2"></i>Volver al Inicio
      </a>
    </div>
    <div class="row g-4" id="posts-container"></div>
    <div class="d-flex justify-content-center mt-5">
      <div class="btn-group shadow-sm rounded-pill overflow-hidden">
        <button class="btn btn-white border-end px-4" id="prev">Anterior</button>
        <button class="btn btn-white px-4" id="next">Siguiente</button>
      </div>
    </div>
  </div>

  <footer class="bg-white border-top py-5 mt-5">
    <div class="container text-center text-muted">
      <p class="mb-0">© 2026 <strong>JSONHub</strong>. Mariana Maynez & Angel Martínez.</p>
    </div>
  </footer>
  `;
  document.getElementById('prev').onclick = () => navigate(-1);
  document.getElementById('next').onclick = () => navigate(1);
};

const fetchPosts = async (p) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${p}&_limit=6`);
  const posts = await res.json();
  const container = document.querySelector('#posts-container');
  container.innerHTML = '';
  posts.forEach(post => {
    const col = document.createElement('div');
    col.className = 'col-md-6';
    col.innerHTML = `
      <div class="card h-100 border-0 shadow-sm rounded-4 p-4 transition-hover">
        <div class="card-body">
          <span class="badge bg-primary-subtle text-primary rounded-pill mb-3">ID #${post.id}</span>
          <h4 class="card-title fw-bold text-dark text-capitalize">${post.title}</h4>
          <p class="card-text text-secondary lh-lg">${post.body}</p>
        </div>
      </div>`;
    container.appendChild(col);
  });
  document.getElementById('page-label').innerText = p;
  document.getElementById('prev').disabled = (p === 1);
};

const navigate = (s) => { currentPage += s; fetchPosts(currentPage); window.scrollTo({top:0, behavior:'smooth'}); };

initUI();
fetchPosts(currentPage);