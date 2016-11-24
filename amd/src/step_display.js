define(['jquery'],function($){
	function StepDisplay(step,baseElement){

		function getHtmlId(step){
			return 'block_inlinetrainer_step_'+step.getId();
		}

		var el = $(baseElement);
		var id = getHtmlId(step);
		el.attr('id',id);
		el.html(step.getText());
		step.subscribe(function(complete){
			el.trigger('completeChange');
		});
		el.on('completeChange',function(){
			var myStep = step;
			if(myStep.isComplete()){
				$(this).addClass('complete');
			}
			else{
				$(this).removeClass('complete');
			}
		}).trigger('completeChange');

		this.getElement=function(){
			return el;
		}

	}

	return StepDisplay;
});