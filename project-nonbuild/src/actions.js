export const Action = Object.freeze({
    LoadLinks: 'LoadLinks',
});

export function loadLinks(redditLinks){
    return {
        type: Action.LoadLinks,
        payload: redditLinks,
    };
}


function checkForErrors(response){
    if(!response.ok){
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}


const host = 'https://www.reddit.com';



export function loadLinksWeb(title){
    return dispatch => {
        fetch(`${host}/r/${title}/top/.json?limit=5`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            dispatch(loadLinks(data));
        })
        .catch(e => console.error(e));
        
    };
}




