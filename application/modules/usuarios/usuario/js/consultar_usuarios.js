$(document).ready(function(){
    $("#consultar").click(function(){
        $.ajax({
            url: base_url+"usuarios/usuario/consultar_usuarios"
            ,method:"POST"
            ,data: {}
            ,async: false
            ,success: function(data){
                resultado = JSON.parse(data);
                datos = resultado.datos;
                var html = "<tbody>"
                for(i=0;i<datos.length; i++){
                    html+="<tr>";
                    html+="<td>"+datos[i].id_usuario+"</td>";
                    html+="<td>"+datos[i].descripcion+"</td>";
                    html+="<td>"+datos[i].usuario+"</td>";
                    html+="<td>"+datos[i].clave_acceso+"</td>";
                    html+="<td>"+datos[i].estado_registro+"</td>";
                    html+="</tr>";
                }
                html+="</tbody>";
                $("#reporte tbody").remove();
                $("#reporte").append(html);

                $("#reporte").dataTable({
                    dom: 'Bfrtip',
                    buttons: [
                        'copy', 'excel', 'pdf', 'print', 'csv'
                    ]
                });
            }
            ,error: function(XMLHttpRequest, textStatus, errorThrown){
                alert(textStatus);
            }
        });
    });    
});