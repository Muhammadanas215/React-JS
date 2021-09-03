import React from "react";
import ReactDom from "react-dom";

let h1 = React.createElement('h1', null, 'Hello World');
ReactDom.render(h1, document.getElementById('root'));
