import React from 'react';

export function RedditLinks(props){
    const rlinks = props.data.data;
    return (
        <div id="linkdiv">
            <img src={rlinks.thumbnail} alt={`user: ${rlinks.author}'s post`}></img>
            <a rel="noreferrer" target='_blank' href={"https://reddit.com" + rlinks.permalink}>{rlinks.title}</a>
        </div>
    );
}

