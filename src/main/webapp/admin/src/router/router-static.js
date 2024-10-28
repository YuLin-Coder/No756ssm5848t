import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import yonghurongyubang from '@/views/modules/yonghurongyubang/list'
    import xitonggonggao from '@/views/modules/xitonggonggao/list'
    import zhubankuai from '@/views/modules/zhubankuai/list'
    import banzhutuijiantie from '@/views/modules/banzhutuijiantie/list'
    import tiaozaoshichang from '@/views/modules/tiaozaoshichang/list'
    import storeup from '@/views/modules/storeup/list'
    import discussbanzhutuijiantie from '@/views/modules/discussbanzhutuijiantie/list'
    import forum from '@/views/modules/forum/list'
    import discussrementie from '@/views/modules/discussrementie/list'
    import rementie from '@/views/modules/rementie/list'
    import discusszhubankuai from '@/views/modules/discusszhubankuai/list'
    import yonghu from '@/views/modules/yonghu/list'
    import bankuaimingcheng from '@/views/modules/bankuaimingcheng/list'
    import discusstiaozaoshichang from '@/views/modules/discusstiaozaoshichang/list'
    import messages from '@/views/modules/messages/list'
    import orders from '@/views/modules/orders/list'
    import shenqingbanzhu from '@/views/modules/shenqingbanzhu/list'
    import fatiebiaobing from '@/views/modules/fatiebiaobing/list'
    import banzhu from '@/views/modules/banzhu/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/yonghurongyubang',
        name: '用户荣誉榜',
        component: yonghurongyubang
      }
      ,{
	path: '/xitonggonggao',
        name: '系统公告',
        component: xitonggonggao
      }
      ,{
	path: '/zhubankuai',
        name: '主版块',
        component: zhubankuai
      }
      ,{
	path: '/banzhutuijiantie',
        name: '版主推荐贴',
        component: banzhutuijiantie
      }
      ,{
	path: '/tiaozaoshichang',
        name: '跳蚤市场',
        component: tiaozaoshichang
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/discussbanzhutuijiantie',
        name: '版主推荐贴评论',
        component: discussbanzhutuijiantie
      }
      ,{
	path: '/forum',
        name: '学术论坛',
        component: forum
      }
      ,{
	path: '/discussrementie',
        name: '热门贴评论',
        component: discussrementie
      }
      ,{
	path: '/rementie',
        name: '热门贴',
        component: rementie
      }
      ,{
	path: '/discusszhubankuai',
        name: '主版块评论',
        component: discusszhubankuai
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/bankuaimingcheng',
        name: '版块名称',
        component: bankuaimingcheng
      }
      ,{
	path: '/discusstiaozaoshichang',
        name: '跳蚤市场评论',
        component: discusstiaozaoshichang
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/shenqingbanzhu',
        name: '申请版主',
        component: shenqingbanzhu
      }
      ,{
	path: '/fatiebiaobing',
        name: '发帖标兵',
        component: fatiebiaobing
      }
      ,{
	path: '/banzhu',
        name: '版主',
        component: banzhu
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
