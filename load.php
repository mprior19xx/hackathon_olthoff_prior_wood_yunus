<?php 

    ini_set('display_errors', 1);

    define('ABSPATH', __DIR__);
    define('ADMIN_PATH', ABSPATH.'/admin');

    require_once ABSPATH.'/config/database.php';
    require_once ADMIN_PATH.'/sign-up.php';