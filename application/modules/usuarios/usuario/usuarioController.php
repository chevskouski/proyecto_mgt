<?php
class usuarioController extends Controller{
    public function __construct(){
        parent::__construct();
        $this->modelo=$this->loadModel('usuario','usuarios');

    }

    public function index(){
        
    }

    public function autenticar($usuario,$clave){
        $params=array('operacion'=>'autenticar','usuario'=>$usuario,'clave'=>$clave);
        $resultado =$this->modelo->ejecutar_sql($params);
        if($resultado['status']=='ok' && $resultado['datos']){
            Sesion::set('autenticado',TRUE);
        }
        echo json_encode($resultado);
    }

    public function mantenimiento_usuario(){
        $this->view->rendering('usuario');
    }

    public function consultar_usuarios_general(){
        $this->view->rendering('consultar_usuarios');
    }


    //Mantenimientos
    public function grabar_usuario(){
        if(isset($_POST['descripcion']) && isset($_POST['usuario']) && isset($_POST['clave_acceso'])){
            $descripcion = $_POST['descripcion'];
            $usuario = $_POST['usuario'];
            $clave_acceso = $_POST['clave_acceso'];

            $params=array('operacion'=>'add','prepare'=>TRUE, 'datos'=>array('descripcion'=>$descripcion,'usuario'=>$usuario,'clave_acceso'=>$clave_acceso));
            $resultado =$this->modelo->ejecutar_sql($params);
            echo json_encode($resultado);
        }
    }

    public function eliminar_usuario($id_usuario){
        $params=array('operacion'=>'delreg','prepare'=>TRUE, 'datos'=>array('id_usuario'=>$id_usuario));
        $resultado =$this->modelo->ejecutar_sql($params);
        echo json_encode($resultado);
    }

    public function actualizar_usuario(){
        if(isset($_POST['descripcion']) && isset($_POST['usuario']) && isset($_POST['clave_acceso']) && isset($_POST['estado_registro']) && isset($_POST['id_usuario'])){
            $descripcion = $_POST['descripcion'];
            $usuario = $_POST['usuario'];
            $clave_acceso = $_POST['clave_acceso'];
            $estado_registro = $_POST['estado_registro'];
            $id_usuario = $_POST['id_usuario'];

            $params=array('operacion'=>'edit','prepare'=>TRUE, 'datos'=>array('id_usuario'=>$id_usuario,'descripcion'=>$descripcion,'usuario'=>$usuario,'clave_acceso'=>$clave_acceso, 'estado_registro'=>$estado_registro));
            $resultado =$this->modelo->ejecutar_sql($params);
            echo json_encode($resultado);
        }
    }

    //Consultas
    public function consultar_usuario($id_usuario){
        $params=array('operacion'=>'consultar_usuario','prepare'=>TRUE, 'datos'=>array('id_usuario'=>$id_usuario));
        $resultado =$this->modelo->ejecutar_sql($params);
        echo json_encode($resultado);
    }

    public function consultar_usuarios(){
        $params=array('operacion'=>'consultar_usuarios');
        $resultado =$this->modelo->ejecutar_sql($params);
        echo json_encode($resultado);
    }
}
?>