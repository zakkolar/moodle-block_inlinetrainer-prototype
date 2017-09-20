<?php
class block_inlinetrainer extends block_base {
    public function init() {
        $this->title = get_string('inlinetrainer', 'block_inlinetrainer');
    }
    // The PHP tag and the curly bracket for the class definition 
    // will only be closed after there is another function added in the next section.
    public function get_content() {
    	global $PAGE;
	    
        $this->page->requires->js_call_amd("block_inlinetrainer/demo", "run", ["#block_inlinetrainer-body"]);

	    $this->content         =  new stdClass();
        $this->content->text   = '<b id="block_inlinetrainer-title"></b>';
	    $this->content->text  .= '<ol id="block_inlinetrainer-body"><i>Loading steps...</li></ol>';
        $this->content->text  .= "<style type='text/css'>
        .block_inlinetrainer_overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        filter:alpha(opacity=50);
        -moz-opacity:0.5;
        -khtml-opacity: 0.5;
        opacity: 0.5;
        z-index: 10000;
        }
        .block_inlinetrainer_hint{
            position: relative;
            padding:5px;
            /*-webkit-box-shadow: 4px 4px 15px 1px #333;  
              -moz-box-shadow:    4px 4px 15px 1px #333;  
              box-shadow:         4px 4px 15px 1px #333;  */
        }
        </style>";
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