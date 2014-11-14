/* ==========================================================================
   main.js
   ========================================================================== */
var $j = jQuery.noConflict();

$j(function(){

    $j('#jquery-txt').append("<br />Jquery is working");

    $j.idleTimeout('#idletimeout','#idletimeout a',{

        //idleAfter: 5,
        // uncomment and add server file if you need server respond
        //keepAliveURL: 'jqidletimeout.php',
        //serverResponseEquals: 'OK',

        onTimeout: function(){

            $j(this).slideUp();
            window.location = "?action=logout";
        },
        onIdle: function(){

            $j(this).slideDown();
        },
        onCountdown: function(counter){

            $j(this).find("span").html(counter);
        },
        onResume: function(){

            $j(this).slideUp();
        }
    });
});