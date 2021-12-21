import React from "react";


export default class Form extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            title : 'Title',
            text : 'Text',
            select : "",
            isAwesome: "",
            submit : ""
        }
    }
     
    handleChange=(e)=>{
        if(e.target.type === 'text'){
            this.setState({
                title: e.target.value
            })
            console.log(this.state.title);

        }else if(e.target.type === 'textarea'){
            this.setState({
                text: e.target.value
            })
            console.log(this.state.text);
        }else if(e.target.type === 'select-one'){       
            this.setState({
                select: e.target.value
            
            })
            console.log(e.target.value);
        }else if(e.target.type ==='checkbox'){
            this.setState({
                isAwesome : e.target.checked, 
            })
            console.log(e.target.value);
        }
        else{
            console.log(e.target.type);
            console.log("Nothign");
        }

    }
    submitHandaler = (e)=>{
        const {title,text,select,isAwesome} = this.state;
        e.preventDefault();
        console.log(title,text,select,isAwesome);
    }

    render(){

        const {title,text,select,isAwesome} = this.state;

        return(
            
            <div>
                {/* for live data change showing p tag */}
                <p>{title}</p>

                {/* Practice text input type */}
                <form onSubmit={this.submitHandaler}> 
                    <input type="text" placeholder="Enter Title" value={title} onChange={this.handleChange}/>

                    <br/>
                    <br/>

                    {/* practice text area tag */}
                    <textarea name="text" value={text} onChange={this.handleChange}/>

                    <br/>
                    <br/>
                    <select value={select} onChange={this.handleChange}>
                        <option value="Select">Select</option>
                        <option value="Angular">Angular</option>
                        <option value="React">React</option>
                        <option value="Jquery">Jquery</option>
                    </select>

                    <br/>
                    <br/>

                    <input type="checkbox" value={isAwesome}  onChange={this.handleChange} />

                    <br/>
                    <br/>

                    <input type='submit' value="Submit"/>

                </form>
            </div>

        )
    }
}