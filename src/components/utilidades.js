import React from 'react';
import './utilidades.css';

export default class Utilidades extends React.Component
{
    state = {
        trends: this.props.value
    }

    render() {
        return(
            <div className="col-12">
                <div className="row">
                    <div className="input-group flex-nowrap">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping"><i className="fas fa-search"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Buscar en Twitter" aria-label="Username"
                               aria-describedby="addon-wrapping"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="card info">
                            {this.state.trends.map( e =>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{e.hashtag + "  Tweets: " + e.teweets}</li>
                                </ul>
                            )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                       <p>Terminos</p>
                    </div>
                    <div className="col-4">
                        <p>Politica de Seguridad</p>
                    </div>
                    <div className="col-4">
                        <p>Cookies</p>
                    </div>
                    <div className="col-4">
                        <p>Información de Anuncios</p>
                    </div>
                    <div className="col-4">
                        <p>2019 Twitter. Inc</p>
                    </div>
                </div>
            </div>

        );
    }
}
