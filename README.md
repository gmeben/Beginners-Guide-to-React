# Beginner's Guide to React

My code for Kent C. Dodd's course on Egghead.io

## Prerequisite Article: [All the JavaScript you need to know before starting with React](https://jscomplete.com/learn/javascript-for-react)

### Notes

#### `let` vs. `var`

* `var` allows values to leak, wheras `let` does not.
* The value of the `this` keyword in a regular function depends on how the function is called.
* The value of the `this` keyword in an arrow function depends on where the function is defined.
* See the code in `/prerequisite/arrow-functions.js` for more information (`node arrow-functions.js`).

#### Arrow Functions

* Arrow functions can be reduced to one line, omit parentheses, or omit the `return` keyword, which can be useful for making array method (`map`,`reduce`,`filter`) arguments concise.
* When returning an object as a one-liner in an arrow function, the object must be wrapped in parentheses to avoid the curly braces from being interpreted as the function block.

#### Literal Notation

* Defining a variable with `const` or `let` followed by a variable name and an assignment to an object, array, string, number, or regular expression, is called 'initializer notation'.

#### Expressions for React

* An expression in JavaScript is any valid unit of code that resolves to a value.
  * Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions>
* An expression in JSX is a set of curly braces (around a JavaScript expression) in the context of a React component.

#### Destructuring Arrays and Objects

* When brackets appear on the left side of an assignment or within the parentheses used to defined a function, they are most likely for destructing.
* Destructuring an array's items extracts the items using their position into local variables in the enclosing scope.
  * Example:
  
    ```JavaScript

    const [one,, three] = [1, 2, 3];
    // three evaluates to 3`

    ```

* Destructuring an object's properties extracts the properties using their names into local variables in the enclosing scope.
  * Example:
  
    ```JavaScript

    const { PI } = Math;
    // PI evaluates to Math.PI`

    ```

* Destructuring is a common way to extract React API objects
  * Example:

    ```JavaScript

    const { useState, useEffect } = React;
    const [state, setState] = useState();
    useEffect(() => {
        // functionality
    })

    ```
