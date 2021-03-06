$(document).ready(function() {

//tabs
function tabs() {
	var el = $('.js-tabs');
	el.find('.tabs__item:not(:first)').hide();
	el.find('.tabs__nav > button').click(function() {
		if (!$(this).hasClass('is-active')) {			
			$(this).parent().parent().find('.tabs__item').hide();
			$(this).parent().find('button').removeClass('is-active');
			$(this).addClass('is-active');
			var val = $(this).attr('data-tab');
			$('#' + val).fadeIn();
		};
	});
}
tabs();

//select
function select() {
	var el = $('.js-select');
	var el_title = el.find('span');
	var item = el.find('li');
	var list = el.find('ul');
	el_title.click(function() {
		el.removeClass('is-open');
		list.hide();
		$(this).parent().toggleClass('is-open');
		$(this).next().toggle();
	});
	item.click(function() {
		var val = $(this).text();
		$(this).parent().prev().addClass('is-selected');
		$(this).parent().prev().html(val + '<i></i>');
		$(this).parent().hide();
		el.removeClass('is-open');
	});
	el.click(function(event){
	  event.stopPropagation();
	});
};
select();

//gallery
function gallery() {
	var slideshows = $('.cycle-slideshow').on('.gallery__next .gallery__prev', function(e, opts) {
		slideshows.not(this).cycle('goto', opts.currSlide);
	});
	$('.gallery__small .gallery__list').on('click', '.cycle-slide', function(){
	  var index = $('.gallery__small .gallery__list').data('cycle.API').getSlideIndex(this);
	  slideshows.cycle('goto', index);
	});
};
gallery();

//comm
function comm() {
	var el = $('.js-comm');
	var btn = $('.js-show-comm');
	var news = el.find('.news_comm');
	btn.click(function() {
		el.toggleClass('is-show');
		$(this).toggleClass('is-active');
		if (news.hasClass('news_sm-grid')) {
			news.removeClass('news_sm-grid');
			news.addClass('news_sm');
		}
		else {
			news.addClass('news_sm-grid');
			news.removeClass('news_sm');
		}
	});
};
comm();

//sidebar
function sidebar() {
	var btn = $('.js-sidebar-btn');
	var btn_menu = $('.js-sidebar-menu');
	var btn_settings = $('.js-sidebar-settings');
	var body = $('body');
	btn.bind('click', function() {
		$(this).parent().toggleClass('is-show');
	});
	btn_menu.bind('click', function() {
		body.toggleClass('menu-open');
		$(this).toggleClass('is-active');
	});
	btn_settings.bind('click', function() {
		body.toggleClass('settings-open');
		$(this).toggleClass('is-active');
	});
};
sidebar();

//region mobile
function dropdown() {
	var el = $('.js-dropdown');
	el.bind('click', function() {
		el.parent().toggleClass('is-open');
	});
};
dropdown();


});