<?php

class Sesion {
	public static function init() {
		session_start();

		if (!isset($_SESSION['id_usuario'])) {
			//$_SESSION['id_usuario']=0;
			Sesion::set('id_usuario',0);
		}

		if (!isset($_SESSION['usuario'])) {
			//$_SESSION['usuario']='';
			Sesion::set('usuario','');
		}

		if (!isset($_SESSION['autenticado'])) {
			//$_SESSION['usuario']=FALSE;
			Sesion::set('autenticado',FALSE);
		}
	}

	public static function set($clave,$valor){
		if (!empty($clave)) {
			$_SESSION[$clave] = $valor;
		}
	}

	public static function get($clave){
		if (isset($_SESSION[$clave])) {
			return $_SESSION[$clave];
		}
	}
}

?>