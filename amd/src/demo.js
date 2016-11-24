/* jshint devel: true  */
define(['jquery','block_inlinetrainer/steps', 'block_inlinetrainer/step_display'],function($, steps, StepDisplay){
	

	

	return {
		run: function(identifier){
			$(identifier).html('');
			for(var i=steps.length-1; i>=0; i--){
				var step=new StepDisplay(steps[i],'<li></li>');
				$(identifier).prepend(step.getElement());
			}
		}
	};
});