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

By default, if you read a file, they are assuming things in BINARY with console.log;
So, change to `    process.stdout.write(contents);`
This is called a BUFFER.