$(document).ready(function(){
    $('#enviar_correo_tienda').click(function(){

        var asunto = $('#asunto').val();
        var nombre = $('#nombre').val();
        var correo = $('#correo').val();
        var comentario = $('#comentario').val();

        if(correo != '' && nombre != '' && comentario != ''){
            $.post(base_url+'tienda/contacto/enviar_correo/',{
                nombre: nombre,
                asunto: asunto,
                correo: correo,
                comentario: comentario
            }, function(resultado){
				if (resultado=='Mensaje enviado con éxito.') {
                        alert(resultado);
                    }else{
                        alert('Error');
                    }
            });
            
        }else{
            alert('Debe ingresar un correo y nombre.');
        }
    });
});