import { OrderService } from './orderService'

export class OrderCreateController {
    static $inject = ['OrderService','$state', '$stateParams']


    constructor(OrderService, $state, $stateParams) {
        this.$state = $state
        this.OrderService = OrderService
    }
    createOrder(){
        this.OrderService.createNew(this.order)
        .then(() => this.$state.go('orderslist'))
        }
    }
