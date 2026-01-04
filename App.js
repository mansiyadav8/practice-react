import React from "react";
import { createRoot } from "react-dom/client";

/**
 * <div id="parent">
 *      Hello World from React
 *      <div id="child">
 *          This is child
 *          <h1 id="tag1"></h1>
 *          <h2 id="tag2"></h2>
 *      </div>
 * </div>
 * 
 * ReactElement("Object") => HTML(Browserstands)
 * 
 * This is react to avoid this hassel we use JSX.
 */


const reactElement = React.createElement("div",{id:"parent"},["Hello World from React",
                        React.createElement("div",{key:"child"},["This is child",
                            React.createElement("h1", { key: 1 }, "Sibling 1"),
                            React.createElement("h1", { key: 2 }, "Sibling 2")])
                        ]
                    );

console.log(reactElement); //Returns Object

const root = createRoot(document.getElementById("root")); //create a root and assign it in reactDOM
root.render(reactElement); // put object on page, if anything is in root it will be replaced
