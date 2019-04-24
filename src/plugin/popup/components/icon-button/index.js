import React from 'react';
import './index.scss';
class IconButton extends React.Component {
  render() {
    const { onClick, icon, tip, width, height, text, className } = this.props;
    return (
      <div
        style={{
          width: width,
          height: height
        }}
        className={`tss-popup-btn ${tip ? 'poptip' : ''} ${className}`}
        aria-controls={tip}
        onClick={onClick}
        onMouseMove={(e) => e.stopPropagation()}>
        {text ? <span className="text">{text}</span> : null}
        {icon ? typeof icon == 'string' ? <img src={icon} /> : icon : null}
        <img src="" className="mask-img" alt="" />
      </div>
    );
  }
}

export default IconButton;
