## Packeging Ruby Code with RubyGems

1. Creating File structure
2. Filling in Gemspec File
3. Building your gem
4. Using your gem
5. Include automated tests
6. Documenting your gem.
7. Gem executable.


Once the file structure is in place, then you can extract it.


| Gem Name    | Require Statement | Class or Module |
| ----------- | ----------------| ---------------|
| due_summary | require 'due_summary' | DueSummary  |

The gem name is all lowercase.
Require the main-file class with the same naming conventions. THe person following the gem will know how to use the API because the name is the same.

Actual class is used with Camelcase.

all gem files go in the `lib` folder


under `lib` the main file should have the same naming convention as the directory (as in, it has an underscore)

All other files go in another directory with the same name as the gem.
```
+-- due_summary-1.0.0
+-- data
|   +-- data.json
|   +-- databackup.json
+-- lib
|   +-- due
+-- test
+-- due_summary.rb
```

Files not interacted with by the consumer go in the `due_summary` directory.

In our case, it should look like this:
```
+-- bpx_client-1.0.0
    +-- bin
    |   +-- data.json
    |   +-- databackup.json
    +-- lib
    |   +-- bpx_client
    |       +--
    |   +-- bpx_client.rb
    +-- test
    +-- Rakefile
    +-- Readme.rdoc
    +-- bpx_client.gemspec
```

REMEMBER:
developers ONLY interact with files in the `lib` directoyr

other files have to be created in the GEM folder.
Automated tasks go in the `Rakefile`

`GEMSPEC`

s.name = `bpx_client`
s.version = `1.0.0`
s.summary = ``
s.authors = ['Name 1', 'name 2']
s.files = ['LICENCE', 'README.rdoc', 'Rakefile', 'lib/due_summary.rb', lib/due_summary/duetext.rb' ]

In GEMSPEC, only include filenames relative to the root.
s.description = `here is a longer description`

