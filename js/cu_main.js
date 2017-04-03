//动态设置移动端像素比 ，动态插入<meta>配视口
var iScale = 1;
	iScale = iScale / window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' + iScale + ',minimum-scale=' + iScale + ',maximum-scale=' + iScale + '">');

//2、动态设置html字体大小 便于rem计算 
var iWidth = document.documentElement.clientWidth;//获得设备的可视宽度
   // iHeight=document.documentElement.clientHeight;
    iWidth = iWidth > 1620 ? 1620 : iWidth;//控制可视宽度过大，如太大则等于1620px
	document.getElementsByTagName('html')[0].style.fontSize = iWidth / 16 + 'px';
	//document.body.style.height=iHeight+"px";
//设置页面中的状态跳转开始
var app =angular.module('CU',['ionic']);
app.config(function ($stateProvider,$ionicConfigProvider,$urlRouterProvider) {
	//$stateProvider,$ionicConfigProvider, $urlRouterProvider
	$stateProvider.state('start',{url:'/start',templateUrl:'tpl/start.html'})
				  .state('login',{url:'/login',templateUrl:'tpl/login.html'})
				  .state('info',{url:'/info',templateUrl:'tpl/info.html'})
				  .state('apply',{url:'/apply',templateUrl:'tpl/apply.html'})
				  .state('footmark',{url:'/footmark',templateUrl:'tpl/footmark.html'})
				  .state('user',{url:'/user',templateUrl:'tpl/user.html'});
	$urlRouterProvider.otherwise('start')			  
				 
});
//父控制器里设置的是全局的作用域，每个页面都能用到
app.controller("parentCtrl",['$scope','$state',function($scope,$state) {
	$scope.jump=function (state,arg) {
		$state.go(state,arg)
	}
	
}]);