import React from 'react';
function Header({name, title}){
    return (
       <div style={{background:'yellow', padding:30}}>
         
            <h1>My Website {title}</h1>
            <h1>Code India by {name}</h1>
            <p>This is all about React</p>
        
        </div>
    )
}
export default Header;