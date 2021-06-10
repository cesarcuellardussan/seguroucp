<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seguros UCP</title>
    <!--CDN Bootstrap 4 y Jquery-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>        
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>  
    <!---CDN DATEPICKER GIJGO-->
    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <script src="https://unpkg.com/gijgo@1.9.13/js/messages/messages.es-es.js" type="text/javascript"></script>
    <!--Font Awesome ICONOS-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">    
</head>
<body class="container">    
    <header class="mt-3" >
        <h1 class="display-4">Seguros UCPpp</h1>
        
    </header>
    <nav>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs mt-4">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#RegistrarNuevoCliente">Registrar Nuevo Cliente</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#ConsultarClienteRegistrado">Consultar Cliente Registrado</a>
            </li>
        </ul>
    </nav>

    <section class="tab-content">
        <!-- Tab panes -->        
        <div class="tab-pane active" id="RegistrarNuevoCliente"><?php require("./vistas/RegistrarNuevoCliente.html");?></div>
        <div class="tab-pane fade" id="ConsultarClienteRegistrado">...</div>        
    </section>
</body>
</html>