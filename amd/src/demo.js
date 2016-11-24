/* jshint devel: true  */
define(['jquery','block_inlinetrainer/steps'],function($,steps){
	function getHtmlId(step){
		return 'block_inlinetrainer_step_'+step.getId();
	}

	function StepDisplay(step,baseElement){

		var li = $(baseElement);
		var id = getHtmlId(step);
		li.attr('id',id);
		li.html(step.getText());
		step.subscribe(function(complete){
			li.trigger('completeChange');
		});
		li.on('completeChange',function(){
			var myStep = step;
			if(myStep.isComplete()){
				$(this).addClass('complete');
			}
			else{
				$(this).removeClass('complete');
			}
		}).trigger('completeChange');

		this.getElement=function(){
			return li;
		}

	}

	return {
		run: function(identifier){
			$(identifier).html('');
			for(var i=steps.length-1; i>=0; i--){
				var step=new StepDisplay(steps[i],'<li></li>');

				// var li = $('<li></li>');
				// li.attr('id',getHtmlId(step));
				// li.html(step.getText());
				$(identifier).prepend(step.getElement());

				// step.subscribe(function(complete){
				// 	$('#'+getHtmlId(step)).trigger('completeChange');
				// });

				// $('#'+getHtmlId(step)).on('completeChange',function(){
				// 	var myStep = step;
				// 	if(myStep.isComplete()){
				// 		$(this).addClass('complete');
				// 	}
				// 	else{
				// 		$(this).removeClass('complete');
				// 	}
				// }).trigger('completeChange');
			}
		}
	};
});