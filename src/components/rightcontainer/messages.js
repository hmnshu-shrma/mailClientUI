import React, { Component } from 'react';


var maildata = {
  mailcontent:{
    id: 1,
    name: "Inbox",
    emails: [
      {
        id: 1,
        from: "joe@tryolabs.com",
        to: "fernando@tryolabs.com",
        subject: "Meeting",
        body: "hi"
      },
      {
        id: 2,
        from: "newsbot@tryolabs.com",
        to: "fernando@tryolabs.com",
        subject: "News Digest",
        body: "<h1>Intro to React</h1> <img src='https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png' width=300/)>"
      }
    ]
  }
};

class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datamsg:'',
    }
  }
  componentDidMount() {
    console.log('GrandChild did mount.');
    let msgId;
    if(this.props.categoryJson){
      msgId = this.props.categoryJson;
    }else{
      msgId = 1;
    }
    console.log(this.props.categoryJson)


    var keys = Object.keys(maildata.mailcontent.emails);
    maildata.mailcontent.emails.map((c)=>{
      if(c.id === msgId){
        this.setState({datamsg:c});
      }else{
        console.log('nothing found')
      }
    });
  }

  render() {
    let data = this.state.message;
    return (
      <div>
      {data ? data.map((item,index)=>
        <div className="message__container" key={index.toString()}>
        <p className="message__container--address">
        <b>From:</b>{item.from}
        </p>
        <p className="message__container--subject">
        <b>Sub:</b>{item.subject}
        </p>
        <p className="message__container--message">
         dangerouslySetInnerHTML={{__html : item.body}}
        </p>
        </div>
      ):'nothign found'}
      </div>
    );
  }
}

export default Message;
