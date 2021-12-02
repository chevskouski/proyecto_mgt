<?php
class Registry{
    private static $instancia;
    private $data;
    private function __construct(){}

    public static function obtener_instancia(){
        if(!self::$instancia instanceof self){
            self::$instancia = new Registry();
        }
        return self::$instancia;
    }

    public function __set($nombre, $valor)
    {
        $this->data[$nombre]=$valor;
        //var_dump($this->data[$nombre]);
    }

    public function __get($nombre)
    {
        if(isset($this->data[$nombre])){

            return $this->data[$nombre];
        }
        return FALSE;
    }
}
?>