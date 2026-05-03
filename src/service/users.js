import '../style.css'

const app = document.querySelector('#users');

// 1. Estructura base con Navbar corregido (Botón blanco)
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
        <li class="nav-item"><a class="nav-link" href="/todos.html">Todos</a></li>
        <li class="nav-item"><a class="nav-link active fw-semibold" href="/users.html">Users</a></li>
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
  <div class="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
    <div>
      <h2 class="display-5 fw-bold mb-0 text-dark">
        <i class="bi bi-people-fill text-primary me-2"></i>Directorio de Users
      </h2>
      <p class="text-muted mb-0">Gestión de perfiles desde la API de JSONPlaceholder.</p>
    </div>
    <a href="/index.html" class="btn btn-outline-primary rounded-pill px-4 shadow-sm">
      <i class="bi bi-arrow-left me-2"></i>Volver al Inicio
    </a>
  </div>
  
  <div class="row g-4" id="users-container">
    <div class="text-center p-5">
      <div class="spinner-border text-primary" role="status"></div>
    </div>
  </div>

  <div class="text-center mt-5">
    <button class="btn btn-dark btn-lg rounded-pill px-5 shadow" onclick="window.location.href='/index.html'">
      <i class="bi bi-house-fill me-2"></i>Regresar a Home
    </button>
  </div>
</div>

<footer class="bg-white border-top py-5 mt-5">
  <div class="container text-center">
    <p class="text-muted mb-2">© 2026 <span class="fw-bold text-primary italic">JSONHub</span>. Proyecto Académico.</p>
    <p class="small text-secondary">Realizado por: <span class="fw-semibold">Mariana Maynez Jacinto</span> y <span class="fw-semibold">Angel Emilio Martínez Camacho</span>.</p>
  </div>
</footer>
`;

// 2. Obtención de datos
const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    renderUsers(users);
  } catch (error) {
    document.querySelector('#users-container').innerHTML = `<p class="text-danger text-center">Error al cargar users.</p>`;
  }
};

// 3. Renderizado de tarjetas
const renderUsers = (users) => {
  const container = document.querySelector('#users-container');
  container.innerHTML = ''; 

  users.forEach(user => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    
    col.innerHTML = `
      <div class="card h-100 border-0 shadow-sm rounded-4 p-3 transition-hover">
        <div class="card-body text-center">
          <div class="mx-auto bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px; font-size: 1.5rem; font-weight: bold;">
            ${user.name.charAt(0)}
          </div>
          
          <h5 class="fw-bold text-dark mb-1">${user.name}</h5>
          <p class="text-primary small mb-3">@${user.username}</p>
          
          <div class="text-start small border-top pt-3 text-secondary">
            <p class="mb-2"><i class="bi bi-envelope-at me-2"></i>${user.email}</p>
            <p class="mb-2"><i class="bi bi-geo-alt me-2"></i>${user.address.city}</p>
            <p class="mb-0"><i class="bi bi-building me-2"></i>${user.company.name}</p>
          </div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
};

fetchUsers();