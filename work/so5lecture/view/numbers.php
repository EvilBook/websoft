<!doctype html>
<meta charset="utf-8">
<title>Stupid page</title>
<h1>Shit outside the php parser</h1>
<p>This is some more stupid text</p>
<ul>
    <?php foreach($numbers as $number) : ?>
    <li><?= $number ?></li>
    <?php endforeach; ?>
    
    
    
</ul>


<p>The user row is:</p>
<pre><?= implode(" : ", $userRowArray) ?>


