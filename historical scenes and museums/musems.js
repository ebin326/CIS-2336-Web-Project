   /* Masonry
    * ---------------------------------------------------- */ 
   var clMasonryFolio = function () {
        
    var containerBricks = $('.masonry');

    containerBricks.imagesLoaded(function () {
        containerBricks.masonry({
            itemSelector: '.masonry__brick',
            resize: true
        });
    });
};

   /* Initialize
    * ------------------------------------------------------ */
   (function ssInit() {
    clMasonryFolio();

})();
    