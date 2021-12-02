<?php
class Model{
    protected $registry;
    protected $cnMySql;
    public $modelo;
    public $tabla;
    public $id_tabla;

    function __construct()
    {
        $this->registry = Registry::obtener_instancia();
        $this->cnMySql = $this->registry->conexion;
    }

    function generar_sql($parametros){
    }

    function ejecutar_sql($parametros){
        $sql=$this->generar_sql($parametros);
		$objsql = $this->cnMySql->prepare($sql);
        
		if (isset($parametros['prepare'])){
            foreach($parametros['datos'] as $clave => $valor){
                if(is_int($valor))
                    $param = PDO::PARAM_INT;
                elseif(is_bool($valor))
                    $param = PDO::PARAM_BOOL;
                elseif(is_null($valor))
                    $param = PDO::PARAM_NULL;
                elseif(is_string($valor))
                    $param = PDO::PARAM_STR;
                else
                    $param = PDO::PARAM_STR;
                if($param){
                    $objsql->bindValue(":$clave",$valor,$param);
                }
            }
        }


        $respuesta = $objsql->execute();
        $errores = $objsql->errorInfo();
        $total_registros=$objsql->rowCount();

        if($errores['0']=='00000'){
            $resultado['status']='ok';
            if($total_registros>0){
                $resultado['message']='Se afectaron '.$total_registros.' registros';
                $resultado['rows']=$total_registros;
                $resultado['datos']=$objsql->fetchAll(PDO::FETCH_ASSOC);
            }else{
                $resultado['message']='No se afectaron registros';
                $resultado['rows']=0;
                $resultado['datos']=[];
            }
            
        }else{
            $resultado['status']='error';
            $resultado['message']=$errores['2'];
            $resultado['rows']=0;
            $resultado['datos']='';
            
        }
        return $resultado;

    }
}

?>