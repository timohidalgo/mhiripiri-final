$(document).ready(function() {


// dropdown tags for gallery
$('.dropdown-content').hide();

	$('.dropdown').mouseover(function() {
        $('.dropdown-content').slideDown('fast');
	});
	
	$('.dropdown').mouseleave(function() {
        $('.dropdown-content').slideUp('fast');
	});


// random homepage image
var images = ["smallanimal1.jpg", "smallanimal2.jpg", "smallanimal3.jpg", "smallanimal4.jpg", "smallanimal5.jpg", "smallanimal6.jpg", "smallpeople3.jpg", "smallpaint3.jpg"];
	$("#random").css({"background-image": "url(images/" + images[Math.floor(Math.random()*images.length)] + ")"});




$('#grayout').hide();
$('.largepic').hide();
$('.caption').hide();
$('#purchase').hide();

// _____command to grayout other images when one is clicked on______
	$(".pic").click(function() {
		$(this).toggleClass("test");
		$('#grayout').fadeIn();
		$('#purchase').fadeIn();
	});
	$("#grayout").click(function() {
		$('#grayout').fadeOut();
		$('.largepic').fadeOut();
		$('.caption').fadeOut();
		$('#purchase').fadeOut();
	});


// _____commands to exapnd image when clicked on, and show caption_____

$("#small1").click(function() {
		$('#animal1').fadeIn();
		$('#caption_1').fadeIn();
	});

$("#small2").click(function() {
		$('#animal2').fadeIn();
		$('#caption_2').fadeIn();
	});

$("#small3").click(function() {
		$('#animal3').fadeIn();
		$('#caption_3').fadeIn();
	});

$("#small4").click(function() {
		$('#animal4').fadeIn();
		$('#caption_4').fadeIn();
	});

$("#small5").click(function() {
		$('#animal5').fadeIn();
		$('#caption_5').fadeIn();
	});

$("#small6").click(function() {
		$('#animal6').fadeIn();
		$('#caption_6').fadeIn();
	});

$("#small7").click(function() {
		$('#animal7').fadeIn();
		$('#caption_7').fadeIn();
	});
	
	
$("#smallpeople1").click(function() {
		$('#people1').fadeIn();
		$('#caption_8').fadeIn();
	});
$("#smallpeople2").click(function() {
		$('#people2').fadeIn();
		$('#caption_9').fadeIn();
	});
$("#smallpeople3").click(function() {
		$('#people3').fadeIn();
		$('#caption_10').fadeIn();
	});
$("#smallpeople4").click(function() {
		$('#people4').fadeIn();
		$('#caption_11').fadeIn();
	});
$("#smallpeople5").click(function() {
		$('#people5').fadeIn();
		$('#caption_12').fadeIn();
	});
$("#smallpeople6").click(function() {
		$('#people6').fadeIn();
		$('#caption_13').fadeIn();
	});
$("#smallpeople7").click(function() {
		$('#people7').fadeIn();
		$('#caption_14').fadeIn();
	});
$("#smallpeople8").click(function() {
		$('#people8').fadeIn();
		$('#caption_15').fadeIn();
	});
	
$("#smallpaint1").click(function() {
		$('#painting1').fadeIn();
		$('#caption_16').fadeIn();
	});
$("#smallpaint2").click(function() {
		$('#painting2').fadeIn();
		$('#caption_17').fadeIn();
	});
$("#smallpaint3").click(function() {
		$('#painting3').fadeIn();
		$('#caption_18').fadeIn();
	});
$("#smallpaint4").click(function() {
		$('#painting4').fadeIn();
		$('#caption_19').fadeIn();
	});
$("#smallpaint5").click(function() {
		$('#painting5').fadeIn();
		$('#caption_20').fadeIn();
	});
	


// ________enabling Mixitup and settings__________
	$('#mix-wrapper').mixItUp({
  		load: {
  			sort: 'order:asc'
  		},
		animation: {
    		effects: 'fade',
    		duration: 700
  		},
  		selectors: {
    		target: '.mix-target',
    		filter: '.filter-btn'
  		},
  		callbacks: {
    		onMixEnd: function(state){
      			console.log(state)
    		}
  		}
	});


});