import React from 'react';

const fontsize = [12, 14, 15, 16, 17, 18, 20];

class FontSizeMenu extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  setMenu = (fontsize) => {
    const {value} = this.props

    return fontsize.map((size) => <div
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        this.props.onChange(size);
      }}
      style={{ 'font-size': `${size}px` }}
      className={`font-size-menu-item ${value == size?'active':''}`}>
      <img src="https://i.loli.net/2019/04/11/5caf0ecda4477.png" />
      <span>{size}px</span>
    </div>);
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
