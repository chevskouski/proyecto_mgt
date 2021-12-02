<?php

class Request{
private $_modulo;
private $_controlador;
private $_metodo;
private $_parametros;
private $_modulos;

    function __construct(){
        if(isset($_GET['url'])){
            $ruta_sanitizada = filter_input(INPUT_GET,'url',FILTER_SANITIZE_URL);
            $ruta = explode('/',$ruta_sanitizada);
            $ruta = array_filter($ruta);
            $this->_modulos = scandir(APP_PATH.'modules');

            $this->_modulo = strtolower(array_shift($ruta));

            if(in_array($this->_modulo,$this->_modulos))
            {
                $this->_controlador = strtolower(array_shift($ruta));
                if(!$this->_controlador)
                {
                    $this->_controlador = DEFAULT_CONTROLLER;
                }
            }else{
                $this->_controlador=$this->_modulo;
                $this->_modulo=FALSE;
            }
            $this->_metodo=strtolower(array_shift($ruta));
            $this->_parametros=$ruta;
        }
        if(!$this->_controlador){
            $this->_controlador=DEFAULT_CONTROLLER;
        }
        if(!$this->_metodo){
            $this->_metodo='index';
        }
        if(!$this->_parametros){
            $this->_parametros=array();
        }
    }

    function obtener_modulo(){
        return $this->_modulo;
    }
    function obtener_controlador(){
        return $this->_controlador;
    }
    function obtener_metodo(){
        return $this->_metodo;
    }
    function obtener_parametros(){
        return $this->_parametros;
    }
}

?>