
// var userApp = angular.module('globoUsers', []);
(function($){

$(".user_delete_button").click(function(){


	var uid = $(this).attr("value");

	$.ajax({
            type:'POST',
            url: ajaxurl,
            data: {'action':'globo_user_delete', 'value': uid },
            success: function(result){

                console.log(result);

                window.location.reload();
              
                
            }

        })

});


$(".user_approve_button").click(function(){


	var uid = $(this).attr("value");

	$.ajax({
            type:'POST',
            url: ajaxurl,
            data: {'action':'globo_user_approve', 'value': uid },
            success: function(result){
                console.log(result);
               
                window.location.reload();
            }

        })

});


$('.iconpicker').on('change', function(e) { 

    $('#_industry_icon').val('fa '+e.icon);

});
     
var value_of_icon_option = $("#_name_select").val();

$('#_name_select').change(function(){
    
    var value_of_icon_option = $(this).attr('value');   
      
});
      




})(jQuery);