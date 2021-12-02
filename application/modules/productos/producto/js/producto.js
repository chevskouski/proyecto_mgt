$(document).ready(function(){
    //---------------------------------- Tipo de Producto -------------------
    //------------- Agregar Tipo de Producto --------------------------------
    $('#aceptar_tipo').click(function(){
        var descripcion = $('#descripcion_tipo').val();
        var tab = 'opr_tipo_producto';
        var id_tab = 'id_tipo_producto';
        
        if(descripcion != ''){
            $.post(base_url+'productos/producto/agregar_producto/',{
                descripcion: descripcion,
                tab: tab,
                id_tab: id_tab
            }, function(data){
                resultado=JSON.parse(data);
				if (resultado.status=='ok') {
                        alert(resultado.message);
                        $('#descripcion_tipo').val('');
                    }else{
                        alert(resultado.message);
                    }
            });
        }else{
            alert('Debe ingresar una descripción');
        }
    });
    //------------- Acualizar - Rellenar Tipo de Producto -------------------    
    $('#a_id_tipo').change(function(){
        if($('#a_id_tipo').val()!==''){
            var id_tipo = $('#a_id_tipo').val();
            var crear_estado_tipo = '';
            
            $.post(base_url+'productos/producto/consultar_producto/'+id_tipo+'/opr_tipo_producto/id_tipo_producto',
                function(data){
                    resultado=JSON.parse(data);
                        if(resultado.status=='ok'){
                            if(resultado.message != 'No se afectaron registros'){
                                $('#a_descripcion_tipo').val(resultado.datos[0].descripcion);
                                if(resultado.datos[0].estado_registro == 'A'){
                                    crear_estado_tipo += "<option value='A' selected>activo</option>";
                                    crear_estado_tipo += "<option value='B'>baja</option>";
                                }else if(resultado.datos[0].estado_registro == 'B'){
                                    crear_estado_tipo += "<option value='A'>activo</option>";
                                    crear_estado_tipo += "<option value='B' selected>baja</option>";
                                }
                                $("#a_estado_tipo option").remove();
                                $("#a_estado_tipo").append(crear_estado_tipo);
                            }else{
                                alert('Registro no encontrado.');
                                $('#a_descripcion_tipo').val('');
                                $('#a_estado_tipo').val('');
                                $("#a_estado_tipo option").remove();
                            }
                        }else{
                            alert(resultado.message);
                        }
                })
        }
    });
    //------------- Acualizar Tipo de Producto ------------------------------
    $('#actualizar_tipo').click(function(){

        var descripcion = $('#a_descripcion_tipo').val();
        var tab = 'opr_tipo_producto';
        var id_tab = 'id_tipo_producto';
        var id_tipo = $('#a_id_tipo').val();
        var estado_registro = $('#a_estado_tipo').val();
        
        if(descripcion != ''){
            $.post(base_url+'productos/producto/actualizar_producto/',{
                descripcion: descripcion,
                tab: tab,
                id_tab: id_tab,
                id_tipo: id_tipo,
                estado_registro: estado_registro
            }, function(data){
                resultado=JSON.parse(data);
                    if(resultado.status=='ok'){
                        alert(resultado.message);
                        $('#a_descripcion_tipo').val('');
                        $('#a_estado_tipo').val('');
                        $('#a_id_tipo').val('');
                    }else{
                        alert(resultado.message);
                    }
            });
        }else{
            alert('Debe ingresar una descripción');
        }
    });
    //------------- Eliminar - Rellenar Tipo de Producto --------------------
    $('#e_id_tipo').change(function(){

        if($('#e_id_tipo').val()!==''){
            var id_tipo = $('#e_id_tipo').val();
            var crear_estado_tipo = '';
            
            $.post(base_url+'productos/producto/consultar_producto/'+id_tipo+'/opr_tipo_producto/id_tipo_producto',
                function(data){
                    resultado=JSON.parse(data);
                        if(resultado.status=='ok'){
                            if(resultado.message != 'No se afectaron registros'){
                                $('#e_descripcion_tipo').val(resultado.datos[0].descripcion);
                                if(resultado.datos[0].estado_registro == 'A'){
                                    crear_estado_tipo += "<option value='A' selected>activo</option>";
                                    crear_estado_tipo += "<option value='B'>baja</option>";
                                }else if(resultado.datos[0].estado_registro == 'B'){
                                    crear_estado_tipo += "<option value='A'>activo</option>";
                                    crear_estado_tipo += "<option value='B' selected>baja</option>";
                                }
                                $("#e_estado_tipo option").remove();
                                $("#e_estado_tipo").append(crear_estado_tipo);
                            }else{
                                alert('Registro no encontrado.');
                                $('#e_descripcion_tipo').val('');
                                $('#e_estado_tipo').val('');
                                $("#e_estado_tipo option").remove();
                            }
                        }else{
                            alert(resultado.message);
                        }
                })
        }
    });
    //------------- Eliminar Registro - Tipo de Producto --------------------
    $('#eliminar_tipo').click(function(){

        var id_modelo = $('#e_id_tipo').val();
        if(id_modelo==''){
            alert('es necesario un ID');
        }else{
			$.post(base_url+'productos/producto/eliminar_registro_producto/'+id_modelo+"/opr_tipo_producto/id_tipo_producto",
			function(data) {
				resultado=JSON.parse(data);
				if (resultado.status=='ok') {
					alert(resultado.message);
                    $('#e_descripcion_tipo').val('');
                    $('#e_estado_tipo').val('');
                    $("#e_estado_tipo option").remove();
				} else {
					alert(resultado.message);
				}
			})
        }
    });
    //-----------------------------------------------------------------------
    //---------------------------------- Marca de Producto ------------------
    //------------- Agregar Marca de Producto -------------------------------
    $('#aceptar_marca').click(function(){
        var descripcion = $('#descripcion_marca').val();
        var tab = 'opr_marca';
        var id_tab = 'id_marca';
        
        if(descripcion != ''){
            $.post(base_url+'productos/producto/agregar_producto/',{
                descripcion: descripcion,
                tab: tab,
                id_tab: id_tab
            }, function(data){
                resultado=JSON.parse(data);
				if (resultado.status=='ok') {
                        alert(resultado.message);
                        $('#descripcion_marca').val('');
                    }else{
                        alert(resultado.message);
                    }
            });
        }else{
            alert('Debe ingresar una descripción');
        }
    });
    //------------- Acualizar - Rellenar Marca de Producto ------------------ 
    $('#a_id_marca').change(function(){

        if($('#a_id_marca').val()!==''){
            var id_tipo = $('#a_id_marca').val();
            var crear_estado_marca = '';
            
            $.post(base_url+'productos/producto/consultar_producto/'+id_tipo+'/opr_marca/id_marca',
                function(data){
                    resultado=JSON.parse(data);
                        if(resultado.status=='ok'){
                            if(resultado.message != 'No se afectaron registros'){
                                $('#a_descripcion_marca').val(resultado.datos[0].descripcion);
                                if(resultado.datos[0].estado_registro == 'A'){
                                    crear_estado_marca += "<option value='A' selected>activo</option>";
                                    crear_estado_marca += "<option value='B'>baja</option>";
                                }else if(resultado.datos[0].estado_registro == 'B'){
                                    crear_estado_marca += "<option value='A'>activo</option>";
                                    crear_estado_marca += "<option value='B' selected>baja</option>";
                                }
                                $("#a_estado_marca option").remove();
                                $("#a_estado_marca").append(crear_estado_marca);
                            }else{
                                alert('Registro no encontrado.');
                                $('#a_descripcion_marca').val('');
                                $('#a_estado_marca').val('');
                                $("#a_estado_marca option").remove();
                            }
                        }else{
                            alert(resultado.message);
                        }
                })
        }
    });
    //------------- Acualizar Marca de Producto -----------------------------
    $('#actualizar_marca').click(function(){

        var descripcion = $('#a_descripcion_marca').val();
        var tab = 'opr_marca';
        var id_tab = 'id_marca';
        var id_tipo = $('#a_id_marca').val();
        var estado_registro = $('#a_estado_marca').val();
        
        if(descripcion != ''){
            $.post(base_url+'productos/producto/actualizar_producto/',{
                descripcion: descripcion,
                tab: tab,
                id_tab: id_tab,
                id_tipo: id_tipo,
                estado_registro: estado_registro
            }, function(data){
                resultado=JSON.parse(data);
                    if(resultado.status=='ok'){
                        alert(resultado.message);
                        $('#a_descripcion_marca').val('');
                        $('#a_estado_marca').val('');
                        $('#a_id_marca').val('');
                    }else{
                        alert(resultado.message);
                    }
            });
        }else{
            alert('Debe ingresar una descripción');
        }
    });
    //------------- Eliminar - Rellenar Marca de Producto -------------------
    $('#e_id_marca').change(function(){

        if($('#e_id_marca').val()!==''){
            var id_tipo = $('#e_id_marca').val();
            var crear_estado_marca = '';
            
            $.post(base_url+'productos/producto/consultar_producto/'+id_tipo+'/opr_marca/id_marca',
                function(data){
                    resultado=JSON.parse(data);
                        if(resultado.status=='ok'){
                            if(resultado.message != 'No se afectaron registros'){
                                $('#e_descripcion_marca').val(resultado.datos[0].descripcion);
                                if(resultado.datos[0].estado_registro == 'A'){
                                    crear_estado_marca += "<option value='A' selected>activo</option>";
                                    crear_estado_marca += "<option value='B'>baja</option>";
                                }else if(resultado.datos[0].estado_registro == 'B'){
                                    crear_estado_marca += "<option value='A'>activo</option>";
                                    crear_estado_marca += "<option value='B' selected>baja</option>";
                                }
                                $("#e_estado_marca option").remove();
                                $("#e_estado_marca").append(crear_estado_marca);
                            }else{
                                alert('Registro no encontrado.');
                                $('#e_descripcion_marca').val('');
                                $('#e_estado_marca').val('');
                                $("#e_estado_marca option").remove();
                            }
                        }else{
                            alert(resultado.message);
                        }
                })
        }
    });
    //------------- Eliminar Registro - Marca de Producto -------------------
    $('#eliminar_marca').click(function(){

        var id_modelo = $('#e_id_marca').val();
        if(id_modelo==''){
            alert('es necesario un ID');
        }else{
			$.post(base_url+'productos/producto/eliminar_registro_producto/'+id_modelo+"/opr_marca/id_marca",
			function(data) {
				resultado=JSON.parse(data);
				if (resultado.status=='ok') {
					alert(resultado.message);
                    $('#e_id_marca').val('');
                    $('#e_descripcion_marca').val('');
                    $('#e_estado_marca').val('');
                    $("#e_estado_marca option").remove();
				} else {
					alert(resultado.message);
				}
			})
        }
    });
    //-----------------------------------------------------------------------
    //---------------------------------- Modelo de Producto -----------------
    //------------- Agregar Modelo de Producto ------------------------------
    $('#aceptar_modelo').click(function(){
        var descripcion = $('#descripcion_modelo').val();
        var tab = 'opr_modelo';
        var id_tab = 'id_modelo';
        
        if(descripcion != ''){
            $.post(base_url+'productos/producto/agregar_producto/',{
                descripcion: descripcion,
                tab: tab,
                id_tab: id_tab
            }, function(data){
                resultado=JSON.parse(data);
				if (resultado.status=='ok') {
                        alert(resultado.message);
                        $('#descripcion_modelo').val('');
                    }else{
                        alert(resultado.message);
                    }
            });
        }else{
            alert('Debe ingresar una descripción');
        }
    });
    //------------- Acualizar - Rellenar Modelo de Producto -----------------   
    $('#a_id_modelo').change(function(){
        if($('#a_id_modelo').val()!==''){
            var id_tipo = $('#a_id_modelo').val();
            var crear_estado_modelo = '';
            
            $.post(base_url+'productos/producto/consultar_producto/'+id_tipo+'/opr_modelo/id_modelo',
                function(data){
                    resultado=JSON.parse(data);
                        if(resultado.status=='ok'){
                            if(resultado.message != 'No se afectaron registros'){
                                $('#a_descripcion_modelo').val(resultado.datos[0].descripcion);
                                if(resultado.datos[0].estado_registro == 'A'){
                                    crear_estado_modelo += "<option value='A' selected>activo</option>";
                                    crear_estado_modelo += "<option value='B'>baja</option>";
                                }else if(resultado.datos[0].estado_registro == 'B'){
                                    crear_estado_modelo += "<option value='A'>activo</option>";
                                    crear_estado_modelo += "<option value='B' selected>baja</option>";
                                }
                                $("#a_estado_modelo option").remove();
                                $("#a_estado_modelo").append(crear_estado_modelo);
                            }else{
                                alert('Registro no encontrado.');
                                $('#a_descripcion_modelo').val('');
                                $('#a_estado_modelo').val('');
                                $("#a_estado_modelo option").remove();
                            }
                        }else{
                            alert(resultado.message);
                        }
                })
        }
    });
    //------------- Acualizar Modelo de Producto ----------------------------
    $('#actualizar_modelo').click(function(){

        var descripcion = $('#a_descripcion_modelo').val();
        var tab = 'opr_modelo';
        var id_tab = 'id_modelo';
        var id_tipo = $('#a_id_modelo').val();
        var estado_registro = $('#a_estado_modelo').val();
        
        if(descripcion != ''){
            $.post(base_url+'productos/producto/actualizar_producto/',{
                descripcion: descripcion,
                tab: tab,
                id_tab: id_tab,
                id_tipo: id_tipo,
                estado_registro: estado_registro
            }, function(data){
                resultado=JSON.parse(data);
                    if(resultado.status=='ok'){
                        alert(resultado.message);
                        $('#a_descripcion_modelo').val('');
                        $('#a_estado_modelo').val('');
                        $('#a_id_modelo').val('');
                    }else{
                        alert(resultado.message);
                    }
            });
        }else{
            alert('Debe ingresar una descripción');
        }
    });
    //------------- Eliminar - Rellenar Marca de Producto -------------------
    $('#e_id_modelo').change(function(){

        if($('#e_id_modelo').val()!==''){
            var id_tipo = $('#e_id_modelo').val();
            var crear_estado_modelo = '';
            
            $.post(base_url+'productos/producto/consultar_producto/'+id_tipo+'/opr_modelo/id_modelo',
                function(data){
                    resultado=JSON.parse(data);
                        if(resultado.status=='ok'){
                            if(resultado.message != 'No se afectaron registros'){
                                $('#e_descripcion_modelo').val(resultado.datos[0].descripcion);
                                if(resultado.datos[0].estado_registro == 'A'){
                                    crear_estado_modelo += "<option value='A' selected>activo</option>";
                                    crear_estado_modelo += "<option value='B'>baja</option>";
                                }else if(resultado.datos[0].estado_registro == 'B'){
                                    crear_estado_modelo += "<option value='A'>activo</option>";
                                    crear_estado_modelo += "<option value='B' selected>baja</option>";
                                }
                                $("#e_estado_modelo option").remove();
                                $("#e_estado_modelo").append(crear_estado_modelo);
                            }else{
                                alert('Registro no encontrado.');
                                $('#e_descripcion_modelo').val('');
                                $('#e_estado_modelo').val('');
                                $("#e_estado_modelo option").remove();
                            }
                        }else{
                            alert(resultado.message);
                        }
                })
        }
    });
    //------------- Eliminar Registro - Modelo de Producto ------------------
    $('#eliminar_modelo').click(function(){

        var id_modelo = $('#e_id_modelo').val();
        if(id_modelo==''){
            alert('es necesario un ID');
        }else{
			$.post(base_url+'productos/producto/eliminar_registro_producto/'+id_modelo+"/opr_modelo/id_modelo",
			function(data) {
				resultado=JSON.parse(data);
				if (resultado.status=='ok') {
					alert(resultado.message);
                    $('#e_id_modelo').val('');
                    $('#e_descripcion_modelo').val('');
                    $('#e_estado_modelo').val('');
                    $("#e_estado_modelo option").remove();
				} else {
					alert(resultado.message);
				}
			})
        }
    });
    //-----------------------------------------------------------------------
});