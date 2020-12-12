import React, { useEffect } from 'react';
import { RedditLinks } from './RedditLink';
import { useSelector, useDispatch } from 'react-redux';
import { loadLinksWeb } from './actions';

export function Feed(props) {
    // store calls reducer function which returns the state. the state has redditLinks
    const store = useSelector(state => state.redditLinks);
    const dispatch = useDispatch();
    
    

    useEffect(() => {
        let sreddit = ["food", "pics", "aww"];
        if (store.length  === 0) {
            dispatch(loadLinksWeb(sreddit[0]));
            dispatch(loadLinksWeb(sreddit[1]));
            dispatch(loadLinksWeb(sreddit[2]));
        }
    }
        , [dispatch, store]);



    if (store.length !== 3 || store[0].data === undefined || store[1].data === undefined || store[2].data === undefined) {
        return (
            <div className="App">
                <h1>Loading stuff... 	&#9786;</h1>
                <h4>Refresh if things don't load after a few seconds</h4>
            </div>
        );
    }

    var keyIndex = 0;
    return (

        <div className="App">
            {/* NEWS FEED */}
            <div className="Header">Your news feed:</div>

            {store[0].data.children[0].data.subreddit_name_prefixed}
            {store[0].data.children.map(data => <RedditLinks key={keyIndex++} data={data} />)}

            {store[1].data.children[0].data.subreddit_name_prefixed}
            {store[1].data.children.map(data => <RedditLinks key={keyIndex++} data={data} />)}

            {store[2].data.children[0].data.subreddit_name_prefixed}
            {store[2].data.children.map(data => <RedditLinks key={keyIndex++} data={data} />)}
        </div>
    );
}