import React from "react"
import Menu from "./Menu"

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>Chris Staple</h1>
                <h2>Cartoonist</h2>
                <Menu />
            </div>
        )
    }

}