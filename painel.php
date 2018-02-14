<?php /* esse bloco de código em php verifica se existe a sessão, pois o usuário pode simplesmente não fazer o login e digitar na barra de endereço do seu navegador o caminho para a página principal do site (sistema), burlando assim a obrigação de fazer um login, com isso se ele não estiver feito o login não será criado a session, então ao verificar que a session não existe a página redireciona o mesmo para a index.php. */
session_start(); 
if((!isset ($_SESSION['login']) == true) and (!isset ($_SESSION['senha']) == true)) { unset($_SESSION['login']); unset($_SESSION['senha']); header('location:admin.php'); } $logado = $_SESSION['login']; ?> 


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> <head> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Fernando Greco - Design Gráfico e Desenvolvimento WEB</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Fernando Greco">
<meta name="description" content="Serviços de Design Gráfico e Desenvolvimento Web na Região de Osasco  - Whats 97145-7988">
<meta name="keywords" content="serviço web, serviço site, serviço gráfico Osasco">
<link href="estilo.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<ul>
  <li><a href="index.php">Início</a></li>  
  <li><a href="Portifolio.php">Portifolio</a></li>
  <li><a href="contrate.php">Contrate</a></li>
  <li><a href="adm.php">Adm</a></li>
</ul>
<div style="padding:20px;margin-top:30px;height:1500px;">
<h1>Design Gráfico | Desenvolvimento Web</h1>
<hr>
greco-fernando@hotmail.com - Cel./Whats.:(11) 97145-7988 <br><br>
<div align="center">
<table border="1" bgcolor="#000000"> <tr> <td><h1><font color="#FFFFFF">SISTEM WEB</h1></font> <?php echo" Bem vindo $logado"; ?> </td> </tr>
 <tr> <td><a href="cadastro_cidades.php"> <h3>Matérias Cidades</h3> </a></td> <td><a href="deletar.php"><h3>Deletar materia</h3></a></td> <</tr>
 <tr><td><a href="criar_edicao.php"><h3> Criar Edição</h3></a></td></tr></table> </div></body> </html>

