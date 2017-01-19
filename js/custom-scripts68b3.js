jQuery("document").ready(function($){

	//pagination class add
	$("div.blog-list-pagination ul.pagination li span.current").parent().addClass('active');

	//post pagination class add to button
	$( ".post-pagination a" ).addClass('post-read-more');

	// $(".primary-nav li a").on('click', function(event) {
	// 	event.preventDefault();
	// 	/* Act on the event */
	// });

	//has submenu icon addition
	//$(".header-nav-bar .container .primary-nav li.has-submenu a").first().append('<i class="fa fa-angle-down"></i>');

	//$("div.header-nav-bar .container").find('ul').find("li.has-submenu").first().find('a').append('<i class="fa fa-angle-down"></i>');

	//current menu item background color added
	$(".header-nav-bar .container .primary-nav").find("li.m-active").addClass('bg-color');

	//add tab-pad to vertical tab parent div
	$(".vertical-tab").parent().addClass('tab-pad');

	$("#main_page .prev_post a").addClass('btn btn-default');
	$("#main_page .next_post a").addClass('btn btn-default');



	// for woocommerce

	$('body').removeClass('single-product');

  	$('.woocommerce .woocommerce-tabs ul li:first').addClass('active');
  	$('.woocommerce .woocommerce-tabs .tab-content div:first-child').addClass('active');


  	$('.woocommerce-cart .cart-collaterals .row').children().removeClass('col-sm-3').addClass('col-sm-6');

  	$('.woocommerce .shop-body .shop-page-pagination ul').removeClass('page-numbers').addClass('pagination');


  	// button class added on variable product
  	$('.woocommerce .gc_no_sidebar .product-type-variable .single-product ins.gc_no_rating_no_sale').parent().find('a.add_to_cart_button').addClass('gc_no_rating_btn');
  	
  	// simple related button class add
  	$('.woocommerce .gc_no_sidebar .related.products .product-type-simple .single-product-content p.gc_no_rating').parent().find('a.add_to_cart_button').addClass('gc_no_rating_btn');
  	
  	$('.woocommerce .gc_right_sidebar .product-type-variable .single-product ins.gc_no_rating_no_sale').parent().find('a.add_to_cart_button').addClass('gc_right_rating_btn');
  	
  	$('.woocommerce .gc_no_sidebar .product-type-variable .single-product span.gc_no_rating_no_sale').parent().find('a.add_to_cart_button').addClass('gc_no_rating_btn');
  	
  	$('.woocommerce .gc_right_sidebar .product-type-variable .single-product span.gc_no_rating_no_sale').parent().find('a.add_to_cart_button').addClass('gc_right_rating_btn');
  	
  	$('.woocommerce .gc_left_sidebar .product-type-variable .single-product span.gc_no_rating_no_sale').parent().find('a.add_to_cart_button').addClass('gc_left_rating_btn');

  	$('.single.woocommerce .gc_right_sidebar .related.products .product-type-simple .single-product p.gc_no_rating').parent().find('a.add_to_cart_button').addClass('gc_related_right_rating_btn');


});



