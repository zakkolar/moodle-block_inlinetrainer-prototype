/* jshint devel: true  */
define(['block_inlinetrainer/step','block_inlinetrainer/hint'],function(Step,hint){
	return [
		new Step({
			text:"Navigate to the course page",
			watchComplete:function(){
				var $ = require('jquery');
				var step = this;
				$(function(){
					if($('body').attr('id')=='page-course-view-topics'){
						step.complete();
					}
				});
				
			}
			
		}),
		new Step({
			text: "Click &quot;Turn editing on&quot;",
			watchComplete: function(){
				var $ = require('jquery');
				var step = this;
				$(function(){
					if($('body').attr('id')=='page-course-view-topics' && $('body').hasClass('editing')){
						step.complete();
					}
				});
			},
			help:function(){
				hint('.singlebutton [value="Turn editing on"]');
			}
		}),
		new Step({
			text:"Click &quot;Add an activity or resource&quot; in the section to which you want to add a file",
			watchComplete: function(){
				var $ = require('jquery');
				var step = this;
				$(function(){
					$('.section-modchooser-text').on('click',function(){
					$('.section-modchooser-text').unbind('click');
					step.complete();
					});
				})
				
			},
			watchUncomplete: function(){
				var $ = require('jquery');
				var step = this;
				//delay 40ms to make sure popup is rendered before we try to attach an event.
				//check if there's a way to determine this event ahead of time so we can wait for it instead of guessing
				setTimeout(function(){
					$('.closebutton, .addcancel').on('click',function(){
						$('.closebutton, .addcancel').unbind('click');
						step.uncomplete();
					});
				},40);
				
			},
			help: function(){
				hint('.section-modchooser');
			}
		})
	];
});