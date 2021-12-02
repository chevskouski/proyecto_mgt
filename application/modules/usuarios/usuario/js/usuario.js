$(document).ready(function(){
    //Agregar Usuario
    $('#aceptar').click(function(){

        var descripcion = $('#descripcion').val();
        var usuario = $('#usuario').val();
        var clave_acceso = $('#clave_acceso').val();
        

        if(usuario != '' && clave_acceso != ''){
            $.post(base_url+'usuarios/usuario/grabar_usuario/',{
                descripcion: descripcion,
                usuario: usuario,
                clave_acceso: clave_acceso
            }, function(data){
                resultado=JSON.parse(data);
                    if(resultado.status=='ok'){
                        alert(resultado.message);
                        $('#descripcion').val('');
                        $('#usuario').val('');
                        $('#clave_acceso').val('');
                    }else{
                        alert(resultado.message);
                    }
            });
            
        }else{
            alert('Debe ingresar un nombre de usuario y clave.');
        }
    });

    //Rellenar - Actualizar
    $('#id_usuario').change(function(){

        if($('#id_usuario').val()!==''){
            var id_usuario = $('#id_usuario').val();
            var crearEstado_usuario = '';
            
            $.post(base_url+'usuarios/usuario/consultar_usuario/'+id_usuario,
                function(data){
                    resultado=JSON.parse(data);
                        if(resultado.status=='ok'){
                            if(resultado.message != 'No se afectaron registros'){
                                $('#a_descripcion').val(resultado.datos[0].descripcion);
                                $('#a_usuario').val(resultado.datos[0].usuario);
                                $('#a_clave_acceso').val(resultado.datos[0].clave_acceso);
                                if(resultado.datos[0].estado_registro == 'A'){
                                    crearEstado_usuario += "<option value='A' selected>activo</option><option value='B'>baja</option>";
                                }else if(resultado.datos[0].estado_registro == 'B'){
                                    crearEstado_usuario += "<option value='A'>activo</option><option value='B' selected>baja</option>";
                                }
                                $("#a_estado_usuario option").remove();
                                $("#a_estado_usuario").append(crearEstado_usuario);
                            }else{
                                alert('Registro no encontrado.');
                                $('#a_descripcion').val('');
                                $('#a_usuario').val('');
                                $('#a_clave_acceso').val('');
                                $('#a_estado_usuario').val('');
                                $("#a_estado_usuario option").remove();
                            }
                        }else{
                            alert(resultado.message);
                        }
                })
        }
    });

    // Agregar - Actualizar
    $('#actualizar').click(function(){    
        var id_usuario = $('#id_usuario').val();
        var descripcion = $('#a_descripcion').val();
        var usuario = $('#a_usuario').val();
        var clave_acceso = $('#a_clave_acceso').val();
        var estado_registro = $('#a_estado_usuario').val();

        if(id_usuario != ''){
            $.post(base_url+'usuarios/usuario/actualizar_usuario',{
                descripcion: descripcion,
                usuario: usuario,
                clave_acceso: clave_acceso,
                estado_registro: estado_registro,
                id_usuario: id_usuario
            }, function(data){
                resultado=JSON.parse(data);
                    if(resultado.status=='ok'){
                        alert(resultado.message);
                        $('#id_usuario').val('');
                        $('#a_descripcion').val('');
                        $('#a_usuario').val('');
                        $('#a_clave_acceso').val('');
                        $('#a_estado_usuario').val('');
                        $("#a_estado_usuario option").remove();
                    }else{
                        alert(resultado.message);
                    }
            });
            
        }else{
            alert('Es necesario un ID.');
        }
    });

    //eliminar registro - rellenar
    $('#e_id_usuario').change(function(){

        if($('#e_id_usuario').val()!==''){
            var id_usuario = $('#e_id_usuario').val();
            
            $.post(base_url+'usuarios/usuario/consultar_usuario/'+id_usuario,
                function(data){
                    resultado=JSON.parse(data);
                        if(resultado.status=='ok'){
                            if(resultado.message != 'No se afectaron registros'){
                                $('#e_descripcion').val(resultado.datos[0].descripcion);
                                $('#e_usuario').val(resultado.datos[0].usuario);
                                $('#e_clave_acceso').val(resultado.datos[0].clave_acceso);
                            }else{
                                alert('Registro no encontrado.');
                                $('#e_descripcion').val('');
                                $('#e_usuario').val('');
                                $('#e_clave_acceso').val('');
                            }
                        }else{
                            alert(resultado.message);
                        }
                })
        }
    });

    //eliminar registro
    $('#eliminar_usuario').click(function(){

        var id_usuario = $('#e_id_usuario').val();

        if(id_usuario==''){
            alert('Debe ingresar los datos para continuar')
        }else{
            $.post(base_url+'usuarios/usuario/eliminar_usuario/'+id_usuario,
            function(data){
                resultado=JSON.parse(data);
                    if(resultado.status=='ok'){
                        alert(resultado.message);
                        $('#e_id_usuario').val('');
                        $('#e_descripcion').val('');
                        $('#e_usuario').val('');
                        $('#e_clave_acceso').val('');
                    }else{
                        alert(resultado.message);
                    }
            })
        }
    });

});