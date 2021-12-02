<?php

class Dispatch{
    public static function run(Request $peticion){
        try{
            $modulo = $peticion->obtener_modulo();
            $controlador = $peticion->obtener_controlador().'Controller';
            $metodo = $peticion->obtener_metodo();
            $parametros = $peticion->obtener_parametros();
            $ruta_controlador = $peticion->obtener_controlador();

            if($modulo){
                $rutaPrograma = APP_PATH.'modules'.DS.$modulo.DS.$ruta_controlador.DS.$controlador.'.php';
            }else{
                $rutaPrograma = APP_PATH.$ruta_controlador.DS.$controlador.'.php';
            }

            if(is_readable($rutaPrograma)){
                require_once $rutaPrograma;
                
                $objeto = new $controlador;

                if(!is_callable(array($objeto,$metodo))){
                    $metodo='index';
                }

                if(isset($parametros)&& count($parametros)>0){
                    call_user_func_array(array($objeto,$metodo),$parametros);
                }else{
                    call_user_func(array($objeto,$metodo));
                }

            }

            //echo $rutaPrograma;
        } catch(Exception $e){
            echo $e->getMessage();
        }
    }
}

?>