# Ensure user is logged in for ALL requests

Just add this code to functions:
```
add_filter( 'rest_authentication_errors', function( $result ) {
    // If a previous authentication check was applied,
    // pass that result along without modification.
    if ( true === $result || is_wp_error( $result ) ) {
        return $result;
    }

    // No authentication has been performed yet.
    // Return an error if user is not logged in.
    if ( ! is_user_logged_in() ) {
        return new WP_Error(
            'rest_not_logged_in',
            __( 'You are not currently logged in.' ),
            array( 'status' => 401 )
        );
    }

    // Our custom authentication check should have no effect
    // on logged-in requests
    return $result;
});
```

Or you can just ensure the user is logged in for this new API endpoint using `permission_callback` in the `register_rest_route()` function:
```
add_action( 'rest_api_init', function() {
    register_rest_route(
        'lvl/v1', 'posts', [
            'methods' => 'GET',
            'callback' => 'lvl_posts',
            'args' => array(
                'id' => array(
                  'validate_callback' => 'is_numeric'
                ),
              ),
              'permission_callback' => function () {
                return current_user_can( 'edit_others_posts' );
              }
         ] );
          } );
          ```

As an alternative, you can check any number of auth conditions, like `is_logged_in`