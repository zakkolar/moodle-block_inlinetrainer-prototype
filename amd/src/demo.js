/* jshint devel: true  */
define(['jquery','block_inlinetrainer/steps'],function($,steps){
	function getHtmlId(step){
		return 'block_inlinetrainer_step_'+step.getId();
	}
	return {
		run: function(identifier){
			$(identifier).html('');
			for(var i=steps.length-1; i>=0; i--){
				var step=steps[i];
				var li = $('<li></li>');
				li.attr('id',getHtmlId(step));
				li.html(step.getText());
				$(identifier).prepend(li);
			}
		}
	};
});