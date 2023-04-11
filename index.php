<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="stylesheet" type="text/css" href="main.css">
    <?php
        $dir = __DIR__ . '\blocks';
        $folders = scandir($dir);
        $y = 0;
        foreach ($folders as $folder) {
            if (is_dir($dir . '/' . $folder) && $folder != '.' && $folder != '..') {
                $indexFile = $dir . '/' . $folder . '/index.html';
                if (file_exists($indexFile)) {
                    echo '<link rel="stylesheet" type="text/css" href="blocks/' . $folder . '/main.css">';
                }
            }
        }
    ?>
</head>
<body>
    <div class="menu">
    <?php
        $dir = __DIR__ . '\blocks';
        $folders = scandir($dir);
        $y = 0;
        foreach ($folders as $folder) {
            if (is_dir($dir . '/' . $folder) && $folder != '.' && $folder != '..') {
                $indexFile = $dir . '/' . $folder . '/index.html';
                if (file_exists($indexFile)) {
                    echo '<div class="box ' . $folder . '" style="position:relative; top:' . $y . 'px;">';
                    include($indexFile);
                    echo '</div>';
                    $y += 10;
                }
            }
        }
    ?>
    </div>
    <?php
        $dir = __DIR__ . '\blocks';
        $folders = scandir($dir);

        foreach ($folders as $folder) {
            if (is_dir($dir . '/' . $folder) && $folder != '.' && $folder != '..') {
                $indexFile = $dir . '/' . $folder . '/index.js';
                if (file_exists($indexFile)) {
                    echo '<script src="blocks/' . $folder . '/index.js">';
                }
            }
        }
    ?>
    <div class="vertical-line"></div>
    <script src="blocks/index.js"></script>
</html>