import React, {Component} from 'react';

class ErrorBoundary extends  Component{

    state = {
        hayError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hayError: true, errorMessage: error});
    }

    render(){
        if (this.state.hayError){
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children;
        }
        
    }
}

export default ErrorBoundary;