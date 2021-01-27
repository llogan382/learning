# New languages

How to do things I already know, in this new language?

We will learn:
1. strings
2. Functions
3. Collections
4. Iterations
5. Program Flow
6. Errors


## Ruby Dev
He prefers to use the SHELL

## Variables

If I set
`b = "two"`, then "b" is a string, becayse that is what it was set as.

There are FLOATS

There are METHODS on each item;

You dont need to use brakcets `()`
Dont use brackets if no arguments are being passed, like `.round()`

Every statements does a return value.

## Our program: Word count Romeo and Juliet

Constants start with a capital letter.
You cannot reassign a constant

## Other ways to read data:

gets waits for the user to input something:
`user_text = gets`
Then enter "hello"


RUBY uses a predefined constant called `ENV`

So if you enter `ENV["Test-variable"]` you will get what you entered

There is also standard input:
`STDIN`
So, `STDIN.read`

Command line args
Pass in the args in the command line, into a ruby file.

Look [here](https://ruby-doc.org/) for the Ruby docs

`q` will get me out of that long return string.

`downcase` will not change the method;
`downcase!` are called BANG methods, and this **WILL** change the object. Most all ! will be considered UNSAFE and will change the original.

`?` will signify if a method is a boolean.

`!` bang methods

| **Bang methods** | **Question methods** |
|--------------|------------------ |
METHODS THAT HAVE SIDE EFFECTS, LIKE CHANGING THE OBJECT | METHODS THAT ARE BOOLEAN

Get rid of variations of words. Like *we'll* and *we*
To remove a character, use `gsub("\n, " ")`
The g stands for global. It replaces all instances, not just hte first.

### Using regex.

`gsub(/[^a-z]/, " ")`
Take all items NOT letters, and replace them with a space.

### Split into words

This will split call items into an array. `.split`
It skips over multiple seprators (like spaces)
If you arent used to what something does, check it in the terminal.


### Quotes
Single and double. Is there a diff?
YES!
Single quotes are taken as literals, and will not be evaluatued.

However, this will. Think *template literals* in javascript
`puts "the answer is #{13 + 24}"` prints 37, because what is inside the `{}` is evaluated.
There are additional escape characters.

## Functions
Get the array, and apply a function.

```
def function_name(arg1, arg2, arg3)
    return
end
```

Our function can be written as:
```
def word_from_file(text_file)
    File.read(text_file).downcase.gsub(/[^a-z]/, " ").split
end
```

## Functions
Functions arent really functions- they are actually METHODS.

`self` is the same as `this`, which is the item the method is called upon.
You are defining the method on the main object.

## Global variables.

Accessed anywhere in the program. They start with a dollar sign.
so, `a = 10` is different than `$a = 10`


## Collections
or, ARRAYS
`a= [42, "fortyTwo", 42.0]`
`a[0]`

So,
`alphabet = ('A'..'Z').to_a` will take a RANGE `..` from A-Z, and convert to an array `to_a`

The length can be calculated three ways:
`.count`
`.length`
`.size`

## hashes

Hashes have different names in other languages. They are basically key/value pairs.

`h = {"key1" => "value1", "key2" => "value2", 10 => 9.9 }`

`h["key2"]` returns `"value2"`
`h[10]` returns `9.9`

## How to do this in our program?


## Symbols
They are like strings, but cannot be changed.


## Iterations

Basic syntax:
```
for i in 0...array.length
    puts array[i]
end
```

## Blocks
Blocks are a better way to do loops

```
def |arguments|
    # do something
end
```
Blocks are like functions- they take arguments, but cannot be defined cand called later

Every ruby method can take a block.

A block can `yield` or `callback` the block it receives.

use `EACH` to iterate over the array.

Example:
```
numbers = [42, 234, -7]

numbers.each {|x| puts(x + 1)}
```

A block can use curly braces OR `DO` and `END`

## Another way to iterate.

In this example. we are calline the method `upto` on the number, and iterating over it.

```
0.upto(5) do |i|
    puts i
end
```

OR here is another example:
```
5.times do
    puts "yay"
end
```

## Conditionals

Here is the first iteration:
```
if word_count[word] == nil
    word_count[word] = 1
else
    word_count[word] += 1
end
```

But this can be cleaned up to look like this:
Here is another way to do the same thing, without the `else` keyword:

```
word_count[word] = 0 if word_count[word] == nil
word_count[word] += 1
```
Put the word in the hash if it isnt already there; if not, add 1.

But, how does RUBY evaluate TRUE?
in Ruby, the only things that make an evaluation `false` is the boolean `false` and `nil`

So, the `== nil` can be removed, leaving this:

```
word_count[word] = 0 if !word_count[word]
word_count[word] += 1
```

## UNLESS
You can refactor using the ruby keyword `unless` like this:

```
word_count[word] = 0 if unless word_count[word]
word_count[word] += 1
```

## Conditionals

Here is the LONG way:

```
if word_count[word] == nil
    word_count[word] = 1
else
    word_count[word] += 1
end
```

Here is the refactored method:
```
word_count[word] = 0 if word_count[word] == nil
word_count[word] += 1
```


## Exceptions:

If you run a file that doesnt exist, an error will be shown in the console.

If I call for a file that doesnt exist, you can wrap the word "begin" around the part that may create an error:

It only works when the exception spans the whole function
```
begin
    words_from_file("does_not_exist.txt")
rescue
    puts "Give me #{Correct_FILE} please"
end

```