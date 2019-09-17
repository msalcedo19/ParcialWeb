import React from 'react';
import Menu from './menu';
import Muro from './muro';
import Utilidades from './utilidades'

export default class MainPage extends React.Component
{
    state = {
        menu: [],
        tweetList: [],
        utilidades: []
    }

    componentWillMount() {
        fetch("https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json")
            .then(response => response.json())
            .then(data => {
                this.setState({menu: [data.menu]});
                this.setState({tweetList: [data.tweets]});
                this.setState({tweetList: [data.tweets]});
                this.setState({utilidades: [data.trends]});
            });
    }

    render()
    {
        return (
            <div className="container-fluid board">
                <div className="row">
                    <div className="col-md-2 menu">
                        {this.state.menu.map(menu =>
                            <Menu value={menu}/>)}
                    </div>
                    <div className="col-md-6 muro">
                        {this.state.tweetList.map(muro =>
                            <Muro value={muro}/>
                        )}
                    </div>
                    <div className="col-md-4 otros">
                        {this.state.utilidades.map(e =>
                            <Utilidades value={e}/>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
