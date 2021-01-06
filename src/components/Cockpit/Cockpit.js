import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // setTimeout(() => {
        //     alert('Guarde la data en la nube.');
        // }, 1000);
        toggleBtnRef.current.click();
    }, []);

    let clasesAsignadas = [];
    const cantidadPersonas = props.persons.length;
    let buttonClass = [classes.Button];

    if (props.mostrarPersonas) {
        buttonClass.push(classes.Red);
    }

    if (cantidadPersonas <= 2) {
        clasesAsignadas.push(classes.red);
    }

    if (cantidadPersonas <= 1) {
        clasesAsignadas.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1 onCopy={this.seCopiaronDatosHandler}>{props.title}</h1>
            <p className={clasesAsignadas.join(' ')}>Esto funciona!!!</p>
            <button ref={toggleBtnRef} className={buttonClass.join(' ')} onClick={props.clicked}>
                {
                    props.mostrarPersonas ?
                        <p>Ocultar Nombres</p> : <p>Mostrar Nombres</p>
                }
            </button>

            <button onClick={authContext.login}>Log in</button>

        </div>
    );
};

export default cockpit;