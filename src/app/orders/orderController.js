import { OrderService } from './orderService'

export class OrderController {
    static $inject = ['OrderService']
    orders = []

    constructor(OrderService) {
        this.OrderService = OrderService
        this.OrderService.list()
            .then(orders => {
                this.orders = orders
                //console.log(orders)
            })
    }
    

}
