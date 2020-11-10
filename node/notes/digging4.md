# How to access inputs?

Access arguments passed to our program through process.args, which is an array of objects passed.

There are conventions for how this works. The dashes that get put in front of the args, and we could do regex to parse these items, but we want to use a package that uses this.

`npm install minimist`

If there is anything in the input that minimist can't figure out, it will place at the beginning of the items that are returned.

There are a bunch of different ways parameters can get parsed;

Minimist is a great resource, and it is used by TONS of other programs.
Another option is YARGS.