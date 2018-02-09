import angular from 'angular'
import domready from 'domready'
import '@uirouter/angularjs'
import { OrderController } from './orders/orderController'
import { OrderViewController } from './orders/orderViewController'
import { OrderEditController } from './orders/orderEditController'
import { OrderCreateController } from './orders/orderCreateController'
import { StateProvider, UrlRouterProvider} from '@uirouter/angularjs'
import { OrderService } from './orders/orderService'


angular.module('app', ['ui.router'])
    .controller('OrderController', OrderController)
    .controller('OrderViewController', OrderViewController)
    .controller('OrderEditController', OrderEditController)
    .controller('OrderCreateController', OrderCreateController)
    .service('OrderService', OrderService)
    .config(['$stateProvider','$urlRouterProvider',($stateProvider, $urlRouterProvider) => {
        $stateProvider.state({
            name: 'orders'
        })
        $stateProvider.state({
            name: 'orderslist',
            url: '/orders',
            templateUrl: 'orders/list.html',
            controller: 'OrderController as orders'
        })
        $stateProvider.state({
            name: 'ordersview',
            url:'/orders/:id',
            templateUrl: 'orders/vieworder.html',
            controller: 'OrderViewController as order'
        })
        $stateProvider.state({
            name: 'orderedit',
            url:'/orders/edit/:id',
            templateUrl:'orders/orderedit.html',
            controller:'OrderEditController as order'
        })
        $stateProvider.state({
            name: 'ordercreate',
            url:'/orders/create',
            templateUrl:'orders/ordercreate.html',
            controller:'OrderCreateController as order'
        })
        
        $urlRouterProvider.otherwise('/orders')
    }])
    domready(() => {
        angular.bootstrap(document, ['app'])
    })
