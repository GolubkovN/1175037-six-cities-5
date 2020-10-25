import React from 'react';

export const withActiveItem = (Component) => {
  return class ActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null,
      };
      this.setActiveItem = this.setActiveItem.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    setActiveItem(offer) {
      this.setState({
        activeItem: offer,
      });
    }

    handleMouseLeave() {
      this.setState({
        activeItem: null,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onHover={this.setActiveItem}
          onMouseLeave={this.handleMouseLeave}
        />
      );
    }
  };
};
