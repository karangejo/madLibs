import { Component } from 'react';
import Layout from '../components/layout';

const baseUrl ='http://localhost:5000?';

class CreateMadLib extends Component {
        state = {
                madLibContent: '',
                madLibName: '',
                showMadLib: false,
                madLibList: []
        };


        saveMadLib = (event) => {
                event.preventDefault();
               
                var url = baseUrl + 'name=' + this.state.madLibName + '&data=' + this.state.madLibName
                
                console.log('url for query is: ',url);
                fetch(url,{method:"POST"})
                        .then(res => res.json())
                        .then(data => console.log(data));
        }


        submitMadLib = (event) => {
                event.preventDefault();
                if(this.state.madLibContent === ""){
                        console.log('No madlib to display!');
                } else {
                        var content = this.state.madLibContent;
                        if(content.substring(0,2) === "///"){
                                content = "    " + content;
                        }
                        const MadlibArray = content.split("///");
                        this.setState({showMadLib:true,madLibList:MadlibArray});
                }
        };

        renderMadLib(){
                console.log(this.state.madLibList)
                const madLibPreview = this.state.madLibList.map((element, index) => {
                        if((index+2)%2 == 0){
                                //return <h5>{element}</h5>;
                                return element;
                        } else {
                                return <b>{element}:______________ </b>;
                        }
                });
                return (
                        <div>
                                <h4>{this.state.madLibName}</h4>
                                <p>{madLibPreview}</p>
                        </div>
                )
        };

        render(){
        
                return(
                        <Layout>
                                <h1>Create a Mad Lib</h1>
                                <form action="submit" onSubmit={this.submitMadLib}>
                                        Name of MadLib:<br/>
                                        <input type="text" onChange=
                                                {event => this.setState({madLibName:event.target.value})}/>
                                                <br/>MadLib Content<br/>
                                                <textarea cols="30" rows="5" 
                                                        defaultValue="Enter your madlib text here please wrap the words to be substituted with three backslashes.
                                                        So if you wanted the user to choose a weather word you would enter the following:
                                                        The weather on that day was extremelly ///weather word///..." 
                                                        onChange=
                                                                {event => this.setState({madLibContent:event.target.value})}
                                                                style={{width:"75%"}}>
                                                
                                                </textarea>
                                        <br/>
                                        <button type="submit">Create</button>
                                        <button onClick={this.saveMadLib}>Save</button>
                                </form>
                                {this.state.showMadLib && this.renderMadLib()}
                        </Layout>        
                );
        };
}

export default CreateMadLib;
