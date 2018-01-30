import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' //引入根目录下的Hello.Vue组件
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import params from '@/components/params'
import Error from '@/components/Error'
import Count from '@/components/Count'

Vue.use(Router) //Vue全局使用Router

export default new Router({
  mode:'history', //去掉网址上的#号
  routes: [   //配置路由
    {  //每一个链接都是一个对象
      path: '/',  //链接路径
      name: 'HelloWorld',  //路由名称
      component: HelloWorld,
    },{ //传递参数
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:params,
    //   beforeEnter:(to, from,next)=>{
    //     console.log(to);
    //     console.log(from);
    //     next(false); //可以跳转，不跳转，或者在里面指定路径
    // }
    },{  //重定向
      path:'/gohome',
      redirect:'/'
    },{  //交换hi1和hi2
      path: '/change',  //链接路径
      name: 'HelloWorld',  //路由名称
      components: {
        default:HelloWorld,
        left:Hi2,
        right:Hi1,
      } //对应的组件模板
    },
    {  //子路由
      path:'/hi',
      // name:'Hi',  有子路由那么是没有作用的
      component:Hi,
      children:[
        {path:'/',name:'Hello/Hi'},
        {path:'hi1',name:'hi1',component:Hi1,alias:'/fang'},
        {path:'hi2',name:'hi2',component:Hi2},
      ]
    },{ //404页面
    path:'*',
      component:Error
    },{
    path:'/count',
      component:Count
    }

  ]
})
