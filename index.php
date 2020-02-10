<?php
    require_once 'load.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="https://use.typekit.net/vom1hdy.css">

<!-- vue libraries -->
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <title>Ontario Summer</title>
</head>
<body>

<main id="app">
    <?php include 'templates/header.php'; ?>
<!-- ROUTE OUTLET *like a HBS tag*-->
<!-- Components will be rendered here -->
<router-view></router-view>
    <?php include 'templates/footer.php'; ?>
    </main>
    <script defer src="js/main.js" type="module"></script>
</body>
</html>