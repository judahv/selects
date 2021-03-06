/**
* smoothScrollEx Plugin ver1.1
*
* 2015 Jun Sato http://creator-index.com/
*
* MIT-style license.
*
*/

;(function($) {
	$(window).load(function(){
			
		var options = $.extend({
			
			scrollSpeed: 1000,
			easing: 'swing',
			adjustment: -130,//ナビゲーションの高さ調整
			delayTime: 300
			
			},options);
				
		$('[href*=#]').click(function(event){
			var element = $(this);
			var elementHref = element.attr('href');
			
			
			if(elementHref.search(/^#.+/) === 0){
			
				var targetId = elementHref;
				var targetY = $(targetId).offset().top + options.adjustment;
				event.preventDefault();
				$('html,body').animate({scrollTop: targetY},options.scrollSpeed,options.easing);
			
			}else {
	
				var hrefSplit = elementHref.split(/#/);
				var hrefFirst = hrefSplit[0];
				var hrefLast = '#' + hrefSplit[1];

				var pathname = location.pathname;
				var pathnameSplit = pathname.split(/\//);				
				var pathnameLast = pathnameSplit[pathnameSplit.length - 1];
				
				var hostname = location.hostname;
			
				function aHrefCheck(){ 
				 
					var check1 = hrefFirst.match(/https?:\/\/.[^\/]+\//);
					if(check1 === null){
						return true;
					}else{
						var check2 = check1[0].indexOf(hostname);
						if (check2 != -1){
							return true;
						}else{
							return false;
						}
					}
				}			
		
				function aHrefChange(){
					if (hrefFirst.indexOf(hostname) !== -1 || hrefFirst.indexOf(pathnameLast) === -1){
						hrefLast = hrefLast.replace('#','?id=');			
						elementHref = hrefFirst + hrefLast;
						element.attr('href',elementHref);			
					}else{
						return;
					}
				}
				
				if(aHrefCheck() === true){
					aHrefChange();
				}else{

					return;
				}		
			}
		});
				
		var url = $(location).attr('href');
		var stringMatch = url.indexOf('?id=');
		
		if(stringMatch === -1){
			return;
		}else {
			var urlSplit = url.split(/\?id=/);
			var anchorLink = '#' + urlSplit[urlSplit.length -1];
			var anchorLinkTop = $(anchorLink).offset().top + options.adjustment;
			
			$('html,body').delay(options.delayTime).animate({scrollTop: anchorLinkTop},options.scrollSpeed,options.easing);
			
		}

	return this;
	
	});
		
})(jQuery);