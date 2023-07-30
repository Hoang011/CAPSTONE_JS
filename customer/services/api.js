function Service() {
    //chua dssp
  
    this.getListProductApi = function () {
        var promise = axios({
            url: "https://64a92b9a8b9afaf4844a56d7.mockapi.io/api/products",
            method: "GET",
        });
        return promise;
    }

}