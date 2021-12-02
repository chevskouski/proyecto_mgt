<?php
class productosController extends Controller{
    public function __construct(){
        parent::__construct();
        $this->modelo=$this->loadModel('productos','tienda');
        $this->view->template = 'store';
    }

    public function index(){
        
    }

    public function vistaproductos(){
        $this->view->rendering('productos');
    }

    public function carrito(){
        $this->view->rendering('carrito');
    }
}
?>