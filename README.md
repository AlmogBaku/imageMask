[jQuery imageMask](http://almogbaku.github.com/imageMask/ "jQuery imageMask")
================
This jQuery plugin will allow you to add simple image-mask to your images.

Installation
------------
Include the plugin **_after_** the jQuery:

        <script type="text/javascript" src="jquery.imageMask.min.js"></script>

Usage
-----
Using imageMask is simple!

1. Create image element

        <img src="image.jpg" class="mySelector" />

1. Create mask image(black will keep stay, and the transparent will cutted of) <br />
   ![mask](/demo/mask.png "Mask")

1. Add imageMask query to the ready event. use function `.imageMask(path_to_mask)`

        $( document ).ready( function() {
            $( ".mySelector" ).imageMask( "mask.png" );
        } );

1. You can add some callback handler

        $( document ).ready( function() {
            $( ".mySelector" ).imageMask( "mask.png", function() {
                console.log( 'Do something here!' );
            } );
        } );

1. DONE!


Demo
----
You can see a [demo over this link](http://almogbaku.github.com/imageMask/ "Demo").


Lincense
--------
This project is released over 


Authors
-------
[AlmogBaku](https://github.com/AlmogBaku/ "AlmogBaku") - Almog Baku - [http://www.almogbaku.com](http://www.almogbaku.com "AlmogBaku")