<?php
    function autoloadCore($clase){
        if(file_exists(SYS_PATH.strtolower($clase).'.php')){
            require_once SYS_PATH.strtolower($clase).'.php';
        }        
    }

    function autoloadLibraries($clase){
        if(file_exists(LIB_PATH.strtolower($clase).'.php')){
            require_once LIB_PATH.strtolower($clase).'.php';
        }
    }

    spl_autoload_register('autoloadLibraries');
    spl_autoload_register('autoloadCore');
?>