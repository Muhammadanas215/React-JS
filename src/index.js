import { directive } from "@babel/types";
import React from "react";
import ReactDOM from "react-dom"; 
import App from "./App"
// let fb = React.createElement("a", {"href" : "https://www.facebook.com/"}, "facebook")
// let h1 = React.createElement("h1", null, fb)
// ReactDOM.render(h1,document.getElementById("root"))

// function Greeting(){
//   let h1 = React.createElement("h1", null, "Hello Anas");
//   let p = React.createElement('p', {class: "text"}, 'loremsadad asdasd dd ada sdas ada a s a a das da a')
//   return (
//     React.createElement('div', null, h1, p)
//   )

// }
// ReactDOM.render(<Greeting />, document.getElementById('root'))


ReactDOM.render(<App />, document.getElementById('root'))