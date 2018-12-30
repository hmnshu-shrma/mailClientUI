import React, { Component } from 'react';

import LeftNav from './leftcontainer/leftnavbar';
import TopNavbar from './rightcontainer/navbar';
import MailsList from './rightcontainer/maillist';
import Message from './rightcontainer/messages';

class MainContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      data:'',
      messageid:''
    };
  }
  onDataReturn(jsonData){
    setTimeout(()=>{
      this.setState({ data:jsonData});
    },0);
    console.log(jsonData)
  }
  selectMailId(args) {
    setTimeout(()=>{
      this.setState({ messageid:args});
    },0);
  }

  render() {
    return (
      <div className="mainContainer">
      <LeftNav jsonData = {this.onDataReturn.bind(this)}/>
      <div className="mailContainer">
      <TopNavbar/>
      <MailsList selectMailId={this.selectMailId.bind(this)} categoryJson={this.state.data} />
      <Message categoryJson={this.state.messageid} />
      </div>
      </div>
    );
  }
}

export default MainContainer;
