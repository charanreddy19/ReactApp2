const heading = React.createElement("div",{id: "parent"},
    [React.createElement("h1",{id: "child"},"I am inside nested div child1"),
     React.createElement("h1",{id: "child2"},"I am inside nested div child2")
    ]
);
const heading2 = React.createElement("h1",{}, "Heading 2");
const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root.render(heading);
root1.render(heading2);