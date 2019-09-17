import React from 'react';

export default class Tweet extends React.Component
{
    state = {
        avatar: this.props.value.avatar,
        first_name: this.props.value.first_name,
        last_name: this.props.value.last_name,
        nick: this.props.value.nick,
        date: this.props.value.date,
        content: this.props.value.content,
        retweets: this.props.value.retweets,
        favs: this.props.value.favs
    }

    addFav = () => {
        this.setState({favs: this.state.favs + 1})
    }
    addRet = () => {
        this.setState({retweets: this.state.retweets + 1})
    }

    render()
    {
        return (
                <div className="row">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={this.state.avatar} className="card-img" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.first_name + " " + this.state.last_name + " " + this.state.nick}</h5>
                                    <p className="card-text">{this.state.content}</p>
                                    <p className="card-text">
                                        <small className="text-muted">{this.state.date}</small>
                                    </p>
                                    <div className="row">
                                        <div className="col-6 likes">
                                            <p><a href="#" onClick={this.addFav}><i className="far fa-heart"></i></a> {this.state.favs} Likes</p>
                                        </div>
                                        <div className="col-6 likes">
                                            <p><a href="#" onClick={this.addRet}><i className="fas fa-retweet"></i></a> {this.state.retweets} ReTweets</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
