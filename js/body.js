//intro animation
$(document).ready(function () {
	console.log('ready');
	var x = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 3);
	var y = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 3);
	var r = Math.floor((Math.random() * 255) + 1);
	var g = Math.floor((Math.random() * 255) + 1);
	var b = Math.floor((Math.random() * 255) + 1);
	var xstroke = Math.floor((Math.random() * 300) + 50);
	var hdr = $('.hdrlink');

	function bgcolor() {
		result = 'rgba(' + r + ',' + g + ',' + b + ',' + 1 + ')';
		return result;
	};
	/*	hdr.css('color', bgcolor);
		hdr.css('background', bgcolor);*/
	$('#madisvahersvg #valgejoon')
		.velocity({
			'stroke-dashoffset': 500,
			'strokeRed': r,
			'strokeGreen': g,
			'strokeBlue': b,
			'opacity': .2,
		}, 0)
		.velocity({
			'stroke-dashoffset': xstroke,
			'strokeRed': r,
			'strokeGreen': g,
			'strokeBlue': b
		}, {
			duration: 2000,
			delay: 100,
			easing: "ease-in-out"
		})
		.velocity({
			'translateX': 0,
			'translateY': 0,
			strokeWidth: 2,
		}, 1100, "ease-in-out");
	$('#madisvahersvg #mustpind')
		.velocity({
			fillRed: r,
			fillGreen: g,
			fillBlue: b,
			'translateX': -y,
			'translateY': -y,
			opacity: .3
		}, {
			delay: 1500,
			duration: 1000,
			easing: "ease-in-out"
		});
	//background animation stuff
});

var goaway = function () {
	var t2ht = ["#madisvahersvg #mustpind #M", "#madisvahersvg #mustpind #A", "#madisvahersvg #mustpind #D", 
				"#madisvahersvg #mustpind #I", "#madisvahersvg #mustpind #S", "#madisvahersvg #mustpind #V",
			   	"#madisvahersvg #mustpind #A2", "#madisvahersvg #mustpind #H", "#madisvahersvg #mustpind #E",
			   	"#madisvahersvg #mustpind #R"];
	for (var i = 0; i < t2ht.length; i++) {
	var xstroke = Math.floor((Math.random() * 300) + 50);
	var x = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 3);
	var y = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 3);
	var sc = Math.floor((Math.random() * 300));

	function scale() {
		result = sc + '%';
		return result;
	};
	$(t2ht[i])
		.velocity({
			'translateX': x,
			'translateY': y,
			'scale': scale
		}, {
			delay: 0,
			duration: 700,
			easing: "ease-in-out"
		});
	};
	var t2ht2 = ["#madisvahersvg #valgejoon #M", "#madisvahersvg #valgejoon #A", "#madisvahersvg #valgejoon #D", 
				"#madisvahersvg #valgejoon #I", "#madisvahersvg #valgejoon #S", "#madisvahersvg #valgejoon #V",
			   	"#madisvahersvg #valgejoon #A2", "#madisvahersvg #valgejoon #H", "#madisvahersvg #valgejoon #E",
			   	"#madisvahersvg #valgejoon #R"];
	for (var i = 0; i < t2ht2.length; i++) {
	var xstroke = Math.floor((Math.random() * 300) + 50);
	var x = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 3);
	var y = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 3);
	var sc = Math.floor((Math.random() * 300));

	function scale() {
		result = sc + '%';
		return result;
	};
	$(t2ht2[i])
		.velocity({
			'stroke-dashoffset': xstroke,
			'translateX': -x,
			'translateY': -y,
			'scale': scale
		}, {
			duration: 700,
			delay: 0,
			easing: "ease-in-out"
		});
	};
};

// randomgradient
var back1 = [
    "#3400FC", "#F5445F", "#F3341C", "#02F195", "#FD5467"];
var back2 = [
    "#3400FC", "#F5445F", "#F3341C", "#02F195", "#FD5467"];

var bgrand = function () {

	// First random color
	var rand1 = back1[Math.floor(Math.random() * back1.length)];
	// Second random color
	var rand2 = back2[Math.floor(Math.random() * back2.length)];

	var boop = $('.boop');

	// Convert Hex color to RGB
	function convertHex(hex, opacity) {
		hex = hex.replace('#', '');
		r = parseInt(hex.substring(0, 2), 16);
		g = parseInt(hex.substring(2, 4), 16);
		b = parseInt(hex.substring(4, 6), 16);

		// Add Opacity to RGB to obtain RGBA
		result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
		return result;
	}

	// Gradient rules
	boop.css('background-color', rand1);
	boop.css("background", "-webkit-linear-gradient( left top, left bottom" + rand1 + ", " + rand2 + ")");
	boop.css("background", "-webkit-linear-gradient( left top, left bottom" + rand1 + ", " + rand2 + ")");
	boop.css("background", "-o-linear-gradient( left top, left bottom" + rand1 + ", " + rand2 + ")");
	boop.css("background", "-ms-linear-gradient( left top, left bottom" + rand1 + ", " + rand2 + ")");
	boop.css("background", "linear-gradient(to bottom, " + rand1 + ", " + rand2 + ")");
	boop.css("filter", "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + rand1 + "', endColorstr='" + rand2 + "',GradientType=0 )");
	boop.css("transition", "background 1s ease-out;");
	boop.css("-webkit-transition", "background 1s ease-out;");
	boop.css("-moz-transition", "background 1s ease-out;");
	boop.css("-o-transition", "background 1s ease-out;");
}

var fillrand = function () {
	var x = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 1);
	var y = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 1);
	var r = Math.floor((Math.random() * 255) + 1);
	var g = Math.floor((Math.random() * 255) + 1);
	var b = Math.floor((Math.random() * 255) + 1);

	$("#madisvahersvg #mustpind").velocity({
		'fillRed': r,
		'fillGreen': g,
		'fillBlue': b,
		'translateX': x,
		'translateY': y,
		'opacity': .3
	}, {
		delay: false,
		duration: 1100,
		easing: "ease-in-out"
	});
};
var strokerand = function () {
	var xstroke = Math.floor((Math.random() * 600) + 50);
	var r = Math.floor((Math.random() * 255) + 1);
	var g = Math.floor((Math.random() * 255) + 1);
	var b = Math.floor((Math.random() * 255) + 1);
	$("#madisvahersvg #valgejoon").velocity({
		'stroke-dashoffset': xstroke,
		'strokeRed': r,
		'strokeGreen': g,
		'strokeBlue': b
	}, {
		delay: false,
		duration: 1100,
		easing: "ease-in-out"
	});
};

$(document).ready(bgrand)
$("#madisvahersvg, .hdrlink").mouseup(bgrand)


//header link hover
var rand_color = function () {
	var r = Math.floor((Math.random() * 250) + 1);
	var g = Math.floor((Math.random() * 250) + 1);
	var b = Math.floor((Math.random() * 250) + 1);
	var ri = 255 - r;
	var gi = 255 - g;
	var bi = 255 - b;

	function rgba_rand() {
		result = '.15em solid rgba(' + r + ',' + g + ',' + b + ',' + 1 + ')';
		return result;
	}

	function rgba_invert() {
		result = 'inset 1000px 1000px 0 rgba(' + ri + ',' + gi + ',' + bi + ',' + .8 + ')';
		return result;
	}
	$("h1").css("border-bottom", rgba_rand);
	$(".imageoverlay").css("box-shadow", rgba_invert);
};

var quotr = function () {
	var quotes = [
		{
			text: "Jau!",
        },
		{
			text: "Hellõu!",
        },
		{
			text: "Tere!",
        },
		{
			text: "Hei!",
        }
      ];
	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	document.getElementById("quote").innerHTML =
		'<span>' + quote.text + '</span>';
	document.getElementById("quote2").innerHTML =
		'<span>' + quote.text + '</span>';
};
$(document).ready(quotr);

$("#menu-toggle").click(function () {
	$("#menu").addClass("showmenu");
});
$("#menu-toggle").click(function () {
	$("#fullpage").addClass("pageleft");
});
$("#fullpage").click(function () {
	$("#menu").removeClass("showmenu");
});
$("#fullpage").click(function () {
	$("#fullpage").removeClass("pageleft");
});
