import DemoItem from './src/main.vue'

DemoItem.install=function(Vue){
    Vue.component(DemoItem.name,DemoItem)
}

export default DemoItem
