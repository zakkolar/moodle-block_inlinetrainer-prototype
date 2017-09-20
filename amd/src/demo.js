/* jshint devel: true, maxlen: 500  */
define(['jquery','block_inlinetrainer/steps', 'block_inlinetrainer/sequence', 'block_inlinetrainer/step_display'],function($, steps, Sequence, StepDisplay){
	

	

	return {
		run: function(identifier){
			var sequence = new Sequence('Upload file',steps);
			$('#block_inlinetrainer-title').html(sequence.getTitle());
			$(identifier).html('');
			for(var i=steps.length-1; i>=0; i--){
				var step=new StepDisplay(steps[i],'<li></li>');
				$(identifier).prepend(step.getElement());
			}
		}
	};
});