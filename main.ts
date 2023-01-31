import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
app.use(async (ctx) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}`,
      index: "index.html",
    });
  } catch {
    ctx.response.status = 404;
    ctx.response.body = "<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>
<meta charset="utf-8">
<meta http-equiv="Refresh" content="8;url=/">
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<title>Página no encontrada</title>
<meta name="title" content="Web Stevie Wonder Hispana, STEVIE WONDER spanish web"/>
<meta name="Subject" content="Página no encontrada">
<meta name="description" content="Página en castellano sobre Stevie Wonder, su Biografia, Discografia, Musica, Videos y mucho más..."> 
<meta name="abstract" content="Pagina en castellano sobre Stevie Wonder, Stevie Wonder, la magia de Stevie Wonder"/>
<meta name="keywords" content="Musica Stevie Wonder, Fingertips, Inspired by Lula, Magia musical, Discografia Stevie Wonder, Genio Stevie, Biografia Stevie Wonder, historia musica negra, Master Wonder, little Stevie Wonder, The 12 year old genius live, Arturo Sandoval, White House, Gershwin Prize, Make It Easy on Yourself, Burt Bacharach, Hal david, Genio Stevie">
<meta name="robots" content="index,follow"/>
<meta http-equiv="content-Language" content="es">
<meta name="Revisit" content="15 days"/>
<meta name="Distribution" content="General"/>
<meta http-equiv="Pragma" content="cache"/>
<meta name="Author" content="Izugarria"/>
<!-- Mobile viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes"/>
<link rel="shortcut icon" href="//cdn.steviewonder.es/images/favicon.ico" type="image/x-icon"/>

<!-- CSS-->



<link rel="stylesheet" href="css/basic-styleb.css">

<!-- end CSS-->



</head>

<body id="home">




  
<!-- header area -->
    <header class="wrapper clearfix">


<center><img src="/images/Stevie.titulo.gif" alt="Stevie Wonder"  /></center>

        <div id="banner">        
        	<div id="logo"></div> 
        </div>
        
        <!-- main navigation -->
        <nav id="topnav" role="navigation">
          <div class="menu-toggle" >Menu</div>  
          <ul class="srt-menu"  style="border-radius:8px; padding:3px; border:groove #EEBBBD" id="menu-main-navigation">
              <li class="current"><a href="index.html">Inicio</a></li>
              <li><a href="/Biografia.html">Biografía</a></li>
              <li><a href="/discografia.html">Discografía</a></li>
              <li><a href="/videos.html">Videos</a></li>
              <li><a href="/Canciones.html">Letras</a></li> 
              <li><a href="/grammys.html">Grammys</a></li>  
          </ul>    
		</nav><!-- end main navigation -->
  
    </header><!-- end header -->
 
 
<!-- hero area (the grey one with a slider -->
    <section id="hero" class="clearfix">    
    <!-- responsive FlexSlider image slideshow -->
    
    
    <div class="wrapper" style="background-color: #07010F; padding:10px; border-radius:18px; border:groove #3A4657">  
    
<h1><center>Página no encontrada</center></h1>  
<h1><center>no found</center></h1>  
<div class="row" style="background-color: rgba(51, 51, 51, 0.7); padding:10px 10px 30px 10px; border-radius:18px; border:groove #3A4657"> 


<div class="row">
<div class="grid_12" style="padding-bottom:30px;">
  <center><a href="/"><img src="/images/Error404.jpg" alt="Error"  /></a><br>go to home</center>
 <center><img src="/images/Error.gif" alt="Error"  /></center>
</div>


</div>


    
</div>

</div>
<!-- end wrapper -->

   

       

       
    </section><!-- end hero area -->






    
<!-- content area -->    
	<section id="content" class="wide-content">
    
    
<div id="colophon" class="wrapper clearfix" style="text-align: center ; ">
    	<a href="/index.html" >Inicio</a>  |  <a href="/Biografia.html" >Biografía</a>  |  <a href="/discografia.html" >Discografía</a>  |  <a href="/videos.html" >Videos</a>  |  <a href="/Canciones.html">Letras</a>  |  <a href="/grammys.html">Grammys</a>  |  <a href="/topten.html">Top ten</a>
    

<div id="copyright" class="wrapper clearfix" style="color:#fff; font-size:11px; line-height:1.4em; text-align: center">steviewonder.es ® is a registered trademark. All content © 2008-2023 by izugarria.<br> 
Todos los contenidos del portal incluyendo, imágenes, vídeo, nombres, marcas y logos, son propiedad de sus respectivos dueños.</div>



</div>
	</section><!-- end content area -->   
      

<!-- footer area -->    
<footer>  
<!-- Statcounter code for Stevie Wonder
https://www.steviewonder.es on Google Sites (new) -->
<script type="text/javascript">
var sc_project=11601168; 
var sc_invisible=1; 
var sc_security="2d6605f1"; 
</script>
<script type="text/javascript"
src="https://www.statcounter.com/counter/counter.js"
async></script>
<noscript><div class="statcounter"><a title="Web Analytics"
href="https://statcounter.com/" target="_blank"><img
class="statcounter"
src="https://c.statcounter.com/11601168/0/2d6605f1/1/"
alt="Web Analytics"></a></div></noscript>
<!-- End of Statcounter Code -->	

</footer><!-- #end footer area --> 


<!-- Begin Cookie Consent plugin --> <script type="text/javascript"> window.cookieconsent_options = {"theme":"dark-bottom"}; </script> <script type="text/javascript" src="//www.steviewonder.es/libs/cookieconsent.min.js"></script> <!-- End Cookie Consent plugin -->
<link href="https://fonts.googleapis.com/css?family=Droid+Serif|Ubuntu&display=swap" rel="stylesheet" type="text/css">
</body>
</html>";
  }
});

await app.listen({ port: 8000 });