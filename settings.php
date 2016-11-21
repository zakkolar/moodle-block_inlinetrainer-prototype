<?php
$settings->add(new admin_setting_heading(
            'headerconfig',
            get_string('headerconfig', 'block_inlinetrainer'),
            get_string('descconfig', 'block_inlinetrainer')
        ));

$settings->add(new admin_setting_configtext(
            'inlinetrainer/title',
            get_string('blocktitle', 'block_inlinetrainer'),
            get_string('desctitle', 'block_inlinetrainer'),
            get_string('defaulttitle','block_inlinetrainer')
        ));