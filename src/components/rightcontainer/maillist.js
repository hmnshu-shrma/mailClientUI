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

class MailsList extends Component {

  constructor(props) {
    super(props);
    // this.selectMailId= this.selectMailId.bind(this);
    this.state = {
      active: false,
      open: false,
      category:''
    };
  }

  render() {

    var keys = Object.keys(maildata.mailcontent.emails);
    maildata.mailcontent.emails.map((e)=>{
      console.log(e);
    });




    console.log(this.props.categoryJson,"mail list")
    return (
      <div className="messageList__container">
      { maildata.mailcontent.emails ? maildata.mailcontent.emails.map((e,index)=>
        <div className="message_list" key={index.toString()} onClick={this.props.selectMailId.bind(null, e.id)}>
        <p className="message_list--label" >
        {e.from}
        </p>
        <p className="message_list--subject">
        <b>Sub:</b>{e.subject}
        </p>
        </div>
      ) : "No Mails Found."}
      </div>
    );
  }
}

export default MailsList;
