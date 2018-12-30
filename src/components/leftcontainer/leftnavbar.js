import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import ComposeForm from './composeform';

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


class LeftNav extends Component {


  constructor(props) {
    super(props);
    this.state = {
      active: false,
      open: false,
      category:'',
      data:''
    };
    this.selectMailCategory= this.selectMailCategory.bind(this);
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  selectMailCategory = (args) => {
    console.log(args);
      this.setState({
        category: args,
        data:maildata
      });
    this.props.jsonData(args);
  }

  render() {
    const { open } = this.state;

    return (
      <div className="leftnav__container">

      <img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png" alt="user" className="user__img"/>

      <ul className="mail__options list">
      <li>
      <p  className="mail__options--label"   onClick={this.onOpenModal}>
      Compose
      </p>
      </li>

      <li>
      <p  className="mail__options--label active"  onClick={this.selectMailCategory.bind(null,'inbox')}>
      Inbox
      </p>
      </li>

      <li>
      <p  className="mail__options--label" onClick={this.selectMailCategory.bind(null,'unread')}>
      Unread
      </p>
      </li>

      <li>
      <p  className="mail__options--label" onClick={this.selectMailCategory.bind(null,'starred')}>
      Starred
      </p>
      </li>

      <li>
      <p  className="mail__options--label" onClick={this.selectMailCategory.bind(null,'drafts')}>
      Drafts
      </p>
      </li>

      <li>
      <p  className="mail__options--label" onClick={this.selectMailCategory.bind(null,'sent')}>
      Sent
      </p>
      </li>

      <li>
      <p  className="mail__options--label" onClick={this.selectMailCategory.bind(null,'trash')}>
      Trash
      </p>
      </li>

      <li>
      <p  className="mail__options--label" onClick={this.selectMailCategory.bind(null,'span')}>
      Spam
      </p>
      </li>

      </ul>



      <Modal open={open} onClose={this.onCloseModal} center>
      <ComposeForm />
      </Modal>

      </div>
    );
  }
}

export default LeftNav;
