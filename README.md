jQuery imageMask
================
This jQuery plugin will allow you to add simple mask

Installation
------------
Include the plugin **_after_** the jQuery:
  <script type="text/javascript" src="jquery.imageMask.min.js"></script>

Usage
-----
Using imageMask is simple!
1. Create image element
    <img src="images/slider/AlmogBaku.png" class="mySelector" />
1. Create mask image(black will keep stay, and the transparent will cutted of)
   ![mask](demo/mask.png "Mask")
1. Add imageMask query! by `.imageMask(path_to_mask)`
    $(".mySelector").imageMask("mask.png");