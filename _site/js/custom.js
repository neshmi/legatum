/*jslint browser: true*/
/*global $, jQuery, Modernizr, google, _gat*/
/*jshint strict: true */




/*************** GOOGLE ANALYTICS ***********/
/*************** REPLACE WITH YOUR OWN UA NUMBER ***********/
window.onload = function () { "use strict"; gaSSDSLoad(""); }; //load after page onload
/*************** REPLACE WITH YOUR OWN UA NUMBER ***********/




var isMobile = false;
var isDesktop = false;


$(window).on("load resize",function(e){

		//mobile detection
		if(Modernizr.mq('only all and (max-width: 767px)') ) {
			isMobile = true;
		}else{
			isMobile = false;
		}


		//tablette and mobile detection
		if(Modernizr.mq('only all and (max-width: 1024px)') ) {
			isDesktop = false;
		}else{
			isDesktop = true;
		}
});









/*
|--------------------------------------------------------------------------
| DOCUMENT READY
|--------------------------------------------------------------------------
*/  

$(document).ready(function() {
    "use strict";

    /*
    |--------------------------------------------------------------------------
    |  fullwidth image
    |--------------------------------------------------------------------------
    */


    if ($('#homeFullScreen').length)
    {
        fullscreenImage();
    }
    //alert($('#mainHeader').height());
    //alert( $(window).height());
    var $starter = $(window).height() - $('#mainHeader').height();

    $(window).scroll(function() {

     if ($('#fullScreen').length)
     {
     	var $windowScrollPosition = $(window).scrollTop();

        if ( $windowScrollPosition >= $starter ){

       		$('#mainHeader').css({
       			'opacity': 1,
       			'transform':' scaleY(1)'
       		});

       } else if ( $windowScrollPosition <= 50  ){

       		$('#mainHeader').css({
       			'opacity': 0,
       			'transform':' scaleY(0)'
       		});

       }
   	}

    });



	 /*
    |--------------------------------------------------------------------------
    |  form placeholder for IE
    |--------------------------------------------------------------------------
    */
    if(!Modernizr.input.placeholder){

        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });

    }			
    /*
    |--------------------------------------------------------------------------
    | MAGNIFIC POPUP
    |--------------------------------------------------------------------------
    */



    if( $("a.image-link").length){

         $("a.image-link").click(function (e) {

            var items = [];
            
            items.push( { src: $(this).attr('href')  } );

            if($(this).data('gallery')){

                var $arraySrc = $(this).data('gallery').split(',');

                $.each( $arraySrc, function( i, v ){
                    items.push( {
                        src: v 
                    });
                });     
            }
     
            $.magnificPopup.open({
                type:'image',
                mainClass: 'mfp-fade',
                items:items,
                gallery: {
                  enabled: true 
                }
            });

            e.preventDefault();
        });
  
    }



    if( $("a.image-iframe").length){
         $('a.image-iframe').magnificPopup({type:'iframe',mainClass: 'mfp-fade'});
    }

    
    /*
    |--------------------------------------------------------------------------
    | TOOLTIP
    |--------------------------------------------------------------------------
    */

    $('.tips').tooltip({placement:'top'});

    
    
    /*
    |--------------------------------------------------------------------------
    | COLLAPSE
    |--------------------------------------------------------------------------
    */

    $('.accordion').on('show hide', function(e){
        $('.accordion-toggle').removeClass('active');
        $(e.target).siblings('.accordion-heading').find('.accordion-toggle').addClass('active');
        $(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-plus icon-minus', 200);
        
    });

    /*
    |--------------------------------------------------------------------------
    | CONTACT
    |--------------------------------------------------------------------------
    */   
    $('.slideContact').click(function(e){

        if ( $(window).width() >= 800){

            $('#contact').slideToggle('normal', 'easeInQuad',function(){

                $('#contactinfoWrapper').css('margin-left', 0);
                $('#mapSlideWrapper').css('margin-left', 3000);
                $('#contactinfoWrapper').fadeToggle();
                

            });
            $('#closeContact').fadeToggle(); 
            return false;
            
        }else{

            return true;
            
        }
        e.preventDefault();
    });
    
    
    $('#closeContact').click(function(e){


        $('#contactinfoWrapper').fadeOut('normal', 'easeInQuad',function(){
            $('#contactinfoWrapper').css('margin-left', 0);
            $('#mapSlideWrapper').css('margin-left', 3000);
        });
        
        $('#contact').slideUp('normal', 'easeOutQuad');

        $(this).fadeOut();

        e.preventDefault();
        
    });
    



    
    
    /* MAP */
    $('#mapTrigger').click(function(e){


        $('#mapSlideWrapper').css('display', 'block');
        initialize('mapWrapper');
        
        $('#contactinfoWrapper, #contactinfoWrapperPage').animate({
            marginLeft:'-2000px' 
        }, 400, function() {}); 
        
        
        $('#mapSlideWrapper').animate({
            marginLeft:'25px' 
        }, 400, function() {});  
        
        appendBootstrap();

        e.preventDefault();
    });

    if($('#mapWrapper').length)
    appendBootstrap();
    
    
    $('#mapTriggerLoader').click(function(e){


        $('#mapSlide').css('display', 'block');

        $('#contactSlide').animate({
            marginLeft:'-2000px' 
        }, 400, function() {}); 
        
        
        $('#mapSlide').animate({
            marginLeft:'0' 
        }, 400, function() {
            $('#contactSlide').css('display', 'none');
        });  

        
        appendBootstrap();
        
        e.preventDefault();
    });
    
    
    $('#mapReturn').click(function(e){
        //$('#mapWrapper').css('margin-bottom', '3em');
        
        $('#contactSlide').css('display', 'block');
        $('#mapSlide').animate({
            marginLeft:'3000px' 
        }, 400, function() {});       
        

        $('#contactSlide').animate({
            marginLeft:'0' 
        }, 400, function() {
            $('#mapSlide').css('display', 'none');
        }); 

        e.preventDefault();
    }); 

    /*
    |--------------------------------------------------------------------------
    | OWL CAROUSEL
    |--------------------------------------------------------------------------
    */
     if($('#portfolio-carousel').length){    
        $("#portfolio-carousel").owlCarousel();
    }
    /*
    |--------------------------------------------------------------------------
    | FLEXSLIDER
    |--------------------------------------------------------------------------
    */ 
    if($('#flexHome').length){

        $('#flexHome').flexslider({
            animation: "slide",
            controlNav:true,
            directionNav:false, 
            touch: true,
            direction: "vertical"
      
        });    
    }


    if($('.flexFullScreen').length){

        $('.flexFullScreen').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: true,
            slideshow: true,
            touch: true,
            prevText: '<i class="icon-left-open"></i>',           
            nextText: '<i class="icon-right-open"></i>',   
            start: function(slider){
                setTimeout("animateTxt("+slider.currentSlide+", 'in')", 100);  
            },
            before: function(slider){
                setTimeout("animateTxt("+slider.currentSlide+")", 100);  
            },
            after: function(slider){
                setTimeout("animateTxt("+slider.currentSlide+", 'in')", 100);  
            } 
        });

    }


    if($('.flexScreenSlider').length){

        $('.flexScreenSlider').flexslider({
            animation: "slide",
            controlNav:false,
            touch: true, 
            slideshow: true,
            prevText: '<i class="icon-left-open"></i>',           
            nextText: '<i class="icon-right-open"></i>'  
        });    
    }


    if($('.flexPortfolio').length){

        $('.flexPortfolio').flexslider({
            animation: "slide",
            controlNav:false,
            touch: true,
            slideshow: true,
            prevText: '<i class="icon-left-open"></i>',           
            nextText: '<i class="icon-right-open"></i>'  
        });    
    }


    if($('.flexProject').length){

        $('.flexProject').flexslider({
            animation: "slide",
            controlNav:true,
            touch: true,
            slideshow: true,
            prevText: '<i class="icon-left-open"></i>',           
            nextText: '<i class="icon-right-open"></i>'  
        });    
    }
	
	 if($('.flexApp').length){

        $('.flexApp').flexslider({
            animation: "slide",
            controlNav:false,
            touch: true,	
            prevText: '<i class="icon-left-open"></i>',           
            nextText: '<i class="icon-right-open"></i>'  
        });    
    }





    /*
    |--------------------------------------------------------------------------
    | MAIN ROLLOVER EFFECTS
    |--------------------------------------------------------------------------
    */     

    if($('.imgHover').length){

        $('.imgHover article').hover(
            function () {

                var $this=$(this);

                var fromTop = ($('.imgWrapper', $this).height()/2 - $('.iconLinks', $this).height()/2);
                $('.iconLinks', $this).css('margin-top',fromTop);

                $('.mediaHover', $this).height($('.imgWrapper', $this).height());   

                $('.mask', this).css('height', $('.imgWrapper', this).height());
                $('.mask', this).css('width', $('.imgWrapper', this).width());
                $('.mask', this).css('margin-top', $('.imgWrapper', this).height());


                $('.mask', this).stop(1).show().css('margin-top', $('.imgWrapper', this).height()).animate({marginTop: 0},200, function() {

                    $('.iconLinks', $this).css('display', 'block');
                    if(Modernizr.csstransitions) {
                        $('.iconLinks a').addClass('animated');


                        $('.iconLinks a', $this).removeClass('flipOutX'); 
                        $('.iconLinks a', $this).addClass('bounceInDown'); 

                    }else{

                        $('.iconLinks', $this).stop(true, false).fadeIn('fast');
                    }


                });



            },function () {

                var $this=$(this);


                $('.mask', this).stop(1).show().animate({marginTop: $('.imgWrapper', $this).height()},200, function() {

                    if(Modernizr.csstransitions) {
                        $('.iconLinks a', $this).removeClass('bounceInDown'); 
                        $('.iconLinks a', $this).addClass('flipOutX'); 

                    }else{
                        $('.iconLinks', $this).stop(true, false).fadeOut('fast');
                    }

                });

            });
    }



    /*
    |--------------------------------------------------------------------------
    | ROLLOVER BTN
    |--------------------------------------------------------------------------
    */ 

    $('.socialIcon').hover(
        function () {
            $(this).stop(true, true).addClass('socialHoverClass', 300);
        },
        function () {
            $(this).removeClass('socialHoverClass', 300);
        });





    $('.tabs li, .accordion h2').hover(
        function () {
            $(this).stop(true, true).addClass('speBtnHover', 300);
        },
        function () {
            $(this).stop(true, true).removeClass('speBtnHover', 100);
        });



    /*
    |--------------------------------------------------------------------------
    | ALERT
    |--------------------------------------------------------------------------
    */ 
    $('.alert').delegate('button', 'click', function() {
        $(this).parent().fadeOut('fast');
    });
    
    
    /*
    |--------------------------------------------------------------------------
    | CLIENT
    |--------------------------------------------------------------------------
    */   
    
    if($('.colorHover').length){
        var array =[];
        $('.colorHover').hover(

            function () {

                array[0] = $(this).attr('src');
                $(this).attr('src', $(this).attr('src').replace('-off', ''));

            }, 

            function () {

                $(this).attr('src', array[0]);

            });
    }



    /*
    |--------------------------------------------------------------------------
    | Rollover boxIcon
    |--------------------------------------------------------------------------
    */ 
    if($('.boxIcon').length){

        $('.boxIcon').hover(function() {
            var $this = $(this);

            $this.css('opacity', '1');   
            //$this.find('.boxContent>p').stop(true, false).css('opacity', 0);
            $this.addClass('hover');
            $('.boxContent>p').css('bottom', '-50px');
            $this.find('.boxContent>p').stop(true, false).css('display', 'block');

            $this.find('.iconWrapper i').addClass('triggeredHover');    

            $this.find('.boxContent>p').stop(true, false).animate({
                'margin-top': '0px'},
                300, function() {
            // stuff to do after animation is complete
        });


        }, function() {
            var $this = $(this);
            $this.removeClass('hover');

            $this.find('.boxContent>p').stop(true, false).css('display', 'none');
            $this.find('.boxContent>p').css('margin-top', '250px');
            $this.find('.iconWrapper i').removeClass('triggeredHover'); 


        });   
    }   






    $('#quoteTrigger').click(function (e) {

        //$("#quoteWrapper").scrollTop(0);

        if(!$('#quoteFormWrapper').is(':visible')){
            $('html, body').animate({scrollTop: $("#quoteWrapper").offset().top}, 300);
        }

        var $this = $(this);


        $('#quoteFormWrapper').slideToggle('fast', function() {

            $this.text($('#quoteFormWrapper').is(':visible') ? "Close form" : "I have a project");

        });


        e.preventDefault();
    });



/*
|--------------------------------------------------------------------------
| SHARE
|--------------------------------------------------------------------------
*/
if($('#shareme').length){

		var params = {
			url: ( $('#shareme').data('url') != '' ) ? $('#shareme').data('url') : window.location.href , 
			title: $('#shareme').data('title'),
			desc: $('#shareme').data('desc'),
			via: 'LittleNeko1',
			hashtags: 'premium template, awesome web design'
		},

		links = SocialShare.generateSocialUrls(params),
		$target = $('#shareme');
		
		$target.html(''); //clear!
		
		for (var i = 0; i < links.length; i++) {
			var link = links[i];
			$target.append('<a class="neko-share-btn btn ' + link.class + '" target="_blank" href="' + link.url + '" title="' + link.name + '"><i class="'+link.icon+'" style="position"></i></a>');
		}
		
		$target.find('a').on( 'click', SocialShare.doPopup );

}



/*
|--------------------------------------------------------------------------
| ROLL OVER PreviewTrigger
|--------------------------------------------------------------------------
*/
if($('.previewTrigger').length){

    $('.mask').css('height', $('.previewTrigger').height());
    $('.mask').css('width', $('.previewTrigger').width());
    // $('.mask', this).css('top', $('.previewTrigger', this).width());
    // $('.mask', this).css('left', $('.previewTrigger', this).width());

    $('.previewTrigger').hover(function() {

        var $this = $(this);

        $this.children('.mask').fadeIn('fast');

        if(Modernizr.csstransitions) {
            $('.iconWrapper', $this).addClass('animated');
            $('.iconWrapper', $this).css('display', 'block');
            $('.iconWrapper', $this).removeClass('flipOutX'); 
            $('.iconWrapper', $this).addClass('bounceInDown'); 
        }else{
            $('.iconWrapper', $this).stop(true, false).fadeIn('fast');
        }

    }, function() {

        var $this = $(this); 

        $this.children('.mask').fadeOut('fast');

        if(Modernizr.csstransitions) {
            $('.iconWrapper', $this).removeClass('bounceInDown'); 
            $('.iconWrapper', $this).addClass('flipOutX');
            $('.iconWrapper', $this).css('display', 'none');
            $('.iconWrapper', $this).removeClass('animated');
        }else{
            $('.iconWrapper', $this).stop(true, false).fadeOut('fast');
        }

    });
}





/*
|--------------------------------------------------------------------------
| PORTFOLIO SHEET SYSTEM
|--------------------------------------------------------------------------
*/
// PAGE SLIDE
$(".portfolioSheet").pageslide({
    direction: "left",
    modal: true,
    iframe: false,
    speed: "250"
});


/*
|--------------------------------------------------------------------------
| AUTOCLOSE BOOSTRAP MENU
|--------------------------------------------------------------------------
*/
$('.nav a').on('click', function(){

	if($('.navbar-toggle').css('display') != 'none')
    $('.navbar-toggle').click();

});


/*
|--------------------------------------------------------------------------
| APPEAR
|--------------------------------------------------------------------------
*/
if($('.activateAppearAnimation').length){
    nekoAnimAppear();


    $('.reloadAnim').click(function (e) {

        $(this).parent().parent().find('img').removeClass().addClass('img-responsive');

        nekoAnimAppear();
        e.preventDefault();
    });
}

//END DOCUMENT READY   
});



/*
|--------------------------------------------------------------------------
| EVENTS TRIGGER AFTER ALL IMAGES ARE LOADED
|--------------------------------------------------------------------------
*/
$(window).load(function() {

    "use strict";


    /*
    |--------------------------------------------------------------------------
    | PRELOADER
    |--------------------------------------------------------------------------
    */ 
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});

    /*
    |--------------------------------------------------------------------------
    | ISOTOPE USAGE FILTERING
    |--------------------------------------------------------------------------
    */ 
    if($('.isotopeWrapper').length){

    	var $container = $('.isotopeWrapper');
    	var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope
        
        $container.isotope({
        	layoutMode: 'sloppyMasonry',
        	itemSelector: '.isotopeItem',
        	filter: '*',
            resizable: false, // disable normal resizing
            masonry: {
            	columnWidth: $container.width() / $resize
            }
       
        });


        //var rightHeight = $('#works').height();
        $('#filter a').click(function(e){
        	e.preventDefault();
        	//$('#works').height(rightHeight);
        	$('#filter a').removeClass('current');


        	$(this).addClass('current');
        	var selector = $(this).attr('data-filter');
        	
        	$container.isotope({
        		filter: selector,
        		animationOptions: {
        			duration: 300,
        			easing: 'easeOutQuart'
        		}
        	});

        	if (isDesktop === true && $('[id^="paralaxSlice"]').length){
	        	setTimeout(function(){
	        		$.stellar('refresh');
	        	}, 800);
        	}

    
        	return false;
        });
        
        
        $(window).smartresize(function(){
        	$container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                	columnWidth: $container.width() / $resize
                }
            });
        });
        

    }  


/**PROCESS ICONS**/
$('.iconBoxV3 a').hover(function() {

    if(Modernizr.csstransitions) {

        $(this).stop(false, true).toggleClass( 'hover', 150);
        $('i', this).css('-webkit-transform', 'rotateZ(360deg)');
        $('i', this).css('-moz-transform', 'rotateZ(360deg)');
        $('i', this).css('-o-transform', 'rotateZ(360deg)');
        $('i', this).css('transform', 'rotateZ(360deg)'); 

    }else{

       $(this).stop(false, true).toggleClass( 'hover', 150);

   }  

}, function() {

    if(Modernizr.csstransitions) {
        $(this).stop(false, true).toggleClass( 'hover', 150);
        $('i', this).css('-webkit-transform', 'rotateZ(0deg)');
        $('i', this).css('-moz-transform', 'rotateZ(0deg)');
        $('i', this).css('-o-transform', 'rotateZ(0deg)');
        $('i', this).css('transform', 'rotateZ(0deg)'); 

    }else{

        $(this).stop(false, true).toggleClass( 'hover', 150);
    }  
    
});


    if($('.scrollMenu').length || $('.scrollLink').length){

   		$('#globalWrapper').on( 'click', '#mainHeader .nav li a, .scrollLink',function(event) {
   			
   			var $anchor = $(this),
   			content      = $anchor.attr('href'),
		    checkURL     = content.match(/^#([^\/]+)$/i);


   			if(checkURL){
   				event.preventDefault();
   				var Hheight     = ($('.navbar-toggle').css('display') == 'none')?$('.scrollMenu').height() +10:$('.navbar-header').height() +10,
   				computedOffset = $($anchor.attr('href')).offset().top - parseInt(Hheight) + parseInt($($anchor.attr('href')).css('padding-top'))- 40;

   				$('html, body').stop().animate({
   					scrollTop : computedOffset + "px"
   				}, 1200, 'easeInOutExpo');
   			}else{

   			}
   		});
   	}

   	if (isMobile === false && typeof $("section").data('stellar-background-ratio') !== 'undefined')
   	{
   		$(window).stellar({
   			horizontalScrolling: false,
   			responsive:true,
   			scrollProperty: 'scroll',
   			parallaxElements: false,
   			horizontalOffset: 0,
   			verticalOffset: 0
   		});
   	}
   	

//END WINDOW LOAD
});

/*
|--------------------------------------------------------------------------
| FUNCTIONS
|--------------------------------------------------------------------------
*/

/* Appear function */
function nekoAnimAppear(){
    $("[data-nekoAnim]").each(function() {

        var $this = $(this);

        $this.addClass("nekoAnim-invisible");
        
        if($(window).width() > 767) {
            
            $this.appear(function() {

                var delay = ($this.data("nekodelay") ? $this.data("nekodelay") : 1);
                if(delay > 1) $this.css("animation-delay", delay + "ms");

                $this.addClass("nekoAnim-animated");
                $this.addClass('nekoAnim-'+$this.data("nekoanim"));

                setTimeout(function() {
                    $this.addClass("nekoAnim-visible");
                }, delay);

            }, {accX: 0, accY: -150});

        } else {
            $this.addClass("nekoAnim-visible");
        }
    });
}


/* CONTACT FROM */

jQuery(function() {
    "use strict";
    if( jQuery("#contactfrm").length ){

      jQuery("#contactfrm").validate({
        // debug: true,
        errorPlacement: function(error, element) {
            error.insertBefore( element );
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
              target: ".result",
              success: function(){
              	if($('.result .alert-success').length){
              		$("#contactfrm").trigger('reset');

              	}
              }
          });
        },
        onkeyup: false,
        onclick: false,
        highlight: function (element) {
        $(element).closest('.form-group').addClass('has-error');
        },
        errorElement: "div",
        success: function (element) {
        element.closest('.form-group').removeClass('has-error');
        },
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            // phone: {
            //     required: true,
            //     minlength: 10,
            //     digits:true
            // },
            comment: {
                required: true,
                minlength: 10,
                maxlength: 350
            }
        }
    });
  }

  if( jQuery("#projectQuote").length){

      jQuery("#projectQuote").validate({
        // debug: true,
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        },
        submitHandler: function(form) {
            jQuery(form).ajaxSubmit({
              target: ".quoteResult"
          });
        },
        onkeyup: false,

        
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            company: {
                required: true,
                minlength: 2
            },
            quoteType:{
                required: true
            },
            comment: {
                required: true,
                minlength: 10,
                maxlength: 350
            }

        }
    });



  }

});

/* CONTACT FROM */

/* FLEXSLIDER INNER INFO CUSTOM ANIMATION */
function animateTxt(curSlide, action){
    "use strict";
    if(action === 'in'){
        var i = 0;
        var animaDelay = 0;

        $('.slideN'+curSlide+':not([class*=clone])>.caption').css('display', 'block');

        $('.slideN'+curSlide+':not([class*=clone])>.caption>div').each(function( ) {
            if(Modernizr.csstransitions) { 

                $(this).css('-webkit-animation-delay', animaDelay+'s');
                $(this).css('-moz-animation-delay', animaDelay+'s');
                $(this).css('-0-animation-delay', animaDelay+'s');
                $(this).css('-ms-animation-delay', animaDelay+'s');
                $(this).css('animation-delay-delay', animaDelay+'s');

                $(this).show().addClass('animated').addClass($(this).attr('data-animation'));


                // $(this).show('slow', function() {
                //     $(this).addClass('animated').addClass($(this).attr('data-animation'));
                // });


            }else{
                var timing;
                $('.slideN'+curSlide+':not([class*=clone])>.caption>div').hide();
                if (i === 0){timing = 0;}else if(i === 1){timing = 300;} else{ timing = 300 * i;}
                $(this).delay(timing).fadeIn('fast');
            }
            i++;
            animaDelay = animaDelay+0.2;


        });

    }else{
        var j = 0;
        $('.slideN'+curSlide+':not([class*=clone])>.caption').css('display', 'none');

        $('.slideN'+curSlide+':not([class*=clone])>.caption>div').each(function( ) {
         if(Modernizr.csstransitions) { 

             $(this).removeClass($(this).attr('data-animation')).removeClass('animated').hide();

         }else{
            $(this).hide();
        }
        j++;
    });
    }

}





/*
|--------------------------------------------------------------------------
| GOOGLE MAP
|--------------------------------------------------------------------------
*/

function appendBootstrap() {
    "use strict";
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://maps.google.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
}    




function initialize(id) {
    "use strict";
    var image = 'images/icon-map.png';

    var overlayTitle = 'Agencies';

    var locations = [
        //point number 1
        ['Madison Square Garden', '4 Pennsylvania Plaza, New York, NY'],

        //point number 2
        ['Best town ever', 'Santa Cruz', 36.986021, -122.02216399999998],

        //point number 3 
        ['Located in the Midwestern United States', 'Kansas'],

        //point number 4
        ['I\'ll definitly be there one day', 'Chicago', 41.8781136, -87.62979819999998] 
    ];

/*** DON'T CHANGE ANYTHING PASSED THIS LINE ***/
id = (id === undefined) ? 'mapWrapper' : id;

var map = new google.maps.Map(document.getElementById(id), {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    streetViewControl:true,
    scaleControl:false,
    zoom: 14,
     styles:[
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#6196AD"
            },
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
             {
                "color": "#FCFFF5"
            },
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "lightness": 54
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dde1d4"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#73AB7D"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#767676"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7e7341"
            }
        ]
    },
    
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#dee6e6"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    }
]

});

var myLatlng;
var marker, i;
var bounds = new google.maps.LatLngBounds();
var infowindow = new google.maps.InfoWindow({ content: "loading..." });

for (i = 0; i < locations.length; i++) { 


    if(locations[i][2] !== undefined && locations[i][3] !== undefined){
        var content = '<div class="infoWindow">'+locations[i][0]+'<br>'+locations[i][1]+'</div>';
        (function(content) {
            myLatlng = new google.maps.LatLng(locations[i][2], locations[i][3]);

            marker = new google.maps.Marker({
                position: myLatlng,
                icon:image,  
                title: overlayTitle,
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function() {
                return function() {
                    infowindow.setContent(content);
                    infowindow.open(map, this);
                };

            })(this, i));

            if(locations.length > 1){
                bounds.extend(myLatlng);
                map.fitBounds(bounds);
            }else{
                map.setCenter(myLatlng);
            }

        })(content);
    }else{

        var geocoder   = new google.maps.Geocoder();
        var info   = locations[i][0];
        var addr   = locations[i][1];
        var latLng = locations[i][1];

        (function(info, addr) {

            geocoder.geocode( {

                'address': latLng

            }, function(results) {

                myLatlng = results[0].geometry.location;

                marker = new google.maps.Marker({
                    position: myLatlng,
                    icon:image,  
                    title: overlayTitle,
                    map: map
                });
                var $content = '<div class="infoWindow">'+info+'<br>'+addr+'</div>';
                google.maps.event.addListener(marker, 'click', (function() {
                    return function() {
                        infowindow.setContent($content);
                        infowindow.open(map, this);
                    };
                })(this, i));

                if(locations.length > 1){
                    bounds.extend(myLatlng);
                    map.fitBounds(bounds);
                }else{
                    map.setCenter(myLatlng);
                }
            });
        })(info, addr);

    }
}
}






/* ANALYTICS */
function gaSSDSLoad (acct) {
  "use strict";  
  var gaJsHost = (("https:" === document.location.protocol) ? "https://ssl." : "https://www."),
  pageTracker,
  s;
  s = document.createElement('script');
  s.src = gaJsHost + 'google-analytics.com/ga.js';
  s.type = 'text/javascript';
  s.onloadDone = false;
  function init () {
    pageTracker = _gat._getTracker(acct);
    pageTracker._trackPageview();
}
s.onload = function () {
    s.onloadDone = true;
    init();
};
s.onreadystatechange = function() {
    if (('loaded' === s.readyState || 'complete' === s.readyState) && !s.onloadDone) {
      s.onloadDone = true;
      init();
  }
};
document.getElementsByTagName('head')[0].appendChild(s);
}


/** FULLSCREEN IMAGE **/

function fullscreenImage(){
          $('#homeFullScreen').css({height:$(window).height()})   
}

$(window).on("resize",function(e){

       if ($('#fullScreen').length)
            {
                fullscreenImage();
            }
    
});

         







