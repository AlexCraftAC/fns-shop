<?php
$content = file_get_contents('https://shop.lazylinks.fr/');
$content = str_replace('</title>','</title><base href="https://shop.lazylinks.fr/" />', $content);
$content = str_replace('</head>','<link rel="stylesheet" href="http://alexcraft.ga/fns-shop/shop.css" /></head>', $content);
echo $content;
