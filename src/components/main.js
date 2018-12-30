import React, { Component } from 'react';

import LeftNav from './leftcontainer/leftnavbar';
import TopNavbar from './rightcontainer/navbar';
import MailsList from './rightcontainer/maillist';
import Message from './rightcontainer/messages';

class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      MailsList:[]
    }
  }
  handleData(data){
    console.log(data)
    this.setState({
      MailsList:data
    });
  }

  render() {
    return (
      <div className="mainContainer">
      <LeftNav/>
      <div className="mailContainer">
      <TopNavbar/>
      <MailsList mailData = {this.state.MailsList}/>
      <Message/>
      </div>
      </div>
    );
  }
}

export default MainContainer;
