//引入vue-loader
const { VueLoaderPlugin } = require("vue-loader");
//引入path，构造绝对路径
const path = require("path"); //node自带
//动态填写组件的入口文件的名字，需要遍历src文件夹，因此需要通过内置库glob去遍历文件夹
const glob = require("glob"); //node自带的库

//设置入口文件，因为每个组件都有自己的入口，所以需要用对象来声明
// card: "./components/lib/card/index.js",
const list = {
 
};
//输入参数：1.配置组件文件夹的目录，2.配置多入口文件的配置对象
async function makeList(dirPash, list) {
  const files = glob.sync(`${dirPash}/**/index.js`); //接受遍历到的文件，主要拿到的是每个组件下的index.js文件
  //   console.log('files',files)   //终端输出完整的文件名，现在想拆分文件名，拿到组件的名字
  //遍历files
  for (let file of files) {
    const component = file.split(/[/.]/)[2]; //拿到组件名
    // console.log("component:", component);
    list[component] = `./${file}`;
  }
  // console.log(list);
}
//执行函数
makeList("components/lib", list);

//导出对象给webpack
module.exports = {
  //自定义的字段
  entry: list, //打包的入口文件，每个组件都有自己的入口
  mode: 'development',   //设置为开发模式
  output: {
    //输出配置
    filename: "[name].umd.js", //name即组件名，最后会得到card.umd.js
    path: path.resolve(__dirname, "dist"), //必须用绝对路径，否则打包时报错
    library: "mui",
    libraryTarget: "umd",
  },
  plugins: [
    //配置loader，对文件进行预处理
    //安装vue-loader：npm i vue-loader -D
    //引入vue-loader
    new VueLoaderPlugin(),
  ],
  module: {
    //配置vue-loader
    rules: [{
      //告诉webpack对什么文件使用什么rule
      test: /\.vue$/,
      use: [
        {
          loader: "vue-loader",
        }
      ]
    }]
  }
};
