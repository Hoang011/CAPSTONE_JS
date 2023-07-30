
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
        <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="box">
          <a href="">
            <div class="img-box">
              <img src="../../asset/img/${products.img}.png" alt="">
            </div>
            <div class="detail-box">
              <h6>
                ${products.name}
              </h6>
              <h6>
                Price
                <span>
                  ${products.price}
                </span>
              </h6>
            </div>
            <div class="new">
              <span>
                New
              </span>
            </div>
          </a>
        </div>
      </div>
        `;
  }
  getEle("productList").innerHTML = content;
}

getEle("selLoai").onchange =function(data){
  var listProductBrandArr=[];

  // for (var i=0; i< data.length;++){
  //   if(data){

  //   }
  // }
}
