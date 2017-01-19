var globomap;
var markers = [];
var markerCluster;

var ownLocationMarker;
var circle;

var geocoder = new google.maps.Geocoder();




function getAllmarker(){

    markers = [];


 if(  typeof all != "undefined"  ){

    jQuery.each( all.data , function(index , obj){

      
          // industry 
             var tags =[];

             if( obj.filter_id.length < 0 ){
                  tags = [];
             }else{
                  jQuery.each(obj.filter_id , function( newind,newobj){
                      tags.push( String(newobj) );
                  });
             }



            var marker;

          if( obj.marker_image ){

              marker = new google.maps.Marker({
              
                'position': new google.maps.LatLng( obj.lat, obj.lng ),
              //  'map': globomap,
                'animation': google.maps.Animation.DROP, 
                'industry': obj.industry_join ,
                'country': obj.country,
                'city': obj.city,
                'title': obj.post_title,
                'tags': tags,
                'ID' : obj.ID,
                'days': obj.days,
                'icon': obj.marker_image
                 
              });

         }else{

              marker = new google.maps.Marker({
              
                'position': new google.maps.LatLng( obj.lat, obj.lng ),
              //  'map': globomap,
                'animation': google.maps.Animation.DROP, 
                'industry': obj.industry_join ,
                'country': obj.country,
                'city': obj.city,
                'title': obj.post_title,
                'tags': tags,
                'ID' : obj.ID,
                'days': obj.days,
               
                 
              });


         }



          var address = '';
          var phone = '';
          var fax = '';
          var hours = '';
          var website = '';
          var email = '';

          if( obj.address.trim()){
              address = obj.address;
          }

          if( obj.mob.trim() ){
            phone = '<span><strong>Mob:</strong> '+obj.mob+'</span>';
          }

          if( obj.site.trim() ){
            website = obj.site;
          }

          if( obj.email.trim() ){
            email = obj.email;
          }


          if( obj.fax.trim() ){
            fax = '<strong>Fax:</strong> '+obj.fax+'</span>';
          }

          if(obj.hours.trim() ){
              hours = '<div class="openning-details">\
                <ul class="list-inline">\
                  <li>'+obj.hours+'</li>\
                </ul>\
                </div>';
          }
         
            var html = '<div class="map-buble"> \
              <div class="buble-content"> \
                <figure><img src="'+obj.post_logo+'" alt=""></figure> \
                <h4><a href="'+apicon.site_url+'/company/'+obj.post_name+' ">'+obj.post_title+'</a></h4> \
                <div class="buble-address"> \
                    <table class="table"> \
                        <tr> \
                          <td>'+address+'</td> \
                          <td class="contact-info"><span>'+phone+fax+'</td> \
                        </tr> \
                    </table> \
                </div> \
              </div>\
              <div class="buble-link-content"> \
                  <ul class="list-inline"> \
                      <li><a href="'+website+'"><i class="fa fa-globe"></i>Website</a></li> \
                      <li><a href="mailto:'+email+'"><i class="fa fa-envelope"></i>E-mail</a></li> \
                      <li><a href="'+apicon.site_url+'/company/'+obj.post_name+'"><i class="fa fa-newspaper-o"></i>Full Profile</a></li> \
                  </ul> \
                </div> \
            </div>';


          var infowindow = new google.maps.InfoWindow();

          google.maps.event.addListener(marker, 'click', (function(marker, index) {
            return function() {
              infowindow.setContent(html);
              infowindow.open(globomap, marker);
            }
          })(marker, index));



          markers.push(marker);



      });

    return markers;
  }


  return [];

  
}


(function($){
   
    if( document.getElementById('map_canvas') ){
   
      globomap = new google.maps.Map(document.getElementById('map_canvas'),{
          'zoom': 8 , 
          'scrollwheel' : false,
          'zoomControlOptions': {
              position: google.maps.ControlPosition.RIGHT_BOTTOM,
          },
          'panControlOptions': {
              position: google.maps.ControlPosition.LEFT_BOTTOM
          },

      });

 
    markers = getAllmarker();

    

    markerCluster = new MarkerClusterer(globomap, markers);

    function autoCenter() {      
      var bounds = new google.maps.LatLngBounds();      
      for (var i = 0; i < markers.length; i++) {  
        bounds.extend(markers[i].position);
      }      
      globomap.fitBounds(bounds);
    }
    autoCenter();

  }



})(jQuery);











var globoService = angular.module('globoservice',[]);

    globoService.service('wpapi',function( $http ){

            this.http = function( type , method , path , data ){

                return $http({
                    method: method,
                    url: apicon.ajaxurl+'?action=globo_' + path,
                    headers: {                          
                        'Content-Type' :  'application/x-www-form-urlencoded'
                    },
                    data : jQuery.param(data)
                }); 

                
              
            
            }

    });








var globoApp = angular.module('globoApp', ['ui.bootstrap','ui.sortable','ui.select2','ngSanitize','720kb.datepicker','globoservice' ,'ngTagsInput','textAngular' ,'ui-iconpicker'] );

    globoApp.directive('txUploader', ['$compile', function($compile) {
        return {
            restrict: "A",
            scope : {
             // src : '=src'
            },
            require: "ngModel",
            link: function(scope, element, attrs, ngModel) {

                var file_frame;

                
                element.bind("click", function(e) {
                   e.preventDefault();


                   

                   if ( file_frame ) {
                      file_frame.open();
                      return;
                    }

                   

                    
                    file_frame = wp.media.frames.file_frame = wp.media({
                      title: jQuery( this ).data( 'uploader_title' ),
                      button: {
                        text: jQuery( this ).data( 'uploader_button_text' ),
                      },
                      multiple: false  
                    });


                    file_frame.on( 'select', function() {              
                      attachment = file_frame.state().get('selection').first().toJSON();
                    
                      console.log(attachment);

                      ngModel.$setViewValue(attachment.url);
                    //  scope.src= attachment.url;

                    //  console.log(scope.src);
                      
                     //   scope.$apply('src');
                        scope.$apply();
                    });

                    file_frame.open();

                });

            }
        };
    }]);





    globoApp.directive('trusthtml', function($compile , $sce) {
        return {
            restrict: "A",
            scope : {
              old : '@'
            },
            require: "ngModel",
            link: function(scope, element, attrs, ngModel) {

                element.bind("change", function(e) {
                    e.preventDefault();

                    var value = element.html();
                    var convert = $sce.trustAsHtml(value);
                    ngModel.$setViewValue(convert);

                    scope.$apply();                   

                });

            }
        };
    });





    globoApp.directive("geocomplete", function ($log, $timeout, $compile, $controller) {

         return {
            restrict: 'A',
            scope:{
              location:'=geocomplete',
              lat : '=lat',
              lng : '=lng',  
              city: '=city',
              country: '=country'
            },
            require: "ngModel",
            priority: 200,
            link: function (scope, element, attrs ,ngModel ) {



                var autocomplete = jQuery(element).geocomplete().bind("geocode:result", function (event, result) {
                    
                    if(result.geometry && result.geometry.location) {

                        var location = result.geometry.location;
                        var address = result.address_components;

                        $timeout(function() {
                            

                          

                            for(var i = 0; i < result.address_components.length; i += 1) {
                              var addressObj = result.address_components[i];
                              for(var j = 0; j < addressObj.types.length; j += 1) {


                                if (addressObj.types[j] === 'country') {
                                
                                

                                  scope.country = addressObj.long_name;

                                }

                                if (addressObj.types[j] === 'locality') {
                                 
                                 

                                  scope.city = addressObj.long_name;
                                }



                              }
                            }

                           
                            scope.lat = location.lat();
                            scope.lng = location.lng();

                            ngModel.$setViewValue(result.formatted_address);

                            scope.$apply(); 

                            
                          
                            
                        });
                    }


                });
            }
         };


    });













    globoApp.directive("geocompletemap", function ($log, $timeout, $compile, $controller) {

         return {
            restrict: 'A',
            scope:{
              location:'=geocomplete',
              lat : '=lat',
              lng : '=lng',  
              city: '=city',
              country: '=country',
              map : '='
            },
            require: "ngModel",
            priority: 200,
            link: function (scope, element, attrs ,ngModel ) {





                jQuery(element).geocomplete({
                    map: "#map_canvas",
                    markerOptions: {
                        draggable: true
                    },
                }).bind("geocode:result", function (event, result) {
                    
                    if(result.geometry && result.geometry.location) {

                        var location = result.geometry.location;
                        var address = result.address_components;

                        $timeout(function() {
                            
                            console.log(result);



                            console.log(result.address_components); // a result has multiple address components

                            for(var i = 0; i < result.address_components.length; i += 1) {
                              var addressObj = result.address_components[i];
                              for(var j = 0; j < addressObj.types.length; j += 1) {


                                if (addressObj.types[j] === 'country') {
                                  console.log(addressObj.types[j]); // confirm that this is 'country'
                                  console.log(addressObj.long_name); // confirm that this is the country name

                                  scope.country = addressObj.long_name;

                                }

                                if (addressObj.types[j] === 'locality') {
                                  console.log(addressObj.types[j]); // confirm that this is 'country'
                                  console.log(addressObj.long_name); // confirm that this is the country name

                                  scope.city = addressObj.long_name;
                                }



                              }
                            }

                            

                           // var country = result.address_components[ result.address_components.length - 1 ].long_name;
                           // var city = result.address_components[result.address_components.length - 2 ].long_name;

                            
                            // scope.city = city;
                            // scope.country = country;                            
                            scope.lat = location.lat();
                            scope.lng = location.lng();

                            ngModel.$setViewValue(result.formatted_address);

                            scope.$apply(); 

                          
                            
                        });
                    }


                });



                 jQuery(element).bind("geocode:dragged", function(event, latLng){
                        
                         scope.lat = latLng.lat();
                         scope.lng = latLng.lng();

                         scope.$apply(); 


                  });





                



            }
         };


    });







    globoApp.controller('createListCtrl',function($scope , $sce , wpapi , $http , $timeout ){



        $scope.cc = {};
        $scope.cc.company_name = '';
        $scope.company = {};

        // cc.industry = '-1';
        
        

        $scope.items = [{
            'title' : 'Profile',
            'type'  : 'profile'
        },{
            'title' : 'Contact',
            'type'  : 'contact'
        }];



        if( typeof(apicon.classifieds) != "undefined" ){
            

            $scope.all_industry = [];

            angular.forEach(apicon.classifieds , function(obj , index) {

                 $scope.all_industry.push(obj);

                 if( obj.sub){

                    angular.forEach( obj.sub , function(newobj , newindex){
                        $scope.all_industry.push(newobj);
                    });
                 }

            });



        }








        $scope.removeItem = function(hashKey , items) {

            angular.forEach( items , function(obj, index ){

                if (obj.$$hashKey === hashKey) {
                    items.splice(index, 1);
                    return;
                }
            });

        }



        $scope.addOption = function(){

            $scope.items.push({
                'title' : 'Untitled',
                'type'  : ''
            });

        }


        $scope.addSeconOption = function(items){

            items.push({
                'url':''
            });

        }

        $scope.sortableOptions = {

            handle: '.drag' ,
            placeholder: "ui-placeholder",
            forcePlaceholderSize: true

        }

        $scope.sortableTestimonial = {
            handle : '.testi-pin',
            placeholder: "ui-placeholder-second",
            forcePlaceholderSize: true

        }


        $scope.yourLocation = function(){

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }else{
                angular.element('.location').html('Your browser dosen\'t support geolocation ');
            }
        }


        function showPosition( position ){
             angular.element('.location').html('Your Lattitude : '+ position.coords.latitude +'<br/> and Longitude : ' + position.coords.longitude  );
        }


        


        $scope.publishCompany = function(){


            $scope.showLoader = true;
                  



            wpapi.http('custom','POST','save_draft', {'main':$scope.cc , 'items':$scope.items , 'company':$scope.company }).success(function(e){
                



                //if( e.success ){
                    $scope.showLoader = false;
                    window.location.href = apicon.site_url+'/dashboard';
               // }


            });

        }



        $scope.removeSinglePost = function( items , post_id) {
            
               wpapi.http('custom','POST','delete_single', { 'post_id': post_id }).success(function(e){

                    if( e.success){

                                    angular.forEach( items , function(obj, index ){

                                            if (obj.post_id === post_id) {
                                                items.splice(index, 1);
                                                return;
                                            }
                                    });

                    }

               });  

        }






        $scope.editPost = function(){

            
            $scope.showLoader = true;

              wpapi.http('custom','POST','edit_post', {'post_id': apicon.post_id ,'main': $scope.cc , 'items': $scope.items , 'company': $scope.company } ).success(function(e){
           
            
            

                // console.log(e);
                     $scope.showLoader = false;
                     window.location.href = apicon.site_url+'/dashboard';
                
            });
                
        }

        function isEmpty(obj) {
                for(var prop in obj) {
                    if(obj.hasOwnProperty(prop))
                        return false;
                }

            return true;
        }


        if( typeof edit_post != "undefined" ){

            if( angular.isDefined(edit_post.data) && edit_post.data != '' ){

                        $scope.cc = edit_post.data.main;
                        $scope.company = edit_post.data.company;
                        $scope.items = edit_post.data.items;

            }

        }



    });






/*
|--------------------------------------------------------------------------
|  Login & Register
|--------------------------------------------------------------------------
|
| 
|
*/



 //var globoAdmin = angular.module('globoAdmin',['globoservice','ui.bootstrap']);

 globoApp.controller('globoAdminCtrl',function($scope , wpapi ){
    $scope.user = {};
    $scope.new_user = {};
    $scope.alert = {};

    $scope.doLogin = function(){
        // console.log($scope.user);

        if ($scope.loginForm.$valid) {

            wpapi.http('custom','POST','user_login', $scope.user ).success(function(e){
                if( e.loggedin == false){

                    $scope.alert ={
                        'type' : 'danger',
                        'msg'  : e.message ,
                        'show' : true
                    };

                }else{

                    console.log(e);

                    $scope.alert ={
                        'type' : 'success',
                        'msg'  : e.message ,
                        'show' : true
                    };

                    // window.location = e.url+'/home';
                    // console.log(e.url+'/home');
                    
                    window.location = e.url+'/dashboard';


                }
            });

        }
    }



    $scope.doRegister = function(){

            var data = {
                'email'    : $scope.new_user.email ,
                'username' : $scope.new_user.username ,
                'password' : $scope.new_user.password 
            };

            if ($scope.registerForm.$valid) {

                wpapi.http('custom','POST','user_register', data).success(function(res){
                    
                        if(res.error){                       

                            $scope.alert ={
                                'type' : 'danger',
                                'msg'  : res.error[0] ,
                                'show' : true
                            };

                        }
                            console.log(res.success);

                        if( res.success ){

                            $scope.alert ={
                                'type' : 'success',
                               // 'msg'  :  'Successfully registered , Please log in to continue' ,
								'msg'  :  'Registration successful please check your email to activate account' ,
                                'show' : true
                            };

                        }
                        
                
                });
            }




    }




    $scope.closeAlert = function(scope){
        
        $scope.alert.show = false;
    }

 });




    /*
    |--------------------------------------------------------------------------
    | Subscription frontend
    |--------------------------------------------------------------------------
    |
    | 
    |
    */
   

   // angular.module( 'subsFront', [ 'ngSanitize' ,'globoservice' ] )
    globoApp.controller('subsFrontCtrl',function( $scope , $sce , wpapi ){
        
        if( angular.isDefined(apicon.packages.data) && apicon.packages.data != '' ){
            $scope.packages = apicon.packages.data;
        }
        if( angular.isDefined( apicon.currency_symbol ) ){
            $scope.currency_symbol = apicon.currency_symbol;
        }
        if( angular.isDefined( apicon.currency ) ){
            $scope.currency = apicon.currency;
        }

        if( angular.isDefined( apicon.user) ){
            $scope.user = apicon.user;
        }

        if( angular.isDefined( apicon.payment_key ) ){
            $scope.payment_key = apicon.payment_key;
        }

        


        $scope.updatePackage = function(pack){

            $scope.update_plan = pack;   

            wpapi.http('custom','POST','for_stripe', { 'pack':pack , 'key': $scope.payment_key }).success( function( res ){
                angular.element('#payform').html(res);
            });
        }


    });









    /*
    |--------------------------------------------------------------------------
    | Classified frontend
    |--------------------------------------------------------------------------
    |
    | 
    |
    */


   //var frontapp =  angular.module( 'classifiedFront', [] );

        globoApp.filter('dashed', function () {
                return function (text) {                
                    var str = text.replace(/\s+/g, '-');
                    return str.toLowerCase();
                };
        });


String.prototype.hashCode = function(){
    if (Array.prototype.reduce){
        return this.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
    } 
    var hash = 0;
    if (this.length === 0) return hash;
    for (var i = 0; i < this.length; i++) {
        var character  = this.charCodeAt(i);
        hash  = ((hash<<5)-hash)+character;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}



        globoApp.filter('tabdashed', function () {


          // function b64_to_utf8( str ) {
          //   return decodeURIComponent(escape(window.atob( str )));
          // }


                return function (text) {                
                    //var str = text.replace(/\s+/g, '-');
                    //return str.toLowerCase();
                    return String(text).hashCode();
                };
        });



       globoApp.controller('classifiedFrontCtrl',function( $scope ){
        
            if( angular.isDefined(apicon.classifieds) ){

                $scope.classifieds = apicon.classifieds;

            }


            $scope.doRedir = function(id){
              // id.preventDefault();
               // var industry = JSON.stringify({"industry":String(id)});

               // window.location.href = apicon.search_page_url+'#/industry='+ String(id);
              // window.location.href = apicon.search_page_url+'#/industry="'+ String(id)+'"';

               window.location.href = apicon.search_page_url+'/#/'+ jQuery.param({
                  'industry': String(id)
               });

               jQuery(window).scrollTop( 10 );


            }

       

    });

     globoApp.controller('homeCateCtrl', function($scope , $sce){
        
        

         if( typeof apicon.all_classifieds != "undefined" ){

              $scope.all_categories = apicon.all_classifieds.all;
              $scope.classifieds = apicon.classifieds;
         }

         $scope.quantity = 12;
         $scope.loadMoreAll = function(){
            $scope.quantity = parseInt($scope.quantity) + 4;
         }


         // $scope.doRedir = function(id){
         //    window.location.href = apicon.search_page_url+'#/?industry='+id;
         // }

            $scope.doRedir = function(id){

               // var industry = JSON.stringify({"industry":String(id)});
             //  window.location.href = apicon.search_page_url+'#/industry="'+ String(id)+'"';
               window.location = apicon.search_page_url+'/#/'+ jQuery.param({
                  'industry': String(id)
               });

               //  window.location.assign(apicon.search_page_url+'#/'+ jQuery.param({
               //    'industry': String(id)
               // }));

            // $location.path(apicon.search_page_url+'#/'+ jQuery.param({
            //        'industry': String(id)
            //   }));

             // jQuery(location).attr('href',apicon.search_page_url+'#/'+ jQuery.param({
             //       'industry': String(id)
             //  }));

               // window.location.href = apicon.search_page_url+'#/'+industry;
            }



    });







  /*
  |--------------------------------------------------------------------------
  | TOP SEARCH BAR
  |--------------------------------------------------------------------------
  |
  | 
  |
  */






    globoApp.controller('topSearch', function($scope){
       

        $scope.topsearch = {};

        $scope.topsearch.industry = -1;







              function codeLatLng(lat, lng) {

                var usercountry , usercity ;

                  var latlng = new google.maps.LatLng(lat, lng);



                  geocoder.geocode({'latLng': latlng}, function(results, status) {
                    
                    if (status == google.maps.GeocoderStatus.OK) {
                    

                               
                                if( results[1] ){

                                  for(var i = 0; i < results[1].address_components.length; i += 1) {
                                    
                                    var addressObj = results[1].address_components[i];
                                    
                                    for(var j = 0; j < addressObj.types.length; j += 1) {


                                      if (addressObj.types[j] === 'country') {            
                                        usercountry = addressObj.long_name;

                                        $scope.usercountry = usercountry;
                                      }
                                      if (addressObj.types[j] === 'locality') {
                                        usercity = addressObj.long_name;
                                        $scope.usercity = usercity;
                                      }
                                    }
                                  }        

                                }
                  

                         

                    } // status ok 

                  });
               

                }







        $scope.topYourLocation = function(){

                  if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition(showFromTop);
                      $scope.got_your_location = true;
                  }else{
                      alert('sorry , your browser dosen\'t support GEO Location API ');
                  }
        }


        function showFromTop( position ){

           codeLatLng( position.coords.latitude,position.coords.longitude ); // need to pass this as temp 

          $scope.lattitude = position.coords.latitude;
          $scope.longitude = position.coords.longitude;
          
        }






        $scope.doTopSearch = function(){
          
           // console.log($scope.topsearch);

           // get industry name form industry id 
           angular.forEach(apicon.classifieds , function( term , index ){
                if( term.term_id == $scope.topsearch.industry ){
                    $scope.industry_name = term.name;
                }else{
                    if( term.sub){
                       angular.forEach(term.sub , function(sub_term , index){
                            if( sub_term.term_id == $scope.topsearch.industry){
                                $scope.industry_name = sub_term.name;
                            }
                       });
                    }
                }
           });

           

           // console.log( 'radius : ' + $scope.radius );
           // console.log( 'days : ' + $scope.days );
           // console.log( 'country : ' + $scope.usercountry );
           // console.log( 'city : ' + $scope.usercity );
           // console.log( 'lattitude : ' + $scope.lattitude );
           // console.log( 'longitude : ' + $scope.longitude );







            var mySearch = {
                "category": $scope.industry_name,
                "key":$scope.topsearch.keywords,                
                "country": $scope.usercountry ? $scope.usercountry : $scope.topsearch.country ,
                "city": $scope.usercity ? $scope.usercity :  $scope.topsearch.city,
                "industry": $scope.topsearch.industry,
                "lattitude" : $scope.lattitude ,
                "longitude" : $scope.longitude,
                'radius'    : $scope.radius , 
                'days'      : $scope.days
            };

            

            if(!jQuery.isEmptyObject( mySearch ) ){ 
                
                window.location.href = apicon.search_page_url+'/#/' + jQuery.param(mySearch);

               //$scope.topsearch = false;$scope.topsearch.industy = -1;
            }
            else{              
                window.location.hash = '';
            }


        }









    });


    













    globoApp.controller('mapCtrl', function( $scope , $timeout , $rootScope  ){
        
        
        

        $timeout(function(){



        });







    });







  globoApp.directive("radiusslider", function() {
    return {
        restrict: 'A',
        scope: {
            min: "=",
            max: "=",
            radius : "=",
            onchnage : "&",
        },
        link: function(scope, elem, attrs ) {

            jQuery(elem).slider({
                range: 'min' ,
                min: scope.min,
                max: scope.max,
                value: scope.radius,
        
                slide: function(event, ui) { 
                    scope.$apply(function() {
                        scope.radius = ui.value;
                        
                    });
                },
                stop: function( event, ui ) {
                    scope.$apply(function(){
                      scope.onchnage( ui.value  );
                    });
                }
            });
        }
    }
});



















/*
|--------------------------------------------------------------------------
|  Post filtering
|--------------------------------------------------------------------------
|
| 
|
*/



     globoApp.controller('homePostCtrl', function( $scope, $sce, filterFilter , wpapi , $rootScope , $filter ,$timeout){
        
      


              $scope.selected = [];
              $scope.selected_name = [];
              $scope.selected_filter = '';


              $scope.filterTemp = {};







             if( typeof apicon.all_classifieds != "undefined" ){

                  $scope.all_categories = apicon.all_classifieds.all;
                  $scope.classifieds = apicon.classifieds;
             }

             $scope.quantity = 9;
             $scope.loadMoreAll = function(){
                $scope.quantity = parseInt($scope.quantity) + 3;
             }


              if( typeof all != "undefined"){

                    $scope.posts = all.data;
                    $scope.filtered = all.data;
              }



  /*
  |--------------------------------------------------------------------------
  | Left sidebar
  |--------------------------------------------------------------------------
  */  



            $scope.userLocation = {};
            $scope.userLocation.lattitude = '';
            $scope.userLocation.longitude = '';



            $scope.$watch('useraddress',function(newVal , oldVal){

                if( newVal == ''){
                    $scope.showAll();
                    $scope.userLocation = {};
                    $scope.userLocation.lattitude = '';
                    $scope.userLocation.longitude = '';


                    if( ownLocationMarker ){
                      ownLocationMarker.setMap(null);
                      ownLocationMarker = false;

                      circle.setMap(null);
                      circle = false;
                    }

                    

                }

            });



            $scope.$watchCollection( 'userLocation' , function (newVal, oldVal) {



              var userposition = {};
                  userposition.coords = {};


                    if( newVal.lattitude && newVal.lattitude != '' ){


                       if( newVal.lattitude != oldVal.lattitude ){

                          userposition.coords.latitude = newVal.lattitude;
                          userposition.coords.longitude = newVal.longitude;
                        

                          showPosition(userposition);

                          $scope.filterTemp.city = newVal.city;
                          $scope.filterTemp.country = newVal.country;

                          doFilterRender( $scope.filterTemp );


                        }


                    }





            });







              function codeLatLng(lat, lng) {

                var usercountry , usercity ;

                  var latlng = new google.maps.LatLng(lat, lng);



                  geocoder.geocode({'latLng': latlng}, function(results, status) {
                    
                    if (status == google.maps.GeocoderStatus.OK) {
                    

                               
                                if( results[1] ){

                                  for(var i = 0; i < results[1].address_components.length; i += 1) {
                                    
                                    var addressObj = results[1].address_components[i];
                                    
                                    for(var j = 0; j < addressObj.types.length; j += 1) {


                                      if (addressObj.types[j] === 'country') {            
                                        usercountry = addressObj.long_name;

                                        $scope.filterTemp.country = usercountry;
                                      }
                                      if (addressObj.types[j] === 'locality') {
                                        usercity = addressObj.long_name;
                                        $scope.filterTemp.city = usercity;
                                      }
                                    }
                                  }        

                                }
                  

                         

                    } // status ok 

                  });
               

                }














              $scope.yourLocation = function(){

                  if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition(showPosition);
                      $scope.got_your_location = true;
                  }else{
                      alert('sorry , your browser dosen\'t support GEO Location API ');
                  }
              }


              function showPosition( position ){


                


                  codeLatLng( position.coords.latitude,position.coords.longitude ); // need to pass this as temp 
                  //$scope.userLocation = {};


                  
                 

                  doFilterRender( $scope.filterTemp );

                     
                  $scope.radius = 4;


                  var clientPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                  if( !ownLocationMarker  ){

                          ownLocationMarker = new google.maps.Marker({              
                              'position': clientPosition,
                              'draggable': true,
                              'map': globomap,
                              'icon': '//mapsconnect.apple.com/business/img/pin.png',
                              'animation': google.maps.Animation.DROP,                      
                           });

                          globomap.setZoom(11);
                          globomap.panTo(ownLocationMarker.position);
                          
                        
                          // info window 
                          var owninfowindow = new google.maps.InfoWindow();
                          google.maps.event.addListener(ownLocationMarker, 'click', (function(ownLocationMarker) {
                            return function() {
                              owninfowindow.setContent('<h3>Your location</h3><br/> <small>you can also drag the marker </small>');
                              owninfowindow.open(globomap, ownLocationMarker);
                            }
                          })(ownLocationMarker));


                        circle = new google.maps.Circle({
                            center: ownLocationMarker.position,
                            map:globomap,
                            radius: 5000,
                            strokeColor: "red",
                            strokeOpacity:0.8,
                            strokeWeight: 2,
                            fillColor: "red",
                            //editable: true,
                        });
                        circle.bindTo('center',ownLocationMarker,'position');





                  }else{

                    if(clientPosition){

                        
                          ownLocationMarker.setPosition(clientPosition);

                          globomap.setZoom(11);
                          globomap.panTo(ownLocationMarker.position);
                              

                    }
                  }









                        // drag n drop 
                        // google.maps.event.addListener(ownLocationMarker, 'dragend', function() { 
                        
                        //       alert('marker dragged'); 
                        //       // angular.forEach(markers , function(marker , index){
                        //       //   if ( google.maps.geometry.spherical.computeDistanceBetween(marker.getPosition(),ownLocationMarker.getPosition()) < radius ) {
                        //       //       console.log(marker);
                        //       //   } 
                        //       // });
                        

                        // });


                        // google.maps.event.addListener(circle, 'radius_changed', function(){

                        //    // alert('circle dragged'); 

                        //     angular.forEach(markers , function(marker , index){
                        //       if ( google.maps.geometry.spherical.computeDistanceBetween(marker.getPosition(),ownLocationMarker.getPosition()) < $scope.radius ) {
                        //           console.log(marker);
                        //       } 
                        //     });
                        // });


                  
              }


              
              $scope.doRadiusSearch = function(radius){
                  

                  if( circle ){


                      circle.setRadius( parseInt(radius)*1000 );

                      var radius_filter = [];

                      angular.forEach(markers , function(marker , index){
                        if ( google.maps.geometry.spherical.computeDistanceBetween(  marker.getPosition(),ownLocationMarker.getPosition()) <  parseInt(radius)*1000 ) {
                            


                             if( all.data != "undefined"){
                                 angular.forEach(all.data , function( post , index){

                                    
                                      if(post.ID == marker.ID){
                                          radius_filter.push(post);
                                      }
                                 });

                                 $scope.filtered = radius_filter;

                              }
                        } 


                      });

                  }
                  



              }

            








              $scope.doAdd = function(category , name ){
            
                    if( jQuery.inArray(category, $scope.selected ) !== -1)
                    {
                       angular.forEach($scope.selected , function(obj,index){
                            
                            if( category == obj ){
                                $scope.selected.splice(index,1);
                                $scope.selected_name.splice(index,1);
                            }
                       });

                    }else{

                        $scope.selected.push(category);
                        $scope.selected_name.push(name);
                       

                    }


                    $scope.selected_filter = $scope.selected.join(', ');
                

                   //console.log( $scope.selected_name);

              }



              /*
                Watch and do filter
              */

              $scope.$watch('selected_filter',function(term){

                    if( $scope.selected.length ){



                        var filtered = []; 

                        var all_posts = $scope.posts;


                                  if( $scope.filterTemp.length > 0 &&  $scope.filtered.length > 0 && $scope.filtered.length < $scope.posts.length ){
                                      
                                      

                                      console.log( $scope.filtered );
                                      all_posts = $scope.filtered;
                                  }
                       
                                  


                                  angular.forEach( all_posts , function( item , index) {                                     
                                      var match = $scope.selected.filter(function(n) {
                                        return item.filter_id.indexOf( parseInt(n) ) > -1;
                                      });

                                      if( match.length){
                                          filtered.push(item);
                                      }
                                  });

                                  $scope.filtered = filtered;   
                                        
                        doRenderMap( $scope.selected_filter );


                    }else{


                        // already filtered or not 
                        if( $scope.filterTemp ){

                          doFilterRender($scope.filterTemp);
                          
                        }else{
                          $scope.filtered = $scope.posts;    
                        }


                        // all clear korte hobe 

                        
                                        
                        doRenderMap( $scope.selected_filter );
                    }   

              });




            function autoCenter() {      
              var bounds = new google.maps.LatLngBounds();      
              for (var i = 0; i < markers.length; i++) {  
                bounds.extend(markers[i].position);
              }      
              globomap.fitBounds(bounds);
            }
            


            /*
             Map rendering when category filter 
            */

           function doRenderMap( names ) {





                        var key = names;


                        if( names != "" ){
                            names = names.split(', ');
                        }else{
                            names = [];
                        }    

                        $timeout(function(){

                                
                                if ( names.length > 0 ) {

                                    var newmarkers = [];

                                    angular.forEach(markers , function(marker,index){
                                      

                                        if(jQuery.inArray( String(marker.industry) , names) == -1){
                                            
                                        }else{
                                            
                                            newmarkers.push(marker);
                                          

                                        }
                                    });


                                    console.log(newmarkers);

                                  markerCluster.clearMarkers();
                                
                                  markerCluster = new MarkerClusterer(globomap, newmarkers);

                                  if( !ownLocationMarker )
                                     autoCenter();

                                } else {





                                  if( ownLocationMarker ){
                                    ownLocationMarker.setMap(null);  
                                  }
                                  if( circle ){
                                    circle.setMap(null);  
                                  }
                                  
                                  
                                  globomap.setZoom(4);
                                  ownLocationMarker = false;
                                  circle = false;

                                  markerCluster.clearMarkers();
                                  markers = getAllmarker();
                                  markerCluster = new MarkerClusterer(globomap, markers);
                                 
                                  if( !ownLocationMarker )
                                     autoCenter();

                                   
                                }  



                        }); 

           }









            /*
             Map rendering when top bar search 
            */

           function doRenderMapLoc( temp ) {
                                
                        var new_marker=[];

                        $timeout(function(){


                                jQuery.each( markers , function( index, marker ){                                 

                                     var result = []; 

                                   if( temp.industry && temp.industry !='' ){                                         


                                      if (jQuery.inArray( temp.industry , marker.tags) !== -1)
                                      {   result.push(1);
                                      }else{
                                          result.push(0);
                                      }
                                   }



                                  if( temp.country && temp.country !='' ){                                         
                                      var country_match =  new RegExp("^.*"+temp.country+".*$","gi"); 
                                       if( marker.country.match(country_match) ){
                                          result.push(1);                                     
                                          
                                       }else{
                                          result.push(0);
                                       }
                                  }


                                    if( temp.city && temp.city !='' ){                                         
                                        var city_match =  new RegExp("^.*"+temp.city+".*$","gi"); 
                                         if( marker.city.match(city_match) ){
                                              result.push(1);                                          
                                            
                                         }else{
                                            result.push(0); 
                                         }
                                    }



                                    if( temp.key && temp.key !='' ){                                         
                                        var key_match =  new RegExp("^.*"+temp.key+".*$","gi"); 
                                         if( marker.title.match(key_match) ){
                                              result.push(1);                                           
                                            
                                         }else{
                                             result.push(0); 
                                         }
                                    } 


                                    // days 



                                    if( temp.days && temp.days !=''){

                                      console.log(temp.days , marker.days);
                                        if( parseInt(marker.days) <= parseInt(temp.days) ){
                                           result.push(1);
                                        }else{
                                          result.push(0);
                                        }

                                    }


                                    // radius 






                                      var got_it = true;

                                      angular.forEach(result , function(obj, index){
                                            if( obj == 0){
                                                got_it = false;                                                
                                            }
                                      });


                                     if(got_it){
                                        // jQuery('#map_canvas').gmap('addBounds', marker.position);
                                        
                                        new_marker.push(marker);

                                      }
                                    
                                     //marker.setVisible(got_it); 


                                });




  
                                  markerCluster.clearMarkers();
                                
                                  markerCluster = new MarkerClusterer(globomap, new_marker);

                                if( !ownLocationMarker )
                                     autoCenter();
                                



                       }); 




           }


           // map rendering 




              function isEmpty(obj) {
                  for(var prop in obj) {
                      if(obj.hasOwnProperty(prop))
                          return false;
                  }

                  return true;
              }





              // top location search 


                
                var temp = '';
                var newtemp = {};

               // var hash = window.location.hash;

                  var t = window.location;
                  var hash = t.hash || ((t = t.href.match(/#([^?]*)/)) && t[1]);


                function params_unserialize(p){
                    var ret = {},
                        seg = p.replace(/^\?/,'').split('&'),
                        len = seg.length, i = 0, s;
                    for (;i<len;i++) {
                        if (!seg[i]) { continue; }
                        s = seg[i].split('=');
                        ret[s[0]] = s[1];
                    }
                    return ret;
                }



                

            




                if(hash &&  hash.length >0 ){

                     
                     //temp = JSON.parse(temp);

                      temp = hash.split('#/')[1].trim();
                      temp = params_unserialize(temp);

                      console.log(temp);


                      

                     $scope.filterTemp = temp;
                     var tempData = {};
                     angular.forEach($scope.filterTemp, function(element, index){
                      // console.log(element);
                      if( index == 'category' ) {
                        tempData.category = element.split('+').join(' ');
                      } else if ( index == 'key') {
                        tempData.key = element.split('+').join(' ');
                      } else if ( index == 'country' ) {
                        tempData.country = element.split('+').join(' ');
                      } else if ( index == 'city' ) {
                        tempData.city = element.split('+').join(' ');
                      } else if ( index == 'industry' ) {
                        tempData.industry = element.split('+').join(' ');
                      }
                     });
                     
                     $scope.filterTemp = tempData;



                     if( temp.radius && temp.radius.length > 0  && temp.lattitude && temp.lattitude.length > 0 ){


                          var userpos = {};
                              userpos.coords = {};
                              userpos.coords.lattitude = temp.lattitude;
                              userpos.coords.longitude = temp.longitude;


                              console.log(userpos);

                              
                              $timeout(function(){
                                 showUserpositionFromUrl();
                              },2000);
                          //   



                     }else{

//
//Faysal vai did this part//
//

                       // filtering with the hashed data , now first list filter will happen then the map 
                       console.log($scope.filterTemp);
                       
                       var tempData = {};
                       angular.forEach($scope.filterTemp, function(element, index){
                         console.log(element);
                         if( index == 'category' ) {
                           tempData.category = element.split('+').join(' ');
                         } else if ( index == 'key') {
                            tempData.key = element.split('+').join(' ');
                         } else if ( index == 'country' ) {
                            tempData.country = element.split('+').join(' ');
                         } else if ( index == 'city' ) {
                            tempData.city = element.split('+').join(' ');
                         } else if ( index == 'industry' ) {
                            tempData.industry = element.split('+').join(' ');
                         }
                         
                         
                       });

                       $scope.filterTemp = tempData;
                       doFilterRender($scope.filterTemp);
                       // doFilterRender(tempData);


                     }




                }













                jQuery(window).on('hashchange', function() {

                       hash = window.location.hash;
                       temp = hash.split('#/')[1].trim();
                       
                       temp = params_unserialize(temp);
                      

                        // console.log(temp);

                     $scope.filterTemp = temp;

                     var tempData = {};
                     angular.forEach($scope.filterTemp, function(element, index){
                      // console.log(element);
                      if( index == 'category' ) {
                        tempData.category = element.split('+').join(' ');
                      } else if ( index == 'key') {
                        tempData.key = element.split('+').join(' ');
                      } else if ( index == 'country' ) {
                        tempData.country = element.split('+').join(' ');
                      } else if ( index == 'city' ) {
                        tempData.city = element.split('+').join(' ');
                      } else if ( index == 'industry' ) {
                        tempData.industry = element.split('+').join(' ');
                      }
                     });

                     $scope.filterTemp = tempData;

                     doFilterRender($scope.filterTemp);


                      

                });






                function showUserpositionFromUrl(){

                


                 
                  //$scope.userLocation = {};


                  
                 // post filter 
                  doFilterRender( $scope.filterTemp );



                  // map works great here 

                  $scope.got_your_location = true;

                     
                  $scope.radius = $scope.filterTemp.radius;


                  var clientPosition = new google.maps.LatLng( $scope.filterTemp.lattitude , $scope.filterTemp.longitude);

                  if( !ownLocationMarker  ){

                          ownLocationMarker = new google.maps.Marker({              
                              'position': clientPosition,
                              'draggable': true,
                              'map': globomap,
                              'icon': 'https://mapsconnect.apple.com/business/img/pin.png',
                              'animation': google.maps.Animation.DROP,                      
                           });

                          globomap.setZoom(11);
                          globomap.panTo(ownLocationMarker.position);
                          
                        
                          // info window 
                          var owninfowindow = new google.maps.InfoWindow();
                          google.maps.event.addListener(ownLocationMarker, 'click', (function(ownLocationMarker) {
                            return function() {
                              owninfowindow.setContent('<h3>Your location</h3><br/> <small>you can also drag the marker </small>');
                              owninfowindow.open(globomap, ownLocationMarker);
                            }
                          })(ownLocationMarker));


                        circle = new google.maps.Circle({
                            center: ownLocationMarker.position,
                            map:globomap,
                            radius: parseInt($scope.radius)*1000,
                            strokeColor: "red",
                            strokeOpacity:0.8,
                            strokeWeight: 2,
                            fillColor: "red",
                            //editable: true,
                        });
                        circle.bindTo('center',ownLocationMarker,'position');





                  }



                  // need to do some map filtering too . 

                  //radius & days 















              }























                // hash url object
                function doFilterRender(temp){



                    $timeout(function(){

                        $scope.filtered = $scope.posts;
                        if( temp.industry == -1){
                            temp.industry = '';
                        }else{

                            //doRenderMap( temp.industry );
                        }


                        var store = [];

                        if( temp.industry && temp.industry != '' ){  

                            angular.forEach( $scope.filtered , function(obj, index){
                                

                                if (jQuery.inArray( parseInt(temp.industry) , obj.filter_id ) !== -1){

                                         console.log('dhukse');
                                         store.push(obj);
                                }

                            });



                            $scope.filtered = store;


                           //  $scope.filtered = $filter('filter')( $scope.filtered, { filter_id : temp.industry  });

                        }


                        console.log($scope.filtered);




                        if( temp.country && temp.country !=''){
                            $scope.filtered = $filter('filter')( $scope.filtered, { country: temp.country  }); 
                        }
                           
                        if( temp.city && temp.city !=''){
                            $scope.filtered = $filter('filter')( $scope.filtered, { city: temp.city  }); 
                        }


                         if( temp.key && temp.key !=''){
                            $scope.filtered = $filter('filter')( $scope.filtered, temp.key);
                         }



                         // publish days 

                         if( temp.days && temp.days !=''){

                              var days_filter = [];


                              angular.forEach($scope.filtered , function( post , index ){
                                  if( parseInt(post.days) <= parseInt(temp.days) ){
                                     days_filter.push(post);
                                  }
                              });

                              $scope.filtered = days_filter;


                         }







                         doRenderMapLoc( temp );


                    },1500);


                }









            $scope.showAll = function(){

                if( typeof all != "undefined") {

                    $scope.posts = all.data;
                    $scope.filtered = all.data;

                    $scope.selected_name = [];
                    $scope.filterTemp = {};
                    $scope.userLocation = {};

                    doRenderMap('');
                }

            }







    });

    // end of post control


























    /*
    |--------------------------------------------------------------------------
    | Bookmark app
    |--------------------------------------------------------------------------
    |
    | 
    |
    */
   

    jQuery('#bookmarkModal').on('show.bs.modal', function (event) {

      var button = jQuery(event.relatedTarget);
      var recipient = button.data('whatever'); 
      var modal = jQuery(this);

      // ajax 

      
      modal.find('.modal-body div.bookmark_id').html(recipient);

    });




   // var gbook = angular.module('gbBookmark',['globoservice']);



        globoApp.controller('gbBookmarkCtrl',function($scope , wpapi){


            $scope.bookmark = {};

            if( typeof apicon.post_id != undefined){
                $scope.bookmark.id = apicon.post_id;
            }
             

             
            

            // from localize
            if( typeof bookmarks.data != undefined){

              //  console.log(bookmarks.data );
              
              if( bookmarks.data){

                angular.forEach(JSON.parse(bookmarks.data), function(obj , index){

                       
                        if( parseInt(obj.id) === parseInt( $scope.bookmark.id) ){
                            
                            console.log(obj);
                            $scope.bookmark.notes = obj.notes;
                        }
                });


             }

            }




        $scope.saveBookmark = function(){

           
            


             wpapi.http('custom','POST','add_bookmark', $scope.bookmark ).success( function( res ){

                    if(res.success){

                        jQuery('#bookmarkModal').modal('hide');
                        location.reload();
                    }

             });

            

        }



    });




   
        globoApp.controller('bookmarkShowCtrl',function( $scope , wpapi ){


            if( typeof JSON.parse(bookmarks.data) != undefined){
                $scope.bookmarks = JSON.parse(bookmarks.data);
            }



            $scope.removeBookmark = function(bookmark){


                wpapi.http('custom','POST','remove_bookmark', bookmark ).success( function( res ){
                      
                    $scope.bookmarks = res.bookmarks;

                });


                 // angular.forEach($scope.bookmarks , function(obj , index){
                 //     if( obj.id == bookmark.id){
                 //        $scope.bookmarks.splice(index , 1 );
                 //     }
                 // });


            }


            
    });









    /*
    |--------------------------------------------------------------------------
    | Subscription plans
    |--------------------------------------------------------------------------
    |
    | 
    |
    */






var subPlans = angular.module('CreatePlans',[ 'ui.sortable','globoservice' ,'ui.bootstrap']);

    subPlans.directive('txContenteditable', ['$compile', function($compile) {
        return {
            restrict: "A",
            scope : {
              old : '@'
            },
            require: "ngModel",
            link: function(scope, element, attrs, ngModel) {

                element.bind("click", function(e) {
                    e.preventDefault();
                });

                element.attr("contenteditable", true);

                function read() {
                    ngModel.$setViewValue(element.html());
                }

                ngModel.$render = function() {

                        element.html(ngModel.$viewValue || '' );

                };

                ngModel.$isEmpty('tareq');

                element.bind("keydown", function(e) {
                    if (e.keyCode == 13) {
                        document.execCommand('insertHTML', false, '<br><br>');
                        return false;
                    }
                });

                element.bind("blur keyup change", function(e) {
                    scope.$apply(read);
                });
            }
        };
    }]);





    subPlans.filter('dashed', function () {
            return function (text) {                
                var str = text.replace(/\s+/g, '-');
                return str.toLowerCase();
              //return atob(text);
            };
    });





    subPlans.controller('MakeSubscription',['$scope','$http','wpapi' ,function( $scope, $http,wpapi ){



        $scope.plan = {};

        $scope.allPlans = [{
            'id' : 1,
            'title' : 'Free',
            'list_quota': 2,
            'membership_type': 'month',
            'membership_price': 0,
            'details': false

        }];
        $scope.alert ={};

   
        $scope.savePlan = function(){

            if ($scope.subscriptionForm.$valid) {

                if( $scope.allPlans.length == 0 ){

                    var id = 1;

                }else{

                    var id = $scope.allPlans[$scope.allPlans.length-1].id  + 1;

                }
                
                
                $scope.allPlans.push({
                    'id': id,
                    'title' : $scope.plan.title,
                    'list_quota' : $scope.plan.list_quota,                
                    'membership_type' : $scope.plan.membership_type,
                    'membership_price' : $scope.plan.membership_price,
                    'custom' : $scope.plan.custom,
                    'details' : false
                });
                $scope.plan = {};
            }
        }

        $scope.removePlan = function(scope) {

              $scope.allPlans.splice($scope.allPlans.indexOf(scope),1);
        };

        $scope.storePlans = function(){

            wpapi.http('custom','POST','subscription_create', { 'data':$scope.allPlans} ).success( function( res ){
                $scope.alert.msg  = "Successfully Added !";
                $scope.alert.type ="success";
                $scope.alert.show = true;
            });

        }   


        $scope.sortableOptions = {
            handle: '.drag'      
        }


        $scope.closeAlert = function(scope){
            
            $scope.alert.show = false;
        }



        // from localize
        if( angular.isDefined( apicon.packages ) && apicon.packages ){
            $scope.allPlans = apicon.packages.data;


        }


        if( angular.isDefined( apicon.payment_option.currency_symbol ) ){
            $scope.currency_symbol = apicon.payment_option.currency_symbol;
        }



    /*
    |--------------------------------------------------------------------------
    | Push to payment gateway 
    |--------------------------------------------------------------------------
    */

    $scope.pushToGateway = function(){
        $scope.showLoading = true;
        wpapi.http('custom','POST','push_to_gateway', {'push':true} ).success( function( res ){
            

            $scope.showLoading = false;
            location.reload();

        });
    }



}]);





/*
|--------------------------------------------------------------------------
|  Payment gateway
|--------------------------------------------------------------------------
|
| 
|
*/

 // var globoUsers = angular.module('globoUsers',['globoservice' , 'ui.bootstrap']);

 //  globoUsers.controller('globoUsrCtrl', function($scope, wpapi, $http){

 //    if( angular.isDefined(globo_users) ){
      
 //      $scope.users = globo_users.data;

      
 //    }

 //  }); 



 var globoGate = angular.module('globoGate',['globoservice' , 'ui.bootstrap'])
 .controller('globoGateCtrl',function( $scope , wpapi ){
    
    $scope.payment = {};
    $scope.payment.selected_gateway = 'stripe';  
    $scope.payment.selected_mode = 'test';  

    $scope.alert ={};



    $scope.savePaymentInfo = function(){

        if ($scope.paymentForm.$valid) {

            wpapi.http('custom','POST','save_payment_info', $scope.payment ).success(function(res){
                
                    $scope.alert.msg ="Successfully Added !";
                    $scope.alert.type ="success";
                    $scope.alert.show =true;
                
            });
        
        }

    }



    $scope.closeAlert = function(scope){
        
        $scope.alert.show = false;
    }



    // from localize
    if( angular.isDefined( apicon.payment_option ) ){
        $scope.payment = apicon.payment_option;
    }


 });



globoApp.directive("starRating", function() {
  return {
    restrict : "A",
    template : "<ul class='rating'>" +
               "  <li ng-repeat='star in stars' ng-class='star' ng-click='toggle($index)'>" +
               "    <i class='fa fa-star'></i>" + //&#9733
               "  </li>" +
               "</ul>",
    scope : {
      ratingValue : "=",
      max : "=",
      onRatingSelected : "&"
    },
    link : function(scope, elem, attrs) {
      var updateStars = function() {
        scope.stars = [];
        for ( var i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled : i < scope.ratingValue
          });
        }
      };
      scope.toggle = function(index) {
        scope.ratingValue = index + 1;
        scope.onRatingSelected({
          rating : index + 1
        });
      };
      scope.$watch("ratingValue", function(oldVal, newVal) {
        if (newVal) { updateStars(); }
      });
    }
  };
});


 globoApp.controller('ratingCtrl', function($scope , wpapi){

  $scope.rating = {
        'overall'  : 5,
        'quality'  : 5,
        'support'  : 5,
        'price'    : 5,
        'products' : 5,
        'name'     :'',
        'web'      :'',
        'email'    :'',
        'comments' :'',
        'date'     : new Date(),

   };


   $scope.submit_rating = false;

  
    $scope.doRate = function(){
        console.log($scope.rating);

        if ($scope.companyForm.$valid) {

            var avg = ( ( parseInt($scope.rating.overall) + parseInt($scope.rating.quality) + parseInt($scope.rating.support) + parseInt($scope.rating.price) + parseInt($scope.rating.products) )/5);

            


            wpapi.http('custom','POST','save_rating',{id:apicon.post_id , rating:$scope.rating , avg : avg }).success(function(res){
                if( res.success == true){
                   // location.reload();
                   $scope.submit_rating = true;
                }
            });

        }

    }
        
 });



 globoApp.controller('showRatingCtrl', function($scope){

    if( typeof globorating != undefined){
        $scope.all_rating = globorating.all;   
    }

    $scope.getNumber = function(num) {
         return new Array(num);   
    }
     
 });







globoApp.controller('companySlide', function($scope ){
    
    $scope.doShowMap = function(){


        if( typeof globorating != undefined ){

          jQuery("#company_map_canvas").goMap({

            maptype: 'ROADMAP',
            zoom: 13,
            scrollwheel: true,
            disableDefaultUI:false ,
            address: globorating.address,
            markers: [{
                latitude: globorating.lat,
                longitude: globorating.lng,
                icon: 'https://dl.dropboxusercontent.com/u/37351231/marker.png',
                html: globorating.title
              }]
          });


        }



    }



    $scope.doStreet = function(){
       
       var gmm =  GMaps.createPanorama({
            el: '#company_map_canvas_street',
            lat : globorating.lat,
            lng : globorating.lng,
          });


       google.maps.event.trigger(gmm, 'resize');

    }



});





    globoApp.directive("geostatic",function($timeout, $compile, $controller){
        return {
            restrict: 'A',
            scope:{              
              lat : '=lat',
              lng : '=lng',
            },           
            template: '<div class="contact-map"></div>',
            link: function (scope, element, attrs  ) {

                //console.log(element.children()[0]);

                jQuery(element.children()[0]).goMap({

                    maptype: 'ROADMAP',
                    zoom: 15,
                    scrollwheel: true,
                    address: globorating.address,
                    markers: [{
                        latitude: scope.lat,
                        longitude: scope.lng,
                        icon: 'https://dl.dropboxusercontent.com/u/37351231/marker.png',
                        html: 'hello'
                      }]
                });

                 $compile(element.contents())(scope);


                
            }

         }   

    });






globoApp.controller('geoStat', function($scope){
    


});




  

  var claimApp = angular.module('claimApp',['globoservice']);

      claimApp.controller('claimCtrl',function($scope , wpapi){

// <!-- claim_id , result , user id , company _id , owner_email , claim_email  -->
          $scope.doSubmit = function(claim_id , result , user_id , company_id , owner_email , claim_email ){

             
              $scope.claim = {
                  claim_id : claim_id,
                  result : result , 
                  user_id : user_id , 
                  company_id : company_id ,
                  owner_email: owner_email, 
                  claim_email:claim_email
              };





               wpapi.http('custom','POST','claim_result', {'claim':$scope.claim }).success(function(result){
                  location.reload();
               });

          }

      });



  (function($){
   // write code here
  
 
    if( apicon.braintree_token ){
        braintree.setup(apicon.braintree_token, "dropin", {
          container: "payment-form"
        });
    }

})(jQuery);



















