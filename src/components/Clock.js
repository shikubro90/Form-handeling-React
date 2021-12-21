import React from "react"
import Button from "./Button";

class Clock extends React.Component{

    constructor(props){

        super(props)
        console.dir(this.props);
        this.state = {date: new Date(), locale: 'bn-BD'};
    }

    componentDidMount(){

        this.clockTimer = setInterval(()=>this.tick(),1000)
        
    }

    componentWillUnmount(){

        clearInterval(this.clockTimer);
    }

    tick(){

        this.setState({
            date:new Date(),
        })
    }

    handleClick=()=>{
        if(this.state.locale === 'bn-BD'){
            this.setState({
                locale: 'en-US'
            })
        }else{
            this.setState({
                locale: 'bn-BD'
            })
        }
        
    }

    render(){
        const {date,locale} = this.state;
      return(
        <div>

            <>
            <h1>Time {date.toLocaleTimeString(locale)}</h1>
            
            {locale==='bn-BD'?(
                <Button changes={this.handleClick} locale = 'bn-BD' />
                
            ):(
                <Button changes={this.handleClick} locale = 'en-US' />
            )}
            </>
            
            
        </div>
      )
    }
  }

  export default Clock;