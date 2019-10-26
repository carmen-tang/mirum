import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      showMobileMenu: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  toggleMobileMenu = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  };

  render() {
    return (
      <header id="header">
        <h1>mirum assessment</h1>
      </header>
    );
  }
}

Header.propTypes = {
  toggleMenu: PropTypes.func
};

export default Header;
