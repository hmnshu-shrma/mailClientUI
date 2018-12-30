import React, { Component } from 'react';


class Message extends Component {
  render() {
    return (
      <div className="message__container">
        <p className="message__container--address">
          <b>From:</b>Himanshu <span> - hmnshu2690@gmail.com</span>
        </p>

        <p className="message__container--subject">
          <b>Sub:</b>Project Presentation:2018 q4
        </p>
        <p className="message__container--message">
          fdoewd;lwejkfpowerjcfpowrcflkwrmlcfwrfcowrucfp9prifpcoewrfc
        </p>
      </div>
    );
  }
}

export default Message;
