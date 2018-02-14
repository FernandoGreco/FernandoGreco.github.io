<?php
$link = mysql_connect('localhost', 'root', '');
if (!$link) {
   die('Não conseguiu conectar: ' . mysql_error());
}

// seleciona o banco sticcor
$db_selected = mysql_select_db('fernandogreco', $link);
$charset = mysql_set_charset("utf8");
if (!$db_selected) {
   die ('Não pode selecionar o banco sticcor : ' . mysql_error());
}
?>