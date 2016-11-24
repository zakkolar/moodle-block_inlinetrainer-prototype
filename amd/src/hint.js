/* jshint devel: true, loopfunc:true  */
define(['jquery'],function($){
	function hint(selector){
		var overlay = $("<div class='block_inlinetrainer_overlay'></div>");
		$('body').append(overlay);
		var el =$(selector);
		var wrapper = $('<div class="block_inlinetrainer_hint"></div>').css({
			'z-index': overlay.css('z-index')+1,
			'margin':el.css('margin'),
			'background-color':$('body').css('background-color')
		});
		var directions = ['left','right','top','bottom'];
		for(var i=0; i<directions.length; i++){
			var direction = directions[i];
			wrapper.css('margin-'+direction,function(){
				var currentMargin = parseInt($(this).css('margin-'+direction));
				var currentPadding = $(this).css('padding');
				console.log('margin-'+direction,currentMargin);
				console.log('padding-'+direction,currentPadding);
				console.log($(this).css('padding'));
				
				return 0;
			});
		}
		
		el.wrap(wrapper).css('margin','0');
		overlay.click(function(){
			this.remove();
			el.css('margin',wrapper.css('margin'));
			el.unwrap();
		});
	}

	return hint;
});