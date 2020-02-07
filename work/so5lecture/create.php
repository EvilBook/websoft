<?php

require "config.php";
require "src/functions.php";

$label = $_POST["label"] ?? null;
$type = $_POST["type"] ?? null;
$create = $_POST["create"] ?? null;

if ($create){
    
    $db=connectDatabase($dsn);
    
    $sql= "INSERT INTO tech (label,type) VALUES (?, ?)";
    $stmt= $db->prepare($sql);
    $stmt->execute();
    $res=$stmt->fetchAll();
    
}


?>

<h1>Create entry and stuff</h1>
<form method="post">
    <filedset>
        <legend>Create</legend>
        <p><label>Label:<input type="text" name="label" placeholder="Enter Label"></label></p>
        <p><label>Type:<input type="text" name="type" placeholder="Enter Type"></label></p>
        <p><label>Label:<input type="text" name="label" placeholder="Enter Label"></label></p>
    </filedset>

</form>