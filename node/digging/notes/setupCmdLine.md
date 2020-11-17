Start here: https://frontendmasters.com/courses/digging-into-node/setting-up-a-command-line-script/

Run command line like a bash script
Put this at the top of the script:
```
#!/usr/bin/env node

"use strict";
```

Now that the environment can be interpreted, make it executable.

run `ls -la` in the command line to check permissions. If the file doesnt have "x" for executable, run `chmod u+x sysAut.js`

Now, run it as an executable script.
`./sysAut.js`

Now that the program can run, it is always good to have some debigging help: