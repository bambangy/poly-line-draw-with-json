<?php

require "bin/konfigurasi.php";

$conf = array("host" => $host, "database" => $database, "username" => $username, "password" => $password, "root" => rawurlencode($rootdir), "jsdir" => rawurlencode($jsdir), "cssdir" => rawurlencode($cssdir));


header('Content-Type: application/json');
echo json_encode($conf);
?>
