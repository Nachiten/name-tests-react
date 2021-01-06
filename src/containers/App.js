import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {

   constructor(props) {
      super(props);
      console.log('[App.js] constructor');
   }

   state = {
      persons: [
         { id: '1', name: 'Max', age: 28 },
         { id: '2', name: 'Carlos', age: 32 },
         { id: '3', name: 'Noelia', age: 24 }
      ],
      mostrarPersonas: false,
      changeCounter: 0,
      authenticated: false
   }

   static getDerivedStateFromProps(props, state){
      console.log('[App.js] getDerivedStateFromProps ', props);
      return state;
   }

   componentDidMount(){
      console.log('[App.js] componentDidMount');
   }

   shouldComponentUpdate(nextProps, nextState){
      console.log('[App.js] shouldComponentUpdate');
      return true;
   }

   componentDidUpdate(){
      console.log('[App.js] componentDidUpdate');
   }

   loginHandler = () => {
      this.setState({authenticated: true});
   }


   render() {

      console.log('[App.js] render');

      let persons = null;

      if (this.state.mostrarPersonas) {
         persons = (
            <div>
               <Persons
                  persons={this.state.persons}
                  clicked={this.eliminarPersonaHandler}
                  changed={this.cambiarNombreHandler}
                  isAuthenticated={this.state.authenticated}
                  />
            </div>
         );
      }

      return (
         <Aux>
            <AuthContext.Provider 
            value={{
               authenticated: this.state.authenticated, 
               login: this.loginHandler }}>
            <Cockpit
               mostrarPersonas={this.state.mostrarPersonas}
               persons={this.state.persons}
               clicked={this.esconderPersonaHandler}
               title={this.props.appTitle}
            />
            {persons}
            </AuthContext.Provider>
         </Aux>
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

      this.setState((prevState, props) => {
         return {
         persons: persons, 
         changeCounter: prevState.changeCounter + 1 
         }
      });
   }

   seCopiaronDatosHandler = () => {
      alert("Eh que copias el titulo gato");
   }
}

export default withClass(App, classes.App);
