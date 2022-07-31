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
