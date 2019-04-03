module.exports = function(inEnv) {
  return require(`./build/${inEnv.TYPE}.js`);
};
