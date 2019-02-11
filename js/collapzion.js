setTimeout(function(){
var styleOptions = 'left: unset; width: 40%;'
var classOptions = 'animated bounceIn'
var $newDiv = $("<div/>")   // creates a div element
                 .attr("id", "btncollapzion")  // adds the id
                 .html("<div class=" + classOptions + " style=" + styleOptions + "></div>");
$(document.body).append($newDiv);
jQuery(function($){
    $('#btncollapzion').Collapzion({
        _child_attribute:[
            {
              'label':'My Profile',
              'url':"javascript:SCStart;",
              'icon':'&#xE7FD;'
            },
        ],
        _main_btn_color:'#4285f4;',
        _child_btn_color:'#f4645f;',
    });
});
}, 4000);
