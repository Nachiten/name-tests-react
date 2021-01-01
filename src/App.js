import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
   background-color: ${props => props.alt ? 'red' : 'green'};
   color: black;
   font: inherit;
   border: 1px solid black;
   padding: 8px;
   cursor: pointer;
   
   &:hover{
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color:#555;
   }

`

class App extends Component {

   state = {
      persons: [
         { id: '1', name: 'Max', age: 28 },
         { id: '2', name: 'Carlos', age: 32 },
         { id: '3', name: 'Noelia', age: 24 }
      ],
      mostrarPersonas: false
   }

   render() {

      let persons = null;

      if (this.state.mostrarPersonas) {
         persons = (
            <div>
               {this.state.persons.map((person, index) => {
                  return <Person
                     click={() => this.eliminarPersonaHandler(index)}
                     name={person.name}
                     age={person.age}
                     key={person.id}
                     changed={(event) => this.cambiarNombreHandler(event, person.id)}
                  />
               })}
            </div>
         );
      }

      let classes = [];
      const cantidadPersonas = this.state.persons.length;

      if (cantidadPersonas <= 2) {
         classes.push('red');
      }

      if (cantidadPersonas <= 1) {
         classes.push('bold');
      }

      return (
         <div className="App">
            <h1 onCopy={this.seCopiaronDatosHandler}>Titulo de la pagina</h1>
            <p className={classes.join(' ')}>Esto funciona!!!</p>
            <StyledButton alt={this.state.mostrarPersonas} onClick={this.esconderPersonaHandler}>
               {
                  this.state.mostrarPersonas ?
                     <p>Ocultar nombres</p> : <p>Mostrar Nombres</p>
               }
            </StyledButton>
            {persons}
         </div>
      );
   }

   eliminarPersonaHandler = (personIndex) => {
      const nuevasPersonas = this.state.persons.slice();
      nuevasPersonas.splice(personIndex, 1);
      this.setState({ persons: nuevasPersonas });
   }

   esconderPersonaHandler = () => {
      const seMuestra = this.state.mostrarPersonas;
      this.setState({ mostrarPersonas: !seMuestra });
   }

   cambiarNombreHandler = (event, id) => {
      //console.log("Se clickeo el boton cambiarNombre");

      const personIndex = this.state.persons.findIndex(p => {
         return p.id === id;
      });

      const person = {
         ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({ persons: persons });
   }

   seCopiaronDatosHandler = () => {
      alert("Eh que copias el titulo gato");
   }
}

export default App;
