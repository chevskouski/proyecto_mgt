<?php
    
if($_SERVER['HTTP_HOST']=='localhost'){
    define('HOST', 'localhost');
    define('USER','root');
    define('PASSWORD','');
    define('DB_NAME','db_uspgcoders');
    define('BASE_URL','http://localhost/mgt_proyecto/');
}else{
    define('BASE_URL','https://mygametime.uspgcoders.site/');
    define('HOST', 'localhost');
    define('USER','n4p6n7r2_mygame');
    define('PASSWORD','ucK)GT[&KS4c');
    define('DB_NAME','n4p6n7r2_mygametime');   
}
?>