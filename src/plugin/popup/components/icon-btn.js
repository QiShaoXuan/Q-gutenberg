import React from 'react';

class IconButton extends React.Component {

  render() {
    const { onClick, icon, tip, width, height, text,className } = this.props;
    return (
      <div
        style={{
          width: width,
          height: height
        }}
        className={`tss-popup-btn ${tip ? 'poptip' : ''} ${className}`}
        aria-controls={tip}
        onClick={onClick}>
        {text ? <span className="text">{text}</span> : null}
        {icon ? typeof icon == 'string'?<img src={icon}/>:icon : null}
        <img src="" className="mask-img" alt=""/>
      </div>
    );
  }
}

export default IconButton;
