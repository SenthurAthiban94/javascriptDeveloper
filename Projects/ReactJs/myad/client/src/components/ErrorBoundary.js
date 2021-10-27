import React from "react";
export default class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
        }
    }
    static getDerivedStateFromError(){
        return {hasError:true};
    }
    componentDidCatch(error, errorInfo){
        const {
            onFailure = ()=>{
                console.log('ERROR:', error)
                console.log('ERROR-INFO:', errorInfo);
            }
        } = this.props;
        onFailure(error,errorInfo);
    }
    render(){
        const {hasError} = this.state;
        const {children, fallBack=<div>Something Went Wrong</div>} = this.props;
        return hasError ? fallBack : children;
    }
}