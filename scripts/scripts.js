
$(document).ready(function(){
    $("#navToggled").click(function(){
        $(".nav_right").fadeOut();
        $("#navToggled").hide();
        $("#navToggle").show();
    });
    $("#navToggle").click(function(){
        $(".nav_right").fadeIn();
        $("#navToggled").show();
        $("#navToggle").hide();
    });


});

// tabs


function openTab(evt, walletOptions) {
           var i, tabcontent, tablinks;
           tabcontent = document.getElementsByClassName("tabcontent");
           for (i = 0; i < tabcontent.length; i++) {
               tabcontent[i].style.display = "none";
           }
           tablinks = document.getElementsByClassName("tablinks");
           for (i = 0; i < tablinks.length; i++) {
               tablinks[i].className = tablinks[i].className.replace(" active", "");
           }
           document.getElementById(walletOptions).style.display = "block";
           evt.currentTarget.className += " active";
       }

          document.getElementById("openTab").click();




// FLOATING BALLS
