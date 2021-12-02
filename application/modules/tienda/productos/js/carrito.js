$(document).ready(function(){
    $.ajax({
        url: base_url+"productos/producto/consultar_productos_carrito/opr_carrito/id_producto"
        ,method:"POST"
        ,data: {}
        ,async: false
        ,success: function(data){
            resultado_carrito = JSON.parse(data);
            datos = resultado_carrito.datos;

            var crear_html_carrito = "";

            for(i=0;i<datos.length; i++){
                crear_html_carrito += '<div class="col-lg-2 mb-5 mb-lg-0"></div><div class="col-lg-8 mb-5 mb-lg-0"><div class="blog_left_sidebar"><article class="blog_item"><div class="blog_details"><div class="row"><div class="col-lg-11"><h2 class="blog-head" style="color: #2d2d2d;">';
                crear_html_carrito += datos[i].descripcion;
                crear_html_carrito += '</h2></div><div class="col-lg-1">';
                crear_html_carrito += '</div></div><div class="row"><div class="col-lg-3"><img class="img-fluid" src="';
                crear_html_carrito += base_url+'application/modules/productos/producto/img_producto/';
                crear_html_carrito += datos[i].imagen;
                crear_html_carrito += '" alt=""></div><div class="col-lg-9"><hr><p>'
                crear_html_carrito += datos[i].concepto;
                crear_html_carrito += '</p><hr>';
                crear_html_carrito += '<span>Precio: $';
                crear_html_carrito += datos[i].precio+'</span>'
                crear_html_carrito += '</div></div></div></article></div></div><div class="col-lg-2 mb-5 mb-lg-0"></div>'
            }
            $("#carrito_productos").append(crear_html_carrito);
        }
        ,error: function(XMLHttpRequest, textStatus, errorThrown){
            alert(textStatus);
        }
    });
    //------------- Agregar al Carrito --------------------------------------
    $('.btn_agregar_carrito').click(function(event) {
        var id = event.target.getAttribute("id");
        var descripcion = $('#descripcion'+id).val();
        var id_tipo_producto = $('#tipo'+id).val();
        var id_marca = $('#marca'+id).val();
        var id_modelo = $('#modelo'+id).val();
        var precio = $('#precio'+id).val();
        var imagen = $('#imagen'+id).val();
        var concepto = $('#concepto'+id).val();
        var tab = 'opr_carrito';
        var id_tab = 'id_producto';

        $.post(base_url+'productos/producto/agregar_producto_carrito/',{
            descripcion: descripcion,
            id_tipo_producto: id_tipo_producto,
            id_marca: id_marca,
            id_modelo: id_modelo,
            precio: precio,
            imagen: imagen,
            concepto: concepto,
            tab: tab,
            id_tab: id_tab
        }, function(data){
            resultado=JSON.parse(data);
            if (resultado.status=='ok') {
                    alert('Producto: '+descripcion+'. \nAgregado Correctamente.');
                }else{
                    alert(resultado.message);
                }
        });
    });
    //-----------------------------------------------------------------------
});