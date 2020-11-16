# Learn more about the WordPress Rest API with REACT


 **what is it?**
 Any programming language which can make HTTP requests and interpret JSON can use the REST API to interact with WordPress, from PHP, Node.js, Go, and Java, to Swift, Kotlin, and beyond.

## Concepts to learn:

- WP_REST_Response class
- rest_authentication_errors
- is_user_logged_in
- rest_do_request
- `?filter` queries were removed. Use the [rest-filter](https://github.com/wp-api/rest-filter) plugin instead
- the `_embed` parameter wont work; use the `WP_REST_Server::response_to_data` function, found [here](WP_REST_Server::response_to_data)
- Query parameters like `?page=2` or `?_embed` wont work; use `try_files`instead
- If authe isnt working, update .htaccess files with this:
```
<IfModule mod_setenvif>
  SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
</IfModule>
```
- learn wordpress [nonces](https://developer.wordpress.org/plugins/security/nonces/)
- If WP is not verifying incoming Origin headers (CORS), use the `rest_send_cors_headers` function
- `_fields`
- `_embed`
- `_method`
- `_envelope`
- `_jsonp`
- [pagination](https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/)
- `_links`
- `_embedded`
- `register_rest_field` and `register_meta` to add info to [REST responses](https://developer.wordpress.org/rest-api/extending-the-rest-api/modifying-responses/)
- JSON schema
- Resource Schema
- Argument schema
- `rest_validate_value_from_schema` and `rest_sanitize_value_from_schema`
- `rest_api_init` hook
- `WP_REST_Request` controller
- `WP_REST_Response` controller
- Class Inheritance & WP_REST_Controller #Class Inheritance &WP_REST_Controller, found [here](https://developer.wordpress.org/rest-api/extending-the-rest-api/controller-classes/)
- `WP_REST_Server`
- the [changelog](https://developer.wordpress.org/rest-api/changelog/)