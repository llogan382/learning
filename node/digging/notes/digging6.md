# Async read file

With Node, it doesnt matter if we stay synchronos- this only matters in the browser.

But, we want to practice SYNCRONOUS.

In NODE, the first param is always the ERROR.

We wrote this witht he following code:

```
            fs.readFile(filepath,function onContents(err,contents){

    if (err) {
        error(err.toString());

    } else {
        process.stdout.write(contents);
    }
```
