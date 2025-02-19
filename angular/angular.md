## Notes

Angular is built on VITE. 

Angular was the first to introduce top level support of TS. 

It is TS first - cannot really use JS. 

Components are the fundamental core of Ang. 

Templates made with HTML. 
CSS, Sass, Less. 

You can ADD components, but cannot EXTEND components. 

DECORATORS: they are hard at scale. 
MODULES: handle all dependencies; it organizes all parts. It had problems: was it JS? Angular? How does it scale? Its hard to tell where things belong. 

Doe they have functional components? NO. 

How to build a component? 

1. Import it at the file level. 
2. Add decorator: Takes a property, and adds behavrior. 
3. Give it a SELECTOR. 
4. Standalone: True. This refers to the modules: Does it need anything else to run? 
5. Template string. It could also be a file- as a separate HTML file. 
6. Styles: can be inline, or imported. They are scoped to this component. Can also use a global style sheet. 

It doesnt do hot module refresh- so state refreshes when restarting with changes. 

## Dynamic Values in Components. 

In classes, there are CLASS PROPERTIES. 
Why arent types required in the component? It is inferred. 

How do you link the two components?
`{{}}`
Put that in the HTML:

```HTML
<section>
    <div>Hello {{user}}
<section>
```
and import the HTML into your component. 

Define the values in the component, pass them into the HTML

## How to do composition?

You import it at the component level- you dont have to use Modules. 

1. Import. 
2. Add as a dependency in the other component. 
3. use a selector to reference it. 


`app` is the prefix for a component. 
Whatever the `selector` is, that is what is used in component composition to render it. 

Put the selector value in the HTML template. 

Casing for components?
Not important?

## Template Conditionals

Control flow with `@if`. 
Its like BLAZER syntax, but its not. 
So, show "please log in" or "welcome back". 

```html
<section>
 @if(expr){
    <p>Please login</p>
 } @else {
    <p>welcome back</p>
 }
 </section>   

```


## Template loops. 

THere is an ANGULAR WAY to do it:

```js
@for(item of cart; track item.id){
    <p>{{item.price}}
}
```
This helped to boost speed: looping over things. It is a bog perf boost. Then, you can reference it in your template. 

What if the list is empty?

`@empty`. Then, do a template. 

What if looping, and there is something not unique?

## Property binding;

Setting rows; enabled or disable. 
First, find the property to bind to. 
Then, add square brackets `[]`
`<button type="button" [disabled]="isDisabled">`

Also, event binding. 

Mouseover. 
Click. 
Binding to an event, use parens: `()`. 

So, events or properties. 
Basically, call the function.

How to bring a value into a component? 

`@input`
This is like "props" in react

the property is defined with `[]` and the VALUES are passed as a string. 
so:
`template: <app-user-card> [userData]="user" />`

Then, at the bottom of component, set value of `user`. 
Sqqure barackets make the right hand side evaluate as expression, not a string. 

How to send data OUT of a component (called an EMITTER). It is an event emitter. 
What comes out? A STRING. 

How to send from CHILD to PARENT?
this is done via custom events.

Lets say this is in the BUTTON component:

```js
@Output() addItemEvent = new EventEmitter<string>();

addItem() { this.addItemEvent.emit('Added!'); }
```

When the event runs on the button, where it is used (the parent?) it binds to the event name, and the event name is found on the button (addItemEvent in this case)


```js
<app-child (addItemEvent)="addItem($event)" />

addItem(item: string){ this.items.push(item); }
```

## Inputs and outputs

When doing an OUTPUT, where does that output go?
Send it UP to the parent. 
So, you have a button or input, you want it to EMIT the value; in this case, a car. 

So, make a TYPE for it:
```js
@Output() carSaved = new EventEmitter<Car>();
```

So, add a button, and RESPOND to the clicking of the button. 
Add a listener; then BIND it by adding an event handler. 

PROPERTIES are important: it is how you REFERENCE the value (for the binding on `this`)

```js
@Output() carSaved = new EventEmitter<Car>()

handleCarSaved(){
    this.carSaved.emit(this.car)
}
```

BINDING:
Whatever is to the right of the @Output is the name of the input. 

So, when you click "Save" it will emit something of type CAR

That value (car) with type CAR will be emitted and BIND to the parent. 

In the PARENT, the event is defined:

```ts
addCarToSaved(car: Car){
    this.savedCarList.push();
}
```

See, it is using `this` and BINDING. 

In the parent, in the emplate:
```ts
<app-listing [car]="carEntry" (carSaved)="addCarToSaved($event)"/>;
```



## How to handle complexity in Angular?

- The Routes table should delegate features
- Each component should be agnostic of business logic OR data fetching
- Components are oblivious to application state. 

FACADES are delegation between App and 

Server communication and state management should be decoupled

Resources?

- Clean code
- Refactoring
- the angular style guide, on the angular website. 

THe container will have logic; presentation will be thin: just BINDINGS- input and logic. 

A CONTAINER component: Pulls in just the data for a component. 
Any logic in the container is focused on that component, and nothing mroe. 

A FACADE is a SERVICE. THe FACADE pattern site between producer and comsumer, and hides all implementation details.

How to handle complexity? 
Answer: Little by litte;

If there is hidden state, or nested logic, extract them one by one. 
Decouple code at a local level, into an abstraction layer. 

Litmus test: Can I test it? Can I extract it? If the answer is no, it needs to be refactored. 

