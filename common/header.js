document.write(`
<header class="site-navbar site-navbar-target bg-white" role="banner">
  <div class="container">
    <div class="row align-items-center position-relative">
      <div class="col-lg-4">
        <nav class="site-navigation text-right ml-auto " role="navigation">
          <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
            <li class="active"><a href="index.html" class="nav-link">Home</a></li>
            <li><a href="work.html" class="nav-link">Work</a></li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-4 text-center">
        <div class="site-logo">
          <a href="index.html">Harbor</a>
        </div>
        <div class="ml-auto toggle-button d-inline-block d-lg-none"><a href="#"
            class="site-menu-toggle py-5 js-menu-toggle text-white"><span class="icon-menu h3 text-primary"></span></a>
        </div>
      </div>
      <div class="col-lg-4">
        <nav class="site-navigation text-left mr-auto " role="navigation">
          <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
            <li><a href="about.html" class="nav-link">About</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
`);