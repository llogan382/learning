# Breaking changes in WordPress



5.0
- Adds multisite metadata table for networks
- Updates cron api
- Changes filter for `wp_unique_post_slug`
- `$wpdb->queries` adds elapsed time for a query
- Adds Vendor Dependencies: Lodash, moment, react, react-dom
- REST API adds several endpoints.
- REST: `show_in_rest` set to `true` for custom taxonimies to show
- wp_is_json_request is added to check if response is in json format
- users with read_private_posts can now query private posts

5.1.1
- adds new tables for multisite support
- CRON API changed. Mostly, thigns were added
- File path for WP_DEBUG_LOG was changed
- wp_debug_backtrace_summary changed
- $wpdb->queries logs time for queries
- `meta_box_sanitize_cb` was added to `register_taxonomy()`
- REST API: there may be a "missing endpoints" warning.
- REST API: The bootstrap process changed

5.2
- removes superfluous <p> tags
- Modern Cryptography
- `wp_body_open` is used, but not backward compatible
- `login_headertitle` was deprecated
- Walker_Category HTML Attributes
- A $domain parameter has been added to translate_user_role(). This will allow translations of custom user roles added in plugins.
- is_privacy_policy() is added, and not backward compatible
- Loosened Tag Restrictions in User Data Exports
- wp_is_recovery_mode to check for fatal errors
- adds WP_Network_Query
- wp.editor.BlockAlignment

5.3
- Media Uploads changed
- A number of REST improvements/additions
- PHP Native JSON now required
- The Services_JSON and Services_JSON_Error classes and all methods
- The wp-includes/class-json.php file
- The (private _wp_json_prepare_data() function
- json_encode() function polyfill
- json_decode() function polyfill
- _json_decode_object_helper() function polyfill
- json_last_error_msg() polyfill
- JsonSerializable interface polyfill
- $wp_json global variable
- JSON_PRETTY_PRINT constant polyfill
- JSON_ERROR_NONE constant polyfill
- remove blog_versions table
- Changes to WP_MS_Sites_List_Table

5.4
- remove "-editor" class name
- Deprecation of wordpress/nux
- Taxonomy “OR” Relation Now Supported in Posts Controller
- WP_REST_Server method changes


5.5
- If you develop plugins that modify the “header” of the post boxes, you will need to make sure you adjust your code accordingly.
- Passing arguments to template files
- Filtering archive page headings in WordPress 5.5

5.6
- Updating core jQuery to version 3 – part 2
- Authorization Flow for REST API authentication
- Credentials in REST API
