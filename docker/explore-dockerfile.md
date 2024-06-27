# Run something

Make the image run our app.
Getting the image to run our app is importatnt.

`ENTRYPOINT` configures image to run an application.
Base images are configured to run BASH on startup.
This changes when entrypoint is defined.

SHELL and EXEC are the two ways to define it.
The one we decide changes how program is run.

# Shell form

`ENTRYPOINT command-in-shell-form`
Shell form: Sends everything after ENTRYPOINT fo `/bin/sh`

`/bin/sh $command is PID 1`

Example: `ENTRYPOINT echo "Hello World!"`


If entrypoint uses shell, entrypoitn will be CHILD of SH.  So, `ctrl + z` will not stop the process.

Arguments passed get sent to the SHELL and not our program.

Advantage of SHELL? Since APP is build on shell, expanding ENV files is easier.


The better way to do it is to use the EXEC form.

# Exec form

Make the app the top level process within the container.
Every signal sent is shipped directly to the program (which is what we usually want. )

# Run that bad boy

`docker run --rm $hash` the hash is the 4 letters from the docker process.

Here is the output:

============================================================

     🎉🎉🎉🎉🎉 WELCOME TO THE DATE APP!!! 🎉🎉🎉🎉🎉

============================================================
INFO: Fetching date from the Internet. Hang on!


🕰️  The date is: Thu Jun 20 09:50:12 UTC 2024

⚙️  Here's what's running in your container:

```bash
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  4 09:50 ?        00:00:00 /bin/sh -c /app/app.sh
root         7     1  0 09:50 ?        00:00:00 bash /app/app.sh
root        16     7  0 09:50 ?        00:00:00 ps -ef


⚙️  0 arguments were provided to this application.
```

# Give it a name!

`docker image build -t $name-the-image`

So,
`docker image build -t my-image .` will build a docker image named `my-image` from the root location, indicated with a dot.


# CMD

What is it?
It depends on ENTRYPOINT
and, it dependson SHELL or EXEC.



So, if this is our current file:
```bash
# This image is awesome!
FROM ubuntu
COPY . /app
RUN stat /app
```

The first two lines pull in an image, and copy files.
`RUN` runs shell commands in containers.

It will create a new container, and in bash, run something like:
`/bin/sh -c "stat /app"`
When docker comes to this line, it will create a new container, and run the BASH SHELL script of the command that is entered.

Since it needs an image, it would use the image from the line before it.


# Entrypoint.

Run executes commands in temporary containers.

There are two Docker file commands to execute stuff:

1. Entrypoint. Configures container to run app when a container is created from it.
2. CMD

ENTRYPOINT:
It can do SHELL or EXEC forms.
With SHELL, all commands are sent to the SHELL and not the program.

Advice: Don't add .env files, etc in the Docker file.

If adding scripts and files, put them in the entrypoint file. It takes all logic, and puts it in the EXEC form (not shell)

EXEC FORM solves all SHELL problems by making EXEC the top level process of the container.
All args passed in go directly to the program.

Here is the current Dockerfile:
```bash
# This image is awesome!
FROM ubuntu
COPY . /app
RUN apt -y update && apt -y install curl
ENTRYPOINT /app/app.sh
```

Because we made a change in the entrypoint, we need to rebuild the image.
So, it always runs a little slower.

If you want to build the image, and add a tag:

`docker image build -t my-image .`

If you want to see what arguments were passed into the docker image:
`docker run --rm my-image --argument`

# CMD

It depends on 2 things:

1. Whether `ENTRYPOINT` is provided or not
2. Whether CMD is written in SHELL or EXEC form

The most popular approach is:

Provide an ENTRYPOINT and CMD.
This way, everything provided to the CMD will be run in the entrypoint as arguments.

So, with this file:
```bash
# This image is awesome!
FROM ubuntu
COPY . /app
ENTRYPOINT ["/app/app.sh"]
CMD ["--arguments"]
```
The `--argument` will be passed to the `/app/app.sh` file as input.


So, can you tell the difference between entrypoint and CMD?


# Adding variables

Variables can be ENV and Build Arguments.

What if you want to change the version being built?
YOU MUST USE THE `--build-arg` command!

WHAT ABOUT env variables?

```bash
# This image is awesome!
FROM ubuntu
ENV curl_bin="curl"
RUN apt -y update && apt -y install "$curl_bin"
ENTRYPOINT [ "/app/app.sh" ]
CMD [ "--argument" ]
```

ENV and ARG are very similar. But they behave a little different.

ENV is different:

1. ENV are defined for every container
2. ARG are only used during runtime.

ARG are set at buld time, ENV at RUN time.
Cannot override ENV variables.

They can only be used BEFORE RUN commands that use them

# OTher docker commands:

Buildkit- it supports parallel builds and image building.

`LABEL` can document images by adding metadata to your image. It needs a key-value pair.
`WORKDIR` is good for RUN commands. Can use for executing multiple run commands on same directory. RUN will use the WORKDIR used in the previous command.

`USER` sets the user to be used for RUN commands or containers. Can be set multiple times. The LAST user will be default user in containter.
Setting it prevents the default user being set as "root`.
User

`EXPOSE` documents ports containers created from image should expose. By default, it assumes TCP ports. BY DEFAULT, DOESNT EXPOSE a port.

# Multi Stage Builds.

How to control size of an image.
App images are pretty big.
How can we make an image smaller?

THE BUILDER PATTERN.
Create different DOCKERFILES.

1. Create ubuntu based to get curl
2. Another with a smaller image to run the file.

So, run docker build twice. But, what we need is in the first image?
We would need to copy from first image into second image, to run it.
Keeping track of multiple docker files is a hreadache.
Managing and automating these commands is hard. And can add human error.
It uses temporary containers, which takes up disk space.

The solution?

MULTI STAGE BUILDS.

It allows multiple BASE images. It allows gyou to use FROM multiple times.
It allows you to copy files between images, so you can copy what is needed, and nothing more.

use `--from`, with index of FILE (or the ALIAS ) to get from EXACTLY the image you need.

1. You can copyt files/images that arents in the dockerfile. You can grab tools from other images this way
2. You can re-use stages as many times you want. This keeps intermediate stages clean.

WHY?

It can keep your final image REALLY SMALL.
It can be best to build the app, then copy into a smaller image as the final image.
IT IS FASTER.
Also, it is more secure. THe unneeded parts are discarded.


# MUlti Platform.

What if you want to run WINDOWS and MAC (or linux)?
ARM for apple silicon
x86_64 for intel/windows.
There are others.

What if we want to run x86_64 on ARM (apple)?
ARM BASED cannot understand x86, and vice-versa.
This is a problem.
Almost every image was creatged on x86.

Docker has several images and a manifest that ties them together.
There is also a manifest list, which can tell which image to use based on a type of processor. BUT, those must exist in the image registry, like dockerhub.

When LINUX executes, it looks for a machine to process. The use a QEMU to run the image, agnostic of the processor. It is an open source hypervisor.

This means DOCKER can run many processor types. It can create many types of image, that can be read by an image manifest.