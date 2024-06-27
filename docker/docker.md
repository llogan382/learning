# Docker

What are my goals?

- Create an image with:
  - Node frontend
  - Node backend
  - Postgres DB
- Copy files into Container.
- Update permissions to access backend, DB.
- Connect to Postgres from terminal
- Make a dev, and a PROD env.



# From the linkedin course:

https://www.linkedin.com/learning/docker-essential-training/what-are-docker-images?resume=false&u=142812986

What is Docker?

- Containers use Linux to package apps into portable units
- Containers are used by container runtimes to do all the heavey lifting.

You can Unshare a file; and give it access to a directory.

This can be done with Container Images.

What are container images?

- They are like "file systems" for containers packed into single files.
- When created, it extracts everything, and puts everything into a directory.

Every container is a tar file to reduce size.
Each image has LAYERS: set of archives that containes FILES about the container.

Each image has a MANIFEST: data about itself, relationships among layers. How containers should be extracted are stored in here.
THIS IS WHY IT NEEDS A PATH when configured.

# Docker files

Here is an example. If you want to inspect some `.tar` file without extracting it, type this:
`tar -t -f ./hello-world.tar.gz`

For a basic docker file, you will see something like this:

247460e92ef67fdf643394f29fdfdfcec2fde609010ec63e3b7bee779e1a4846/
247460e92ef67fdf643394f29fdfdfcec2fde609010ec63e3b7bee779e1a4846/VERSION
247460e92ef67fdf643394f29fdfdfcec2fde609010ec63e3b7bee779e1a4846/json
247460e92ef67fdf643394f29fdfdfcec2fde609010ec63e3b7bee779e1a4846/layer.tar
7b473dec0fa9e1cd2ffeb04ca39b125972ca0927000ccd033404674671768b8a/
7b473dec0fa9e1cd2ffeb04ca39b125972ca0927000ccd033404674671768b8a/VERSION
7b473dec0fa9e1cd2ffeb04ca39b125972ca0927000ccd033404674671768b8a/json
7b473dec0fa9e1cd2ffeb04ca39b125972ca0927000ccd033404674671768b8a/layer.tar
d68fcc334f453a8c889c682226e6c6dc39694eaa4af54fdc8cc03bba03fdbb1c.json
manifest.json
repositories



ddont extract, just do this to read the conttents:
`tar -x -o -f ./hello-world.tar.gz manifest.json`

Here is what it would look like:

```json
[
  {
    "Config": "d68fcc334f453a8c889c682226e6c6dc39694eaa4af54fdc8cc03bba03fdbb1c.json",
    "RepoTags": ["test:latest"],
    "Layers": [
      "7b473dec0fa9e1cd2ffeb04ca39b125972ca0927000ccd033404674671768b8a/layer.tar",
      "247460e92ef67fdf643394f29fdfdfcec2fde609010ec63e3b7bee779e1a4846/layer.tar"
    ]
  }
]
```

This will tell the location of the config file. This is named after image ID.
Repo tag tells tags: name of image, and version of image.
Layers: The location of the layers in image. They also match tar images.

Each IMAGE will have LAYERS, and each LAYER will have FILES.

# How does DOCKER store stuff on a DISK?

Containers access from FILES.
Containers need to decompress layers to access the files.
Create a container that can run an app w several layers.

1. Decompress image into something called "layers" which is our fake root directory.
2. If you had to decompress each .tar file to use it, it would take a ton of time.

Storage Drivers define how layers are stored on disk. They decompress and represent layers for containers AS A FAKE ROOT DIRECTORY.

There are many storage drivers:
Most popular is OVERLAY2.

1. It decompresses each layer into container runtime directory `/vat/lib/docker/overlay2/hash`.
2. It creates directory within each directory: `link` and `diff`.
3. Layers above will have a LOWER and a MERGE of the layer above it and below it.
4. Finally, it creates an overlay mount into a single foldeer to be used.

If a container creates new files, then those files get added to the upper dir.
But what if you want to modify an existing file?
OVERLAY will do a COPY UP.
These can get really slow. They only happen once; but, they have latency. Any data saved is removed.

Workaround? Create VOLUMES or BIND MOUNTS.

# What is an image?

Containers are created by container runtimes/container images
Container images are file systems for containers packagied into single files

When a container runtime creates a container, it extracts files and directories from image, puts them in a directory, and says "have fune"

Container image:
- tar file

Each layer contains:
- file system
- ;ast layer: instructions for how to configure a container.
- each layer has a MANIFEST

# Docker files

What is it?

A language for creating docker imagess.
Container images: One or more layers comrpessed, and joined together.
Overlay creates layers, and mounts them into containers.

Automating the compression is what makes this easy.

Linux scripts to create each file is hard to do, but could get the task done.
What if there was a language to create container images?
This is what a docker file does.
Dockerfile is the language.
Everythig to create an image can be done from a dockerfile.
It is a list of instructions.
The first line is an instruction. The rest are just arguments.

Docker runs the file from top to bottom.
Almost every line is executed in its own containers.
FROM is base image.


FROM must be the first line in a dockerfile.
There are four ways to use FROM:

1. `FROM $image`
2. `FROM $image:$tag`
3. `FROM $image AS $name`
4. `FROM $image:$tag AS $name`

There are lots of ways to create an image. If you run `docker image` in the terminal, the following message will come up:

```bash
Commands:
  build       Build an image from a Dockerfile
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Display detailed information on one or more images
  load        Load an image from a tar archive or STDIN
  ls          List images
  prune       Remove unused images
  pull        Download an image from a registry
  push        Upload an image to a registry
  rm          Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
```

`docker image ls` will show all images on your machine.


# adding files to a docker image.

`ADD` is an older version of `COPY`
In 2017, Dockerfile maintainers wanted to focus on just copying.
ADD can use URLS.
So, instead of removing `ADD` and causing issues, that created a new feature: `COPY`.

There  are 3 ways to use ADD:

1. `COPY $src-file $dest-file`
2. `COPY $src-file $dest-dir`
3. `COPY $src-dir $dest-dir`

If the second arg ends in a slash, Docker will assume its a directory.
It can also use WILDCARDS.

So, `*` would replace ANY number of characters. `?` would replace a single character.

Also, a useful COPY argumant:

`--chown $user: $group` will assign $user in $group as owner of the file or directory in the container image.

# Copying files in a docker file.

Copy all files:
`COPY . /app`

Copy a single file:
`COPY app.sh /app`

How to get docker image metadata:

`docker image inspect $hash`

You can look at the configs and may see this:
```json
"Cmd": [
    "/bin/bash"
],
```
This means the default command will execute `/bin/bash`
DOCKER RUN is default: not interactive; no args can be passed in.

By default, BASH assumes interactive.
`DOCKER RUN` can add some commands.

So, `docker run --rm $hash ls /app` will list the contents of the /app directory.

`RUN` runs shell commands.
So, it will create a new container wiht this line, and it will  run.
It will use the IMAGE from the line before it.

the ORDER of the commands in a DOCKERFILE are important.

# How to use RUN

There are two ways to use the RUN command:

1. `RUN command-as-shell-script`. Example `RUN echo "Hello World!"`
2. `RUN ["command", "in", "exec", "form"]`. Example: `RUN ["echo", "Hello, world!"]`

We will be using the SHELL form, as that is better for commands starting with RUN.

