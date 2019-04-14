export const styleObjToStr = (styleObj) => {
  let styleStr = '';
  for (let key in styleObj) {
    styleStr += styleObj[key] ? `${key}:${styleObj[key]};` : '';
  }
  return styleStr;
};

export const styleStrToObj = (styleStr) => {
  let styleObj = {};
  styleStr.split(';').forEach((style) => {
    let styleArr = style.split(':');
    if (styleArr[0] && styleArr[1]) {
      styleObj[styleArr[0]] = styleArr[1];
    }
  });
  return styleObj;
};
