import React from 'react';
//import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 45%;
    margin: 16px auto;
    border: 1px solid #888;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <StyledDiv>
            <p onClick={props.click}>Hola me llamo {props.name} y mi edad es {props.age}! {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

export default person;