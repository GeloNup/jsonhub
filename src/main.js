import './style.css'

document.querySelector('#app').innerHTML = `
<!-- Navbar con Gradiente -->
<nav class="navbar navbar-expand-lg navbar-dark shadow-sm" style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);">
  <div class="container">
    <a class="navbar-brand fw-black fs-4" href="./index.html">
      <i class="bi bi-cpu-fill me-2"></i>JSON<span class="fw-light">Hub</span>
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto align-items-center">
        <li class="nav-item"><a class="nav-link active fw-semibold" href="./index.html">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" href="/posts.html">Posts</a></li>
        <li class="nav-item"><a class="nav-link" href="/todos.html">Todos</a></li>
        <li class="nav-item"><a class="nav-link" href="/users.html">Usuarios</a></li>
        <!-- Opción About con texto en blanco -->
        <li class="nav-item ms-lg-3">
          <a class="nav-link btn btn-outline-light text-white px-4 rounded-pill fw-bold shadow-sm" href="/about.html">
            <i class="bi bi-info-circle-fill me-1"></i> Sobre el Proyecto
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Hero Section Minimalista -->
<div class="container mt-5">
  <div class="row align-items-center p-5 bg-white border rounded-5 shadow-lg overflow-hidden position-relative">
    <div class="col-lg-7 z-1">
      <h1 class="display-3 fw-bold text-dark mb-3">Explora Datos <span class="text-primary">en Tiempo Real</span></h1>
      <p class="lead text-muted mb-4">
        Interfaz moderna conectada a la API pública de JSONPlaceholder. Gestiona posts y usuarios con una experiencia fluida.
      </p>
      <div class="d-grid d-md-flex justify-content-md-start gap-3">
        <button class="btn btn-outline-dark btn-lg px-5 py-3 rounded-pill" onclick="window.location.href='./users.html'">
          Ver Usuarios
        </button>
      </div>
    </div>
    <div class="col-lg-5 d-none d-lg-block text-center">
       <div class="display-1 text-primary opacity-25 fw-bold">
          { JSON }
       </div>
    </div>
  </div>
</div>

<!-- Seccion de Tarjetas con Hover Effect -->
<div class="container my-5">
  <div class="row g-4">

    <!-- Card Posts -->
    <div class="col-md-4">
      <div class="card h-100 border-0 shadow-sm rounded-4 p-3 transition-hover">
        <div class="card-body">
          <div class="icon-box mb-3 bg-primary-subtle d-inline-block px-3 py-2 rounded-3 text-primary">
            <i class="bi bi-chat-left-text-fill fs-3"></i>
          </div>
          <h4 class="card-title fw-bold">Posts</h4>
          <p class="card-text text-secondary">Explora las últimas publicaciones y comentarios de la base de datos.</p>
          <button class="btn btn-link text-decoration-none p-0 fw-bold" onclick="window.location.href='./posts.html'">
            Explorar posts <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Card Usuarios -->
    <div class="col-md-4">
      <div class="card h-100 border-0 shadow-sm rounded-4 p-3 transition-hover">
        <div class="card-body">
          <div class="icon-box mb-3 bg-success-subtle d-inline-block px-3 py-2 rounded-3 text-success">
            <i class="bi bi-people-fill fs-3"></i>
          </div>
          <h4 class="card-title fw-bold">Usuarios</h4>
          <p class="card-text text-secondary">Información detallada sobre los perfiles y contactos de la red.</p>
          <button class="btn btn-link text-decoration-none p-0 fw-bold text-success" onclick="window.location.href='./users.html'">
            Ver perfiles <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Card Todos -->
    <div class="col-md-4">
      <div class="card h-100 border-0 shadow-sm rounded-4 p-3 transition-hover">
        <div class="card-body">
          <div class="icon-box mb-3 bg-warning-subtle d-inline-block px-3 py-2 rounded-3 text-warning">
            <i class="bi bi-check2-square fs-3"></i>
          </div>
          <h4 class="card-title fw-bold">Todos</h4>
          <p class="card-text text-secondary">Listado de registros y estados disponibles desde la API.</p>
          <button class="btn btn-link text-decoration-none p-0 fw-bold text-warning" onclick="window.location.href='./todos.html'">
            Explorar registros <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- Footer Moderno -->
<footer class="bg-white border-top py-5">
  <div class="container text-center">
    <p class="text-muted mb-2">© 2026 <span class="fw-bold text-primary italic">JSONHub</span>. Diseñado con ❤️ para la clase de JS.</p>
    <p class="small text-secondary">Realizado por: <span class="fw-semibold">Mariana Maynez Jacinto</span> y <span class="fw-semibold">Angel Emilio Martínez Camacho</span>.</p>
  </div>
</footer>
`