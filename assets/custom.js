jQuery(function ($) {
    "use strict";
    var $window = $(window);
    var windowsize = $(window).width();
    var $root = $("html, body");
    var $this = $(this);
 
    /*==========================*/
    /*Fix Sidebar */
    /*==========================*/
    $(".main-container-outer .sidebar-outer").stick_in_parent(); 
/*==========================*/
/* Page Loader */
/*==========================*/
jQuery(window).on("load", function () {
    jQuery("#loader").fadeOut(800);
});
});