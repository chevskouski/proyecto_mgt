<?php
class facturaController extends Controller{    
    public function __construct(){
        parent::__construct();
        $this->modelo=$this->loadModel('factura','tienda');
        $this->view->template = 'store';
    }

    public function index(){
    }

    public function factura(){
			$this->modelo->id_tabla = 'id_producto';
			$this->modelo->tabla = 'opr_carrito';
			$params=array('operacion'=>'consultar_productos_carrito');
			$resultado =$this->modelo->ejecutar_sql($params);
			
			$datos = $resultado['datos'];
			$nurmeroDatos = sizeof($datos);

			$pdf = new FPDF();
			$pdf->AddPage();
			$pdf->SetTitle('Factura');
			$pdf->SetFont('Arial','B',16);
			
			//Header
			// Arial bold 15
			$pdf->SetFont('Arial','B',20);
			// Movernos a la derecha
			$pdf->Cell(70);
			// Título
			$pdf->Cell(58,10,'Detalles de la Compra',0,0,'C');
			// Salto de línea
			$pdf->Ln(20);
			$fechaactual = 'Fecha: '.date('d/m/Y');
			$pdf->SetFont('Arial','',12);
			$pdf->Cell(0,10,$fechaactual,0,0,'');
			$pdf->Image(BASE_URL.'layout/store/assets/img/logo/logo.png',150,35,40);
			$pdf->Ln(5);
			$pdf->Cell(0,10,'email: info@uspgcoders.site',0,0,'');
			$pdf->Ln(5);

			$order_no = date('ymd').substr(implode(array_map('ord', str_split(substr(uniqid(), 7, 13), 1))), 0, 9);
			$pdf->Cell(0,10,'No. Orden: '.$order_no,0,0,'');

			$pdf->Ln(20);
			$pdf->SetFont('Arial','B',15);
			// Colores de los bordes, fondo y texto
			$pdf->SetDrawColor(0,80,180);
			$pdf->SetFillColor(189,236,182);
			$pdf->Cell(160,10,'Nombre del Producto',1,0,'C',true);
			$pdf->Cell(30,10,'Precio',1,1,'C',true);
			



			$total_prodcutos = 0;
			$pdf->SetFont('Arial','',12);
			$pdf->SetFillColor(226,240,251);
			for ($x = 0; $x < $nurmeroDatos; $x++) {
				$datosProducto = $datos[$x];
				
				$pdf->Cell(160,10,$datosProducto['descripcion'],1,0,'',true);
				$pdf->Cell(30,10,'$ '.$datosProducto['precio'],1,1,'C',true);
				$total_prodcutos = $total_prodcutos + floatval($datosProducto['precio']);
			}
			$pdf->SetFont('Arial','B',15);
			$pdf->Cell(160,10,'Total',1,0,'R',0);
			$pdf->SetFillColor(253,238,238);
			$pdf->Cell(30,10,'$ '.sprintf('%0.2f',$total_prodcutos),1,1,'C',true);
			
			
			// Posición: a 1,5 cm del final
			$pdf->SetY(266);
			// Arial italic 8
			$pdf->SetFont('Arial','I',8);
			// Número de página
			$pdf->Cell(0,10,'Gracias por tu compra!',0,0,'C');
			
			$pdf->Output();
        } 
}
?>
