import React from 'react';

const Menu = (props) => {
    return (
        <div>                
            <h2 className="sideBarTitle"><img className="side-ico" src={props.icon}  alt="edit"/>{props.title}</h2>            
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default Menu;