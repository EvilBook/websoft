<?php
$userRow = $_GET["row"] ?? null;
$userRowArray=explode("," , $userRow);
//echo "<pre>";
//var_dump($_GET);
$numbers = [];
for($i = 1 ; $i < 8 ; $i++){
    $numbers[] = rand(1,35);
}
sort($numbers);


require __DIR__ . "/view/numbers.php";
