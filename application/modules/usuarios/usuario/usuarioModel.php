<?php
class usuarioModel extends Model{
    function __construct(){
        parent::__construct();
        $this->tabla='sys_usuario';
        $this->id_tabla='id_usuario';
    }

    function generar_sql($parametros){
        if($parametros['operacion']=='autenticar'){
            $sql = "select id_usuario,descripcion from ";
            $sql.=$this->tabla;
            $sql.= " where usuario= '";
            $sql.=$parametros['usuario'];
            $sql.= "' and clave_acceso= '";
            $sql .=$parametros['clave'];
            $sql.= "'";
        }

		if($parametros['operacion']=='consultar_usuario'){
            $sql = "select id_usuario,descripcion,usuario,clave_acceso,estado_registro from ";
            $sql.=$this->tabla;
            $sql.= " where $this->id_tabla = :id_usuario";
        }

		if($parametros['operacion']=='consultar_usuarios'){
            $sql = "select id_usuario,descripcion,usuario,clave_acceso,estado_registro from ";
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
				$sql .= " where $this->id_tabla = :id_usuario";
			}
		}	
		
		if ($parametros['operacion']=='del')
		{
			$sql  = "update $this->tabla set ";
			$sql .= " estado_registro='B'";
			if (isset($parametros['condicion']))
			{
				$condicion=$parametros['condicion'];
				$sql .= " where $condicion";
			}
			else
			{
				$sql .= " where $this->id_tabla = :id";
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
				$sql .= " where $this->id_tabla = :id_usuario";
			}
		}

        
        return $sql; 
    }
    
}
?>