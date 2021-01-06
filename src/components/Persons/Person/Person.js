import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
       // this.inputElement.focus();
       this.inputElementRef.current.focus();
       console.log(this.context.authenticated);
    }

    render(){
        console.log('[Person.js] rendering...');

        return (
            <Aux>
                {this.context.authenticated ? <p>Autenticado capoEIRA</p> : <p> Autenticate por favor, masterCARD</p> }

                <p onClick={this.props.click}>Hola me llamo {this.props.name} y mi edad es {this.props.age}! {this.props.children}</p>
                <input 
                type="text" 
                //ref={(inputEl) => { this.inputElement = inputEl}}
                ref={this.inputElementRef}
                onChange={this.props.changed} 
                value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);