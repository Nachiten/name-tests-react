import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let clasesAsignadas = [];
    const cantidadPersonas = props.persons.length;
    let buttonClass = [classes.Button];

    if (props.mostrarPersonas){
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
            <button className={buttonClass.join(' ')} onClick={props.clicked}>
                {
                    props.mostrarPersonas ?
                        <p>Ocultar Nombres</p> : <p>Mostrar Nombres</p>
                }
            </button>
        </div>
    );
};

export default cockpit;