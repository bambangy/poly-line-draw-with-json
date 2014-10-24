<?php

require "bin/konfigurasi.php";

$connecting = mysql_connect($host,$username,$password);
if(!$connecting){
	die('Koneksi gagal terhubung : '+ mysql_error());
}
else{
	mysql_select_db($database, $connecting) or die('Gagal membuka DB');
}

$query = mysql_query("select * from polyline");

$data1 = array();
$i = 0;
while($res = mysql_fetch_array($query)){
	$data1[$i] = array("id" => $res['id'],"number" => $res['number'],"name" => $res['name'],"lat" =>$res['lat'],"lng" =>$res['lng']);
	$i++;
}

header('Content-Type: application/json');
echo json_encode($data1);

?>
