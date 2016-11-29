define(['jquery'],function($){
	function StepDisplay(step,baseElement){

		function getHtmlId(step){
			return 'block_inlinetrainer_step_'+step.getId();
		}

		var el = $(baseElement);
		var id = getHtmlId(step);
		el.attr('id',id);
		el.html(step.getText());
		step.subscribe(function(){
			el.trigger('completeChange');
		});
		el.on('completeChange',function(){
			var myStep = step;
			if(myStep.isComplete()){
				$(this).addClass('complete');
				$(this).children('.block_inlinetrainer_help').hide();
			}
			else{
				$(this).removeClass('complete');
				$(this).children('.block_inlinetrainer_help').show();
			}
		}).trigger('completeChange');

		if(step.hasHelp()){
			var helpLink=$('<a class="block_inlinetrainer_help" href="#">?</a>');
			helpLink.click(function(e){
				step.help();
				e.preventDefault();
			});
			el.append(helpLink);
		}

		this.getElement=function(){
			return el;
		};

	}

	return StepDisplay;
});