<?php
class View{
    private $request;
    private $rutas;
    public $template='admin';

    public function __construct(Request $peticion)
    {
        $this->request = $peticion;
        $modulo = $this->request->obtener_modulo();
        $controlador = $this->request->obtener_controlador();

        if($modulo){
            $this->rutas['view'] = APP_PATH.'modules'.DS.$modulo.DS.$controlador.DS;
            $this->rutas['js'] = BASE_URL.'application/modules/'.$modulo.'/'.$controlador.'/js';
            $this->rutas['css'] = BASE_URL.'application/modules/'.$modulo.'/'.$controlador.'/css';
        }else{
            $this->rutas['view'] = APP_PATH.$controlador.DS;
            $this->rutas['js'] = BASE_URL.'application/'.$controlador.'/js';
            $this->rutas['css'] = BASE_URL.'application/'.$controlador.'/css';
        }
        
    }
    public function rendering($vista){
        $ruta_vista = $this->rutas['view'].$vista.'View.phtml';
        if(is_readable($ruta_vista)){
            include_once ROOT.'layout'.DS.$this->template.DS.'template.php';
        }
    }

    
}


?>