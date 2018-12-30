import React, { Component } from 'react';
import SearchMail from './searchmail';


class TopNavbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    console.log('helo')
}

render() {
  return (
    <div className="navbar__search__tabs">
    <div className="search__container">
    <SearchMail/>
    </div>
    <div className="tags">
    <p className="tags--label inbox" >
    Inbox
    </p>
    <p className="tags--label social">
    Social
    </p>
    <p className="tags--label promotions">
    Promotions
    </p>
    <p className="tags--label spam">
    Spam
    </p>
    </div>

    </div>
  );
}
}

export default TopNavbar;
