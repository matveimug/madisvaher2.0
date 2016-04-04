$(document).ready(function () {
	$('#fullpage').fullpage({
		//sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
		anchors: ['tere', 'madius', 'kontrast', 'kfn', 'lastPage'],
		menu: '#menu',
		continuousVertical: true,
		loopHorizontal: false,
		easing: 'easeInOutCubic',
		keyboardScrolling: true,
		fixedElements: '#header, .footer',
		scrollingSpeed: 300,
		slidesNavigation: true,
        slidesNavPosition: 'bottom',
		onLeave: function (index, nextIndex, direction) {
			var leavingSection = $(this);
			if (index != 1 && direction == 'down', 'up') {
				bgrand();
				setTimeout(function () {
					rand_color();
				}, 50);
				goaway();
				$( "#menu" ).removeClass("showmenu");
			}
			if (index == 1 && direction == 'down') {
				setTimeout(function () {
					quotr();
				}, 500);
			}
			if (index == 1 && direction == 'up') {
				setTimeout(function () {
					quotr();
				}, 500);
			}
		},
		afterLoad: function (anchorLink, index) {
			var loadedSection = $(this);

			//using index
			if (index == 1) {
			}
		},
	});
});
