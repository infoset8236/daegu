$(document).ready(function () {
	// 로고 클릭시 section1 으로 이동
	$('h1').click(function (event) {
		event.preventDefault();
		fullpage_api.moveTo(1);
	});

	$('.header').hover(
		function () {
			if ($(window).width() > 1300) {
				$('.sub_menu').stop(true, true).slideDown(300);
			}
		},
		// 모바일, 테블릿 pc 호버 block 처리
		function () {
			if ($(window).width() > 1300) {
				if (!$('.sub_menu').is(':hover')) {
					$('.sub_menu').stop(true, true).slideUp(300);
				}
			}
		}
	);

	$('.sub_menu').hover(
		function () {
			if ($(window).width() > 1300) {
				$(this).stop(true, true).show();
			}
		},
		// 모바일, 테블릿 pc 호버 block 처리
		function () {
			if ($(window).width() > 1300) {
				$(this).stop(true, true).slideUp(300);
			}
		}
	);
});
