import UiButton from './component/button';
import UiButtonGroup from './component/button-group/button-group';
import UiLayout from './component/layout';
import UiHeader from './component/header';
import UiSider from './component/sider';
import UiContent from './component/content';
import UiFooter from './component/footer';
import UiCol from './component/col/col';
import UiIcon from './component/icon/icon';
import UiInput from './component/input/input';
import UiNav from './component/nav/nav';
import UiNavItem from './component/nav/nav-item';
import UiSubNav from './component/nav/sub-nav';
import UiPager from './component/pager/pager';
import UiRow from './component/row/row';
import UiSlide from './component/slide/slide';
import UiSlideItem from './component/slide/slide-item';
import Sticky from './component/sticky/sticky';
import Table from './component/table/table';

const components = [
  UiButton,
  UiButtonGroup,
  UiLayout,
  UiHeader,
  UiSider,
  UiContent,
  UiFooter,
  UiCol,
  UiIcon,
  UiInput,
  UiNav,
  UiNavItem,
  UiSubNav,
  UiPager,
  UiRow,
  UiSlide,
  UiSlideItem,
  Sticky,
  Table,
];

// 定义install方法，接收Vue作为参数。如果使用use注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) {
    return;
  }
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
};
console.log('install ==>', install);
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install, // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  ...components
}
