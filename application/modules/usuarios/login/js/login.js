$(document).ready(function(){
    $('#iniciar_sesion').click(function(){

        var usuario = $('#usuario').val();
        var clave = $('#clave_acceso').val();
        

        if(usuario=='' || clave==''){
            alert('Debe ingresar los datos para continuar')
        }else{
            $.post(base_url+'usuarios/usuario/autenticar/'+usuario+'/'+clave,
            function(data){
                autenticado=JSON.parse(data);
                    if(autenticado.status=='ok'){
                        if(autenticado.message != 'No se afectaron registros'){
                            alert('Ingreso Exitoso.');
                            window.location.href = base_url;
                        }else{
                            alert('Usuario y/o contraseña incorrecta.')
                        }
                    }else{
                        alert(autenticado.message);
                    }
            })
        }
    });
});