
$(document).ready(function() {

	$('.order-samples form input[type="text"]').on('focus', function() {
		$('.order-samples form input[type="text"]').removeClass('input-error');
	});
	$('.order-samples form').submit(function(e) {
		e.preventDefault();
	    $('.order-samples form input[type="text"]').removeClass('input-error');
	    var postdata = $('.order-samples form').serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/order_samples.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
              if(json.company_nameMessage != '') {
                  $('.order-samples form .contact-company_name').addClass('input-error');
              }
              if(json.nameMessage != '') {
                  $('.order-samples form .contact-name').addClass('input-error');
              }
	            if(json.emailMessage != '') {
	                $('.order-samples form .contact-email').addClass('input-error');
	            }
	            if(json.company_nameMessage == '' && json.nameMessage == '' && json.emailMessage == '') {
	                $('.order-samples form').fadeOut('slow', function() {
	                    $('.form-msc').append('<div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12"><h1 class = "heading display-3">Thank you!</h1> <h5 class = "heading">Your information is received by our representative. We will be in contact with you shortly.</h5></div>');
	                });
	            }
	        }
	    });
	});
});


$(document).ready(function() {

	$('.become-partner form input[type="text"]').on('focus', function() {
		$('.become-partner form input[type="text"]').removeClass('input-error');
	});
	$('.become-partner form').submit(function(e) {
		e.preventDefault();
	    $('.become-partner form input[type="text"]').removeClass('input-error');
	    var postdata = $('.become-partner form').serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/become-partner.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
              if(json.company_nameMessage != '') {
                  $('.become-partner form .contact-company_name').addClass('input-error');
              }
              if(json.nameMessage != '') {
                  $('.become-partner form .contact-name').addClass('input-error');
              }
	            if(json.emailMessage != '') {
	                $('.become-partner form .contact-email').addClass('input-error');
	            }
	            if(json.company_nameMessage == '' && json.nameMessage == '' && json.emailMessage == '') {
	                $('.become-partner form').fadeOut('slow', function() {
	                    $('.form-msc').append('<div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12"> <h1 class = "heading display-3">Thank you!</h1> <h5 class = "heading">Your information is received by our representative. We will be in contact with you shortly.</h5></div>');
	                });
	            }
	        }
	    });
	});
});
