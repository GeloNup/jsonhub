import '../style.css'

const app = document.querySelector('#about');

app.innerHTML = `
<!-- Navbar con botón blanco -->
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
        <li class="nav-item"><a class="nav-link" href="/users.html">Users</a></li>
        <li class="nav-item ms-lg-3">
          <a class="nav-link btn btn-outline-light text-white px-4 rounded-pill fw-bold shadow-sm" href="/about.html">
            Sobre el Proyecto
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container my-5">
  <div class="row justify-content-center">
    <div class="col-lg-10">
      
      <!-- Tarjeta Principal de Información -->
      <div class="card border-0 shadow-lg rounded-5 overflow-hidden bg-white mb-5">
        <div class="card-body p-5">
          <div class="text-center mb-5">
            <span class="badge bg-primary-subtle text-primary rounded-pill px-4 py-2 mb-3 fw-bold">DOCUMENTACIÓN</span>
            <h1 class="display-4 fw-bold text-dark">Acerca de <span class="text-primary">JSONHub</span></h1>
            <div class="mx-auto bg-primary rounded-pill mt-2" style="width: 80px; height: 5px;"></div>
          </div>

          <div class="row g-5">
            <div class="col-md-12">
              <h3 class="fw-bold mb-3 text-center">Propósito y Arquitectura</h3>
              <p class="text-secondary fs-5 lh-base text-center mx-auto" style="max-width: 800px;">
                <strong>JSONHub</strong> es una aplicación web de vanguardia diseñada para demostrar el dominio de la programación asíncrona y la manipulación dinámica del DOM. El núcleo del proyecto reside en la integración eficiente con <strong>JSONPlaceholder</strong>, permitiendo simular el comportamiento de una plataforma de producción real mediante el consumo de microservicios REST.
              </p>
            </div>
          </div>

          <!-- Pilares Técnicos -->
          <div class="row g-4 mt-4">
            <div class="col-md-4">
              <div class="p-4 border rounded-4 bg-light h-100 text-center transition-hover">
                <i class="bi bi-braces fs-1 text-primary mb-2"></i>
                <h5 class="fw-bold">Consumo de APIs</h5>
                <p class="small text-muted mb-0">Implementación avanzada de <strong>Fetch API</strong> para la gestión de promesas y obtención de datos remotos.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="p-4 border rounded-4 bg-light h-100 text-center transition-hover">
                <i class="bi bi-grid-1x2-fill fs-1 text-primary mb-2"></i>
                <h5 class="fw-bold">UI Dinámica</h5>
                <p class="small text-muted mb-0">Renderizado de componentes en tiempo real basado en objetos JSON, optimizando la experiencia de usuario.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="p-4 border rounded-4 bg-light h-100 text-center transition-hover">
                <i class="bi bi-phone-flip fs-1 text-primary mb-2"></i>
                <h5 class="fw-bold">Diseño Responsivo</h5>
                <p class="small text-muted mb-0">Uso de <strong>Bootstrap 5</strong> para garantizar una navegación fluida en dispositivos móviles y de escritorio.</p>
              </div>
            </div>
          </div>

          <hr class="my-5 opacity-10">

          <!-- Sección de Desarrolladores -->
          <div class="text-center mb-5">
            <h3 class="fw-bold">Desarrollado por:</h3>
            <p class="text-muted">Estudiantes de la Facultad de Ciencias de la Información - UNACAR</p>
          </div>

          <div class="row g-4 justify-content-center">
            <div class="col-md-5">
              <div class="p-4 border rounded-4 text-center transition-hover shadow-sm bg-white border-primary-subtle">
                <div class="avatar-circle mx-auto mb-3 bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                  <i class="bi bi-person-fill fs-1 text-primary"></i>
                </div>
                <h5 class="fw-bold mb-1">Mariana Maynez Jacinto</h5>
                <span class="badge bg-primary rounded-pill mb-3">Developer</span>
                <p class="small text-muted mb-0">Especialista en pusheen.</p>
              </div>
            </div>
            <div class="col-md-5">
              <div class="p-4 border rounded-4 text-center transition-hover shadow-sm bg-white border-primary-subtle">
                <div class="avatar-circle mx-auto mb-3 bg-info-subtle rounded-circle d-flex align-items-center justify-content-center" style="width: 80px; height: 80px;">
                  <i class="bi bi-person-fill fs-1 text-info"></i>
                </div>
                <h5 class="fw-bold mb-1">Angel Emilio Martínez Camacho</h5>
                <span class="badge bg-info rounded-pill mb-3">Developer</span>
                <p class="small text-muted mb-0">Experto en hacer bolis.</p>
              </div>
            </div>
          </div>

          <!-- Botón de regreso -->
          <div class="text-center mt-5 pt-4">
            <a href="/index.html" class="btn btn-dark btn-lg rounded-pill px-5 shadow-lg">
              <i class="bi bi-arrow-left-circle-fill me-2"></i>Volver a la Aplicación
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="bg-white border-top py-5">
  <div class="container text-center">
    <p class="text-muted mb-0">© 2026 <span class="fw-bold text-primary italic">JSONHub</span>. Proyecto Final de JavaScript.</p>
  </div>
</footer>
`;