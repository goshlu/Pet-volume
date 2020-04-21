// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '@/icons' // icon
// import store from './store'

Vue.config.productionTip = false
import 'amfe-flexible/index.js' //引入适配文件

// 引入vant组件按需加载
import {
  Swipe,
  Toast,
  SwipeCell,
  Sku,
  SwipeItem,
  Button,
  RadioGroup,
  Radio,
  Tabbar,
  Tab,
  Tabs,
  CountDown,
  Loading,
  Switch,
  TabbarItem,
  NavBar,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Search,
  Lazyload,
  Card,
  Popup,
  Dialog,
  Picker,
  Checkbox,
  Area,
  CheckboxGroup,
  ActionSheet,
  Field,
  Uploader,
  Cell,
  Step,
  Steps,
  IndexBar,
  IndexAnchor,
  Tag,
  CellGroup,
  SubmitBar,
  Stepper,
  Collapse,
  CollapseItem,
  Divider,
  Icon
} from 'vant'
// Vue.use(VueAwesomeSwiper)
// Vue.use(axios)
// Vue.use(EventBus)
// Vue.use(VueClipboard)

Vue.use(Tabbar).use(TabbarItem).use(Button).use(NavBar).use(Search).use(Icon).use(Picker).use(ActionSheet).use(Field).use(Cell).use(CellGroup)
  .use(Swipe).use(SwipeItem).use(Lazyload).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Popup).use(Uploader).use(Dialog).use(Checkbox).use(CheckboxGroup)
  .use(Switch).use(Step).use(Steps).use(Card).use(Stepper).use(SubmitBar).use(Tag).use(Toast).use(Area).use(IndexBar).use(IndexAnchor).use(Loading)
  .use(Collapse).use(CollapseItem).use(Radio).use(RadioGroup).use(Tab).use(Tabs).use(Divider).use(CountDown).use(Sku).use(SwipeCell)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //store, //store:store和router挂载实例
  components: {
    App
  },
  template: '<App/>'
})
