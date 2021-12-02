$(document).ready(function(){
  //------------- Croppie -------------------------------------------------
    $a_image_crop = $('#a_image_demo').croppie({
      enableExif: true,
      viewport: {
        width:200,
        height:200,
        type:'square' //circle
      },
      boundary:{
        width:300,
        height:300
      }
    });

    $image_crop = $('#image_demo').croppie({
      enableExif: true,
      viewport: {
        width:200,
        height:200,
        type:'square' //circle
      },
      boundary:{
        width:300,
        height:300
      }
    });
  
    $('#upload_image').on('change', function(){
      var reader = new FileReader();
      reader.onload = function (event) {
        $image_crop.croppie('bind', {
          url: event.target.result
        }).then(function(){
          console.log('jQuery bind complete');
        });
      }
      reader.readAsDataURL(this.files[0]);
      $('#uploadimageModal').modal('show');
    });
    
    $('.crop_image').click(function(event){
      event.preventDefault();
        $image_crop.croppie('result',{
        type: 'canvas',
        size: 'viewport'
        }).then(function(response){
            $.ajax({
                url:base_url+"productos/producto/croppie_img",
                type: "POST",
                data:{"image": response},
                success:function(data){
            $('#uploadimageModal').modal('hide');
            var crear_html = '<img src="';
            crear_html += base_url;
            crear_html += 'application/modules/productos/producto/img_producto/';
            crear_html += data;
            crear_html += '" class="img-thumbnail" id="imagen_producto" name="';
            crear_html += data;
            crear_html += '"/>'
            $("#uploaded_image").empty();
            $("#uploaded_image").append(crear_html);
                }
            });
        });
    });
    //--------------------------Actualizar---------------------------------------
    $('#a_upload_image').on('change', function(){
      var reader = new FileReader();
      reader.onload = function (event) {
        $a_image_crop.croppie('bind', {
          url: event.target.result
        }).then(function(){
          console.log('jQuery bind complete');
        });
      }
      reader.readAsDataURL(this.files[0]);
      $('#a_uploadimageModal').modal('show');
    });
    
    $('.a_crop_image').click(function(event){
      event.preventDefault();
        $a_image_crop.croppie('result',{
        type: 'canvas',
        size: 'viewport'
        }).then(function(response){
            $.ajax({
                url:base_url+"productos/producto/croppie_img",
                type: "POST",
                data:{"image": response},
                success:function(data){
            $('#a_uploadimageModal').modal('hide');
            var crear_html = '<img src="';
            crear_html += base_url;
            crear_html += 'application/modules/productos/producto/img_producto/';
            crear_html += data;
            crear_html += '" class="img-thumbnail" id="a_imagen_producto" name="';
            crear_html += data;
            crear_html += '"/>'
            $("#a_uploaded_image").empty();
            $("#a_uploaded_image").append(crear_html);
                }
            });
        });
    });

}); 