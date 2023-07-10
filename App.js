import React from "react";
import ReactDOM from "react-dom";

const Title = () => (
    <h1 className="head">Namaste React using JSX</h1>
);

const HeadingComponent = () => {
    return (
        <div>
            <Title />
            <h1 className="heading">Namaste React functional HeadingComponent</h1>
        </div>
    );
};

const root = document.getElementById("root");
ReactDOM.render(<HeadingComponent />, root);
