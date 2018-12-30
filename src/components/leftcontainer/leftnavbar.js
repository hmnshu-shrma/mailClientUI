import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import ComposeForm from './composeform';
class LeftNav extends Component {

  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  openInbox = () =>{
      
  }

  render() {
    const { open } = this.state;
    return (
      <div className="leftnav__container">

      <img src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png" alt="user" className="user__img"/>

      <ul className="mail__options list">
      <li>
      <p  className="mail__options--label" onClick={this.onOpenModal}>
      Compose
      </p>
      </li>

      <li>
      <p  className="mail__options--label" onClick={this.openInbox}>
      Inobx
      </p>
      </li>

      <li>
      <p  className="mail__options--label" onClick={this.onOpenModal}>
      Unread
      </p>
      </li>

      <li>
      <p  className="mail__options--label" onClick={this.onOpenModal}>
      Starred
      </p>
      </li>

      <li>
      <p  className="mail__options--label" onClick={this.onOpenModal}>
      Drafts
      </p>
      </li>

      <li>
      <p  className="mail__options--label" onClick={this.onOpenModal}>
      Sent
      </p>
      </li>

      <li>
      <p  className="mail__options--label" onClick={this.onOpenModal}>
      Trash
      </p>
      </li>

      <li>
      <p  className="mail__options--label" onClick={this.onOpenModal}>
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
