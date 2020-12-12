import React, { useState } from 'react';


function checkForErrors(response){
    if(!response.ok){
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}




export function ChangeFeed(){
const [name, setName] = useState('');

    let value;
    const user = "default";
    const url = `http://project2.shuki.me:3445/user/${user}`;
    fetch(url)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    })
    .catch(e => console.error(e));
    console.log(value);
    return(
        <div>
            Change Feed:
            <form>
                <input id="username" type="text" placeholder="enter username" onChange={event => setName(event.target.value)} />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

