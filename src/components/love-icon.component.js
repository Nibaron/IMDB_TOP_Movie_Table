import React, { Component } from 'react';

class Love extends Component {
  state = {
    isHovered: false,
    isRated: this.props.isRated
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };


  handleClick = () => {
    this.setState((prevState) => ({
      isRated: !prevState.isRated
    }));
  };


  render() {
    const { isRated } = this.state;

    const iconClassName = isRated
      ? 'bi bi-heart-fill text-danger'
      : this.state.isHovered
      ? 'bi bi-heart text-danger'
      : 'bi bi-heart';


    return (
      <i
        className={iconClassName}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
        style={{ cursor: 'pointer' }}
      ></i>
    );
  }
}


export default Love;