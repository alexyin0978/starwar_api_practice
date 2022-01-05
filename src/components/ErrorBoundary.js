import React,{Component} from "react";

class ErrorBoundary extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err,info){
        this.setState({hasError: true})
    }

    render(){
        return this.state.hasError===true ? <h1>Ooooops, something went wrong</h1> :
        <div>
            {this.props.children}
        </div>
    }
}

export default ErrorBoundary;