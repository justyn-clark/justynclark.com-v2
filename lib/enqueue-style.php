<?php
/*********************
Enqueue the proper CSS
if you use Sass.
*********************/
if (!function_exists('justyn_enqueue_style')) {
    function justyn_enqueue_style()
    {
        // foundation stylesheet
        //wp_register_style('justyn-foundation-stylesheet', get_stylesheet_directory_uri().'/css/app.css', array(), '');

        // Register the main style
        //wp_register_style('justyn-stylesheet', get_stylesheet_directory_uri().'/css/style.css', array(), '', 'all');

        // Register the app style minified
        wp_register_style('justyn-stylesheet-min', get_stylesheet_directory_uri().'/css/app.min.css', array(), '', 'all');

        // Register the main style
        wp_register_style('animate-css-stylesheet', get_stylesheet_directory_uri().'/css/animate.min.css', array(), '', 'all');

        // Register the main style
        wp_register_style('foundation-icons-stylesheet', get_stylesheet_directory_uri().'/css/foundation-icons.min.css', array(), '', 'all');

        //wp_enqueue_style('justyn-foundation-stylesheet');
        //wp_enqueue_style('justyn-stylesheet');
        wp_enqueue_style('justyn-stylesheet-min');
        wp_enqueue_style('animate-css-stylesheet');
        wp_enqueue_style('foundation-icons-stylesheet');
    }
}
add_action('wp_enqueue_scripts', 'justyn_enqueue_style');
