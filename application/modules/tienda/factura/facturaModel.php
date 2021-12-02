<?php
class facturaModel extends Model{
    function __construct(){
        parent::__construct();
        $this->tabla='opr_carrito';
        $this->id_tabla='id_producto';
    }

    function generar_sql($parametros){
		if($parametros['operacion']=='consultar_productos_carrito'){
            $sql = "select ";
			$sql.=$this->id_tabla;
			$sql.=",descripcion,id_tipo_producto,id_marca,id_modelo,precio,imagen,concepto from ";
            $sql.=$this->tabla;
        }

        if ($parametros['operacion']=='add')
		{
			$i=0;
			$sql  = "insert into $this->tabla (";
			foreach ($parametros['datos'] as $clave => $valor)
			{
				if ($i==0)
				{
					$sql .= "$clave";
				}
				else
				{
					$sql .= ",$clave";
				}
				$i=1;
			}
			$sql .= ") values (";
			$i=0;
			foreach ($parametros['datos'] as $clave => $valor)
			{
				if ($i==0)
				{
					$sql .= ":$clave";
				}
				else
				{
					$sql .= ",:$clave";
				}
				$i=1;
			}
			$sql .= ")";
		}					
		
		if ($parametros['operacion']=='edit')
		{
			$i=0;
			$sql  = "update $this->tabla set ";
			foreach ($parametros['datos'] as $clave => $valor)
			{
				if ($i==0)
				{
					$sql .= "$clave=:$clave";
				}
				else
				{
					$sql .= ",$clave=:$clave";
				}
				$i=1;
			}
			if (isset($parametros['condicion']))
			{
				$condicion=$parametros['condicion'];
				$sql .= " where $condicion";
			}
			else
			{
				$sql .= " where $this->id_tabla = :";
				$sql.= $this->id_tabla;
			}
		}	

		if ($parametros['operacion']=='delreg')
		{
			$sql  = "delete from $this->tabla ";
			if (isset($parametros['condicion']))
			{
				$condicion=$parametros['condicion'];
				$sql .= " where $condicion";
			}
			else
			{
				$sql .= " where $this->id_tabla = :";
				$sql.= $this->id_tabla;
			}
		}

        
        return $sql; 
    }
    
}
?>