function Service() {
    //chua dssp

    this.getListProductApi = function () {
        var promise = axios({
            url: "https://64a92b9a8b9afaf4844a56d7.mockapi.io/api/products",
            method: "GET",
        });
        return promise;
    }

    this.deleteProductApi = function (id) {
        var promise = axios({
            url: `https://64a92b9a8b9afaf4844a56d7.mockapi.io/api/products/${id}`,
            method: "DELETE",
        });
        return promise;
    }
    
    this.getProductById = function (id) {
        var promise = axios({
            url: `https://64a92b9a8b9afaf4844a56d7.mockapi.io/api/products/${id}`,
            method: "GET",
        });
        return promise;
    }
    this.addProductApi= function(product){
        var promise=axios({
            url: "https://64a92b9a8b9afaf4844a56d7.mockapi.io/api/products",
            method: "POST",
            data: product,
        });
        return promise;
    }
    this.updateProduct= function(product){
        var promise= axios({
            url: `https://64a92b9a8b9afaf4844a56d7.mockapi.io/api/products/${product.id}`,
            method: "PUT",
            data: product,
        });
        return promise;
    }
}