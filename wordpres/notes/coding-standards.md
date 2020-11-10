# WordPress Coding Standards

Why do they use all of those comments before classes and stuff?
Example:
```
<?php
        /**
        *WordPress database access abstraction class
        *
        *Original code from {@link http://php.justinvincent.com Justin Vincent (justin@visunet.ie)}
        *
        *@package WordPress
        *@subpackage Database
        *@since 0.71
        */
        /**
        *@since 0.71
        */  ```


Per the [WordPress Docs](https://developer.wordpress.org/coding-standards/inline-documentation-standards/php/),
here are the things that should be commented:
- Functions and class methods
- Classes
- Class members (including properties and constants)
- Requires and includes
- Hooks (actions and filters)
- Inline comments
- File headers
- Constants


**@since x.x.x** tells when the function/class/etc was added.
**@see** tells of other items that are heavily relied upon on the class/function
**@param** Accepted values.
**@return** tells all of the possible return types.
**@package** Should be theme or plugin name; if `@pakage WordPress` it is for WordPress core.
**@method** shows package that all functions, includes, etx belong to. At the top of the docblock.

