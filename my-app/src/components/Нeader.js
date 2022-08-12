import React from "react";

class Header extends React.Component {
    mainText = "Project React"
    render (){
        return (
            <header>
                <h1>{this.mainText}</h1>
            </header>)
    }
}

export default Header