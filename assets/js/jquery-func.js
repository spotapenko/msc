// $('#homepage_underlay').fadeOut('slow', function () {
//
// 		$('#homepage_underlay').css({ 'background-image': 'url("http://www.thebalancedbody.ca/wp-content/themes/balancedbody_V1/images/nutrition_background.jpg")' });
//
// 		$('#homepage_underlay').fadeIn('slow');
// });


$(document).ready(function(){
	$("#wall-white").click( function (){
    $("#walls-images").attr("src","assets/img/walls/wall_white.png");
		$(".constructor-body").css("background","#fafafa");
	});
	$("#wall-beige").click( function (){
    $("#walls-images").attr("src","assets/img/walls/wall_beige.png");
		$(".constructor-body").css({"background":"linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(41,41,41,0.40) 100%)", "background-color":"rgb(205, 196, 170)"});
	});
	$("#wall-brown").click( function (){
    $("#walls-images").attr("src","assets/img/walls/wall_brown.png");
		$(".constructor-body").css({"background":"linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(41,41,41,0.4) 100%)", "background-color":"rgb(109, 94, 64)"});
	});
	$("#wall-black").click( function (){
    $("#walls-images").attr("src","assets/img/walls/wall_black.png");
		$(".constructor-body").css({"background":"linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(41,41,41,0.4) 100%)", "background-color":"rgba(66,66,66,1)"});
	});

	$("#floor-white").click( function (){
    $("#floor-images").attr("src","assets/img/floor/floor_white.png");
	});
	$("#floor-beige").click( function (){
    $("#floor-images").attr("src","assets/img/floor/floor_beige.png");
	});
	$("#floor-brown").click( function (){
    $("#floor-images").attr("src","assets/img/floor/floor_brown.png");
	});
	$("#floor-black").click( function (){
    $("#floor-images").attr("src","assets/img/floor/floor_black.png");
	});

	$("#bottom-white-pearl").click( function (){
    $("#bottom-images").attr("src","assets/img/bottom/bottom_zh-977_white-pearl.png");
		$('.finishes-text--bottom h4').text('"White Pearl"');
	});
	$("#bottom-dark-blue").click( function (){
    $("#bottom-images").attr("src","assets/img/bottom/bottom_zh-941_dark-blue.png");
		$('.finishes-text--bottom h4').text('"Dark Blue"');
	});
	$("#bottom-pistachio").click( function (){
    $("#bottom-images").attr("src","assets/img/bottom/bottom_hguvl_pistachio.png");
		$('.finishes-text--bottom h4').text('"Pistachio"');
	});
	$("#bottom-naranja").click( function (){
    $("#bottom-images").attr("src","assets/img/bottom/bottom_hguvl_naranja.png");
		$('.finishes-text--bottom h4').text('"Naranja"');
	});

	$("#top-white-pearl").click( function (){
    $("#top-images").attr("src","assets/img/top/top_zh-977_white-pearl.png");
		$('.finishes-text--top h4').text('"White Pearl"');
	});
	$("#top-dark-blue").click( function (){
    $("#top-images").attr("src","assets/img/top/top_zh-941_dark-blue.png");
		$('.finishes-text--top h4').text('"Dark Blue"');
	});
	$("#top-pistachio").click( function (){
    $("#top-images").attr("src","assets/img/top/top_hguvl_pistachio.png");
		$('.finishes-text--top h4').text('"Pistachio"');
	});
	$("#top-naranja").click( function (){
    $("#top-images").attr("src","assets/img/top/top_hguvl_naranja.png");
		$('.finishes-text--top h4').text('"Naranja"');
	});

    $('.imgtop.color-cell--inside').on('click',function(){
    $('.imgtop.color-cell--inside').removeClass('active');
    $(this).addClass('active');
  });
    $('.imgbottom.color-cell--inside').on('click',function(){
    $('.imgbottom.color-cell--inside').removeClass('active');
    $(this).addClass('active');
  });
    $('.imgwalls.color-cell--inside').on('click',function(){
    $('.imgwalls.color-cell--inside').removeClass('active');
    $(this).addClass('active');
  });
    $('.imgfloor.color-cell--inside').on('click',function(){
    $('.imgfloor.color-cell--inside').removeClass('active');
    $(this).addClass('active');
  });

	$('.btn-wish').click(function () {
   $(this).css('color', 'rgba(0,0,0,0.4)');
	 $(this).removeClass('icon-wish');
	 $(this).addClass('icon-wish-filled');
	 $(this).text('Added to Wishlist');
 });

$(document).ready(function() {
    $(".panel-heading").on('click',function(){
        if(!$(this).hasClass('active'))
        {
					$('.panel-heading').removeClass('active');
					$(this).addClass("active");
        }
				else {
					  $(this).removeClass("active");
				}
    });
});

});
