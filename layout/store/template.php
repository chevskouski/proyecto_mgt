<!doctype html>
<html class="no-js" lang="zxx">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>MyGameTime</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="manifest" href="site.webmanifest">
    <link rel="shortcut icon" type="image/x-icon" href="<?php echo BASE_URL; ?>layout/store/assets/img/favicon.ico">

    <!-- CSS here -->
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/owl.carousel.min.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/slicknav.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/flaticon.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/progressbar_barfiller.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/gijgo.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/animate.min.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/animated-headline.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/magnific-popup.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/themify-icons.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/slick.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/nice-select.css">
    <link rel="stylesheet" href="<?php echo BASE_URL; ?>layout/store/assets/css/style.css">
    
</head>
<body class="full-wrapper">
    <!-- ? Preloader Start -->
    <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <img src="layout/store/assets/img/logo/loder.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- Preloader Start-->
    

    <header>
    
        <!-- Header Start -->
        <div class="header-area ">
            <div class="main-header header-sticky">
                <div class="container-fluid">
                    <div class="menu-wrapper d-flex align-items-center justify-content-between">
                        <div class="header-left d-flex align-items-center">
                            <!-- Logo -->
                            <div class="logo">
                                <a href="<?php echo BASE_URL;?>"><img src="<?php echo BASE_URL; ?>layout/store/assets/img/logo/logo.png" alt=""></a>
                            </div>
                            <!-- Main-menu -->
                            <div class="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><a href="<?php echo BASE_URL; ?>">Inicio</a></li> 
                                        <li><a href="<?php echo BASE_URL; ?>tienda/productos/vistaproductos">Tienda</a></li>
                                        <li><a href="<?php echo BASE_URL; ?>tienda/contacto/vistacontacto">Contacto</a></li>
                                    </ul>
                                </nav>
                            </div>   
                        </div>
                        <div class="header-right1 d-flex align-items-center">
                            
                            <!-- carrito + Ingresar -->
                            <div class="search d-none d-md-block">
                                <ul class="d-flex align-items-center">
                                    <li class="mr-15">
                                    <div class="card-stor">
                                            <a href="<?php echo BASE_URL; ?>tienda/productos/carrito"><img src="<?php echo BASE_URL;?>layout/store/assets/img/gallery/card.svg" alt=""></a>
                                        </div>
                                        
                                    </li>
                                    <li>
                                        <div class="card-stor">
                                            <a href="<?php echo BASE_URL;?>usuarios/login/ingresar">Ingresar</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Mobile Menu -->
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header End -->
    </header>
    <!-- header end -->
    <main>
        <!--? Hero Area Start-->
        <div class="container-fluid">
            <div class="slider-area">
                <!-- Mobile Device Show Menu-->
                <div class="header-right2 d-flex align-items-center">
                    
                    <!-- Search Box -->
                    <div class="search d-block d-md-none" >
                        <ul class="d-flex align-items-center">
                            <li class="mr-15">
                                <div class="nav-search search-switch">
                                    <i class="ti-search"></i>
                                </div>
                            </li>
                            <li>
                                <div class="card-stor">
                                    <a href="about.html">Ingresar</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /End mobile  Menu-->
                
                
            </div>
        </div>
        <?php 
            $mod = $this->request->obtener_modulo();
        ?>
        <!-- End Hero -->
        <!--? Popular Items Start -->
        <?php if($mod != 'tienda'){?>  
        <?php include_once $ruta_vista; ?>
        <div class="popular-items pt-50">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img class="d-block w-100" src="<?php echo BASE_URL; ?>layout/store/assets/img/gallery/popular1.jpg" alt="First slide">
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="<?php echo BASE_URL; ?>layout/store/assets/img/gallery/popular2.png" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="<?php echo BASE_URL; ?>layout/store/assets/img/gallery/popular3.png" alt="Third slide">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- Popular Items End -->
<!--? New Arrival Start -->
<div class="new-arrival">
    <div class="container">
        <!-- Section tittle -->
        <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-10">
                <div class="section-tittle mb-60 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                    
                    <FONT SIZE=5><b>Recomendaciones</b></font>
                </div>
            </div>
        </div>
        <div class="row" id="productos_recomendaciones">
            
        </div>
<!-- Button -->
<div class="row justify-content-center">
    <div class="room-btn">
        <a href="<?php echo BASE_URL; ?>tienda/productos/vistaproductos" class="border-btn">Ir a la Tienda</a>
    </div>
</div>
</div>
</div>
<!--? New Arrival End -->
<?php }else { 
        include_once $ruta_vista;
    }?>

</main>
<footer>
    <!-- Footer Start-->
    <div class="footer-area footer-padding">
        <div class="container-fluid ">
            <div class="row d-flex justify-content-between">
                <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8">
                 <div class="single-footer-caption mb-50">
                   <div class="single-footer-caption mb-30">
                      <!-- logo -->
                      <div class="footer-logo mb-35">
                       <a href="index.html"><img src="layout/store/assets/img/logo/logo2_footer.png" alt=""></a>
                   </div>
                   <div class="footer-tittle">
                       <div class="footer-pera">
                           <p>MyGameTime es una plataforma de distribución digital de videojuegos y puntos digitales para Pc, Xbox, Playstation y Nintendo.</p>
                       </div>
                   </div>
                   
            </div>
        </div>
    </div>
    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
        <div class="single-footer-caption mb-50">
            <div class="footer-tittle">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="<?php echo BASE_URL; ?>">Inicio</a></li>
                    <li><a href="<?php echo BASE_URL; ?>tienda/productos/vistaproductos">Tienda</a></li>
                    <li><a href="#">Carrito</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
        <div class="single-footer-caption mb-50">
            <div class="footer-tittle">
                <h4>Tienda</h4>
                <ul>
                    <li><a href="#">Xbox</a></li>
                    <li><a href="#">Playstation</a></li>
                    <li><a href="#">Nintendo</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
        <div class="single-footer-caption mb-50">
            <div class="footer-tittle">
                <h4>Contacto</h4>
                <ul>
                    <li><a href="<?php echo BASE_URL; ?>tienda/contacto/vistacontacto">Contactenos</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4">
        <div class="single-footer-caption mb-50">
            <div class="footer-tittle">
                <h4>Parciales</h4>
                <ul>
                    <li><a href="#">1er. Parcial</a></li>
                    <li><a href="#">2do. Parcial</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>

</div>
<!-- footer-bottom area -->
<div class="footer-bottom-area">
    <div class="container">
        <div class="footer-border">
           <div class="row d-flex align-items-center">
               <div class="col-xl-12 ">
                   <div class="footer-copy-right text-center">
                       <p>Copyright © 2021 MyGameTime. All rights reserved.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- Footer End-->
</footer>
<!--? Search model Begin -->
<div class="search-model-box">
    <div class="h-100 d-flex align-items-center justify-content-center">
        <div class="search-close-btn">+</div>
        <form class="search-model-form">
            <input type="text" id="search-input" placeholder="Searching key.....">
        </form>
    </div>
</div>
<!-- Search model end -->
<!-- Scroll Up -->
<div id="back-top" >
    <a title="Go to Top" href="#"> <i class="fas fa-level-up-alt"></i></a>
</div>



<!-- JS here -->
<script>
    var base_url = "<?php echo BASE_URL;?>";
</script>

<!-- Jquery, Popper, Bootstrap -->
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/vendor/modernizr-3.5.0.min.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/vendor/jquery-1.12.4.min.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/popper.min.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/bootstrap.min.js"></script>

<!-- Slick-slider , Owl-Carousel ,slick-nav -->
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/owl.carousel.min.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/slick.min.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/jquery.slicknav.min.js"></script>

<!-- One Page, Animated-HeadLin, Date Picker -->
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/wow.min.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/animated.headline.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/jquery.magnific-popup.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/gijgo.min.js"></script>

<!-- Nice-select, sticky,Progress -->
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/jquery.nice-select.min.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/jquery.sticky.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/jquery.barfiller.js"></script>

<!-- counter , waypoint,Hover Direction -->
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/jquery.counterup.min.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/waypoints.min.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/jquery.countdown.min.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/hover-direction-snake.min.js"></script>


<!-- Jquery Plugins, main Jquery -->	
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/plugins.js"></script>
<script src="<?php echo BASE_URL; ?>layout/store/assets/js/main.js"></script>

<script src="<?php echo BASE_URL; ?>application/modules/tienda/productos/js/generar_card_producto.js"></script>
<script src="<?php echo BASE_URL; ?>application/modules/tienda/productos/js/card_carrito.js"></script>
<script src="<?php echo BASE_URL; ?>application/modules/tienda/productos/js/carrito.js"></script>
<script src="<?php echo BASE_URL; ?>application/modules/tienda/productos/js/detalles.js"></script>
<script src="<?php echo BASE_URL; ?>application/modules/productos/producto/js/producto.js"> </script>
<script src="<?php echo BASE_URL; ?>application/modules/tienda/contacto/js/enviar_correo_tienda.js"></script>







</body>
</html>