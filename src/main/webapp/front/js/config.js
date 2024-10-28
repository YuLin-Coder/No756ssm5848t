
var projectName = '大学学术交流论坛';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '我的订单',
	url: '../shop-order/list.html'
},

{
	name: '我的地址',
	url: '../shop-address/list.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '跳蚤市场',
	url: './pages/tiaozaoshichang/list.html'
}, 
{
	name: '主版块',
	url: './pages/zhubankuai/list.html'
}, 

{
	name: '学术论坛',
	url: './pages/forum/list.html'
}, 
{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/ssm5848t/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


cartFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"系统公告","menuJump":"列表","tableName":"xitonggonggao"}],"menu":"系统公告管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核","查看评论"],"menu":"跳蚤市场","menuJump":"列表","tableName":"tiaozaoshichang"}],"menu":"跳蚤市场管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"版主","menuJump":"列表","tableName":"banzhu"}],"menu":"版主管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"申请版主","menuJump":"列表","tableName":"shenqingbanzhu"}],"menu":"申请版主管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户荣誉榜","menuJump":"列表","tableName":"yonghurongyubang"}],"menu":"用户荣誉榜管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"发帖标兵","menuJump":"列表","tableName":"fatiebiaobing"}],"menu":"发帖标兵管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"热门贴","menuJump":"列表","tableName":"rementie"}],"menu":"热门贴管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"版主推荐贴","menuJump":"列表","tableName":"banzhutuijiantie"}],"menu":"版主推荐贴管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"主版块","menuJump":"列表","tableName":"zhubankuai"}],"menu":"主版块管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"版块名称","menuJump":"列表","tableName":"bankuaimingcheng"}],"menu":"版块名称管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学术论坛","tableName":"forum"}],"menu":"学术论坛"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"跳蚤市场列表","menuJump":"列表","tableName":"tiaozaoshichang"}],"menu":"跳蚤市场模块"},{"child":[{"buttons":["查看"],"menu":"主版块列表","menuJump":"列表","tableName":"zhubankuai"}],"menu":"主版块模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","支付","查看评论","查看"],"menu":"跳蚤市场","menuJump":"列表","tableName":"tiaozaoshichang"}],"menu":"跳蚤市场管理"},{"child":[{"buttons":["查看","新增","修改","删除"],"menu":"申请版主","menuJump":"列表","tableName":"shenqingbanzhu"}],"menu":"申请版主管理"},{"child":[{"buttons":["查看","查看评论"],"menu":"热门贴","menuJump":"列表","tableName":"rementie"}],"menu":"热门贴管理"},{"child":[{"buttons":["查看","查看评论"],"menu":"版主推荐贴","menuJump":"列表","tableName":"banzhutuijiantie"}],"menu":"版主推荐贴管理"},{"child":[{"buttons":["查看","查看评论"],"menu":"主版块","menuJump":"列表","tableName":"zhubankuai"}],"menu":"主版块管理"},{"child":[{"buttons":["查看","回复"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看"],"menu":"已取消订单","tableName":"orders/已取消"},{"buttons":["查看","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看"],"menu":"已退款订单","tableName":"orders/已退款"},{"buttons":["查看"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["查看","确认收货"],"menu":"已发货订单","tableName":"orders/已发货"},{"buttons":["查看"],"menu":"未支付订单","tableName":"orders/未支付"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"跳蚤市场列表","menuJump":"列表","tableName":"tiaozaoshichang"}],"menu":"跳蚤市场模块"},{"child":[{"buttons":["查看"],"menu":"主版块列表","menuJump":"列表","tableName":"zhubankuai"}],"menu":"主版块模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["新增","查看","查看评论","审核","删除"],"menu":"跳蚤市场","menuJump":"列表","tableName":"tiaozaoshichang"}],"menu":"跳蚤市场管理"},{"child":[{"buttons":["新增","查看","修改"],"menu":"用户荣誉榜","menuJump":"列表","tableName":"yonghurongyubang"}],"menu":"用户荣誉榜管理"},{"child":[{"buttons":["新增","查看","修改"],"menu":"发帖标兵","menuJump":"列表","tableName":"fatiebiaobing"}],"menu":"发帖标兵管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"热门贴","menuJump":"列表","tableName":"rementie"}],"menu":"热门贴管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"版主推荐贴","menuJump":"列表","tableName":"banzhutuijiantie"}],"menu":"版主推荐贴管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"主版块","menuJump":"列表","tableName":"zhubankuai"}],"menu":"主版块管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"跳蚤市场列表","menuJump":"列表","tableName":"tiaozaoshichang"}],"menu":"跳蚤市场模块"},{"child":[{"buttons":["查看"],"menu":"主版块列表","menuJump":"列表","tableName":"zhubankuai"}],"menu":"主版块模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"版主","tableName":"banzhu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
