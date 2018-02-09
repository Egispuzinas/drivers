import { OrderService } from './orderService'

export class OrderViewController {
    static $inject = ['OrderService', '$state', '$stateParams']

    constructor(OrderService, $state, $stateParams) {
        this.$state = $state
        this.OrderService = OrderService
        this.OrderService.getById($stateParams.id)
        .then(order => {
            this.order = order

        })
    }
    deleteOrder(order){
        if (confirm('Are you sure?')) {
            this.OrderService.delete(order.id)
                .then(() => this.$state.go('orderslist'))
            }
    }
}
