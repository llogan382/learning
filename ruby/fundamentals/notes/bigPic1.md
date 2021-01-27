

# Ruby, the big picture

[https://app.pluralsight.com/library/courses/ruby-big-picture/table-of-contents](https://app.pluralsight.com/library/courses/ruby-big-picture/table-of-contents)

When I need to write a program from scratch, I use ruby.
It feels natural.
Ruby on Rails.

What is the approach
What it is good for
(what it is NOT good for)

Assume?

How to write code.

1. Discover. Lets write some ruby!
2. Investigate. Look at OOP.
3. Unlocking. Meta-programming
4. Ecosystem. Interpreters, ibraries, community
5. Pros and cons




# How to execute?
1. As a program
2. in a shell.

We will use pry
`puts` means "put this on screen"
`nil` is null. Every RUBY statement must return something.

# Tips?
No need to understand everything.
Ignore the details, and follow along

# Scripting Language.
It is DYNAMIC and INTERPRETED.
It is like JAVA- it takes something, and returns a value.
Java- each value TYPE needs to be spcified.
Ruby, doesnt.
Ruby is more similar to JS than JAVA (types dont need to be specified. )
RUBY is flexible.
We are using Ruby 2.

With JAVA, you cannot take code and execute it. JS is compiled and runs in an interpreter.

Ruby can have multiple interpretations- generally, it is INTERPRETED. Go to the file, then run it.
Sometimes, this is called **scripting language**

Like, JS and Python - unlike Java, C#

# Process a CSV

in the albums.csv file:
Load the data, print out records from the 50s.

add this: `albums = CSV.read("albums.csv")` in terminal

All rows are stores as an array, within a larger array.
The first ROW is the header.
remove it with `albums[0]`

## Get a RANGE
`albums[2..4]`

It is **ZERO BASED**

## Get all but header row:
`albums[1..]`

## Run a function
Here is the basic syntax:
```
def function_name?(arg1, arg2)
    return ....
end
```

Notice the `?` symbolizes a BOOLEAN response
the `==` checks to see if the values are equal

Convert string to integer:
`album[3].to_i`

so, here are the commands:
1. import csv: `require "csv"`
2. Check the row: `albums[1]`
3. Check genre: `album[2]` returns *Jazz*
4. Check if it is jazz: `album[2] == "Jazz"` *returns TRUE*
5. Convert year to intever: `album[3].to_i` *returns 1959*
6. Is it between a range? `album[3].to_i.between?(1950, 1959)` *returns TRUE*


So, is it JAZZ? And is it in the 50s?
If it doesnt have an explicit return, it returns value of last statement, so you can skip the RETURN. Here is the complete function:

```
def classic_jass?(album)
    album[2] == "Jazz" and album[3].to_i.between?(1950, 1959)
end
```

Enter these lines 1 at a time in the terminal. If you enter the first line, RUBY then waits for the BODY of the function to be entered.

Run the function like this:
`classic_jazz?(albums[0])` *returns false*

To start from the bottom of the array:
`classic_jazz?(albums[-1])` *returns false*

## A different way to loop

In ruby there are different ways to do the same thing, and it is up to the dev to decide whats best
**blocks**

They are like anonymous functions
This block will take the array, and return the items that return TRUE, but not the items that return FALSE

Here is an example:
```
albums.select {|album| album[2] == "Jazz" and album[3].to_i.between?(1950, 1959)}
```

A few more tweaks were added:
``` Ruby {.line-numbers}
GENRE = 2
YEAR = 3

require "csv"
CSV.read("albums.csv")[1..]
  .select {|album|
    album[GENRE] == "Jazz" and album[YEAR].to_i.between?(1950, 1959)
  }
  .sort_by {|album| album[YEAR].to_i }
  .each {|album| puts album.join(',') }
```
From the lines above:
1 and 2: these are constants
4 require the CSV gem
5 read the file. Skip the first line (the headers)
6 Select items from the array *album*
7 If the album with the constant **GENRE** is *Jazz* and the **album** has a *year* between the range 1950 and 1959, return
9 Sort those items by album year
10 Print off the results of this new array `.each`


# Constants

They begin with an upper case letter: `GENRE = 2`


## Ruby
Generates a COMPACT bit of code. You can do A LOT with just a little bit of code.









