;(function($) {

  "use strict";

  var $body = $('body');
  // var $head = $('head');
  // var $mainWrapper = $('#main-wrapper');

  // Mediaqueries
  // ---------------------------------------------------------
  // var XS = window.matchMedia('(max-width:767px)');
  // var SM = window.matchMedia('(min-width:768px) and (max-width:991px)');
  // var MD = window.matchMedia('(min-width:992px) and (max-width:1199px)');
  // var LG = window.matchMedia('(min-width:1200px)');
  // var XXS = window.matchMedia('(max-width:480px)');
  // var SM_XS = window.matchMedia('(max-width:991px)');
  // var LG_MD = window.matchMedia('(min-width:992px)');


  // jquery ui call functionfor calendar
  //------------------------------------------------
  $( "#datepicker" ).datepicker();
  $('.category-search select').select2();

  // $('select').select2();


// $('.iconpicker').on('change', function(e) { 
//     console.log(e.icon);
// });

  // $('#upload-image-button').attr("role", "iconpicker");

  // Touch
  // ---------------------------------------------------------
  var dragging = false;

  $body.on('touchmove', function() {
    dragging = true;
  });

  $body.on('touchstart', function() {
    dragging = false;
  });


    // Advanced search toggle
  var $SearchToggle = $('.header-search-bar .search-toggle');
  // $SearchToggle.hide();

  $('.header-search-bar .toggle-btn').on('click', function(e){
    e.preventDefault();
    $SearchToggle.slideToggle(300);
  });

  // $( window ).resize(function() {
  //   if( window.innerWidth > 767 ){
  //       $SearchToggle.show();
  //   }else{
  //     $SearchToggle.hide();
  //   }
  // });


  // navbar toggle
  //------------------------------------------------
  $('.header-nav-bar button').on('click',function(){
    $('.header-nav-bar').toggleClass('active');
  });

  var $headerNavBar = $('#header .header-nav-bar, .header-nav-bar button');

  $headerNavBar.each(function () {
    var $this = $(this);

    $this.on('clickoutside touchendoutside', function () {
      if ($this.hasClass('active')) { $this.removeClass('active'); }
    });
  });

  $('.primary-nav li.has-submenu > a i').click(function(e){
    e.preventDefault();
  });



  // Category toggle
  //-------------------------------------------------

  $('.category-toggle button').on('click',function(){
    $('.category-toggle').toggleClass('active');
  });

  var $CategoryTtoggle = $('.category-toggle');

  $CategoryTtoggle.each(function () {
    var $this = $(this);

    $this.on('clickoutside touchendoutside', function () {
      if ($this.hasClass('active')) { $this.removeClass('active'); }
    });
  });




  //home slide tab-content hide
  //---------------------------------------
  $('.home-tab li > a').on('click', function(){

    $CategoryTtoggle.removeClass('active');
  });

  // home map tab-content hide
  //---------------------------------------------
 $('.accordion ul li').on('click', function(){

   $CategoryTtoggle.removeClass('active');
   console.log("clicked");
 });


 /**
  master slider settings 
 */


   var slider = new MasterSlider();
    
    slider.setup('masterslider', {
       width: 1140,
       height: 700,
       space: 5,
       fullwidth: true,
       speed: 25,
       view: 'flow',
       centerControls: false
    });

    slider.control('arrows', {
       autohide: false
    });



  // our-partners slider customize
  //-----------------------------------------
  $("#partners-slider").owlCarousel({
    autoPlay: 3000,
    items : 6,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [979,3],
    itemsTablet: [600,2]
  });


  // home slider section
  //-------------------------------------------
  var homeSlide = $("#home-slider");

  homeSlide.owlCarousel({

    navigation : false, // Show next and prev buttons
    slideSpeed : 600,
    paginationSpeed : 600,
    singleItem:true

  });


  // Custom Navigation Events
    $(".next").click(function(){
      homeSlide.trigger('owl.next');
    });
    $(".prev").click(function(){
      homeSlide.trigger('owl.prev');
    });




  // UOU Selects
  // ---------------------------------------------------------
  $.fn.uouCustomSelect = function () {
    var $select = $(this);

    $select.wrap('<div class="uou-custom-select"></div>');

    var $container = $select.parent('.uou-custom-select');

    $container.append('<ul class="select-clone"></ul>');

    var $list = $container.children('.select-clone'),
      placeholder = $select.data('placeholder') ? $select.data('placeholder') : $select.find('option:eq(0)').text();

    $('<input class="value-holder" type="text" disabled="disabled" placeholder="' + placeholder + '"><i class="fa fa-chevron-down"></i>').insertBefore($list);

    var $valueHolder = $container.children('.value-holder');

    // Create clone list
    $select.find('option').each(function () {
      var $this = $(this);

      $list.append('<li data-value="' + $this.val() + '">' + $this.text() + '</li>');
    });

    // Toggle list
    $container.on('click', function () {
      $container.toggleClass('active');
      $list.slideToggle(250);
    });

    // Option Select
    $list.children('li').on('click', function () {
      var $this = $(this);

      $valueHolder.val($this.text());
      $select.find('option[value="' + $this.data('value') + '"]').prop('selected', true);
    });

    // Hide
    $container.on('clickoutside touchendoutside', function () {
      if (!dragging) {
        $container.removeClass('active');
        $list.slideUp(250);
      }
    });

    // Links
    if ($select.hasClass('links')) {
      $select.on('change', function () {
        window.location.href = select.val();
      });
    }

    $select.on('change', function () {
      cosole.log(chnaged);
      cosole.log($(this).val());
    });
  };

  $('select').each(function () {
    //$(this).uouCustomSelect();
  });



  // map initialization
  //-----------------------------------




  // home-map customization

  // $("#map_canvas").goMap({

  //   maptype: 'ROADMAP',
  //   scrollwheel: false,
  //   zoom: 6,
  //   markers: [{
  //       latitude: 46.454889270677576,
  //       longitude: 7.45697021484375,
  //       icon: 'img/content/map-marker.png',
  //       html: 'Globo'
  //     },{
  //       latitude: 49.31079887964633,
  //       longitude: 4.361572265625,
  //       icon: 'img/content/map-derection-100.png',
  //       html: 'Globo'
  //     },{
  //       latitude: 44.96479793033104,
  //       longitude: 4.691162109375,
  //       icon: 'img/content/map-direction-1000.png',
  //       html: 'Globo'
  //     },{
  //       latitude: 45.39844997630408,
  //       longitude: 11.019287109375,
  //       icon: 'img/content/map-direction-20.png',
  //       html: 'Globo'

  //     },{
  //       latitude: 45.69083283645816,
  //       longitude: 16.336669921875,
  //       icon: 'img/content/map-direction-8.png',
  //       html: 'Globo'
  //     },{
  //       latitude: 47.56170075451973,
  //       longitude: 14.315185546875,
  //       icon: 'img/content/map-direction-50.png',
  //       html: 'Globo'
  //   }]
  // });


  // company map initialization


  // company-map-street






  // contact map

  // var contact_map = $("#contact_map_canvas").goMap({
  //   maptype: 'ROADMAP',
  //   zoom: 13,
  //   scrollwheel: false,

  //   markers: [{
  //     latitude: 37.793100669930396,
  //     longitude: -122.41769313812256,
  //     icon: 'img/content/map-marker-company.png',
  //     html: 'Globo'
  //   }]
  // });

//contact_map.checkResize();


  // company-contact map




  $('a[data-toggle="tab"]').on('shown.bs.tab', function (event) {


        var geo = $('div.geo-static');

        console.log(geo.length);

        if( geo.length > 0){

            geo.each(function(i, elem){
                var lat = $(this).attr('data-lat');
                var lng = $(this).attr('data-lng');

                $(this).goMap({
                    maptype: 'ROADMAP',
                    zoom: 13,
                    scrollwheel: false,

                    markers: [{
                      latitude: lat,
                      longitude: lng,
                      icon: 'https://dl.dropboxusercontent.com/u/37351231/marker.png'
                    }]
                  });



            });

        }






  });








  // distance slider initialize

  // distance slider

  $( "#slider-range-min" ).slider({
    range: "min",
    value: 42,
    min: 1,
    max: 100,
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.value +   "km" );
    }
  });
  $( "#amount" ).val( $( "#slider-range-min" ).slider( "value" ) +   "km");


  $( "#slider-range-search" ).slider({
    range: "min",
    value: 42,
    min: 1,
    max: 100,
    slide: function( event, ui ) {
      $( "#amount-search" ).val( ui.value +   "km" );
    }
  });
  $( "#amount-search" ).val( $( "#slider-range-search" ).slider( "value" ) +   "km");




  $( "#slider-range-search-day" ).slider({
    range: "min",
    value: 20,
    min: 1,
    max: 300,
    slide: function( event, ui ) {
      $( "#amount-search-day" ).val(  "<"  + ui.value );
    }
  });
  $( "#amount-search-day" ).val( "<" +  $( "#slider-range-search-day" ).slider( "value" ) );





  // Accordion
  // ---------------------------------------------------------
  $('.accordion').each(function () {

    $(this).find('ul > li > a').on('click', function (event) {
      event.preventDefault();

      var $this = $(this),
        $li = $this.parent('li'),
        $div = $this.siblings('div'),
        $siblings = $li.siblings('li').children('div');

      if (!$li.hasClass('active')) {
        $siblings.slideUp(250, function () {
          $(this).parent('li').removeClass('active');
        });

        $div.slideDown(250, function () {
          $li.addClass('active');
        });
      } else {
        $div.slideUp(250, function () {
          $li.removeClass('active');
        });
      }
    });

  });



  // header login register scripts
  //-------------------------------------------

  // var $headerLoginRegister = $('#header .header-login, #header .header-register');

  // $headerLoginRegister.each(function () {
  //   var $this = $(this);

  //   $this.children('a').on('click', function (event) {
  //     event.preventDefault();
  //     $this.toggleClass('active');
  //   });

  //   $this.on('clickoutside touchendoutside', function () {
  //     if ($this.hasClass('active')) { $this.removeClass('active'); }
  //   });
  // });



  var $headerNavbar = $('#header .header-nav-bar .primary-nav li.has-submenu');

  $headerNavbar.each(function () {
    var $this = $(this);

    $this.on('click', function (event) {
      $this.toggleClass('active');
      console.log('clicked');
    });

    $this.on('clickoutside touchendoutside', function () {
      if ($this.hasClass('active')) { $this.removeClass('active'); }
    });
  });




  // Header Language Toggle
  // ---------------------------------------------------------
  var $headerLanguageToggle = $('#header .header-language');

  $headerLanguageToggle.children('a').on('click', function (event) {
    event.preventDefault();
    $(this).parent('.header-language').toggleClass('active');
  });

  $headerLanguageToggle.on('clickoutside touchendoutside', function () {
    if ($headerLanguageToggle.hasClass('active')) { $headerLanguageToggle.removeClass('active'); }
  });

  // Header Social Toggle
  // ---------------------------------------------------------
  var $headerSocialToggle = $('#header .header-social');

  $headerSocialToggle.children('a').on('click', function (event) {
    event.preventDefault();
    $(this).parent('.header-social').toggleClass('active');
  });

  $headerSocialToggle.on('clickoutside touchendoutside', function () {
    if ($headerSocialToggle.hasClass('active')) { $headerSocialToggle.removeClass('active'); }
  });




  // sub-categories remove and active class
  //-----------------------------------------------------
  var $CategoryLink = $('#categories .accordion ul li div a');

  $CategoryLink.on('click', function(){
    $(this)
      .addClass('active')
      .siblings().removeClass('active')
      .parent().parent().siblings('li').children('div a').click(function(){
        $CategoryLink.removeClass('active');
      });
  });



  // style switcr for list-grid view
  //--------------------------------------------------
  $('.change-view button').on('click',function(e) {

    if ($(this).hasClass('grid-view')) {
      $(this).addClass('active');
      $('.list-view').removeClass('active');
      $('.page-content .view-switch').removeClass('product-details-list').addClass('product-details');

    } else if($(this).hasClass('list-view')) {
      $(this).addClass('active');
      $('.grid-view').removeClass('active');
      $('.page-content .view-switch').removeClass('product-details').addClass('product-details-list');
      }
  });




  // company-heading slider content
  //--------------------------------------------------------
  $('.button-content button').on('click',function(e) {
    console.log('clickes');

    if ($(this).hasClass('general-view-btn')) {
      $(this).addClass('active')
      .siblings().removeClass('active')
      .parent().parent().next().css("left","0%");


    } else if($(this).hasClass('map-view-btn')) {
      $(this).addClass('active')
      .siblings().removeClass('active')
      .parent().parent().next().css("left","-100%");

    } else if($(this).hasClass('male-view-btn')) {
      $(this).addClass('active')
     .siblings().removeClass('active')
     .parent().parent().next().css("left","-200%");
    }

  });


  $("a").click(function(e){
    if($(this).attr("href") === '#'){
      e.preventDefault();
    }
  });


$("document").ready(function($){
  var nav = $('.header-top-bar');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
        nav.addClass("sticky-top-bar");

    } else {
        nav.removeClass("sticky-top-bar");
    }

  });
});

  var $headerLoginRegisterbutton = $('#header .log-regi-mobile-container');

  $headerLoginRegisterbutton.each(function () {
    var $this = $(this);

    $this.children('.log-reg-mobile-btn').on('click', function (event) {
      event.preventDefault();
      $this.toggleClass('active');
    });

    $this.on('clickoutside touchendoutside', function () {
      if ($this.hasClass('active')) { $this.removeClass('active'); }
    });
  });


}(jQuery));



jQuery("document").ready(function($){
  var nav = $('.header-search-bar');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
        nav.addClass("sticky-header");

    } else {
        nav.removeClass("sticky-header");
    }

  });
});








jQuery("document").ready(function($){
   
           
      var file_frame;
     
      $('a.upload_image_button').on('click', function( event ){
     
        event.preventDefault();

        var me = $(this);

        ref = $(this).attr('ref');


     
        // If the media frame already exists, reopen it.
        if ( file_frame ) {
          file_frame.open();
          return;
        }
     
        // Create the media frame.
        file_frame = wp.media.frames.file_frame = wp.media({
          title: $( this ).data( 'uploader_title' ),
          button: {
            text: $( this ).data( 'uploader_button_text' ),
          },
          multiple: false  // Set to true to allow multiple files to be selected
        });
     
        // When an image is selected, run a callback.
        file_frame.on( 'select', function() {
          // We set multiple to false so only get one image from the uploader
          attachment = file_frame.state().get('selection').first().toJSON();

          console.log(attachment);
     
        //  Do something with attachment.id and/or attachment.url here

          // $(this).siblings('.upload_text_field').val(attachment.id);
          // 
          
          me.siblings('.upload_text_field').val(attachment.url);

          
          // $('input.'+ref).val(attachment.url);
          // $('.cancel_'+ref).css({'display':''});
          // $('img.'+ref).attr('src',attachment.url).css({'display':'block'});




        });
     
        // Finally, open the modal
        file_frame.open();
      });





 
});


var SearchTogglenew = jQuery('.header-search-center .search-toggle');
  SearchTogglenew.hide();

  jQuery('.header-search-center .toggle-btn').on('click', function(e){
    e.preventDefault();
    SearchTogglenew.slideToggle(300);
  });


jQuery("document").ready(function($){
  var navnew = $('.header-search-center');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
        navnew.addClass("sticky-header");

    } else {
        navnew.removeClass("sticky-header");
    }

  });

  var navnew2 = $('.header-search-single-input');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
        navnew2.addClass("sticky-header");

    } else {
        navnew2.removeClass("sticky-header");
    }

  });


  var navnew3 = $('.header-search-double-input');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
        navnew3.addClass("sticky-header");

    } else {
        navnew3.removeClass("sticky-header");
    }

  });


// // Advanced search toggle
//   var $SearchTogglenew = $('.header-search-center .search-toggle');
//   $SearchTogglenew.hide();

//   $('.header-search-center .toggle-btn').on('click', function(e){
//     e.preventDefault();
//     $SearchTogglenew.slideToggle(300);
//   });


  var $SearchToggledefault = $('.header-search-bar .search-value');

  $('.header-search-bar .toggle-btn-only-filed').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $SearchToggledefault.toggleClass('active');
  });

// Advanced search toggle
  var $SearchTogglenew = $('.header-search-single-input .search-toggle');
  $SearchTogglenew.hide();

  $('.header-search-single-input .toggle-btn').on('click', function(e){
    e.preventDefault();
    $SearchTogglenew.slideToggle(300);
  });


  // Advanced search toggle
  var $SearchTogglenewtwo = $('.header-search-double-input .search-toggle');
  $SearchTogglenewtwo.hide();

  $('.header-search-double-input .toggle-btn').on('click', function(e){
    e.preventDefault();
    $SearchTogglenewtwo.slideToggle(300);
  });



});


// jQuery( ".toggle-btn" ).click(function() {
//   jQuery( ".search-toggle" ).toggle();
// });


(function($) {
  $('#company-message-form .spinner').hide();
  $('#message_alert').slideUp()
  $("#company-message-form button.btn-default").click(function(evt) {
    evt.preventDefault();

      var errorMsg = '';
      var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields   
    $("#company-message-form .form-group input[required=true], #company-message-form .form-group textarea[required=true]").each(function(){
      $(this).css('border-color',''); 
      if(!$.trim($(this).val())){ //if this field is empty 
        var atrName = $(this).attr('name');

        if( atrName == 'f_name' ) {
          errorMsg += 'Name field required<br>';
        } else if ( atrName == 'from' ) {
          errorMsg += 'Email field required<br>';
        } else if ( atrName == 'subject' ) {
          errorMsg += 'Subject field required<br>';
        } else if ( atrName == 'message' ) {
          errorMsg += 'Message field required<br>';
        }
        
        $(this).parent().addClass('has-error');
        proceed = false; //set do not proceed flag
      }
      //check invalid email
      var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
      if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
        $(this).parent().addClass('has-error');
        proceed = false; //set do not proceed flag
        errorMsg += 'Email Must be valid & required!<br>';
      }

      if( errorMsg != undefined ) {
        $('#message_alert').slideDown().html(errorMsg);
      }
      
      
    });
       
        if(proceed) //everything looks good! proceed...
        {
            $('#message_alert').slideUp();
            //get input field values data to be sent to server
            post_data = {
              'to'    : $('input[name=to]').val(),
              'f_name'      : $('input[name=f_name]').val(),
              'from'      : $('input[name=from]').val(),
              'subject' : $('input[name=subject]').val(),
              'msg'     : $('textarea[name=message]').val(),
              security    : nonce_contact_form
            };

            $('#company-message-form .spinner').show();
            
            //Ajax post data to server
            $.post(ajaxurl+'?action=globo_send_mail', post_data, function(response){
              

              console.log(response);
              console.log(response.status_code);

              if( response.status_code == 200 ) {
                $('input[name=subject]').val("");
                $('textarea[name=message]').val("");
                
                $('#message_alert').slideDown().html(response.message);  
              } else {
                $('#message_alert').slideDown().html('Something went wrong. Please try again later!');  
              }

              $('#company-message-form .spinner').hide();
              
            }, 'json');
        }
    });

})(jQuery);

