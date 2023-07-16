//引入gulp
const gulp = require("gulp");
//如果用到less、sass、scss等css预处理器，则需要引入相关的库将css预处理器转换成css
const sass = require("gulp-sass");   //将sass转换为css
//对css代码进行压缩
const minifyCss = require("gulp-minify-css");

//整个构建流的配置
gulp.task("sass", async function () {
  //输出构建流的配置
  return gulp.src("components/css/**/*.scss")
    //将需要处理的文件塞给gulp，src内的路径意思是将css下的所有的以scss结尾的文件，拿到这些文件后转换成css
    //（这里针对的是用less、sass、scss等css预处理器写样式才需要这么做，将上面写的css的地方换成自己用的预处理器就可以了）
    .pipe(sass()) 
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest("dist/css")); //拿到压缩文件后将其输出到最后的打包目录

})


