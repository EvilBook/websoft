<?php

require "config.php";
require "src/functions.php";
$pageTitle = "Search";
require __DIR__ . "/view/header.php";    
$search = $_GET["search"] ?? null;
$like = "%$search%";

if($search){
    $db = connectDatabase($dsn);
    
    $sql = <<<EOD
    SELECT
    *
    FROM tech
    WHERE
    id = ?
    OR label LIKE ? 
    OR type LIKE ?
    ;
    EOD;
    $stmt = $db->prepare($sql);
    $stmt->execute([$search,$like,$like]);
    
    $res = $stmt->fetchAll();
}
?><h1>Search the database</h1>
<form><p><label><input type="text" name="search" value="<?= $search?>"></label></p></form>

<?php if($search) : ?>
<table>
    <tr>
        <th>ID</th>
        <th>Label</th>
        <th>Type</th>
    </tr>
    <?php foreach($res as $row) : ?>
    <tr>
        <th><?= $row["id"]?></th>
        <th><?= $row["label"]?></th>
        <th><?= $row["type"]?></th>
    </tr>
    <?php  endforeach; ?>
</table>
<?php endif; ?>
<?php require __DIR__ . "/view/footer.php";?>
