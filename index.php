<?php include"page/head.php";?>


<style type="text/css" title="dynamic-css" class="options-output">body{font-family:Lato,Georgia, serif;line-height:16px;font-weight:400;font-size:16px;}h1,h2,h3,h4,h5{line-height:undefinedpx;}</style>
      <style type="text/css">


      .slider-content .ms-nav-prev::after, 
.slider-content .ms-nav-next::after{background: #0d6a03 !important;}
.btn-default {
  color: #fff;
}

ul#menu-footer-menu{
  margin: 0 !important;
  padding: 0 !important;
}
ul#menu-footer-menu li {
  border-bottom: 1px solid;
  list-style: outside none none;
  margin: 0;
 ;
  text-transform: capitalize;
}
.ms-anim-layers {
  display: block ;
  height: 100%;
}
.slider-content .master-slider .ms-layer {
    height: 100%;
    position: relative;
    top: 0 !important;
    width: 100%;
}
.slider-content .master-slider .ms-layer a {
  display: block;
  height: 100%;
  position: relative;
  top: 0 !important;
  width: 100%;
}
.author{display:none; }

      </style>



  </head>

<body class="home page-template page-template-template-homepage1 page-template-template-homepage1-php page page-id-2696">
<div id="main-wrapper">

<?php include "page/header.php";?>

<div>

        <div id="page-content" class="home-slider-content" >


            <div class="container" ng-controller="homeCateCtrl">



                <div class="home-with-slide">
                    <div class="row">

                        <div class="col-md-9 col-md-push-3">
                            <div class="page-content">

                                <div class="change-view">
                                    <div class="filter-input">
                                        <input type="text" placeholder="Filter by Keywords" ng-model="filterSubcategory">
                                    </div>
                                </div>
                                <!-- end .change-view -->


                                <div class="product-details">
                                    <div class="tab-content">
<!-- 

ALL CATEGORY                                     
 -->
                                        <div class="tab-pane active" id="all-categories">
                                              
                                                <h3>TENNAIRA<span> Categories</span></h3>

                                                <div class="row clearfix">

                                                  <div class="col-md-3 col-sm-4 col-xs-6" ng-repeat="category in all_categories | limitTo: quantity  | filter: filterSubcategory">
                                                    <div class="category-item">
  <a href="industry/%7b%7bcategory.html"><i ng-class="category.icon"></i>{{category.name}}</a>

                                                      <img ng-if="category.image" ng-src="{{category.image}}" alt="{{category.name}} " class="category_image" style="position:absolute; left:0; width:100%; height:100%; opacity:0.5;">

                                                  
                                                        <!--  <a href="#" ng-click="doRedir(category.term_id)">
                                                        
                                                        <i ng-class="category.icon"></i>
                                                        
                                                        <span ng-bind="category.name"></span>
                                                        
                                                      </a>-->
                                                    </div>
                                                  </div>
                                                  <div class="view-more" ng-if="quantity < all_categories.length">
                                                    <a class="btn btn-default text-center" data-ng-click="loadMoreAll()"><i class="fa fa-plus-square-o"></i>View More</a>
                                                  </div>


                                              </div>
                                        </div>
                                        <!-- end .tabe-pane -->

                                        
                                        <!-- 

                                        SUB CATEGORY 

                                         -->

													
										<div class="tab-pane" ng-repeat="category in classifieds" id="{{category.name | tabdashed }}">
                                              
                                                <h3> <strong ng-bind-html="category.name"></strong> <span class="comments">{{category.sub.length}}</span></h3>

                                                <div class="row clearfix">
                                                  <div class="col-md-3 col-sm-4 col-xs-6" ng-repeat="sub_category in category.sub | filter: filterSubcategory">
                                                    <div class="category-item">

                                                     <a href="industry/%7b%7bsub_category.html"><i ng-class="sub_category.icon"></i>{{sub_category.name}}</a>

                                                       <img ng-if="sub_category.image" ng-src="{{sub_category.image}}" alt="{{sub_category.name}}" class="sub_category_image" style="position:absolute; left:0; width:100%; height:100%; opacity:0.5;">
                                                      <!--  <a href="#" ng-click="doRedir(sub_category.term_id)"><i ng-class="sub_category.icon"></i>{{sub_category.name}}</a> -->
                                                    </div>
                                                  </div>


                                                  <div ng-if="( category.sub | filter:filterSubcategory).length==0">
                                                        <br><br>
                                                        <div class="text-center">
                                                            <h4>Sorry , No result found !</h4>    
                                                        </div>
                                                        
                                                  </div>


                                              </div>
                                        </div>




                                        


                                    </div>
                                    <!-- end .tabe-content -->

                                </div>
                                <!-- end .product-details -->
                            </div>
                            <!-- end .page-content -->
                        </div>








                        <div class="col-md-3 col-md-pull-9 category-toggle">
                            <button><i class="fa fa-list"></i></button>

                            <div class="page-sidebar">

                                <!-- Category accordion -->
                                <div id="categories">
                                    <div class="accordion">
                                        <ul class="nav nav-tabs home-tab" role="tablist">
                                            
<!-- 

SIDEBAR 
 -->
                                            <li class="active">
                                               <a href="#all-categories" role="tab" data-toggle="tab">All Categories                                                    <span>Display all sub-categories</span>
                                                 </a>
                                            </li>
				
											<li ng-repeat="category in classifieds">
                                                <a href="#{{category.name | tabdashed }}" role="tab" data-toggle="tab"> <strong ng-bind-html="category.name"></strong>
                                                    <span>{{category.subtitle}}</span>
                                                </a>
                     
                                            </li>  

                                     <!--        <li>
                                                <a href="#" role="tab" data-toggle="tab"><i class="fa fa-angle-right"></i></a>

                                            </li> -->



                                        </ul>
                                    </div>
                                    <!-- end .accordion -->
                                </div>
                                <!-- end #categories -->

                            </div>
                            <!-- end .page-sidebar -->

                        </div>
                        <!-- end grid layout-->
                    </div>
                    <!-- end .row -->






                </div>
                <!-- end .home-with-slide -->
            </div>
            <!-- end .container -->
        </div>
        <!-- end #page-content -->








<!-- 


    FEATURED POST 

	 -->	
     
	        <div class="featured-listing" id="featured-list" style="background: url('img/content/feature-bg.jpg') top center no-repeat;">
	            <div class="container">
	                <div class="row clearfix">
	                    <h2><strong>Featured</strong> Listing</h2>

						
								<div class="col-md-3 col-sm-4 col-xs-6">
			                        <div class="single-product">
			                            <figure>

											
                                                
			                                	<img src="wp-content/uploads/doggy-2.jpg" alt="doggy-2 Ceramic Decoration Dog">
	
			                                	

                                                <div class="rating">
                                                    <ul class="list-inline">

                                                                                                                        
                                                                <li><a href="#"><i class="fa fa-star-o"></i></a></li>

                                                                                                                            
                                                                <li><a href="#"><i class="fa fa-star-o"></i></a></li>

                                                                                                                            
                                                                <li><a href="#"><i class="fa fa-star-o"></i></a></li>

                                                                                                                            
                                                                <li><a href="#"><i class="fa fa-star-o"></i></a></li>

                                                                                                                            
                                                                <li><a href="#"><i class="fa fa-star-o"></i></a></li>

                                                                                                                    
                                                    </ul>

                                                    <p>Featured</p>

                                                </div>
                                                <!-- end .rating -->

			                                

			                                <figcaption>
			                                    
			                                    <div class="read-more">
			                                        <a href="#"><i class="fa fa-angle-right"></i> Read More</a>
			                                    </div>

			                                </figcaption>
			                            </figure>
			                            <h4><a href="#">Ceramic Decoration Dog</a></h4>

			                            <h5>
																									<a href="#">
															Decoration accessories														</a>

														, 														<a href="#">
															Home and Office														</a>

																	                            </h5>

			                        </div>
			                        <!-- end .single-product -->
		                    	</div> 

						
	                </div>
	                <!-- end .row -->

	            </div>
	            <!-- end .container -->
	        </div>
	        <!-- end .featured-listing -->




        



        
            <div class="classifieds-content">
                <div class="container">
                    <!-- CLSSIFIEDS-CATEGROY BEGIN -->
                    <div class="row">
                    	
                    		<div id="classfiedCtrl" ng-controller="classifiedFrontCtrl">

                                <div class="heading-section clearfix">
                                    <h1>Classifieds</h1>

                                    <!-- <a href="#" class="btn btn-default"><i class="fa fa-plus"></i> Post Your Ad</a> -->

                                    <form action="#">
                                        <input type="text" placeholder="Search by keywords" ng-model="filterdata">

                                        <button type="submit"><i class="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                                <!-- END .heading-section -->

                                <div class="clearfix"></div>

    		                    
									
									<ul class="classifieds-category list-inline">
														<li style="width: 24%;">
	                                <a href="#"></i>Home and Office <span>(1)</span></a>
                                    <ul class="sub-category">							      
								  <li>
								 <a href="#"></i>Decoration accessories <span>(1)</span></a>
								     </li>
    		                        </ul>
								  </li> 								</ul>
    		                        <!-- END .CLASSIFIES-CATEGORY -->
    		                </div><!-- end classfiedController -->
    	                



                    </div>  <!-- End .row -->
                    <!-- End .row -->
                </div>
                <!-- END .container-->
            </div>
            <!-- classifieds-content -->
        


        


    
    

</div>
    



<footer id="footer">
    <div class="main-footer">

      <div class="container">
        <div class="row">

            
	<div class="col-sm-6 col-md-3">
		<h3>Advertisement</h3>			
<div class="textwidget"><a href="#" title="Banner" target="_blank">
<img src="wp-content/uploads/tf_125x125_v12.gif" alt="Banner" /></a>
<a href="#" title="Banner" target="_blank"><img src="wp-content/uploads/gr_125x125_v12.gif" alt="Banner" /></a>
<a href="#" title="Banner" target="_blank"><img src="wp-content/uploads/tutorials_125x125_v12.gif" alt="Banner" /></a>
<a href="#" title="Banner" target="_blank"><img src="wp-content/uploads/cc_125x125_v12.gif" alt="Banner" /></a></div>
			</div>


            
	<div class="col-sm-6 col-md-3">
		<h3>download our free app</h3>	
		<div class="textwidget"><a href="" >
		<img   style=" width: 100%;" src="wp-content/uploads/google.png"  alt="google play" />
</a></div>
			</div>


            
	<div class="col-sm-6 col-md-3">
		<h3>POPULAR CATEGORIES</h3><ul class="product-categories"><li class="cat-item cat-item-367 cat-parent"><a href="#">Education</a></li>
<li class="cat-item cat-item-415 cat-parent"><a href="#">Electronics</a></li>
<li class="cat-item cat-item-373 cat-parent"><a href="#">Fashion</a></li>
<li class="cat-item cat-item-383"><a href="#">Football</a></li>
<li class="cat-item cat-item-397 cat-parent"><a href="#">Home Office</a></li>
<li class="cat-item cat-item-402 cat-parent"><a href="#">Jobs &amp; Services</a></li>
<li class="cat-item cat-item-392 cat-parent"><a href="#">Phone and tablets</a></li>
<li class="cat-item cat-item-424 cat-parent"><a href="#">Real Estate</a></li>
<li class="cat-item cat-item-379 cat-parent"><a href="#">Sport</a></li>
<li class="cat-item cat-item-384 cat-parent"><a href="#">Vehicles</a></li>
</ul>	</div>


            
	<div class="col-sm-6 col-md-3">
		<h3>POPULAR CATEGORIES</h3><div class="menu-footer-menu-container"><ul id="menu-footer-menu-1" class="menu"><li id="menu-item-3999" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3999"><a href="about-us/index.html">About Us</a></li>
<li id="menu-item-4000" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4000"><a href="#">Contact us</a></li>
<li id="menu-item-3985" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3985"><a href="#">privacy</a></li>
<li id="menu-item-3986" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3986"><a href="#">Terms and Condition</a></li>
<li id="menu-item-4070" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-4070"><a href="#">POST AN AD</a></li>
</ul></div>        <div class="newsletter">
            <h3>Stay Connected</h3>            <ul class="list-inline">
                
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                
                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                              
            </ul> <!-- end .social-icons -->

        </div>
      
    	</div>


          
        </div> <!-- end .row -->
      </div> <!-- end .container -->
    </div> <!-- end .main-footer -->

    <div class="copyright">
      <div class="container">

        <p>© Copyright 2016 Tennaira.com Limited. All rights reserved. Terms of Use &amp; Privacy Policy</p>
      </div> <!-- END .container -->
    </div> <!-- end .copyright-->
  </footer> <!-- end #footer -->


<style>
  .btn-default{
    background-color: #0e7a02 !important;
  }
  .blog-list .date{
    background-color: #0e7a02 !important;
  }
  
  .header-search .header-search-bar .search-btn{
    background-color: #0e7a02 !important;
  }

  #header .header-top-bar .header-logo a .fa{
    color: #0e7a02 !important;
  }

  #header .header-nav-bar{
    border-color: #0e7a02 !important;
  }

  .post-sidebar h2{
    border-left :3px solid #0e7a02 !important;
  }

  .slider-content .customNavigation .btn{
    background-color: #0e7a02 !important;
  }

  .accordion ul li.active{
    border-left:3px solid #0e7a02;
  }

  .featured-listing .single-product figure .rating p{
    background: #0e7a02 !important;
  }

  
  .register-content .registration-details{
    background-color: rgba( 14, 122, 2, 0.75);
  }

  .register-content .registration-details .alternate h2{
    color: #0e7a02 !important;
  }

  .btn-default-inverse:hover, .btn-default-inverse:focus, .btn-default-inverse.focus, .btn-default-inverse:active, .btn-default-inverse.active, .open > .dropdown-toggle.btn-default-inverse{
    color: #0e7a02 !important;
  }

  a:hover, a:focus{
    color: #0e7a02 !important;
  }

  .accordion ul li:hover{
    background-color: #0e7a02 !important;
  }
  .accordion ul li a:hover{
    /*background-color: #0e7a02 !important;*/
    color: #555 !important;
  }

  .company-sidebar .company-category li.active, .company-sidebar .company-category li:hover{
    background-color: #0e7a02 !important;
  }

  .company-sidebar .company-category li a{
    color: #0e7a02 !important;
  }

  .company-sidebar .company-category li a:hover, .company-sidebar .company-category li.active a{
    color: #333 !important;
  }

  .company-contact .address-details .fa{
    background: #0e7a02 !important;
  }

  .company-product .single-product figure figcaption, .company-portfolio .single-product figure figcaption{
    background-color: rgba( 14, 122, 2, 0.8);
  }

  .featured-listing .single-product figure figcaption{
    background-color: rgba( 14, 122, 2, 0.8);
  }

  .company-events .date{
      background: #0e7a02;
  }

  .date-month a{
    color: #333 !important;
  }

  .classifieds-content .classifieds-category a:hover span{
    color: #0e7a02;
  }

  .btn-default-inverse{
    color: #0e7a02;
  }




  .company-sidebar .company-category li.active:after{
      border-left: 7px solid #0e7a02 !important;
  }

  .company-sidebar h2{
    border-left: 3px solid #0e7a02 !important;
  }

  .company-profile .social-link ul li{
    background-color: #0e7a02 !important;
  }

  #footer a{
    color: #0e7a02 !important;
  }

  #footer .main-footer .newsletter ul li{
    background-color: #0e7a02 !important;
  }

  #footer .main-footer .newsletter button{
    background-color: #0e7a02 !important;
  }

  #footer .main-footer .newsletter ul li a{
      color: #333333 !important;
  }

  .btn-default:hover, .btn-default:focus{
    color: #0e7a02 !important;
  }

  .rating li.filled{
    color: #0e7a02 !important;
  }

  .company-heading-view .button-content button.active, .company-heading-view .button-content button:hover{
    background: #0e7a02 !important;
  }

  .about-us .member-details .porfile-pic ul li{
    background-color: #0e7a02 !important;
  }

  .blog-post .share-this ul li{
    background-color: #0e7a02 !important;
  }

  .shortcodes .nav-tabs > li.active > a{
    background: #0e7a02 !important;
    border: 1px solid #0e7a02 !important;
  }

  .shortcodes .nav-tabs{
    border-bottom: 3px solid #0e7a02 ;
  }

  .shortcodes .vertical.tab-content{
    border-left: 3px solid #0e7a02 ;
  }

  .category-item:hover{
    background-color: #0e7a02 !important;
  }

  .category-item a:hover{
    color: #333 !important;
  }

  #header .header-nav-bar .primary-nav > li.bg-color{
    background-color: #0e7a02 !important;
  }

  .contact-us .address-details .fa{
    background: #0e7a02 !important;
  }

  #header .header-top-bar .header-social > a:hover, #header .header-top-bar .header-language > a:hover{
    color: #0e7a02 !important;
  }










  /*woocommerce color*/
  .woocommerce span.onsale{
    background-color: #0e7a02 !important;
  }
  .woocommerce .widget_price_filter .price_slider_amount .button {
    background-color: #0e7a02 !important;
  }
  .shop-page-pagination ul.pagination li span.current {
    background-color: #0e7a02 !important;
  }
   .woocommerce .shop-sidebar .newsletter button.btn-news {
    background-color: #0e7a02 !important;
  }

  .woocommerce .shop-sidebar .newsletter ul li {
    background-color: #0e7a02 !important;
  }

  .coupon p input.button {
    background: #0e7a02 !important;
  }
  .woocommerce-cart .woocommerce .cart_item .product-remove a.remove {
    color: #0e7a02 !important;
  }
  .woocommerce input.button {
    background-color: #0e7a02 !important;
  }
  .woocommerce-cart .wc-proceed-to-checkout a.checkout-button{
    background: #0e7a02 !important;
  }
  .woocommerce-cart .woocommerce-message a, 
  .woocommerce-checkout .woocommerce-info a {
    color: #0e7a02 !important;
  }
  .woocommerce input.button.alt {
    background-color: #0e7a02 !important;
  }
  .quantity.buttons_added .minus, .quantity.buttons_added .plus{
      background-color: #0e7a02 !important;
  }

  .product-tab .nav-tabs > li.active > a, .product-tab .nav-tabs > li.focus > a{
      background: #0e7a02 !important;
      border: 1px solid #0e7a02 !important;
  }
  .product-tab .nav-tabs{
    border-bottom: 3px solid #0e7a02 !important;
  }
  .product-tab .nav-tabs > li a:hover{
      background-color: #0e7a02 !important;
  }
  .woocommerce #review_form #respond .form-submit input.submit{
      background: #0e7a02 !important;
  }
  .woocommerce .single-product figure figcaption, .shop-content .single-product figure figcaption{
      background-color: rgba( 14, 122, 2, 0.8);
  }

  .woocommerce-message a.wc-forward{
      background-color: #0e7a02 !important;
  }
  
  .shop-page-pagination ul.pagination li a:hover{
    background-color: #0e7a02 !important;
  }

  .shop-body .shop-sidebar h2{
    border-left: 3px solid #0e7a02 !important;
  }



  

</style>



</div> <!-- end #main-wrapper -->

<script type='text/javascript' src='includes/js/comment-reply.min6996.js?ver=4.7.1'></script>
<script type='text/javascript' src='js/jquery.form.mind03d.js?ver=3.51.0-2014.06.20'></script>

<script type='text/javascript' src='js/scripts167b.js?ver=4.6'></script>

<script type='text/javascript' src='js/frontendf24c.js?ver=1.6'></script>



<script type='text/javascript' src='js/jquery-ui.min68b3.js?ver=1'></script>
<script type='text/javascript' src='js/bootstrap.min68b3.js?ver=1'></script>
<script type='text/javascript' src='js/angular68b3.js?ver=1'></script>
<script type='text/javascript' src='js/angular-sanitize.min68b3.js?ver=1'></script>
<script type='text/javascript' src='js/ui-bootstrap-tpls68b3.js?ver=1'></script>
<script type='text/javascript' src='js/angular-datepicker.min68b3.js?ver=1'></script>
<script type='text/javascript' src='js/angular-re-captcha68b3.js?ver=1'></script>
<script type='text/javascript' src='js/textAngular-rangy.min68b3.js?ver=1'></script>
<script type='text/javascript' src='js/textAngular.min68b3.js?ver=1'></script>
<script type='text/javascript' src='js/ui-iconpicker.min68b3.js?ver=1'></script>
<script type='text/javascript' src='js/select268b3.js?ver=1'></script>
<script type='text/javascript' src='js/ui-select268b3.js?ver=1'></script>
<script type='text/javascript' src='js/sortable68b3.js?ver=1'></script>
<script type='text/javascript' src='js/jquery.ba-outside-events.min68b3.js?ver=1'></script>
<script type='text/javascript' src='js/owl.carousel68b3.js?ver=1'></script>
<script type='text/javascript' src='js/masterslider/masterslider.min68b3.js?ver=1'></script>

<script type='text/javascript' src='js/scripts68b3.js?ver=1'></script>

<script type='text/javascript' src='js/ng-tags-input.min68b3.js?ver=1'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var apicon = {"ajaxurl":"http:\/\/tennaira.com\/wp-admin\/admin-ajax.php","site_url":"http:\/\/tennaira.com","payment_key":"","currency":"","currency_symbol":"","packages":{"data":[{"id":"1","title":"Free","list_quota":"10","membership_type":"month","membership_price":"0","details":"true"}]},"classifieds":[{"name":"Education","term_id":431,"slug":"education","count":0,"description":"","icon":"","subtitle":"","image":null,"sub":[{"name":"Textbooks","term_id":432,"slug":"textbooks","count":0,"description":"","icon":"","subtitle":""},{"name":"Novels","term_id":433,"slug":"novels","count":0,"description":"","icon":"","subtitle":""},{"name":"Comic books","term_id":434,"slug":"comic-books","count":0,"description":"","icon":"","subtitle":""},{"name":"Schools","term_id":435,"slug":"schools","count":0,"description":"","icon":"","subtitle":""},{"name":"Online Courses","term_id":436,"slug":"online-courses","count":0,"description":"","icon":"","subtitle":""}]},{"name":"Electronics","term_id":481,"slug":"electronics","count":0,"description":"","icon":"","subtitle":"","image":null,"sub":[{"name":"TV and Video Players","term_id":482,"slug":"tvvideo-players","count":0,"description":"","icon":"","subtitle":""},{"name":"Radio Players","term_id":483,"slug":"radio-players","count":0,"description":"","icon":"","subtitle":""},{"name":"Computers","term_id":484,"slug":"computers","count":0,"description":"","icon":"","subtitle":""},{"name":"MP3 players","term_id":485,"slug":"mp3-players","count":0,"description":"","icon":"","subtitle":""},{"name":"Laptops","term_id":486,"slug":"laptops","count":0,"description":"","icon":"","subtitle":""},{"name":"Playstation","term_id":487,"slug":"playstation","count":0,"description":"","icon":"","subtitle":""},{"name":"Xbox","term_id":488,"slug":"xbox","count":0,"description":"","icon":"","subtitle":""},{"name":"Accessories","term_id":489,"slug":"accessories","count":0,"description":"","icon":"","subtitle":""}]},{"name":"Fashion","term_id":437,"slug":"fashion","count":0,"description":"","icon":"","subtitle":"","image":null,"sub":[{"name":"Clothing","term_id":438,"slug":"clothing","count":0,"description":"","icon":"","subtitle":""},{"name":"Jewelleries and watches","term_id":439,"slug":"jewelleries-and-watches","count":0,"description":"","icon":"","subtitle":""},{"name":"Beauty products and bags","term_id":440,"slug":"beauty-products-and-bags","count":0,"description":"","icon":"","subtitle":""},{"name":"Shoes","term_id":441,"slug":"shoes","count":0,"description":"","icon":"","subtitle":""},{"name":"Perfume","term_id":442,"slug":"perfume","count":0,"description":"","icon":"","subtitle":""}]},{"name":"Home and Office","term_id":461,"slug":"home-and-office","count":1,"description":"","icon":"","subtitle":"","image":null,"sub":[{"name":"Furniture","term_id":462,"slug":"furniture","count":0,"description":"","icon":"","subtitle":""},{"name":"Decoration accessories","term_id":463,"slug":"decoration-accessories","count":1,"description":"","icon":"","subtitle":""},{"name":"Office and commercial appliances","term_id":464,"slug":"office-and-commercial-appliances","count":0,"description":"","icon":"","subtitle":""},{"name":"Home appliances","term_id":465,"slug":"home-appliances","count":0,"description":"","icon":"","subtitle":""}]},{"name":"Jobs &amp; Services","term_id":466,"slug":"jobs-services","count":0,"description":"","icon":"","subtitle":"","image":null,"sub":[{"name":"Home services","term_id":467,"slug":"home-services","count":0,"description":"","icon":"","subtitle":""},{"name":"Online services","term_id":468,"slug":"online-services","count":0,"description":"","icon":"","subtitle":""},{"name":"Software","term_id":469,"slug":"software","count":0,"description":"","icon":"","subtitle":""},{"name":"Hospital","term_id":470,"slug":"hospital","count":0,"description":"","icon":"","subtitle":""},{"name":"Doctors","term_id":471,"slug":"doctors","count":0,"description":"","icon":"","subtitle":""},{"name":"Takeaway","term_id":472,"slug":"takeaway","count":0,"description":"","icon":"","subtitle":""},{"name":"Taxi","term_id":473,"slug":"taxi","count":0,"description":"","icon":"","subtitle":""},{"name":"Legal services","term_id":474,"slug":"legal-services","count":0,"description":"","icon":"","subtitle":""},{"name":"Gifts","term_id":475,"slug":"gifts","count":0,"description":"","icon":"","subtitle":""},{"name":"Restaurant","term_id":476,"slug":"restaurant","count":0,"description":"","icon":"","subtitle":""},{"name":"Clubs","term_id":477,"slug":"clubs","count":0,"description":"","icon":"","subtitle":""},{"name":"Bars","term_id":478,"slug":"bars","count":0,"description":"","icon":"","subtitle":""},{"name":"Government","term_id":479,"slug":"government","count":0,"description":"","icon":"","subtitle":""},{"name":"Charity","term_id":480,"slug":"charity","count":0,"description":"","icon":"","subtitle":""}]},{"name":"Phone and tablets","term_id":456,"slug":"phone-and-tablets","count":0,"description":"","icon":"","subtitle":"","image":null,"sub":[{"name":"Tablet accessories","term_id":457,"slug":"tablet-accessories","count":0,"description":"","icon":"","subtitle":""},{"name":"Phone accessories","term_id":458,"slug":"phone-accessories","count":0,"description":"","icon":"","subtitle":""},{"name":"Mobile phones","term_id":459,"slug":"mobile-phones","count":0,"description":"","icon":"","subtitle":""},{"name":"Tablets","term_id":460,"slug":"tablets","count":0,"description":"","icon":"","subtitle":""}]},{"name":"Real Estate","term_id":490,"slug":"real-estate","count":0,"description":"","icon":"","subtitle":"","image":null,"sub":[{"name":"Land","term_id":491,"slug":"land","count":0,"description":"","icon":"","subtitle":""},{"name":"For Rent","term_id":492,"slug":"for-rent","count":0,"description":"","icon":"","subtitle":""},{"name":"For lease","term_id":493,"slug":"for-lease","count":0,"description":"","icon":"","subtitle":""},{"name":"For Sale","term_id":494,"slug":"for-sale","count":0,"description":"","icon":"","subtitle":""},{"name":"Shops and Commercials","term_id":495,"slug":"shops-and-commercials","count":0,"description":"","icon":"","subtitle":""},{"name":"Offices","term_id":496,"slug":"offices","count":0,"description":"","icon":"","subtitle":""}]},{"name":"Sport","term_id":443,"slug":"sport","count":0,"description":"","icon":"","subtitle":"","image":null,"sub":[{"name":"Sport wears","term_id":444,"slug":"sport-wears","count":0,"description":"","icon":"","subtitle":""},{"name":"Sport wears","term_id":445,"slug":"sport-wears-sport","count":0,"description":"","icon":"","subtitle":""},{"name":"Sport bags","term_id":446,"slug":"sport-bags","count":0,"description":"","icon":"","subtitle":""},{"name":"Football","term_id":447,"slug":"football","count":0,"description":"","icon":"","subtitle":""}]},{"name":"Vehicles","term_id":448,"slug":"vehicles","count":0,"description":"","icon":"","subtitle":"","image":null,"sub":[{"name":"SUVs","term_id":449,"slug":"suvs","count":0,"description":"","icon":"","subtitle":""},{"name":"Salon cars","term_id":450,"slug":"salon-cars","count":0,"description":"","icon":"","subtitle":""},{"name":"Car Accessories","term_id":451,"slug":"car-accessories","count":0,"description":"","icon":"","subtitle":""},{"name":"Motorcycles","term_id":452,"slug":"motorcycles","count":0,"description":"","icon":"","subtitle":""},{"name":"Trucks","term_id":453,"slug":"trucks","count":0,"description":"","icon":"","subtitle":""},{"name":"Commercials","term_id":454,"slug":"commercials","count":0,"description":"","icon":"","subtitle":""},{"name":"Tractors","term_id":455,"slug":"tractors","count":0,"description":"","icon":"","subtitle":""}]}],"all_classifieds":{"all":[{"name":"Textbooks","count":0,"slug":"textbooks","description":"","term_id":432,"icon":"","subtitle":"","image":null},{"name":"Novels","count":0,"slug":"novels","description":"","term_id":433,"icon":"","subtitle":"","image":null},{"name":"Comic books","count":0,"slug":"comic-books","description":"","term_id":434,"icon":"","subtitle":"","image":null},{"name":"Schools","count":0,"slug":"schools","description":"","term_id":435,"icon":"","subtitle":"","image":null},{"name":"Online Courses","count":0,"slug":"online-courses","description":"","term_id":436,"icon":"","subtitle":"","image":null},{"name":"TV and Video Players","count":0,"slug":"tvvideo-players","description":"","term_id":482,"icon":"","subtitle":"","image":null},{"name":"Radio Players","count":0,"slug":"radio-players","description":"","term_id":483,"icon":"","subtitle":"","image":null},{"name":"Computers","count":0,"slug":"computers","description":"","term_id":484,"icon":"","subtitle":"","image":null},{"name":"MP3 players","count":0,"slug":"mp3-players","description":"","term_id":485,"icon":"","subtitle":"","image":null},{"name":"Laptops","count":0,"slug":"laptops","description":"","term_id":486,"icon":"","subtitle":"","image":null},{"name":"Playstation","count":0,"slug":"playstation","description":"","term_id":487,"icon":"","subtitle":"","image":null},{"name":"Xbox","count":0,"slug":"xbox","description":"","term_id":488,"icon":"","subtitle":"","image":null},{"name":"Accessories","count":0,"slug":"accessories","description":"","term_id":489,"icon":"","subtitle":"","image":null},{"name":"Clothing","count":0,"slug":"clothing","description":"","term_id":438,"icon":"","subtitle":"","image":null},{"name":"Jewelleries and watches","count":0,"slug":"jewelleries-and-watches","description":"","term_id":439,"icon":"","subtitle":"","image":null},{"name":"Beauty products and bags","count":0,"slug":"beauty-products-and-bags","description":"","term_id":440,"icon":"","subtitle":"","image":null},{"name":"Shoes","count":0,"slug":"shoes","description":"","term_id":441,"icon":"","subtitle":"","image":null},{"name":"Perfume","count":0,"slug":"perfume","description":"","term_id":442,"icon":"","subtitle":"","image":null},{"name":"Furniture","count":0,"slug":"furniture","description":"","term_id":462,"icon":"","subtitle":"","image":null},{"name":"Decoration accessories","count":1,"slug":"decoration-accessories","description":"","term_id":463,"icon":"","subtitle":"","image":null},{"name":"Office and commercial appliances","count":0,"slug":"office-and-commercial-appliances","description":"","term_id":464,"icon":"","subtitle":"","image":null},{"name":"Home appliances","count":0,"slug":"home-appliances","description":"","term_id":465,"icon":"","subtitle":"","image":null},{"name":"Home services","count":0,"slug":"home-services","description":"","term_id":467,"icon":"","subtitle":"","image":null},{"name":"Online services","count":0,"slug":"online-services","description":"","term_id":468,"icon":"","subtitle":"","image":null},{"name":"Software","count":0,"slug":"software","description":"","term_id":469,"icon":"","subtitle":"","image":null},{"name":"Hospital","count":0,"slug":"hospital","description":"","term_id":470,"icon":"","subtitle":"","image":null},{"name":"Doctors","count":0,"slug":"doctors","description":"","term_id":471,"icon":"","subtitle":"","image":null},{"name":"Takeaway","count":0,"slug":"takeaway","description":"","term_id":472,"icon":"","subtitle":"","image":null},{"name":"Taxi","count":0,"slug":"taxi","description":"","term_id":473,"icon":"","subtitle":"","image":null},{"name":"Legal services","count":0,"slug":"legal-services","description":"","term_id":474,"icon":"","subtitle":"","image":null},{"name":"Gifts","count":0,"slug":"gifts","description":"","term_id":475,"icon":"","subtitle":"","image":null},{"name":"Restaurant","count":0,"slug":"restaurant","description":"","term_id":476,"icon":"","subtitle":"","image":null},{"name":"Clubs","count":0,"slug":"clubs","description":"","term_id":477,"icon":"","subtitle":"","image":null},{"name":"Bars","count":0,"slug":"bars","description":"","term_id":478,"icon":"","subtitle":"","image":null},{"name":"Government","count":0,"slug":"government","description":"","term_id":479,"icon":"","subtitle":"","image":null},{"name":"Charity","count":0,"slug":"charity","description":"","term_id":480,"icon":"","subtitle":"","image":null},{"name":"Tablet accessories","count":0,"slug":"tablet-accessories","description":"","term_id":457,"icon":"","subtitle":"","image":null},{"name":"Phone accessories","count":0,"slug":"phone-accessories","description":"","term_id":458,"icon":"","subtitle":"","image":null},{"name":"Mobile phones","count":0,"slug":"mobile-phones","description":"","term_id":459,"icon":"","subtitle":"","image":null},{"name":"Tablets","count":0,"slug":"tablets","description":"","term_id":460,"icon":"","subtitle":"","image":null},{"name":"Land","count":0,"slug":"land","description":"","term_id":491,"icon":"","subtitle":"","image":null},{"name":"For Rent","count":0,"slug":"for-rent","description":"","term_id":492,"icon":"","subtitle":"","image":null},{"name":"For lease","count":0,"slug":"for-lease","description":"","term_id":493,"icon":"","subtitle":"","image":null},{"name":"For Sale","count":0,"slug":"for-sale","description":"","term_id":494,"icon":"","subtitle":"","image":null},{"name":"Shops and Commercials","count":0,"slug":"shops-and-commercials","description":"","term_id":495,"icon":"","subtitle":"","image":null},{"name":"Offices","count":0,"slug":"offices","description":"","term_id":496,"icon":"","subtitle":"","image":null},{"name":"Sport wears","count":0,"slug":"sport-wears","description":"","term_id":444,"icon":"","subtitle":"","image":null},{"name":"Sport wears","count":0,"slug":"sport-wears-sport","description":"","term_id":445,"icon":"","subtitle":"","image":null},{"name":"Sport bags","count":0,"slug":"sport-bags","description":"","term_id":446,"icon":"","subtitle":"","image":null},{"name":"Football","count":0,"slug":"football","description":"","term_id":447,"icon":"","subtitle":"","image":null},{"name":"SUVs","count":0,"slug":"suvs","description":"","term_id":449,"icon":"","subtitle":"","image":null},{"name":"Salon cars","count":0,"slug":"salon-cars","description":"","term_id":450,"icon":"","subtitle":"","image":null},{"name":"Car Accessories","count":0,"slug":"car-accessories","description":"","term_id":451,"icon":"","subtitle":"","image":null},{"name":"Motorcycles","count":0,"slug":"motorcycles","description":"","term_id":452,"icon":"","subtitle":"","image":null},{"name":"Trucks","count":0,"slug":"trucks","description":"","term_id":453,"icon":"","subtitle":"","image":null},{"name":"Commercials","count":0,"slug":"commercials","description":"","term_id":454,"icon":"","subtitle":"","image":null},{"name":"Tractors","count":0,"slug":"tractors","description":"","term_id":455,"icon":"","subtitle":"","image":null}]},"user":{"id":0,"username":false,"membership_id":false,"packages":"","membership_text":"","bookmark":false},"post_id":"2696","search_page_url":"http:\/\/tennaira.com\/home","braintree_token":""};
/* ]]> */
</script>
<script type='text/javascript' src='js/angular-custom68b3.js'></script>


	
	
</body>

<!-- Mirrored from tennaira.com/ by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 16 Jan 2017 15:33:36 GMT -->
</html>