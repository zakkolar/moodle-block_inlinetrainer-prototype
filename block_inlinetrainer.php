<?php
class block_inlinetrainer extends block_base {
    public function init() {
        $this->title = get_string('inlinetrainer', 'block_inlinetrainer');
    }
    // The PHP tag and the curly bracket for the class definition 
    // will only be closed after there is another function added in the next section.
    public function get_content() {
    	global $PAGE;
	    
    	$this->page->requires->js_call_amd("block_inlinetrainer/demo", "run", ["#test"]);

	    $this->content         =  new stdClass();
	    $this->content->text   = '<ol id="test"><i>Loading steps...</li></ol>';
	    return $this->content;
	}

	public function instance_allow_multiple() {
	  return true;
	}

    function has_config() {return true;}

	public function specialization() {
		 if (empty(get_config('inlinetrainer','title'))) {
            $this->title = get_string('defaulttitle', 'block_inlinetrainer');            
        } else {
            $this->title = get_config('inlinetrainer','title');
        }
	}
	
}