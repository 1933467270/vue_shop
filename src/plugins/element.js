/*
 * @Description: element插件局部引用
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2020-02-08 19:08:00
 * @LastEditors  : Wsl
 * @LastEditTime : 2020-02-11 13:01:42
 */
import Vue from 'vue'
import {
  Button, Alert, MessageBox, Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
} from 'element-ui'

Vue.use(Button)
Vue.use(Alert)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.prototype.$alert = MessageBox.alert
