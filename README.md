# fcc-react-course

Throughout this course i will build several projects as a way to fully understand how react is used and implemented in real world senarios.

## NOTES:

- react helps you write composable code.
- declarative - What should be done. Easy
  <!--
  ReactDOM.render(
   <div>
    <Navbar />
    <Hello />
   </div>,
   document.getElementById("root")
  ) -->

- imperative - How should it be done. Hard - e.g..
  let root = document.getElementById('root');
  let h1 = document.createElement('h1');
  root.append(h1)
  h1.setAttribute('class', 'header')
  h1.append('Hello, How are you angel?')

- to set up a default react app run:

```
  npx create-react-app [name of app folder]
```

- Declarative:
  means i can tell the computer WHAT to do and expect it to handle the details.
- Imperative:
  means i need to tell it HOW to do each step.

- Props: refers to the properties being passed into a component in order for it to work correctly, similar to how a function receives parameters: "from above." A component receiving props is not allowed to modify those props.
  (I.e. they are "immutable.")
  short answer: shouldn't be changing. The way things are currently are. Are like props.

- State: refers to the values that are managed by the component, similar to variables declared inside a function. Any time you have a changing values that should be saved/ displayed, you'll likely be using state.
  short answer: should be changing. Its like declaring new variables that change when something happening.

- immutable: means it is unchanging like props.

-
