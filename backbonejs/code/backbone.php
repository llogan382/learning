<?php

add_action('wp_enqueue_scripts','ava_test_init');
 wp_enqueue_script( 'wp-api' );

 function ava_test_init() {
     wp_enqueue_script( 'ava-test-js', plugins_url( './wp-cron-pixie/includes/main.js' ));
 };