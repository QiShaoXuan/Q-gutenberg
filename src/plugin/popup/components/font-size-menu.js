import React from 'react';

const fontsize = [12, 14, 15, 16, 17, 18, 20];

class FontSizeMenu extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  setMenu = (fontsize) => {
    return fontsize.map((size) => <div
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        this.props.onChange(size);
      }}
      style={{ 'font-size': `${size}px` }}
      className="font-size-menu-item">{size}px</div>);
  };

  render() {
    return (
      <div className="font-size-menu">
        {this.setMenu(fontsize)}
      </div>
    );
  }
}

export default FontSizeMenu;
