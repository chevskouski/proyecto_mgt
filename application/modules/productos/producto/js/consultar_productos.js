$(document).ready(function(){
    $('#consultar_productos').click(function(){
        $.ajax({
            url: base_url+"productos/producto/consultar_productos_general/opr_producto/id_producto"
            ,method:"POST"
            ,data: {}
            ,async: false
            ,success: function(data){
                resultado_consultar_productos = JSON.parse(data);
                datos = resultado_consultar_productos.datos;
                    var html = "<tbody>"
                    for(i=0;i<datos.length; i++){
                        html+="<tr>";
                        html+="<td>"+datos[i].id_producto+"</td>";
                        html+="<td>"+datos[i].descripcion+"</td>";
                        html+="<td>"+datos[i].id_tipo_producto+"</td>";
                        html+="<td>"+datos[i].id_marca+"</td>";
                        html+="<td>"+datos[i].id_modelo+"</td>";
                        html+="<td>"+datos[i].precio+"</td>";
                        html+="<td>"+datos[i].imagen+"</td>";
                        html+="<td>"+datos[i].publicar+"</td>";
                        html+="<td>"+datos[i].concepto+"</td>";
                        html+="<td>"+datos[i].estado_registro+"</td>";
                        html+="</tr>";
                    }
                    html+="</tbody>";
                    $("#reporte_productos tbody").remove();
                    $("#reporte_productos").append(html);
    
                    $("#reporte_productos").dataTable({
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