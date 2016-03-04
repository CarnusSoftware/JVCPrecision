// JavaScript Document

$(document).ready(function() {

/*	$("a:has(img)").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
	//	'overlayShow'	:	false
	});
*/
	
	$("a#image").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
	//	'overlayShow'	:	false
	//	'titlePosition'	:	'over',
		'onComplete'	:	function() {
		
	}
	});
	
	
	/* Apply fancybox to multiple items */
	
	$("a#group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
	//	'overlayShow'	:	false
	});
	
	$("a#video").click(function() {
	$.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'width'		: 680,
			'height'		: 495,
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'swf',
			'swf'			: {
			'wmode'		: 'transparent',
			'allowfullscreen'	: 'true'}
		});

	return false;
});

	function formatTitle(title, currentArray, currentIndex, currentOpts) {
    return '<div id="tip7-title"><span><a href="javascript:;" onclick="$.fancybox.close();"><img src="/data/closelabel.gif" /></a></span>' + (title && title.length ? '<b>' + title + '</b>' : '' ) + 'Image ' + (currentIndex + 1) + ' of ' + currentArray.length + '</div>';
}


/*	$("#fancybox-wrap").hover(function() {
			$("#fancybox-title").show();
		}, function() {
			$("#fancybox-title").hide();
		});
	
	*/
	
});