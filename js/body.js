//intro animation
$(document).ready(function () {
	console.log('ready');
	var x = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 3);
	var y = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 10) + 3);
	var r = Math.floor((Math.random() * 255) + 1);
	var g = Math.floor((Math.random() * 255) + 1);
	var b = Math.floor((Math.random() * 255) + 1);
	var hdr = $('.hdrlink');

	/*	hdr.css('color', bgcolor);
		hdr.css('background', bgcolor);*/
	$('#madisvahersvg #valgejoon')
		.velocity({
			'stroke-dashoffset': 500,
			'strokeRed': r,
			'strokeGreen': g,
			'strokeBlue': b,
			'opacity': 1,
		}, 0)
		.velocity({
			'stroke-dashoffset': 0,
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
			'translateX': 0,
			'translateY': 0,
			'opacity': 1
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
	var x = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 60) + 3);
	var y = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 60) + 3);
	var sc = Math.floor((Math.random() * 200));
	var r = Math.floor((Math.random() * 255) + 1);
	var g = Math.floor((Math.random() * 255) + 1);
	var b = Math.floor((Math.random() * 255) + 1);

	function scale() {
		result = sc + '%';
		return result;
	};
	$(t2ht[i])
		.velocity({
			'translateX': x,
			'translateY': y,
			'rotateZ': x,
			'fillRed': r,
			'fillGreen': g,
			'fillBlue': b,
			'scale': scale
		}, {
			delay: 0,
			duration: 1000,
			easing: [ 550, 15 ]
		});
	};
	var t2ht2 = ["#madisvahersvg #valgejoon #M", "#madisvahersvg #valgejoon #A", "#madisvahersvg #valgejoon #D", 
				"#madisvahersvg #valgejoon #I", "#madisvahersvg #valgejoon #S", "#madisvahersvg #valgejoon #V",
			   	"#madisvahersvg #valgejoon #A2", "#madisvahersvg #valgejoon #H", "#madisvahersvg #valgejoon #E",
			   	"#madisvahersvg #valgejoon #R"];
	for (var i = 0; i < t2ht2.length; i++) {
	var xstroke = Math.floor((Math.random() * 300) + 200);
	var x = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 60) + 3);
	var y = Math.floor(((Math.random() < 0.5 ? -1 : 1) * 60) + 3);
	var sc = Math.floor((Math.random() * 200));
	var r = Math.floor((Math.random() * 255) + 1);
	var g = Math.floor((Math.random() * 255) + 1);
	var b = Math.floor((Math.random() * 255) + 1);

	function scale() {
		result = sc + '%';
		return result;
	};
	$(t2ht2[i])
		.velocity({
			'stroke-dashoffset': xstroke,
			'strokeRed': r,
			'strokeGreen': g,
			'strokeBlue': b,
			'translateX': -x,
			'translateY': -y,
			'rotateZ': x,
			'scale': scale
		}, {
			duration: 1000,
			delay: 0,
			easing: [ 550, 15 ]
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

$(document).ready(bgrand)
$("#madisvahersvg, .hdrlink").mouseup(bgrand)

var quotr = function () {
	var quotes = [
		{
			text: "Jau!",
        },
		{
			text: "Tsau!",
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

$("#fullpage").click(function () {
	$("#menu").removeClass("showmenu");
});
