import { OrderService } from './orderService'

export class OrderEditController {
    static $inject = ['OrderService','$state', '$stateParams']


    constructor(OrderService, $state, $stateParams) {
        this.$state = $state
        this.OrderService = OrderService
        this.OrderService.getById($stateParams.id)
        .then(order => {
            this.order = order
        })
    }
    saveOrder(){
        this.OrderService.saveExisting(this.order.id, this.order)
        .then(() => this.$state.go('ordersview', {id: this.order.id}))
    }
    }
