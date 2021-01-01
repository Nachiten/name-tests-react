import React from 'react';
import classes from './Person.css';

const person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Hola me llamo {props.name} y mi edad es {props.age}! {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;