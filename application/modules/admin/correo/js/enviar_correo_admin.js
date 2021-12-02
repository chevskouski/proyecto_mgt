$(document).ready(function(){
    $('#enviar_correo_admin').click(function(){

        var asunto = $('#asunto').val();
        var correo = $('#correo').val();
        var comentario = $('#comentario').val();

        if(correo != '' && comentario != ''){
            $.post(base_url+'admin/correo/enviar_correo/',{
                correo: correo,
                asunto: asunto,
                comentario: comentario
            }, function(resultado){
				if (resultado=='correcto') {
						alert('Mensaje enviado con éxito.');
                    }else{
                        alert('Error');
                    }
            });
            
        }else{
            alert('Debe ingresar un correo y comentario.');
        }
    });
});