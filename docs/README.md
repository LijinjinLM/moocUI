# 快速开始

### 安装组件库

```bash
npm i mooc-ui-ljj
```
 
#### 2.引用组件库
>在main.js引入组件库


```javascript
//全部引入
import "mooc-ui-ljj/dist/css/index.css";
import MUI from "mooc-ui-ljj";
Vue.use(MUI);
 
 
//按需引入
import "mooc-ui-ljj/dist/css/card.css";
import {Card} from "mooc-ui-ljj";
Vue.use(Card);
```
