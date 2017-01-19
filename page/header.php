
  <header id="header">
    <div class="header-top-bar">
      <div class="container">
        <!-- HEADER-LOGIN -->
        <div class="log-regi-mobile-container">
          <button class="log-reg-mobile-btn">
            <i class="fa fa-user"></i>
          </button>
          <div class="login-reg-content">
            <div class="header-login">

              
                 <a href="#" data-toggle="modal" data-target="#myModal"><i class="fa fa-power-off"></i> Login / Register</a>
                
                
            </div> <!-- END .HEADER-LOGIN -->
          </div>


        </div>

        <!-- HEADER-LOG0 -->
        <div class="header-logo text-center">
                             
                    <a href="index.html"><img src="wp-content/uploads/10_Naira_logo.png" alt="Site logo"></a>
                 
                         </div>
        <!-- END HEADER LOGO -->
<style>
.header-social{ float: right!important;  margin-left: 20px; }
</style>

        <!-- HEADER-LANGUAGE -->
            
                
                <!-- HEADER-SOCIAL -->
                <div class="pull-right">
                    <div class="header-social">

                    
                    
                        <a href="#">
                            <span><i class="fa fa-share-alt"></i></span>
                            <i class="fa fa-chevron-down social-arrow"></i>
                        </a>



                        <ul class="list-inline">
                                                            <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-google-plus-square"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-pinterest-square"></i></a></li>
                                                    </ul>

                    </div>
                <!-- </div> -->

                <!-- END HEADER-SOCIAL -->
            

                <!-- HEADER-LANGUAGE -->
                    
        <!-- CALL TO ACTION -->
        <div class="header-call-to-action">
                  </div><!-- END .HEADER-CALL-TO-ACTION -->

      </div><!-- END .CONTAINER -->
    </div>
    </div>
    <!-- END .HEADER-TOP-BAR -->

    
    <!-- HEADER SEARCH SECTION -->
    
    <div class="header-search slider-home">
      <div class="header-search-bar">
      <!-- <div class="container"> -->
        <!-- <div class="header-serch-container"> -->
          <!-- <div class="header-search-bar"> -->
            <div ng-controller="topSearch">

              <div class="search-toggle">
                  <div class="container">
                  <div class="mobile_n_tab">

                          <div class="">
                              
                                                                                                
                                <select  name='cat' id='cat' class='form-control'  ng-model="topsearch.industry" class="form-control">
	<option value='-1'>Select Industry</option>
	<option class="level-0" value="431">Education</option>
	<option class="level-1" value="434">&nbsp;&nbsp;&nbsp;Comic books</option>
	<option class="level-1" value="433">&nbsp;&nbsp;&nbsp;Novels</option>
	<option class="level-1" value="436">&nbsp;&nbsp;&nbsp;Online Courses</option>
	<option class="level-1" value="435">&nbsp;&nbsp;&nbsp;Schools</option>
	<option class="level-1" value="432">&nbsp;&nbsp;&nbsp;Textbooks</option>
	<option class="level-0" value="481">Electronics</option>
	<option class="level-1" value="489">&nbsp;&nbsp;&nbsp;Accessories</option>
	<option class="level-1" value="484">&nbsp;&nbsp;&nbsp;Computers</option>
	<option class="level-1" value="486">&nbsp;&nbsp;&nbsp;Laptops</option>
	<option class="level-1" value="485">&nbsp;&nbsp;&nbsp;MP3 players</option>
	<option class="level-1" value="487">&nbsp;&nbsp;&nbsp;Playstation</option>
	<option class="level-1" value="483">&nbsp;&nbsp;&nbsp;Radio Players</option>
	<option class="level-1" value="482">&nbsp;&nbsp;&nbsp;TV and Video Players</option>
	<option class="level-1" value="488">&nbsp;&nbsp;&nbsp;Xbox</option>
	<option class="level-0" value="437">Fashion</option>
	<option class="level-1" value="440">&nbsp;&nbsp;&nbsp;Beauty products and bags</option>
	<option class="level-1" value="438">&nbsp;&nbsp;&nbsp;Clothing</option>
	<option class="level-1" value="439">&nbsp;&nbsp;&nbsp;Jewelleries and watches</option>
	<option class="level-1" value="442">&nbsp;&nbsp;&nbsp;Perfume</option>
	<option class="level-1" value="441">&nbsp;&nbsp;&nbsp;Shoes</option>
	<option class="level-0" value="461">Home and Office</option>
	<option class="level-1" value="463">&nbsp;&nbsp;&nbsp;Decoration accessories</option>
	<option class="level-1" value="462">&nbsp;&nbsp;&nbsp;Furniture</option>
	<option class="level-1" value="465">&nbsp;&nbsp;&nbsp;Home appliances</option>
	<option class="level-1" value="464">&nbsp;&nbsp;&nbsp;Office and commercial appliances</option>
	<option class="level-0" value="466">Jobs &amp; Services</option>
	<option class="level-1" value="478">&nbsp;&nbsp;&nbsp;Bars</option>
	<option class="level-1" value="480">&nbsp;&nbsp;&nbsp;Charity</option>
	<option class="level-1" value="477">&nbsp;&nbsp;&nbsp;Clubs</option>
	<option class="level-1" value="471">&nbsp;&nbsp;&nbsp;Doctors</option>
	<option class="level-1" value="475">&nbsp;&nbsp;&nbsp;Gifts</option>
	<option class="level-1" value="479">&nbsp;&nbsp;&nbsp;Government</option>
	<option class="level-1" value="467">&nbsp;&nbsp;&nbsp;Home services</option>
	<option class="level-1" value="470">&nbsp;&nbsp;&nbsp;Hospital</option>
	<option class="level-1" value="474">&nbsp;&nbsp;&nbsp;Legal services</option>
	<option class="level-1" value="468">&nbsp;&nbsp;&nbsp;Online services</option>
	<option class="level-1" value="476">&nbsp;&nbsp;&nbsp;Restaurant</option>
	<option class="level-1" value="469">&nbsp;&nbsp;&nbsp;Software</option>
	<option class="level-1" value="472">&nbsp;&nbsp;&nbsp;Takeaway</option>
	<option class="level-1" value="473">&nbsp;&nbsp;&nbsp;Taxi</option>
	<option class="level-0" value="456">Phone and tablets</option>
	<option class="level-1" value="459">&nbsp;&nbsp;&nbsp;Mobile phones</option>
	<option class="level-1" value="458">&nbsp;&nbsp;&nbsp;Phone accessories</option>
	<option class="level-1" value="457">&nbsp;&nbsp;&nbsp;Tablet accessories</option>
	<option class="level-1" value="460">&nbsp;&nbsp;&nbsp;Tablets</option>
	<option class="level-0" value="490">Real Estate</option>
	<option class="level-1" value="493">&nbsp;&nbsp;&nbsp;For lease</option>
	<option class="level-1" value="492">&nbsp;&nbsp;&nbsp;For Rent</option>
	<option class="level-1" value="494">&nbsp;&nbsp;&nbsp;For Sale</option>
	<option class="level-1" value="491">&nbsp;&nbsp;&nbsp;Land</option>
	<option class="level-1" value="496">&nbsp;&nbsp;&nbsp;Offices</option>
	<option class="level-1" value="495">&nbsp;&nbsp;&nbsp;Shops and Commercials</option>
	<option class="level-0" value="443">Sport</option>
	<option class="level-1" value="447">&nbsp;&nbsp;&nbsp;Football</option>
	<option class="level-1" value="446">&nbsp;&nbsp;&nbsp;Sport bags</option>
	<option class="level-1" value="445">&nbsp;&nbsp;&nbsp;Sport wears</option>
	<option class="level-1" value="444">&nbsp;&nbsp;&nbsp;Sport wears</option>
	<option class="level-0" value="448">Vehicles</option>
	<option class="level-1" value="451">&nbsp;&nbsp;&nbsp;Car Accessories</option>
	<option class="level-1" value="454">&nbsp;&nbsp;&nbsp;Commercials</option>
	<option class="level-1" value="452">&nbsp;&nbsp;&nbsp;Motorcycles</option>
	<option class="level-1" value="450">&nbsp;&nbsp;&nbsp;Salon cars</option>
	<option class="level-1" value="449">&nbsp;&nbsp;&nbsp;SUVs</option>
	<option class="level-1" value="455">&nbsp;&nbsp;&nbsp;Tractors</option>
	<option class="level-1" value="453">&nbsp;&nbsp;&nbsp;Trucks</option>
</select>
                          </div>

                        
                          <input style="margin-top:20px;" geocomplete="locationsearch"  ng-model="topsearch.address" lat="topsearch.lattitude" lng="topsearch.longitude" city="topsearch.city" country="topsearch.country" class="placeholder">

                          <br><br>
                          <div class="text-center"><strong style="color:#fff;">OR</strong></div>
                          


                  </div>
                    
                    <br>
                    <div class="text-center">
                        <a href="#" class="btn btn-default btn-lg" ng-click="topYourLocation()">Your location</a>
                    </div>
                    



                    <div class="distance-range">
                      <p>
                        <label for="amount-search">Distance (Km):</label>
                        <input type="text" id="amount-search" ng-model="radius">
                      </p>

                     <!--  <div id="slider-range-search"></div> -->
                     <span></span>  <!--  //uou-search-km -->
                     <div radiusslider min="1" max="100"  class="cdbl-slider" onchnage="doRadiusSearch(radius)" radius="radius"></div>
                    </div>  <!-- end #distance-range -->


                    <div class="distance-range">
                      <p>
                        <label for="amount-search">Days published:</label>
                        <input type="text" id="amount-search-day" ng-model="days">
                      </p>

                      <!-- <div id="slider-range-search-day"></div> -->
                      <span></span>
                      <div radiusslider min="1" max="300"  class="cdbl-slider" onchnage="doRadiusSearch(radius)" radius="days"></div>
                    </div>  <!-- end #distance-range -->

                  

                  

                  <div class="clearfix"></div>

                  <div class="search-button-toggle">
                      <button class="search-btn" type="submit" ng-click="doTopSearch()"><i class="fa fa-search"></i></button>
                  </div>
                </div>
              </div>  <!-- END .search-toggle -->
              <div class="container">



                <div class="mobile-search-button">
                  <button class="toggle-btn-only-filed" type="submit"><i class="fa fa-caret-down"></i></button>


                  <button class="toggle-btn" type="submit"><i class="fa fa-gear"></i></button>
                  <button class="search-btn-mobile" type="submit" ng-click="doTopSearch()"><i class="fa fa-search"></i></button>
                </div>

                <div class="search-value">
                  <div class="keywords">
                    <input type="text" ng-model="topsearch.keywords" class="form-control" placeholder="Keywords">
                  </div>

                  <div class="select-location">
                    <input geocomplete="locationsearch"  ng-model="topsearch.address" lat="Nigeria" lng="Nigeria" city="topsearch.city" country="topsearch.country" class="placeholder" placeholder="Enter a location">
                    
                  </div>

                  <div class="category-search">
                      
                                                                  
                      <select  name='cat' id='cat' class='form-control'  ng-model="topsearch.industry" class="form-control">
	<option value='-1'>-Select Industry-</option>
	<option class="level-0" value="431">Education</option>
	<option class="level-1" value="434">&nbsp;&nbsp;&nbsp;Comic books</option>
	<option class="level-1" value="433">&nbsp;&nbsp;&nbsp;Novels</option>
	<option class="level-1" value="436">&nbsp;&nbsp;&nbsp;Online Courses</option>
	<option class="level-1" value="435">&nbsp;&nbsp;&nbsp;Schools</option>
	<option class="level-1" value="432">&nbsp;&nbsp;&nbsp;Textbooks</option>
	<option class="level-0" value="481">Electronics</option>
	<option class="level-1" value="489">&nbsp;&nbsp;&nbsp;Accessories</option>
	<option class="level-1" value="484">&nbsp;&nbsp;&nbsp;Computers</option>
	<option class="level-1" value="486">&nbsp;&nbsp;&nbsp;Laptops</option>
	<option class="level-1" value="485">&nbsp;&nbsp;&nbsp;MP3 players</option>
	<option class="level-1" value="487">&nbsp;&nbsp;&nbsp;Playstation</option>
	<option class="level-1" value="483">&nbsp;&nbsp;&nbsp;Radio Players</option>
	<option class="level-1" value="482">&nbsp;&nbsp;&nbsp;TV and Video Players</option>
	<option class="level-1" value="488">&nbsp;&nbsp;&nbsp;Xbox</option>
	<option class="level-0" value="437">Fashion</option>
	<option class="level-1" value="440">&nbsp;&nbsp;&nbsp;Beauty products and bags</option>
	<option class="level-1" value="438">&nbsp;&nbsp;&nbsp;Clothing</option>
	<option class="level-1" value="439">&nbsp;&nbsp;&nbsp;Jewelleries and watches</option>
	<option class="level-1" value="442">&nbsp;&nbsp;&nbsp;Perfume</option>
	<option class="level-1" value="441">&nbsp;&nbsp;&nbsp;Shoes</option>
	<option class="level-0" value="461">Home and Office</option>
	<option class="level-1" value="463">&nbsp;&nbsp;&nbsp;Decoration accessories</option>
	<option class="level-1" value="462">&nbsp;&nbsp;&nbsp;Furniture</option>
	<option class="level-1" value="465">&nbsp;&nbsp;&nbsp;Home appliances</option>
	<option class="level-1" value="464">&nbsp;&nbsp;&nbsp;Office and commercial appliances</option>
	<option class="level-0" value="466">Jobs &amp; Services</option>
	<option class="level-1" value="478">&nbsp;&nbsp;&nbsp;Bars</option>
	<option class="level-1" value="480">&nbsp;&nbsp;&nbsp;Charity</option>
	<option class="level-1" value="477">&nbsp;&nbsp;&nbsp;Clubs</option>
	<option class="level-1" value="471">&nbsp;&nbsp;&nbsp;Doctors</option>
	<option class="level-1" value="475">&nbsp;&nbsp;&nbsp;Gifts</option>
	<option class="level-1" value="479">&nbsp;&nbsp;&nbsp;Government</option>
	<option class="level-1" value="467">&nbsp;&nbsp;&nbsp;Home services</option>
	<option class="level-1" value="470">&nbsp;&nbsp;&nbsp;Hospital</option>
	<option class="level-1" value="474">&nbsp;&nbsp;&nbsp;Legal services</option>
	<option class="level-1" value="468">&nbsp;&nbsp;&nbsp;Online services</option>
	<option class="level-1" value="476">&nbsp;&nbsp;&nbsp;Restaurant</option>
	<option class="level-1" value="469">&nbsp;&nbsp;&nbsp;Software</option>
	<option class="level-1" value="472">&nbsp;&nbsp;&nbsp;Takeaway</option>
	<option class="level-1" value="473">&nbsp;&nbsp;&nbsp;Taxi</option>
	<option class="level-0" value="456">Phone and tablets</option>
	<option class="level-1" value="459">&nbsp;&nbsp;&nbsp;Mobile phones</option>
	<option class="level-1" value="458">&nbsp;&nbsp;&nbsp;Phone accessories</option>
	<option class="level-1" value="457">&nbsp;&nbsp;&nbsp;Tablet accessories</option>
	<option class="level-1" value="460">&nbsp;&nbsp;&nbsp;Tablets</option>
	<option class="level-0" value="490">Real Estate</option>
	<option class="level-1" value="493">&nbsp;&nbsp;&nbsp;For lease</option>
	<option class="level-1" value="492">&nbsp;&nbsp;&nbsp;For Rent</option>
	<option class="level-1" value="494">&nbsp;&nbsp;&nbsp;For Sale</option>
	<option class="level-1" value="491">&nbsp;&nbsp;&nbsp;Land</option>
	<option class="level-1" value="496">&nbsp;&nbsp;&nbsp;Offices</option>
	<option class="level-1" value="495">&nbsp;&nbsp;&nbsp;Shops and Commercials</option>
	<option class="level-0" value="443">Sport</option>
	<option class="level-1" value="447">&nbsp;&nbsp;&nbsp;Football</option>
	<option class="level-1" value="446">&nbsp;&nbsp;&nbsp;Sport bags</option>
	<option class="level-1" value="445">&nbsp;&nbsp;&nbsp;Sport wears</option>
	<option class="level-1" value="444">&nbsp;&nbsp;&nbsp;Sport wears</option>
	<option class="level-0" value="448">Vehicles</option>
	<option class="level-1" value="451">&nbsp;&nbsp;&nbsp;Car Accessories</option>
	<option class="level-1" value="454">&nbsp;&nbsp;&nbsp;Commercials</option>
	<option class="level-1" value="452">&nbsp;&nbsp;&nbsp;Motorcycles</option>
	<option class="level-1" value="450">&nbsp;&nbsp;&nbsp;Salon cars</option>
	<option class="level-1" value="449">&nbsp;&nbsp;&nbsp;SUVs</option>
	<option class="level-1" value="455">&nbsp;&nbsp;&nbsp;Tractors</option>
	<option class="level-1" value="453">&nbsp;&nbsp;&nbsp;Trucks</option>
</select>

                    
                  </div>
                                  
                   <button class="search-btn top15" id="top-search-button" ng-click="doTopSearch()" type="button"><i class="fa fa-search"></i></button>
                  
                  
                </div>
                
                  <!-- <button class="search-btn" type="submit"><i class="fa fa-search"></i></button> -->
              </div>


            </div>
          <!-- </div> END .header-search-bar -->

        <!-- </div> -->


      <!-- </div> -->




    </div> <!-- END .header-search-bar -->
                <!-- <div class="header-search-bar"> -->
      <div class="slider-content">   

            <div class="master-slider ms-skin-black-2 round-skin" id="masterslider">
            <!-- <div id="home-slider" class="owl-carousel owl-theme"> -->
                          
                                            <div class="ms-slide">
                                <!-- slide background -->
                                <div class="slider-overlay"></div>

                                          
                                <img src="wp-content/themes/globoWP/assets/js/masterslider/blank.gif" data-src="image/banner3-2.jpg" alt="banner3-2 Home ">
                                <!-- slide text layer -->

                                <div class="ms-layer ms-caption text-center" style="" >

                                    <a href="index.html"></a>

                                    <h1></h1>
                                    <div class="">


                                    </div>


                                    <h2></h2>


                                </div>

                               

                              </div>

                              
                     
                                                    <div class="ms-slide">
                                <!-- slide background -->
                                <div class="slider-overlay"></div>

                                          
                                <img src="wp-content/themes/globoWP/assets/js/masterslider/blank.gif" data-src="image/banner1-3.jpg" alt="banner1-3 Home ">
                                <!-- slide text layer -->

                                <div class="ms-layer ms-caption text-center" style="" >

                                    <a href="index.html"><img src="wp-includes/images/media/default.png" alt=""></a>

                                    <h1></h1>
                                    <div class="">


                                    </div>


                                    <h2></h2>


                                </div>

                               

                              </div>

                              
                     
                                                    <div class="ms-slide">
                                <!-- slide background -->
                                <div class="slider-overlay"></div>

                                          
                                <img src="wp-content/themes/globoWP/assets/js/masterslider/blank.gif" data-src="image/banner2-3.jpg" alt="banner2-3 Home ">
                                <!-- slide text layer -->

                                <div class="ms-layer ms-caption text-center" style="" >

                                    <a href="#"><img src="wp-includes/images/media/default.png" alt=""></a>

                                    <h1></h1>
                                    <div class="">


                                    </div>


                                    <h2></h2>


                                </div>

                               

                              </div>

                              
                     
                                                    <div class="ms-slide">
                                <!-- slide background -->
                                <div class="slider-overlay"></div>

                                          
                                <img src="wp-content/themes/globoWP/assets/js/masterslider/blank.gif" data-src="image/banner4-3.jpg" alt="banner4-3 Home ">
                                <!-- slide text layer -->

                                <div class="ms-layer ms-caption text-center" style="" >

                                    <a href="index.html"><img src="wp-includes/images/media/default.png" alt=""></a>

                                    <h1></h1>
                                    <div class="">


                                    </div>


                                    <h2></h2>


                                </div>

                               

                              </div>

                              
                     
                                            </div></div>
        
      </div> <!-- END .header-search-bar -->


                    
        
     <!-- /*test mahmud*/ -->
    <!-- </div> END .SEARCH and slide-section -->

    <div class="container">
      <div class="header-nav-bar home-slide">
        <nav>
    <button><i class="fa fa-bars"></i></button>
    <ul id="menu-footer-menu" class="primary-nav list-unstyled"><li id="menu-item-3999" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="about-us/index.html"><strong>About Us</strong></a></li>
<li id="menu-item-4000" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="contact-us/index.html"><strong>Contact us</strong></a></li>
<li id="menu-item-3985" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="privacy/index.html"><strong>privacy</strong></a></li>
<li id="menu-item-3986" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="terms-and-condition/index.html"><strong>Terms and Condition</strong></a></li>
<li id="menu-item-4070" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="dashboard/create/index.html"><strong>POST AN AD</strong></a></li>
</ul></nav>      </div> <!-- end .header-nav-bar -->
    </div> <!-- end .container -->
  </header> <!-- end #header -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="margin-top:80px;">
  <div class="modal-dialog modal-lg">
    <div class="modal-content"  ng-app="globoAdmin">

      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Login/Register</h4>
      </div>


      <div class="modal-body" ng-controller="globoAdminCtrl">
        <div class="row">

            <div class="col-md-6 col-md-offset-3">
                 <alert ng-if="alert.show" type="{{alert.type}}" close="closeAlert(this)">{{alert.msg}}</alert>
            </div>
            <div class="clearfix"></div>

            <div class="col-md-6">
              <h4>Signin</h4>
              <br>

              <form name="loginForm" ng-submit="doLogin()" novalidate>

                  <div class="form-group" ng-class="{ 'has-error' : loginForm.username.$invalid && !loginForm.username.$pristine }">
                    <label>Username</label>
                    <input type="text" name="username" class="form-control" placeholder="Username" ng-model="user.username" required>
                    <p ng-show="loginForm.username.$invalid && !loginForm.username.$pristine" class="help-block">Username is required.</p>
                  </div>

                  <div class="form-group" ng-class="{ 'has-error' : loginForm.password.$invalid && !loginForm.password.$pristine }">
                    <label>Password</label>
                    <input type="password" name="password" class="form-control" placeholder="Password" ng-model="user.password" required>
                    <p ng-show="loginForm.password.$invalid && !loginForm.password.$pristine" class="help-block">Password is required.</p>
                  </div>
                  <br>
                  
                  

                  <button type="submit" class="btn btn-success" ng-disabled="loginForm.$invalid">Login</button>

                  <a class="pull-right" style="margin-top: 8px" href="lostpassword/index.html">Lost Password?</a>
              </form>

              

                    <br><br>

                    

                
            </div>
            <div class="col-md-6">
                <h4>Register</h4>
                <br>
                <form name="registerForm" ng-submit="doRegister()" novalidate>
                    
                    <div class="form-group" ng-class="{ 'has-error' : registerForm.new_user.$invalid && !registerForm.new_user.$pristine }">
                      <label>Username</label>
                      <input type="text" name="new_user" class="form-control" placeholder="Username" ng-model="new_user.username" required>
                      <p ng-show="registerForm.new_user.$invalid && !registerForm.new_user.$pristine" class="help-block">Username is required.</p>
                    </div>

                    <div class="form-group" ng-class="{ 'has-error' : registerForm.new_email.$invalid && !registerForm.new_email.$pristine }">
                      <label>Email</label>
                      <input type="email" name="new_email" class="form-control" placeholder="Email" ng-model="new_user.email" required>
                      <p ng-show="registerForm.new_email.$invalid && !registerForm.new_email.$pristine" class="help-block">Enter a valid email.</p>
                    </div>

                    <div class="form-group" ng-class="{ 'has-error' : registerForm.new_pass.$invalid && !registerForm.new_pass.$pristine }">
                      <label>Password</label>
                      <input type="password" name="new_pass" class="form-control" placeholder="Password" ng-model="new_user.password" required>
                      <p ng-show="registerForm.new_pass.$invalid && !registerForm.new_pass.$pristine" class="help-block">Password is required.</p>
                    </div>
                    
                    <div class="form-group" ng-class="{ 'has-error' : registerForm.new_pass_confirm.$invalid && !registerForm.new_pass_confirm.$pristine }">
                      <label>Confirm password</label> 
                      <input type="password" name="new_pass_confirm" class="form-control" placeholder="Confirm password" ng-model="new_user.confirm_password" required>
                      <p ng-show="registerForm.new_pass_confirm.$invalid && !registerForm.new_pass_confirm.$pristine" class="help-block">Confirm Password is required. Please enter same password as above.</p>
                      <p ng-show="(new_user.password != new_user.confirm_password) && registerForm.new_pass_confirm.$dirty" class="help-block" style="color:#a94442">Password is not matching. Please enter same password as above.</p>
                    </div>
                    <br>


                    <button type="submit" class="btn btn-info" ng-disabled="registerForm.$invalid">Register</button>


                </form>
                
            </div>           

        </div>



      </div>


      
      <div class="modal-footer"></div>

    </div>
  </div>
</div>