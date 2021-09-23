import Vue from 'vue'
import {
  Button, Form, FormItem, Input, Message, Container, Aside, Main, Header,
  Menu, MenuItem, Submenu, MenuItemGroup, Breadcrumb, BreadcrumbItem,
  Card, Table, TableColumn, Switch, Tooltip, Row, Col, Pagination, Dialog, MessageBox,
  Tag
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Row)
Vue.use(Col)
Vue.component(Pagination.name, Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
