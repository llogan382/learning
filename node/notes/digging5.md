# Reading FILES with PATH and FS modules

add `
var path = require("path");
`

Use it to print WHERE a file should be, if it is passed in as an argument:
```
        else if (args.file ){
    let filepath = path.resolve(args.file);
    console.log(filepath);
}
```
"path" is built into node.

Another property is "__dirname"