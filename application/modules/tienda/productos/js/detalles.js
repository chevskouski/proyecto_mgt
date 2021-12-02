$(document).ready(function(){
    var id;
    var descripcion;
    var id_tipo_producto;
    var id_marca;
    var id_modelo;
    var precio;
    var imagen;
    var concepto;
    
    $('.btn_detalles_producto').click(function(event) {
        id = event.target.getAttribute("id");
        descripcion = $('#descripcion'+id).val();
        id_tipo_producto = $('#tipo'+id).val();
        id_marca = $('#marca'+id).val();
        id_modelo = $('#modelo'+id).val();
        precio = $('#precio'+id).val();
        imagen = $('#imagen'+id).val();
        concepto = $('#concepto'+id).val();
        
        var crear_detalles_producto = "";
        crear_detalles_producto += '<div class="modal-header"><h2 class="modal-title" id="exampleModalLabel">';
        crear_detalles_producto += descripcion;
        crear_detalles_producto += '</h2><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
        crear_detalles_producto += '<div class="modal-body"><div class="row"><div class="col-xl-1 col-lg-1 col-md-1 "></div><div class="col-xl-4 col-lg-4 col-md-4 "><img src="';
        crear_detalles_producto += base_url+'application/modules/productos/producto/img_producto/';
        crear_detalles_producto += imagen;
        crear_detalles_producto += '" width="100%"></div><div class="col-xl-6 col-lg-6 col-md-6 ">';
        crear_detalles_producto += '<br><h3>Precio: $ ';
        crear_detalles_producto += precio;
        crear_detalles_producto += '</h3>'
        crear_detalles_producto += '<hr><p align="justify">'
        crear_detalles_producto += concepto;
        crear_detalles_producto += '</p></div><div class="col-xl-1 col-lg-1 col-md-1 "></div></div></div>'

        $("#contenido_modal").empty();
        $("#contenido_modal").append(crear_detalles_producto);
        $('#detalles_modal').modal('show');
    });

    $('#detalles_agregar_boton').click(function(){
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

});
