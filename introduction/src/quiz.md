1. React component is a reusable piece of code thats written in javascript but contains html. It comes in two types, function components or class components.

2. whats wrong?: The function name should be capitalized. pascel case

```
function myComponent() {
 return (
  <small> I'm tiny text!</small>
 )
}
```

3. What is wrong?: You dont need the () when rendering Header. Instead use <Header />

```
 function Header() {
  return (
   <header>
    <nav>
     <img src="./react-logo.png" width='40px'>
    </nav>
   </header>
  )
 }

 ReactDOM.render(Header(), document.getElementById("root"))
```
