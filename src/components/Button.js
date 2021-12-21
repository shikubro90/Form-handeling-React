import React from "react";

class Button extends React.Component{

    shouldComponentUpdate(nextProps){
        const {changes: currentChange} = this.props;
        const {changes: nextChanges} = nextProps;
        if(currentChange === nextChanges){
            return false
        }
        return true;
    }

    render(){
        
        const {changes, locale} = this.props
        // console.log(change);
        console.log(locale);

        return(

            <button onClick={changes}>
            
            {locale==='bn-BD' ? 'Make English' : 'Make Bangla'}
            
            </button>
        )
    }
}

export default Button