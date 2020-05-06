import React from 'react';

class Index extends React.Component{
    render(){
        return (
            <div className="main">
                <div className="home">
                    <div className="homeHeader">
                        <button onClick={()=>{this.newCreate()}}>新建一局</button>
                    </div>
                </div>
            </div>
        )
    }

    newCreate(){
        this.props.history.push({pathname:'/new'});
    }



}
export default Index;