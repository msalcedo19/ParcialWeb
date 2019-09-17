import React from 'react';

export default class Menu extends React.Component
{
    state = {
        menu : this.props.value
    }
    render() {
        return(
            <ul className="nav flex-column">

                {console.log("aqui")}
                {console.log(this.state.menu)}
                {this.state.menu.map( elem =>
                    <li className="nav-item">
                        <div className="row">
                            <img src={elem.image} alt="..."></img>
                            <a className="nav-link active" href="#">{elem.text}</a>
                        </div>
                    </li>
                )}
            </ul>
        );
    }
}
