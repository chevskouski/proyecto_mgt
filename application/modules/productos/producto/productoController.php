<?php
class productoController extends Controller{
    public function __construct(){
        parent::__construct();
        $this->modelo=$this->loadModel('producto','productos');
        $this->view->template = 'admin';
    }

    public function index(){
        
    }

    public function mantenimiento_productos(){
        $this->view->rendering('producto');
    }

    public function consulta_producto_view(){
        $this->view->rendering('consulta_productos');
    }

    //Funciones para Marca, Modelo y Tipo de Producto
    public function agregar_producto(){
        if(isset($_POST['descripcion']) && isset($_POST['tab']) && isset($_POST['id_tab'])){
            $descripcion = $_POST['descripcion'];
            $this->modelo->id_tabla = $_POST['id_tab'];
            $this->modelo->tabla = $_POST['tab'];

            $params=array('operacion'=>'add','prepare'=>TRUE, 'datos'=>array('descripcion'=>$descripcion));
            $resultado =$this->modelo->ejecutar_sql($params);
			echo json_encode($resultado);          
        } 
    }

    public function croppie_img(){
        if(isset($_POST["image"]))
        {
            $data = $_POST["image"];
            
            $image_array_1 = explode(";", $data);
            
            $image_array_2 = explode(",", $image_array_1[1]);
            
            $data = base64_decode($image_array_2[1]);
            $imageName = time() . '.png';
            file_put_contents('application/modules/productos/producto/img_producto/'.$imageName, $data);

            echo $imageName;

        }
    }

    public function actualizar_producto(){
        if(isset($_POST['descripcion']) && isset($_POST['tab']) && isset($_POST['id_tab']) && isset($_POST['id_tipo']) && isset($_POST['estado_registro'])){
            $descripcion = $_POST['descripcion'];
            $this->modelo->id_tabla = $_POST['id_tab'];
            $this->modelo->tabla = $_POST['tab'];
            $id_consulta = $_POST['id_tipo'];
            $estado_registro = $_POST['estado_registro'];
            
            $params=array('operacion'=>'edit','prepare'=>TRUE, 'datos'=>array($this->modelo->id_tabla=>$id_consulta,'descripcion'=>$descripcion, 'estado_registro'=>$estado_registro));
            $resultado =$this->modelo->ejecutar_sql($params);
			echo json_encode($resultado);          
        }
    }

    public function eliminar_registro_producto($id_consulta,$tab,$id){
        $this->modelo->id_tabla = $id;
		$this->modelo->tabla = $tab;
        $params=array('operacion'=>'delreg','prepare'=>TRUE, 'datos'=>array($id=>$id_consulta));
        $resultado =$this->modelo->ejecutar_sql($params);
        echo json_encode($resultado);
    }

    public function consultar_producto($id_consulta,$tab,$id){
        $this->modelo->id_tabla = $id;
		$this->modelo->tabla = $tab;
        $params=array('operacion'=>'consultar_producto','prepare'=>TRUE, 'datos'=>array($id=>$id_consulta));
        $resultado =$this->modelo->ejecutar_sql($params);
        echo json_encode($resultado);
    }

    //------------------------------------------------------------------------------------
    //Funciones para Producto General
    public function consultar_producto_general($id_consulta,$tab,$id){
        $this->modelo->id_tabla = $id;
		$this->modelo->tabla = $tab;
        $params=array('operacion'=>'consultar_producto_general','prepare'=>TRUE, 'datos'=>array($id=>$id_consulta));
        $resultado =$this->modelo->ejecutar_sql($params);
        echo json_encode($resultado);
    }

    public function consultar_productos($tab,$id){
        $this->modelo->id_tabla = $id;
        $this->modelo->tabla = $tab;
        $params=array('operacion'=>'consultar_productos');
        $resultado =$this->modelo->ejecutar_sql($params);
        echo json_encode($resultado);
    }
    
    public function agregar_producto_general(){
        if(isset($_POST['descripcion']) && isset($_POST['id_tipo_producto']) && isset($_POST['id_marca']) && isset($_POST['id_modelo']) && isset($_POST['precio']) && isset($_POST['imagen']) && isset($_POST['publicar']) && isset($_POST['concepto']) && isset($_POST['tab']) && isset($_POST['id_tab'])){
            $descripcion = $_POST['descripcion'];
            $id_tipo_producto = $_POST['id_tipo_producto'];
            $id_marca = $_POST['id_marca'];
            $id_modelo = $_POST['id_modelo'];
            $precio = $_POST['precio'];
            $imagen = $_POST['imagen'];
            $publicar = $_POST['publicar'];
            $concepto = $_POST['concepto'];
            $this->modelo->id_tabla = $_POST['id_tab'];
            $this->modelo->tabla = $_POST['tab'];

            $params=array('operacion'=>'add','prepare'=>TRUE, 'datos'=>array('descripcion'=>$descripcion,'id_tipo_producto'=>$id_tipo_producto,'id_marca'=>$id_marca,'id_modelo'=>$id_modelo,'precio'=>$precio,'imagen'=>$imagen,'publicar'=>$publicar,'concepto'=>$concepto));
            $resultado =$this->modelo->ejecutar_sql($params);
            echo json_encode($resultado);
        }
    }

    public function actualizar_producto_general(){
        if(isset($_POST['descripcion']) && isset($_POST['id_tipo_producto']) && isset($_POST['id_marca']) && isset($_POST['id_modelo']) && isset($_POST['precio']) && isset($_POST['imagen']) && isset($_POST['publicar']) && isset($_POST['concepto']) && isset($_POST['id_producto']) && isset($_POST['estado_registro']) && isset($_POST['tab']) && isset($_POST['id_tab'])){
            $estado_registro = $_POST['estado_registro'];
            $id_producto = $_POST['id_producto'];
            $descripcion = $_POST['descripcion'];
            $id_tipo_producto = $_POST['id_tipo_producto'];
            $id_marca = $_POST['id_marca'];
            $id_modelo = $_POST['id_modelo'];
            $precio = $_POST['precio'];
            $imagen = $_POST['imagen'];
            $publicar = $_POST['publicar'];
            $concepto = $_POST['concepto'];
            $this->modelo->id_tabla = $_POST['id_tab'];
            $this->modelo->tabla = $_POST['tab'];

            $params=array('operacion'=>'edit','prepare'=>TRUE, 'datos'=>array($this->modelo->id_tabla=>$id_producto,'descripcion'=>$descripcion,'id_tipo_producto'=>$id_tipo_producto,'id_marca'=>$id_marca,'id_modelo'=>$id_modelo,'precio'=>$precio,'imagen'=>$imagen,'publicar'=>$publicar,'concepto'=>$concepto,'estado_registro'=>$estado_registro));
            $resultado =$this->modelo->ejecutar_sql($params);
            echo json_encode($resultado);
        }
    }

    //Funciones Carrito
    public function agregar_producto_carrito(){
        if(isset($_POST['descripcion']) && isset($_POST['id_tipo_producto']) && isset($_POST['id_marca']) && isset($_POST['id_modelo']) && isset($_POST['precio']) && isset($_POST['imagen']) && isset($_POST['concepto']) && isset($_POST['tab']) && isset($_POST['id_tab'])){
            $descripcion = $_POST['descripcion'];
            $id_tipo_producto = $_POST['id_tipo_producto'];
            $id_marca = $_POST['id_marca'];
            $id_modelo = $_POST['id_modelo'];
            $precio = $_POST['precio'];
            $imagen = $_POST['imagen'];
            $concepto = $_POST['concepto'];
            $this->modelo->id_tabla = $_POST['id_tab'];
            $this->modelo->tabla = $_POST['tab'];

            $params=array('operacion'=>'add','prepare'=>TRUE, 'datos'=>array('descripcion'=>$descripcion,'id_tipo_producto'=>$id_tipo_producto,'id_marca'=>$id_marca,'id_modelo'=>$id_modelo,'precio'=>$precio,'imagen'=>$imagen,'concepto'=>$concepto));
            $resultado =$this->modelo->ejecutar_sql($params);
			echo json_encode($resultado);          
        } 
    }

    public function consultar_productos_general($tab,$id){
        $this->modelo->id_tabla = $id;
        $this->modelo->tabla = $tab;
        $params=array('operacion'=>'consultar_productos_general');
        $resultado =$this->modelo->ejecutar_sql($params);
        echo json_encode($resultado);
    }

    public function consultar_productos_carrito($tab,$id){
        $this->modelo->id_tabla = $id;
        $this->modelo->tabla = $tab;
        $params=array('operacion'=>'consultar_productos_carrito');
        $resultado =$this->modelo->ejecutar_sql($params);
        echo json_encode($resultado);
    }

    public function vaciar_carrito(){
        $params=array('operacion'=>'vaciar_carrito');
        $resultado =$this->modelo->ejecutar_sql($params);
        header("Location: ".BASE_URL.'tienda/productos/carrito');
    }
    
}
?>