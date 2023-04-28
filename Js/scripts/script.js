$(window).on("load", function () {
	$(".preloader-wrapper").fadeOut();
	$(".preloader").delay(350).fadeOut("slow");
  });

$(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
	    autoplay: true,
	    animateOut: 'fadeOut',
	    autoplayHoverPause: false,
	    items: 1,
		dots:false,
    })
	$(".right").css({
		"bottom":"24.5%",
		"left":" calc(50% - 2px)",
		"color":"rgba(255, 255, 255, 0.5)"
	});
	$(".left").css({
		"bottom":"24.5%",
		"left":" calc(50% - 25px)",
		"color":"rgba(255, 255, 255, 0.5)"
	});

	$(".fa-circle").each(function(){
		$(this).click(function(){
			$(".fa-circle").removeClass("text-light");
		 	$(this).addClass("text-light");
		})
	});
})

$(window).scroll(function(){
	if($(window).scrollTop()>=400){
		$(".menu").attr("style","position: fixed; z-index: 100; width: 100% !important; background-color: #fff !important;");
		$(".menu").addClass("animate__fadeInDown");
		$(".menu").removeClass("animate__fadeOutUp");
		$(".navbar-toggler i").attr("style","color: rgba(0, 0, 0, .5);");
		$(".navbar-toggler p").attr("style","color: rgba(0, 0, 0, .5);");
		$(".navbar-brand").addClass("text-dark");

		$(".menu-lg").attr("style","position: fixed !important; z-index: 100; width: 100% !important; background-color: #fff !important; box-shadow: 0 1px 10px rgba(0, 0, 0, .05);");
		$(".menu-lg").addClass("animate__fadeInDown");
		$(".menu-lg").removeClass("animate__fadeOutUp");
		$(".menu-lg-container").attr("style","margin: 1rem auto !important")
		$(".home").attr("style","color:#2f89fc !important");
		$(".appoinment").attr('style','background: #2f89fc; padding: 8px 20px !important; border-radius:50rem');
		$(".appoinment a").attr('style','color:#fff !important');
		$(".menu-item-lg a").removeClass("text-light");
		$(".menu-item-lg a").addClass("text-dark");
	}
	else if ($(window).scrollTop()<400 && $(window).scrollTop()>100){
		$('.menu').addClass("animate__fadeOutUp");
		$(".menu").removeClass("animate__fadeInDown");

		$('.menu-lg').addClass("animate__fadeOutUp");
		$(".menu-lg").removeClass("animate__fadeInDown");
	}
	else{
		$(".menu").attr("style","");
		$(".menu").removeClass("animate__fadeOutUp");
		$(".navbar-toggler i").attr("style","");
		$(".navbar-toggler p").attr("style","");
		$(".navbar-brand").removeClass("text-dark");
		$(".menu-item ul li a").attr("style","");
		
		$(".menu-lg").attr("style","");
		$(".menu-lg").removeClass("animate__fadeOutUp");
		$(".menu-lg-container").attr("style","")
		$(".menu-item-lg a").attr("style","");
		$(".appoinment").attr("style","");
		$(".appoinment a").attr('style','');
		$(".menu-item-lg a").addClass("text-light");
		$(".menu-item-lg a").removeClass("text-dark");
	}

	if($(window).scrollTop()>=250){
		$(".menu-item ul li a").attr("style","color: #000 !important; ");
		$("#home").attr("style","color: #2f89fc !important;");
		$(".appoinment-item ").attr("style","background-color:#2f89fc;");
		$(".appoinment-item a").attr("style","color: #fff !important;");
	}
	else{
		$(".menu-item ul li a").attr("style","");
		$("#home").attr("style","");
		$(".appoinment-item ").attr("style","");
		$(".appoinment-item a").attr("style","");
	}	
	
	$(".animate__fadeInDown").css("--animate-duration",".3s");
})
    

$(function(){
	$(".navbar-toggler").click(function(){
		$('.menu-item').toggleClass('d-none');
	})
})

$(window).scroll(function(){
	$(".owl-carousel-container h3, .owl-carousel-container p, .owl-carousel-container button").css("opacity", 1 - $(window).scrollTop() / 450);
})

$(document).ready(function(){
	$('#datepicker').datepicker({
		clearBtn: true,
		orientation: "bottom left",
	});
});


$(document).ready(function () {
	$('input.timepicker').timepicker({
		timeFormat: 'hh:mm p',
		interval: 30,
		minTime: '12:00am',
		maxTime: '11:30pm',
		startTime: '1:00pm',
		dropdown: true,
		scrollbar: true
	});
});

$(function(){
    let hasBeenTrigged = false;
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 3000 && !hasBeenTrigged) {
			let separator = $.animateNumber.numberStepFactories.separator(',');
			$("#number1")
			.prop('number', 1)
			.animateNumber({
				number:14,
			},{
				duration: 5800
			});
			$('#number2')
			.prop('number', 1500)
			.animateNumber(
			  {
				number: 4500,
				numberStep:separator
			  },{
				duration: 5800
			  }
			);
			$('#number3')
			.prop('number', 1500)
			.animateNumber(
			  {
				number: 4200,
				numberStep:separator
			  },{
				duration: 5800
			  }
			);
			$("#number4")
			.prop('number', 1)
			.animateNumber({
				number:320,
			},{
				duration: 5800
			})
            hasBeenTrigged = true;
        }
    });
});



$(function(){
	let totalBtn =  $(".slider-btn")[0];
	$(totalBtn).addClass("blue-bgcolor");
	$(".slider-btn").click(function(){
		let btnclicknum  = $(this).attr("date-number");
		let btn = $(".slider-btn");
		$(btn).each(function(){
			if($(this).hasClass("blue-bgcolor")){
				$(this).removeClass("blue-bgcolor");
			}
			if($(this).attr("date-number") === btnclicknum){
				$(this).addClass("blue-bgcolor");
				let totalslide = $(".customer");
				for(let i =0 ; i < totalslide.length-2;i++){
					let slide = $(totalslide[i]).attr("date-number");
					if(slide ===  btnclicknum){
						$(".sliderup").removeClass("sliderup");
						$(".sliderin").removeClass("sliderin");
			
						$(".z-3").addClass("nullclass");
						$(".z-3").removeClass("z-3");
						$(".nullclass").addClass("sliderin");
						$(".nullclass").removeClass("nullclass");
						$(totalslide[i]).addClass("sliderup");
						$(".sliderup").addClass("nullclass");
					}
				}
			}
		});
	})
})


$(document).ready(function(){
	const date = new Date();
    $(".footer-year").text(date.getFullYear());
});


// this bottom Code set padding for .achievements-header and .achievements-numbers 



const achievementsHeader = document.querySelector(".achievements-header");
const achievementsNumbers = document.querySelector(".achievements-numbers");
const procedureContainer = document.querySelector(".procedure-container");
const quoteContainer = document.querySelector(".quote-container");
const Width = window.innerWidth;
let prl = 0


if(Width >= 768 && Width <= 991){
	prl = (Width - 730) / 2;
}
else if(Width >=992 && Width <= 1199){
	prl = (Width - 930) / 2;
}
else if(Width >=1200 ){
	prl = (Width - 1100) / 2;
}

achievementsHeader.style.padding = `4rem 0 4rem ${prl}px`;
achievementsNumbers.style.padding = `4.5rem ${(prl)}px 0 0`;

let procedurePrl = prl - 12;
procedureContainer.setAttribute('style', `padding: 0 2rem 0 ${(procedurePrl)}px !important;`);
quoteContainer.setAttribute('style', `padding: 0 ${(procedurePrl)}px 0 3rem !important;`);



window.addEventListener("resize",function(){
	const browserWidth = this.innerWidth;
	if(browserWidth >= 768 && browserWidth <= 991){
		achievemenContainerWidth(730);
	}
	else if(browserWidth >=992 && browserWidth <= 1199){
		achievemenContainerWidth(930);
	}
	else if(browserWidth >=1200 ){
		achievemenContainerWidth(1100);
	
	}
});

function achievemenContainerWidth(bp){
	window.addEventListener("resize", function () {
		const Width = this.innerWidth;
		const prl = (Width - bp) / 2;
	
		achievementsHeader.style.padding = `0 0 0 ${prl}px`
		achievementsNumbers.style.padding = `4.5rem ${prl}px 0 0`;

		let procedurePrl = prl - 12;
		procedureContainer.setAttribute('style', `padding: 0 2rem 0 ${(procedurePrl)}px !important;`);
		quoteContainer.setAttribute('style', `padding: 0 ${(procedurePrl)}px 0 3rem !important;`);
	});
}

// ==============================================


$(document).ready(function () {
	AOS.init();
});

$(
	function () {
	  $("a.smooth-scroll").click(function (event) {
		event.preventDefault();
  
		var sectionId = $(this).attr("href");

		if(sectionId === "#Testimony"){
			$("html, body").animate({
				scrollTop: $(sectionId).offset().top -30
			},100, "easeInOutCubic");
		}
		else{
			$("html, body").animate({
				scrollTop: $(sectionId).offset().top -120
			},100, "easeInOutCubic");
		}
	  });
	}
)


$(document).ready(function(){
	$('div.personal-touch-image').zoom();
});

