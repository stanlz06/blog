const path= require('path');
const YanHuaPlugin = () => ({
  define () {
    return {}
  },
  enhanceAppFiles: [
    path.resolve(__dirname, 'yanhua.js')
  ]
});
module.exports = YanHuaPlugin;
