$(document).ready(function(){
    //---------------------------------- Producto General -------------------
    //------------- Rellenar - Agregar Producto General ---------------------
    $.ajax({
        url: base_url+"productos/producto/consultar_productos/opr_marca/id_marca"
        ,method:"POST"
        ,data: {}
        ,async: false
        ,success: function(data){
            resultado = JSON.parse(data);
            datos = resultado.datos;
            var crear_html = "";
            for(i=0;i<datos.length; i++){
                crear_html+="<option value='"+datos[i].id_marca+"'>"+datos[i].descripcion+"</option>";
            }
            
            $("#marca_producto_general option").remove();
            $("#marca_producto_general").append(crear_html);
            $("#marca_producto_general").val('');
            $('#publicar_producto_general').val('');
        }
        ,error: function(XMLHttpRequest, textStatus, errorThrown){
            alert(textStatus);
        }
    });
    $.ajax({
        url: base_url+"productos/producto/consultar_productos/opr_tipo_producto/id_tipo_producto"
        ,method:"POST"
        ,data: {}
        ,async: false
        ,success: function(data){
            resultado = JSON.parse(data);
            datos = resultado.datos;
            var crear_html = "";
            for(i=0;i<datos.length; i++){
                crear_html+="<option value='"+datos[i].id_tipo_producto+"'>"+datos[i].descripcion+"</option>";
            }
            
            $("#tipo_producto_general option").remove();
            $("#tipo_producto_general").append(crear_html);
            $("#tipo_producto_general").val('');
        }
        ,error: function(XMLHttpRequest, textStatus, errorThrown){
            alert(textStatus);
        }
    });
    $.ajax({
        url: base_url+"productos/producto/consultar_productos/opr_modelo/id_modelo"
        ,method:"POST"
        ,data: {}
        ,async: false
        ,success: function(data){
            resultado = JSON.parse(data);
            datos = resultado.datos;
            var crear_html = "";
            for(i=0;i<datos.length; i++){
                crear_html+="<option value='"+datos[i].id_modelo+"'>"+datos[i].descripcion+"</option>";
            }
            $("#modelo_producto_general option").remove();
            $("#modelo_producto_general").append(crear_html);
            $('#modelo_producto_general').val('');
        }
        ,error: function(XMLHttpRequest, textStatus, errorThrown){
            alert(textStatus);
        }
    });  
    //------------- Agregar Producto General --------------------------------
    $('#agregar_producto_general').click(function(){

        var descripcion = $('#descripcion_producto_general').val();
        var id_tipo_producto = $('#tipo_producto_general').val();
        var id_marca = $('#marca_producto_general').val();
        var id_modelo = $('#modelo_producto_general').val();
        var precio = $('#precio_producto_general').val();
        if ($('#imagen_producto').length) {
            var imagen = $('#imagen_producto').attr('name');
        }else{
            var imagen = 'arrival1.png';
        }
        var publicar = $('#publicar_producto_general').val();
        var concepto = $('#concepto_producto_general').val();
        
        var tab = 'opr_producto';
        var id_tab = 'id_producto';
        
        if(descripcion != '' && precio != '' && id_tipo_producto != '' && id_marca != '' && id_modelo != '' && publicar != ''){
            $.post(base_url+'productos/producto/agregar_producto_general/',{
                descripcion: descripcion,
                id_tipo_producto: id_tipo_producto,
                id_marca: id_marca,
                id_modelo: id_modelo,
                precio: precio,
                imagen: imagen,
                publicar: publicar,
                concepto: concepto,
                tab: tab,
                id_tab: id_tab
            }, function(data){
                resultado=JSON.parse(data);
				if (resultado.status=='ok') {
                        alert(resultado.message);
                        $('#descripcion_producto_general').val('');
                        $('#tipo_producto_general').val('');
                        $('#marca_producto_general').val('');
                        $('#modelo_producto_general').val('');
                        $('#precio_producto_general').val('');
                        $('#publicar_producto_general').val('');
                        $('#concepto_producto_general').val('');
                        $('#upload_image').val('');
                        $("#uploaded_image").empty();
                    }else{
                        alert(resultado.message);
                    }
            });
        }else{
            alert('Hay campos sin rellenar.');
        }
    });
    //------------- Rellenar - Actualizar Producto General -------------------
    $('#a_id_producto_general').change(function(){
        if($('#a_id_producto_general').val()!==''){
            $.ajax({
                url: base_url+"productos/producto/consultar_productos/opr_marca/id_marca"
                ,method:"POST"
                ,data: {}
                ,async: false
                ,success: function(data){
                    resultado = JSON.parse(data);
                    datos = resultado.datos;
                    var crear_html = "";
                    for(i=0;i<datos.length; i++){
                        crear_html+="<option value='"+datos[i].id_marca+"'>"+datos[i].descripcion+"</option>";
                    }
                    
                    $("#a_marca_producto_general option").remove();
                    $("#a_marca_producto_general").append(crear_html);
                }
                ,error: function(XMLHttpRequest, textStatus, errorThrown){
                    alert(textStatus);
                }
            });
            $.ajax({
                url: base_url+"productos/producto/consultar_productos/opr_tipo_producto/id_tipo_producto"
                ,method:"POST"
                ,data: {}
                ,async: false
                ,success: function(data){
                    resultado = JSON.parse(data);
                    datos = resultado.datos;
                    var crear_html = "";
                    for(i=0;i<datos.length; i++){
                        crear_html+="<option value='"+datos[i].id_tipo_producto+"'>"+datos[i].descripcion+"</option>";
                    }
                    
                    $("#a_tipo_producto_general option").remove();
                    $("#a_tipo_producto_general").append(crear_html);
                }
                ,error: function(XMLHttpRequest, textStatus, errorThrown){
                    alert(textStatus);
                }
            });
            $.ajax({
                url: base_url+"productos/producto/consultar_productos/opr_modelo/id_modelo"
                ,method:"POST"
                ,data: {}
                ,async: false
                ,success: function(data){
                    resultado = JSON.parse(data);
                    datos = resultado.datos;
                    var crear_html = "";
                    for(i=0;i<datos.length; i++){
                        crear_html+="<option value='"+datos[i].id_modelo+"'>"+datos[i].descripcion+"</option>";
                    }
                    $("#a_modelo_producto_general option").remove();
                    $("#a_modelo_producto_general").append(crear_html);
                }
                ,error: function(XMLHttpRequest, textStatus, errorThrown){
                    alert(textStatus);
                }
            });  

            var id_producto = $('#a_id_producto_general').val();
            
            $.post(base_url+'productos/producto/consultar_producto_general/'+id_producto+"/opr_producto/id_producto",
                function(data){
                    resultado=JSON.parse(data);
                        if(resultado.status=='ok'){
                            if(resultado.message != 'No se afectaron registros'){
                                $('#a_descripcion_producto_general').val(resultado.datos[0].descripcion);
                                $('#a_precio_producto_general').val(resultado.datos[0].precio);
                                $('#a_publicar_producto_general').val(resultado.datos[0].publicar);
                                $('#a_concepto_producto_general').val(resultado.datos[0].concepto);
                                $('#a_marca_producto_general').val(resultado.datos[0].id_marca);
                                $('#a_tipo_producto_general').val(resultado.datos[0].id_tipo_producto);
                                $('#a_modelo_producto_general').val(resultado.datos[0].id_modelo);

                                var crear_html = '<img src="';
                                crear_html += base_url;
                                crear_html += 'application/modules/productos/producto/img_producto/';
                                crear_html += resultado.datos[0].imagen;
                                crear_html += '" class="img-thumbnail" id="a_imagen_producto" name="';
                                crear_html += resultado.datos[0].imagen;
                                crear_html += '"/>'
                                $("#a_uploaded_image").empty();
                                $("#a_uploaded_image").append(crear_html);
                                
                                if(resultado.datos[0].estado_registro == 'A'){
                                    var crearEstado = "<option value='A' selected>activo</option>";
                                    crearEstado+="<option value='B'>baja</option>";
                                }else if(resultado.datos[0].estado_registro == 'B'){
                                    var crearEstado = "<option value='A'>activo</option>";
                                    crearEstado+="<option value='A'' selected>baja</option>";
                                }
                                $("#a_estado_producto_general option").remove();
                                $("#a_estado_producto_general").append(crearEstado);
                            }else{
                                $('#a_descripcion_producto_general').val('');
                                $('#a_tipo_producto_general').val('');
                                $('#a_marca_producto_general').val('');
                                $('#a_modelo_producto_general').val('');
                                $('#a_precio_producto_general').val('');
                                $('#a_publicar_producto_general').val('');
                                $('#a_concepto_producto_general').val('');
                                $('#a_estado_producto_general').val('');
                                $("#a_estado_producto_general option").remove();
                                $("#a_marca_producto_general option").remove();
                                $("#a_tipo_producto_general option").remove();
                                $("#a_modelo_producto_general option").remove();
                                $('#a_upload_image').val('');
                                $("#a_uploaded_image").empty();
                                alert('No se ha encontrado el Registro');
                            }
                        }else{
                            alert(resultado.message);
                        }
                })
        }
    });
    //------------- Actualizar Producto General -----------------------------
    $('#actualizar_producto_general').click(function(){
        var id_producto = $('#a_id_producto_general').val();
        var descripcion = $('#a_descripcion_producto_general').val();
        var id_tipo_producto = $('#a_tipo_producto_general').val();
        var id_marca = $('#a_marca_producto_general').val();
        var id_modelo = $('#a_modelo_producto_general').val();
        var precio = $('#a_precio_producto_general').val();
        if ($('#a_imagen_producto').length) {
            var imagen = $('#a_imagen_producto').attr('name');
        }else{
            var imagen = 'arrival1.png';
        }
        var publicar = $('#a_publicar_producto_general').val();
        var concepto = $('#a_concepto_producto_general').val();
        var estado_registro = $('#a_estado_producto_general').val();
        
        var tab = 'opr_producto';
        var id_tab = 'id_producto';
        
        if(descripcion != '' && precio != '' && id_tipo_producto != '' && id_marca != '' && id_modelo != '' && publicar != ''){
            $.post(base_url+'productos/producto/actualizar_producto_general/',{
                descripcion: descripcion,
                id_tipo_producto: id_tipo_producto,
                id_marca: id_marca,
                id_modelo: id_modelo,
                precio: precio,
                imagen: imagen,
                publicar: publicar,
                concepto: concepto,
                id_producto: id_producto,
                estado_registro: estado_registro,
                tab: tab,
                id_tab: id_tab
            }, function(data){
                resultado=JSON.parse(data);
				if (resultado.status=='ok') {
                        alert(resultado.message);
                        $('#a_descripcion_producto_general').val('');
                        $('#a_tipo_producto_general').val('');
                        $('#a_marca_producto_general').val('');
                        $('#a_modelo_producto_general').val('');
                        $('#a_precio_producto_general').val('');
                        $('#a_publicar_producto_general').val('');
                        $('#a_concepto_producto_general').val('');
                        $('#a_id_producto_general').val('');
                        $('#a_estado_producto_general').val('');
                        $('#a_upload_image').val('');
                        $("#a_uploaded_image").empty();
                    }else{
                        alert(resultado.message);
                    }
            });
        }else{
            alert('Hay campos sin rellenar.');
        }
    });
    //------------- Rellenar - Eliminar Registro Producto General ------------
    $('#e_id_producto_general').change(function(){
        if($('#e_id_producto_general').val()!==''){
            $.ajax({
                url: base_url+"productos/producto/consultar_productos/opr_marca/id_marca"
                ,method:"POST"
                ,data: {}
                ,async: false
                ,success: function(data){
                    resultado = JSON.parse(data);
                    datos = resultado.datos;
                    var crear_html = "";
                    for(i=0;i<datos.length; i++){
                        crear_html+="<option value='"+datos[i].id_marca+"'>"+datos[i].descripcion+"</option>";
                    }
                    
                    $("#e_marca_producto_general option").remove();
                    $("#e_marca_producto_general").append(crear_html);
                }
                ,error: function(XMLHttpRequest, textStatus, errorThrown){
                    alert(textStatus);
                }
            });
            $.ajax({
                url: base_url+"productos/producto/consultar_productos/opr_tipo_producto/id_tipo_producto"
                ,method:"POST"
                ,data: {}
                ,async: false
                ,success: function(data){
                    resultado = JSON.parse(data);
                    datos = resultado.datos;
                    var crear_html = "";
                    for(i=0;i<datos.length; i++){
                        crear_html+="<option value='"+datos[i].id_tipo_producto+"'>"+datos[i].descripcion+"</option>";
                    }
                    
                    $("#e_tipo_producto_general option").remove();
                    $("#e_tipo_producto_general").append(crear_html);
                }
                ,error: function(XMLHttpRequest, textStatus, errorThrown){
                    alert(textStatus);
                }
            });
            $.ajax({
                url: base_url+"productos/producto/consultar_productos/opr_modelo/id_modelo"
                ,method:"POST"
                ,data: {}
                ,async: false
                ,success: function(data){
                    resultado = JSON.parse(data);
                    datos = resultado.datos;
                    var crear_html = "";
                    for(i=0;i<datos.length; i++){
                        crear_html+="<option value='"+datos[i].id_modelo+"'>"+datos[i].descripcion+"</option>";
                    }
                    $("#e_modelo_producto_general option").remove();
                    $("#e_modelo_producto_general").append(crear_html);
                }
                ,error: function(XMLHttpRequest, textStatus, errorThrown){
                    alert(textStatus);
                }
            });  

            var id_producto = $('#e_id_producto_general').val();
            
            $.post(base_url+'productos/producto/consultar_producto_general/'+id_producto+"/opr_producto/id_producto",
                function(data){
                    resultado=JSON.parse(data);
                        if(resultado.status=='ok'){
                            if(resultado.message != 'No se afectaron registros'){
                                $('#e_descripcion_producto_general').val(resultado.datos[0].descripcion);
                                $('#e_precio_producto_general').val(resultado.datos[0].precio);
                                $('#e_publicar_producto_general').val(resultado.datos[0].publicar);
                                $('#e_concepto_producto_general').val(resultado.datos[0].concepto);
                                $('#e_marca_producto_general').val(resultado.datos[0].id_marca);
                                $('#e_tipo_producto_general').val(resultado.datos[0].id_tipo_producto);
                                $('#e_modelo_producto_general').val(resultado.datos[0].id_modelo);

                                var e_crear_html = '<img src="';
                                e_crear_html += base_url;
                                e_crear_html += 'application/modules/productos/producto/img_producto/';
                                e_crear_html += resultado.datos[0].imagen;
                                e_crear_html += '" class="img-thumbnail" id="a_imagen_producto" name="';
                                e_crear_html += resultado.datos[0].imagen;
                                e_crear_html += '"/>'
                                $("#e_uploaded_image").empty();
                                $("#e_uploaded_image").append(e_crear_html);
                                
                                if(resultado.datos[0].estado_registro == 'A'){
                                    var crearEstado_eliminar = "<option value='A' selected>activo</option>";
                                    crearEstado_eliminar+="<option value='B'>baja</option>";
                                }else if(resultado.datos[0].estado_registro == 'B'){
                                    var crearEstado_eliminar = "<option value='A'>activo</option>";
                                    crearEstado_eliminar+="<option value='A'' selected>baja</option>";
                                }
                                $("#e_estado_producto_general option").remove();
                                $("#e_estado_producto_general").append(crearEstado_eliminar);
                            }else{
                                $('#e_descripcion_producto_general').val('');
                                $('#e_tipo_producto_general').val('');
                                $('#e_marca_producto_general').val('');
                                $('#e_modelo_producto_general').val('');
                                $('#e_precio_producto_general').val('');
                                $('#e_publicar_producto_general').val('');
                                $('#e_concepto_producto_general').val('');
                                $('#e_estado_producto_general').val('');
                                $("#e_estado_producto_general option").remove();
                                $("#e_marca_producto_general option").remove();
                                $("#e_tipo_producto_general option").remove();
                                $("#e_modelo_producto_general option").remove();
                                $("#e_uploaded_image").empty();
                                alert('No se ha encontrado el Registro');
                            }
                        }else{
                            alert(resultado.message);
                        }
                })
        }
    });
    //------------- Eliminar Registro Producto General ----------------------
    $('#eliminar_producto_general').click(function(){

        var id_producto = $('#e_id_producto_general').val();
        if(id_producto==''){
            alert('es necesario un ID');
        }else{
			$.post(base_url+'productos/producto/eliminar_registro_producto/'+id_producto+"/opr_producto/id_producto",
			function(data) {
				resultado=JSON.parse(data);
				if (resultado.status=='ok') {
					alert(resultado.message);
                    $('#e_descripcion_producto_general').val('');
                    $('#e_tipo_producto_general').val('');
                    $('#e_marca_producto_general').val('');
                    $('#e_modelo_producto_general').val('');
                    $('#e_precio_producto_general').val('');
                    $('#e_publicar_producto_general').val('');
                    $('#e_concepto_producto_general').val('');
                    $('#e_estado_producto_general').val('');
                    $("#e_estado_producto_general option").remove();
                    $("#e_marca_producto_general option").remove();
                    $("#e_tipo_producto_general option").remove();
                    $("#e_modelo_producto_general option").remove();
                    $("#e_uploaded_image").empty();
				} else {
					alert(resultado.message);
				}
			})
        }
    });
    //-----------------------------------------------------------------------
});