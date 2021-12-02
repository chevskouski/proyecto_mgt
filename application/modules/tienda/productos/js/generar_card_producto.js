$(document).ready(function(){
    $.ajax({
        url: base_url+"productos/producto/consultar_productos_general/opr_producto/id_producto"
        ,method:"POST"
        ,data: {}
        ,async: false
        ,success: function(data){
            resultado_producto = JSON.parse(data);
            datos = resultado_producto.datos;

            var crear_html_producto = "";


            for(i=0;i<datos.length; i++){

                if(datos[i].publicar == 'S'){
                    //Guardando datos en input-hidden
                    crear_html_producto += '<input type="hidden" id="descripcion'+datos[i].id_producto;
                    crear_html_producto += '" value="';
                    crear_html_producto += datos[i].descripcion;
                    crear_html_producto += '"><input type="hidden" id="tipo'+datos[i].id_producto;
                    crear_html_producto += '" value="';
                    crear_html_producto += datos[i].id_tipo_producto;
                    crear_html_producto += '"><input type="hidden" id="marca'+datos[i].id_producto;
                    crear_html_producto += '" value="';
                    crear_html_producto += datos[i].id_marca;
                    crear_html_producto += '"><input type="hidden" id="modelo'+datos[i].id_producto;
                    crear_html_producto += '" value="';
                    crear_html_producto += datos[i].id_modelo;
                    crear_html_producto += '"><input type="hidden" id="precio'+datos[i].id_producto;
                    crear_html_producto += '" value="';
                    crear_html_producto += datos[i].precio;
                    crear_html_producto += '"><input type="hidden" id="imagen'+datos[i].id_producto;
                    crear_html_producto += '" value="';
                    crear_html_producto += datos[i].imagen;
                    crear_html_producto += '"><input type="hidden" id="concepto'+datos[i].id_producto;
                    crear_html_producto += '" value="';
                    crear_html_producto += datos[i].concepto;
                    crear_html_producto +=  '">';
                    //Crear card
                    crear_html_producto += '<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6"><div class="single-new-arrival mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s"><div class="popular-img"><img src="';
                    crear_html_producto += base_url+'application/modules/productos/producto/img_producto/';
                    crear_html_producto += datos[i].imagen;
                    crear_html_producto += '">';
                    crear_html_producto += '<div class="favorit-items"><input type="image" class="btn_agregar_carrito" id="'
                    crear_html_producto += datos[i].id_producto;
                    crear_html_producto += '" src="'
                    crear_html_producto += base_url;
                    crear_html_producto += 'layout/store/assets/img/gallery/favorit-card.png">';
                    crear_html_producto += '</div></div>';
                    crear_html_producto += '<div class="popular-caption"><h3><a class="btn_detalles_producto" id="';
                    crear_html_producto += datos[i].id_producto;
                    crear_html_producto += '" href="';
                    crear_html_producto += '#';//base_url+'tienda/productos/detalles';
                    crear_html_producto += '">';
                    crear_html_producto += datos[i].descripcion;
                    crear_html_producto += '</a></h3>';
                    crear_html_producto += '<span>$ '
                    crear_html_producto += datos[i].precio;
                    crear_html_producto += '</span></div></div></div>'
                }
            }
            
            $("#productos_tienda").append(crear_html_producto);
        }
        ,error: function(XMLHttpRequest, textStatus, errorThrown){
            alert(textStatus);
        }
    });
    //-----------------------------------------------------------------
    $.ajax({
        url: base_url+"productos/producto/consultar_productos_general/opr_producto/id_producto"
        ,method:"POST"
        ,data: {}
        ,async: false
        ,success: function(data){
            resultado_recomendacion = JSON.parse(data);
            datos = resultado_recomendacion.datos;

            if(datos.length>4){
                if(datos.length>4 && datos.length<8){
                    var limite = 7;
                }else{
                    var limite = 8;
                }
                var crear_html_recomendaciones = "";

                for(i=0;i<limite; i++){
                    if(datos[i].publicar == 'S'){
                         //Guardando datos en input-hidden
                        crear_html_recomendaciones += '<input type="hidden" id="descripcion'+datos[i].id_producto;
                        crear_html_recomendaciones += '" value="';
                        crear_html_recomendaciones += datos[i].descripcion;
                        crear_html_recomendaciones += '"><input type="hidden" id="tipo'+datos[i].id_producto;
                        crear_html_recomendaciones += '" value="';
                        crear_html_recomendaciones += datos[i].id_tipo_producto;
                        crear_html_recomendaciones += '"><input type="hidden" id="marca'+datos[i].id_producto;
                        crear_html_recomendaciones += '" value="';
                        crear_html_recomendaciones += datos[i].id_marca;
                        crear_html_recomendaciones += '"><input type="hidden" id="modelo'+datos[i].id_producto;
                        crear_html_recomendaciones += '" value="';
                        crear_html_recomendaciones += datos[i].id_modelo;
                        crear_html_recomendaciones += '"><input type="hidden" id="precio'+datos[i].id_producto;
                        crear_html_recomendaciones += '" value="';
                        crear_html_recomendaciones += datos[i].precio;
                        crear_html_recomendaciones += '"><input type="hidden" id="imagen'+datos[i].id_producto;
                        crear_html_recomendaciones += '" value="';
                        crear_html_recomendaciones += datos[i].imagen;
                        crear_html_recomendaciones += '"><input type="hidden" id="concepto'+datos[i].id_producto;
                        crear_html_recomendaciones += '" value="';
                        crear_html_recomendaciones += datos[i].concepto;
                        crear_html_recomendaciones +=  '">';
                        //Generar Card
                        crear_html_recomendaciones += '<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6"> <div class="single-new-arrival mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s"><div class="popular-img"><img src="';
                        crear_html_recomendaciones += base_url+'application/modules/productos/producto/img_producto/';
                        crear_html_recomendaciones += datos[i].imagen;
                        crear_html_recomendaciones += '" alt=""><div class="favorit-items"><input type="image" class="btn_agregar_carrito" id="'
                        crear_html_recomendaciones += datos[i].id_producto;
                        crear_html_recomendaciones += '" src="'
                        crear_html_recomendaciones += base_url;
                        crear_html_recomendaciones += 'layout/store/assets/img/gallery/favorit-card.png">';
                        crear_html_recomendaciones += '</div></div>';
                        crear_html_recomendaciones += '<div class="popular-caption"><span>';
                        crear_html_recomendaciones += datos[i].descripcion;
                        crear_html_recomendaciones += '</span>';
                        crear_html_recomendaciones += '<span>$ '
                        crear_html_recomendaciones += datos[i].precio;
                        crear_html_recomendaciones += '</span></div></div></div>'
                    }
                }

                $("#productos_recomendaciones").append(crear_html_recomendaciones);
            }
        }
        ,error: function(XMLHttpRequest, textStatus, errorThrown){
            alert(textStatus);
        }
    });
});