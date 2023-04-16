// eg 1: create h1 element with react

//// sol eg 1

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// );

// console.log(heading); // object

/*----------------------------------------------------*/

// eg 2: create nested element in react

// for eg:
// <div id="parent">
//   <div id="children">
//     <h1>I'm h1 tag</h1>
//   </div>
// </div>

//// sol eg 2: in react

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "children" },
//     React.createElement("h1", {}, "i'm h1 tag")
//   )
// );

// console.log(parent);

/*----------------------------------------------------*/

// eg 3: create nested element in react with siblings

// for eg:
// <div id="parent">
//   <div id="children">
//     <h1>I'm h1 tag</h1>
//     <h2>I'm h2 tag</h2>
//   </div>
// </div>

//// sol eg 3: in react

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "children" }, [
//     React.createElement("h1", {}, "i'm h1 tag"),
//     React.createElement("h2", {}, "i'm h2 tag"),
//   ])
// );

// console.log(parent);

// *** note ***

// in this case we are using a array of object in children  ====> [
//     React.createElement("h1", {}, "i'm h1 tag"),
//     React.createElement("h2", {}, "i'm h2 tag"),
//   ]

/*----------------------------------------------------*/

// eg 4: create complex nested children element in react with siblings

// for eg:
// <div id="parent">
//   <div id="children">
//     <h1>I'm h1 tag</h1>
//     <h2>I'm h2 tag</h2>
//   </div>
//   <div id="children2">
//     <h1>I'm h1 tag</h1>
//     <h2>I'm h2 tag</h2>
//   </div>
// </div>

//// sol eg 4: in react

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "i'm h1 tag"),
    React.createElement("h2", {}, "i'm h2 tag"),
  ]),
  React.createElement("div", { id: "children2" }, [
    React.createElement("h1", {}, "i'm h1 tag"),
    React.createElement("h2", {}, "i'm h2 tag"),
  ]),
]);

console.log(parent);

/*----------------------------------------------------*/

// select main div where our code is rendered
const root = ReactDOM.createRoot(document.getElementById("root"));
//   render element inside the root element
root.render(parent);
