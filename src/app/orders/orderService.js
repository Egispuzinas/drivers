const apiEndPoint = 'http://localhost:8888/'

export class OrderService {
    static $inject = ['$http']
    constructor($http) {
        this.$http = $http
    }
    getById(id){
        return this.$http({
            method: 'GET',
            url:`${apiEndPoint}orders/` + id
        }).then(response => response.data)
    }

    list(){
        return this.$http({
            method: 'GET',
            url:`${apiEndPoint}orders`
        }).then(response => response.data)
    }
    saveExisting(id, order){
        return this.$http({
            method: 'POST',
            url: `${apiEndPoint}orders/edit/` +id,
            data: order
        })
    }
    createNew(order){
        return this.$http({
            method: 'POST',
            url: `${apiEndPoint}orders`,
            data: order
        })
    }
    delete(id){
        console.log(id);
        return this.$http({
            method: 'DELETE',
            url: `${apiEndPoint}orders/` + id
        })
    }
}
