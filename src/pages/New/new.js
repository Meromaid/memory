import React from 'react';
import './new.scss'
class Index extends React.Component{
    constructor(){
        super();
        this.state={
           number:0,
           flag:true,
        }
    }
    render(){
        return (
            <div className="main">
                <div className="box" >
                    <img src={require('../../assets/1.jpg')} alt="" />
                    <img src={require('../../assets/7.jpg')} alt="" onClick={(e)=>{this.change(e)}}/>
                </div>
                <div className="box">
                    <img src={require('../../assets/2.jpg')} alt=""  />
                    <img src={require('../../assets/7.jpg')} alt=""  onClick={(e)=>{this.change(e)}}/>
                </div>
                <div className="box">
                    <img src={require('../../assets/3.jpg')} alt=""  />
                    <img src={require('../../assets/7.jpg')} alt=""  onClick={(e)=>{this.change(e)}}/>
                </div>
                <div className="box">
                    <img src={require('../../assets/4.jpg')} alt=""  />
                    <img src={require('../../assets/7.jpg')} alt=""  onClick={(e)=>{this.change(e)}}/>
                </div>
                <div className="box">
                    <img src={require('../../assets/5.jpg')} alt=""  />
                    <img src={require('../../assets/7.jpg')} alt=""  onClick={(e)=>{this.change(e)}}/>
                </div>
                <div className="box">
                    <img src={require('../../assets/6.jpg')} alt=""  />
                    <img src={require('../../assets/7.jpg')} alt=""  onClick={(e)=>{this.change(e)}}/>
                </div>
                <div className="box">
                    <img src={require('../../assets/1.jpg')} alt=""  />
                    <img src={require('../../assets/7.jpg')} alt=""  onClick={(e)=>{this.change(e)}}/>
                </div>
                <div className="box">
                    <img src={require('../../assets/2.jpg')} alt=""  />
                    <img src={require('../../assets/7.jpg')} alt=""  onClick={(e)=>{this.change(e)}}/>
                </div>
                <div className="box">
                    <img src={require('../../assets/3.jpg')} alt=""  />
                    <img src={require('../../assets/7.jpg')} alt=""  onClick={(e)=>{this.change(e)}}/>
                </div>
                <div className="box">
                    <img src={require('../../assets/4.jpg')} alt=""  />
                    <img src={require('../../assets/7.jpg')} alt=""  onClick={(e)=>{this.change(e)}}/>
                </div>
                <div className="box">
                    <img src={require('../../assets/5.jpg')} alt=""  />
                    <img src={require('../../assets/7.jpg')} alt=""  onClick={(e)=>{this.change(e)}}/>
                </div>
                <div className="box">
                    <img src={require('../../assets/6.jpg')} alt=""  />
                    <img src={require('../../assets/7.jpg')} alt=""  onClick={(e)=>{this.change(e)}}/>
                </div>
                
            </div>
        )
    }
    change(e){
        this.state.number++;
        console.log(this.state.flag)
        if(this.state.flag){
            e.target.className = "none1"
            localStorage.setItem('img'+ this.state.number,e.target.previousSibling.src);
            if(localStorage.getItem('img1') === localStorage.getItem('img2')){
                setTimeout(()=>{
                    var s= document.getElementsByClassName("none1")
                    console.log(s,document.getElementsByClassName("hidden"))
                    /* s[0].previousSibling.className = 'hidden'
                    s[0].className = 'hidden'
                    s[1].previousSibling.className = 'hidden'
                    s[1].className = 'hidden' */
                    console.log(s)
                    for(var i=0;i<s.length;i++){
                        if(s[i].previousSibling){
                            s[i].previousSibling.className = 'hidden'
                        }
                    }
                    for(var j=0;j<document.getElementsByClassName("none1").length;j++){
                        document.getElementsByClassName("none1")[j].className = 'hidden'
                    }
                    document.getElementsByClassName("none1")[0].className = 'hidden'
                    console.log('www',document.getElementsByClassName("none1"))
                    this.setState({
                        number:0,
                        flag:true 
                    })
                    localStorage.clear()
                },1000)
            }
            if(localStorage.getItem('img1') != null && localStorage.getItem('img2') != null && localStorage.getItem('img1') != localStorage.getItem('img2')){
                    setTimeout(()=>{
                        var s= document.getElementsByClassName("none1")
                        console.log("buyiynag ",s)
                        s[0].className="none"
                        for(var i=0;i<s.length;i++){
                            s[i].className="none"
                            console.log(s[i])
                        }
                        this.setState({
                            number:0,
                            flag:true
                        })
                        localStorage.clear()
                    },300)
                }
            if(localStorage.getItem('img2')){
                this.setState({
                    flag:false
                })
            }
        }else{
            return
        }
        console.log(document.getElementsByClassName("none1").length)
            if(document.getElementsByClassName("none1").length === 22){
                setTimeout(()=>{
                    alert("游戏结束")
                })
            }   
    }
}
export default Index;