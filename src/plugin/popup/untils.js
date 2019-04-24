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

export const handleFormat = (value, formatType) => {
  const formatRange = getRange(value, formatType);
  return formatRange.map((range) => {
    const newValue = handleValue(value);
    newValue.start = range.start;
    newValue.end = range.end;
    return newValue;
  });
};

function handleValue(value) {
  const newValue = JSON.parse(JSON.stringify(value));
  for (let key in newValue) {
    if (Array.isArray(newValue[key])) {
      newValue[key].forEach((v, index) => {
        if (!v) {
          delete newValue[key][index];
        }
      });
    }
  }
  return newValue;
}

function getRange(value, formatType) {
  const { formats, start, end } = value;
  const startFormat = formats.findIndex((f) => f && judgeFormat(f, formatType));
  const endFormat = formats.findIndex((f, i) =>
    i > 1 ? !f && judgeFormat(formats[i - 1], formatType) : false
  );

  if (startFormat === -1) {
    return [{ start: start, end: end }];
  }

  let range = []

  if(startFormat > start){
    range.push({
      start: start,
      end: startFormat
    })
    range.push({
      start: startFormat,
      end: endFormat
    })
  }

  if(endFormat < end){
    if(range.length === 0){
      range.push({
        start: start,
        end: endFormat
      })
    }
   range.push({
     start: endFormat,
     end: end
   })
  }

  // if (startFormat > start || endFormat < end) {
  //   return [
  //     {
  //       start: start,
  //       end: startFormat
  //     },
  //     {
  //       start: startFormat,
  //       end: endFormat
  //     },
  //     {
  //       start: endFormat,
  //       end: end
  //     }
  //   ];
  // }

  return range.length?range:[{ start: start, end: end }];
}

function judgeFormat(formatArr, formatType) {
  if (!formatArr) return false;
  const f = formatArr.find((f) => f.type === formatType);
  return f ? true : false;
}
