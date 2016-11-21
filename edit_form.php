<?php
 
class block_inlinetrainer_edit_form extends block_edit_form {
 
    protected function specific_definition($mform) {
 
        // Section header title according to language file.
        $mform->addElement('header', 'configheader', get_string('trainerprefs', 'block_inlinetrainer'));
 
 
    }
}