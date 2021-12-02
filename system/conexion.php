<?php
class Conexion extends PDO{
    function __construct($host,$dbname,$usuario,$clave,$codificacion)
    {
        parent::__construct(
            'mysql:host='.$host.';dbname='.$dbname,
            $usuario,
            $clave,
            array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES '.$codificacion)
            );
    }
}
?>