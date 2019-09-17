import React from 'react';
import Tweet from './tweet'

export default class Muro extends React.Component
{
    state = {
        Tweets: this.props.value
    }

    render()
    {
        return (
            <div className="row">
                {this.state.Tweets.map( tweet =>
                    <div className="col-12">
                        <Tweet value = {tweet}/>
                    </div>
                )}
            </div>
        );
    }
}
