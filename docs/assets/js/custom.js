
jQuery(document).ready(function() {

	//Add Dealer Locator Link - Temporary
	jQuery( ".link-search" ).after( "<li class='link-locator'><a href='/contact-dealer'><span class='links-icon'></span><span class='link-label'>Dealer Locator</span></a></li>" );
	//End Dealer Locator Link

	//Login Note
	/*jQuery( ".welcome-msg p:nth-child(2)" ).remove();
	jQuery( ".welcome-msg" ).append( "<p class='boxed'><strong>Daily Shipping Update: Oregon 11am PST, Ohio 10am PST. We will accept Must Ship Requests. Cut off times are subject to change at any time due to a high volume of orders or an influx in incoming product. We will strive to be as consistent as possible.</strong></p>" );*/
	//End Login Note

	//Design Complete Note
	jQuery( ".saveandshare-image" ).append( "<p class='red design-msg'><strong>Before emailing to a dealer, please SAVE the design first to your Player account or your Dealer's account.</strong></p>" );
	//End Design Complete Note
	
	//Maintenance Notice 
	/*jQuery( ".welcome-msg" ).append( "<p id='maintenance' class='hello'><strong>We are currently experiencing inclement weather and operating with a reduced customer support staff. We will respond to your requests and get your orders processed as quickly as possible. Online orders are being processed and we will make every effort to deliver shipments on time. Thank you for your patience.</strong></p>" );*/
	//End Maintenance Notice

	//Shopping Cart Notice
	jQuery( ".cart-totals" ).append( "<br><p class='red cart-note'>NOTE: If ordering Blank Caps <em>and</em> &nbsp;Decorated / Custom Caps, please do so on <em>Separate</em> orders</p><br /><p class='cart-note'>Prices subject to change at any time without prior notification</p>" );
	//End Shopping Cart Notice

	// Shopping Cart Tooltip
	/*jQuery(".edit-quantity").addClass("tooltip");
	jQuery( ".edit-quantity" ).append( "<div class='tooltiptext tooltip-bottom'><h2 class='product-name'>For Changes To Sizes Or Colors</h2><p>To add or remove a size, click on the red design number and edit your quantity from the customizer. Finish design and add to cart. Then delete any unwanted lines from your cart before submitting your order.</p></div>" );*/
	// End Cart Tooltip

	// Checkout Note
	jQuery("#shipping-method-buttons-container").append("<div class='extra-padding'><p class='red'>Please note: UPS is our preferred carrier. Greater service discounts offered on all UPS services.</p></div>" );
	// End Checkout Note

	// Hide missing images on Shopping Cart
	jQuery(window).bind('load', function() {
		jQuery('td.product-cart-image img').each(function() {
    			if((typeof this.naturalWidth != "undefined" &&
        		this.naturalWidth == 0 ) 
        		|| this.readyState == 'uninitialized' ) {
        			jQuery(this).css('visibility', 'hidden');
				//console.log('hiding broken images');
    			}
		}); 
	})
	// End Image Fix

	jQuery('#my-orders-table tbody').each(function(i) {
		if( jQuery(this).find('tr:not(.dataMobileView) .cart-price').length > 0 ) {
			jQuery(this).find('.bundle.first, .bundle.parent').children('.last').html(jQuery(this).find('tr:not(.dataMobileView) .cart-price'));
		}
	});
	
    /*jQuery('.link-order').on("click",function(e){
		jQuery('#header-nav').slideDown('fast');
	});*/
	
	/*jQuery('.top-links > li').on("click",function(e){
		jQuery('#header-nav.skip-active').slideDown('fast');
	});*/
	
	$j(function() {
		headerTopLinks($j(".top-links > li > a"));
		$j(document).on("click", "body", function(e) {
			if( $j(e.target).closest('.sublinks, #search_mini_form, .quickorder_wrapper_lightbox').length == 0 ) {
				//console.log('a');
				$j(".top-links > li").removeClass("active");
				$j('.sublinks, #search_mini_form, .quickorder_wrapper_lightbox').hide('fast');
			}
		});
		/*$j(document).on("click", function(e) {
console.log(e.target + ' cc ' + $_this.has(e.target).length + ' ee ' + $_this.attr('class') );
					if($_this.has(e.target).length == 0) {
						console.log('ddd');
						topLinks.parent('li').removeClass("active");
						$j('.sublinks, #search_mini_form, .quickorder_wrapper_lightbox').slideUp('fast');
						$j(document).off("click");
					}
				});*/
	});
	function headerTopLinks(topLinks) {
		topLinks.on("click", function(e) {
			e.stopPropagation();
			var thisTrigger = $j(this),
				thisMenu = thisTrigger.parent(),
				thisPanel = thisTrigger.next();
			var $_this = $j(this).parents('li');
			if( $_this.hasClass('link-search') ) {
				if( $_this.hasClass('active') ) {
					$_this.find('#search_mini_form').slideUp('fast');
				} else {
					$_this.siblings('li').find('.sublinks, .quickorder_wrapper_lightbox').slideUp('fast');
					$_this.find('#search_mini_form').slideDown('fast');
				}
			} else if( $_this.hasClass('link-account') ) {
				if( $_this.hasClass('active') ) {
					$_this.find('.sublinks').slideUp('fast');
				} else {
					$_this.siblings('li').find('#search_mini_form, .quickorder_wrapper_lightbox').slideUp('fast');
					$_this.find('.sublinks').slideDown('fast');
				}
			} else if( $_this.hasClass('link-order') ) {
				if( $_this.hasClass('active') ) {
					$_this.find('.quickorder_wrapper_lightbox').slideUp('fast');
				} else {
					$_this.siblings('li').find('.sublinks, #search_mini_form').slideUp('fast');
					$_this.find('.quickorder_wrapper_lightbox').slideDown('fast');
				}
				jQuery('#header-nav, .skip-nav, .link-search, .link-account').removeClass('skip-active active');
			}
			if( $_this.hasClass('active') ) {
//console.log('aa');
				$_this.removeClass('active');
				//$j(document).off("click");
			} else {
//console.log('bb');
				$_this.siblings('li').removeClass('active');
				$_this.addClass('active');
			}
		});
	}
	// hide #back-top first
	jQuery("#back-top").hide();
	// fade in #back-top
	jQuery(function () {
		jQuery(window).scroll(function () {
		//console.log(jQuery(this).scrollTop());
			if (jQuery(this).scrollTop() > 100) {
				jQuery('#back-top').fadeIn();
			} else {
				jQuery('#back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		jQuery('#back-top a').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	jQuery(document).on('click', '.cap-images-grid img', function(){
		jQuery('.product-image-gallery > img').removeClass('visible');
        var img_template = '<img data-zoom-image="'+jQuery(this).attr('data-zoom')+'" src="'+jQuery(this).attr('data-large')+'" class="gallery-image cap-img visible" />';
        if(jQuery('.product-image-gallery').find('.cap-img').length >= 1){
            jQuery('.product-image-gallery .cap-img').replaceWith(img_template);
        }else{
        	    jQuery('.product-image-gallery').prepend(img_template);
        }
		jQuery('.cap-img').elevateZoom();
	});
	/*jQuery(document).ready(function(e) {
		jQuery('#quickorder_box_lightbox a.remove').click(function() {
			jQuery('.quickorder_wrapper_lightbox').slideDown();
		}); 
    });*/
	
	cartTable();
	
});
jQuery(document).ready(function(){
			jQuery('.blank-order-action button.btn-OrderBlankCaps').click(function() {
				setTimeout(function(){
					var headerHeight = jQuery('#header').height();
						jQuery('html, body').animate({
							scrollTop: jQuery("#bkodr_main.box-collateral").offset().top  - parseInt(headerHeight) }, 1000);
			},500);
			});
			
});


jQuery(window).resize(function() {
	cartTable();
    fluidNavBar();
});

function cartTable() {
	if(jQuery(window).width() <= 767) {
		jQuery(".cart-table tbody tr").each(function() {
			jQuery(this).find("td.product-cart-warehouse .warehouse-filter").insertAfter(jQuery(this).find("td.product-cart-remove"));
			jQuery(this).find("td.product-cart-info .product-name").insertBefore(jQuery(this).find("td.product-cart-image"));
		});
	} else {
		jQuery(".cart-table tbody tr").each(function() {
			jQuery(this).find("td.product-cart-warehouse").append(jQuery(this).children(".warehouse-filter"));			
			jQuery(this).find("td.product-cart-info").prepend(jQuery(this).children(".product-name"));			
		});
	}
}

if(jQuery(window).width() <= 767){
	jQuery(document).ready(function() {
		//jQuery(".cart-table td.product-cart-warehouse").insertAfter(".cart-table td.product-cart-remove");
		//jQuery(".cart-table .product-cart-info .product-name").insertBefore(".cart-table td.product-cart-image");
		jQuery(".product-attribute-set .prod-attribute-col.AttributeAvailableValues").prependTo(".catalog-product-view .product-collateral > dl > dd .tab_product_detail");
		jQuery(".product-attribute-set .prod-attribute-col.AttributeAvailableSizes").prependTo(".catalog-product-view .product-collateral > dl > dd .tab_available_size");
		jQuery(".catalog-product-view #product-options-wrapper").prependTo(".catalog-product-view .product-collateral > dl > dd .tab_cap_color");
		jQuery(".catalog-product-view .product-info-shop").prependTo(".catalog-product-view .product-img-box");
	});
}
if(jQuery(window).width() >= 767){
// This is a BONUS jQuery Mod showing same padding per each side of anchor.
function fluidNavBar(){
// RESET PADDING
    jQuery('.nav-primary li.level0 > a').css({'padding-left':0, 'padding-right':0});
// CROSSBROWSER SET MIN-WIDTH
    var rawLinksWidth = jQuery('.nav-primary').width();
    //jQuery('.nav-primary').css('min-width', rawLinksWidth);
// DETERMINE TOTAL BREADCRUMB LINKS IN HTML
    var level0Total = jQuery('.nav-primary li.level0 > a').size();
// DETERMINE TOTAL PADDING AVAILABLE
    var navPaddingPixelCount = jQuery('.navPaddingTotal').width();
    if( rawLinksWidth >= jQuery('body').width() ){
        navPaddingPixelCount = 0;
    }
// DETERMINE PIXEL PADDING PER BREADCRUMB
    var navPaddingPixelShared = navPaddingPixelCount / level0Total;
// SET EACH BREADCRUMB PADDING
    jQuery('.nav-primary li.level0 > a').css({'padding-left':navPaddingPixelShared/2, 'padding-right':navPaddingPixelShared/2});
}
// RUN ON PAGE LOAD
window.onload = function() {
    fluidNavBar();
};
// RUN ON WINDOW RESIZE

}
