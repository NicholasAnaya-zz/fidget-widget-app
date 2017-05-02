import React, { Component } from 'react';
import logo from './logo.svg';


class Scroller extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    debugger
    let scrollTop = event.target.body.scrollTop,
    itemTranslate = Math.min(0, scrollTop/3 - 60);
    if(scrollTop > 350) {
      // something to do
    } else {
      // something to do
    }
  }

  render() {
    return (
      <div className="App-spinner">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default Scroller
