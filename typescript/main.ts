interface Menu {
    title: string;
    items: Array<string>;
    generateMenu(): Menu;
}

function generateMenu<T>(menu: T):T {
    return menu
}

const a = generateMenu({title: 'Menu', items: ['Item1', 'Item2'], generateMenu: function() {return this}})

// If the function has nothing to do with what is passed in, use a generic
// Whatever type is passed in, is passed out.
// Without generics, the types are not shown in my editor.
// With generics, I can use multiple. But, I need to narrow the types to help TS infer the types.


// This function takes an array, and returns a number. The array must have an id property.
function getNextI1(items) {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

// Generics can be added to the function to narrow the type..
// It "extends" the type to have an id property.
// it takes an array of type T, and returns a number.
function getNextId2<T extends { id: number }>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}