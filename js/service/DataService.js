app.service('DataService', function() {
  var oProduct = {};
    
  var addProduct = function(oJson) {
      oProduct = oJson
  };

  var getProducts = function(){
      return oProduct;
  };

  return {
    addProduct: addProduct,
    getProducts: getProducts
  };

});