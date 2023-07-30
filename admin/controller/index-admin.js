var api = new Service();

function getEle(id) {
    return document.getElementById(id);
}
function getListProduct() {
    var promise = api.getListProductApi();
    promise
        .then(function (result) {
            renderUI(result.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
getListProduct();

// lay danh sach san pham tu data render ra trang web
function renderUI(data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var products = data[i];
        content += `
        <tr>
            <td>${i + 1}</td>
            <td>${products.name}</td>
            <td>${products.price}</td>
            <td>${products.screen}</td>
            <td>${products.backCamera}</td>
            <td>${products.frontCamera}</td>
            <td>${products.img}</td>
            <td>${products.type}</td>
            <td>${products.desc}</td>

            <td><buton class="btn btn-success" data-toggle="modal"
            data-target="#exampleModal" onclick="editProduct(${products.id})"> Sửa</buton></td>
            <td><buton class="btn btn-info" onclick="deleteProduct(${products.id})">Xóa</buton></td>
            <td></td>
            
        </tr>
      `;
    }
    getEle("tbodyFood").innerHTML = content;
}
//sua sp
function editProduct(id) {
    // thay doi noi dung title
    getEle("exampleModalLabel").innerHTML = "Sua San Pham";

    // tao the button cap nhat

    var buttonUpdate = `<button type="button" class="btn btn-warning" onclick="updateProduct(${id})"> Cập Nhật</button>`
    document.getElementsByClassName("modal-footer")[0].innerHTML = buttonUpdate;

    api
        .getProductById(id)
        .then(function (result) {
            //show data ra in put
            getEle("productID").value = result.data.id;
            getEle("productName").value = result.data.name;
            getEle("productPrice").value = result.data.price;
            getEle("productScreen").value = result.data.screen;
            getEle("productBackCamera").value = result.data.backCamera;
            getEle("productFontCamera").value = result.data.frontCamera;
            getEle("productImg").value = result.data.img;
            getEle("productType").value = result.data.type;
            getEle("productDesc").value = result.data.desc;
        })
        .catch(function (error) {
            console.log(error);
        });
}
//cap nhat
function updateProduct(id) {
    var id = getEle("productID").value;
    var name = getEle("productName").value;
    var price = getEle("productPrice").value;
    var screen = getEle("productScreen").value;
    var backCamera = getEle("productBackCamera").value;
    var frontCamera = getEle("productFontCamera").value;
    var img = getEle("productImg").value;
    var type = getEle("productType").value;
    var desc = getEle("productDesc").value;

    // tao doi tuowng productt
    var product = new Product(id, name, price, screen, backCamera, frontCamera, img, type, desc);

    api
    .updateProduct(product)
    .then(function(){
        //close modal
        document.getElementsByClassName("close")[0].click();

        //re-render ui
        getListProduct();
    })
    .catch();
}
// xoa
function deleteProduct(id) {
    var promise = api.deleteProductApi(id);

    promise
        .then(function (result) {
            alert(`Delete ${result.data.name}success...`);
            getListProduct();
        })
        .catch(function (error) {
            console.log(error);
        });
}

getEle("btnAdd").onclick = function () {
    //dom toi cac the inpu lay value
    var id = getEle("productID").value;
    var name = getEle("productName").value;
    var price = getEle("productPrice").value;
    var screen = getEle("productScreen").value;
    var backCamera = getEle("productBackCamera").value;
    var frontCamera = getEle("productFontCamera").value;
    var img = getEle("productImg").value;
    var type = getEle("productType").value;
    var desc = getEle("productDesc").value;

    // tao doi tuong product tu lop product
    var product = new Product("", name, price, screen, backCamera, frontCamera, img, type, desc);

    var promise = api.addProductApi(product);

    promise
        .then(function () {
            // re-render ui
            getListProduct();
            // close modal
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function (error) {
            console.log(error);
        });
}
