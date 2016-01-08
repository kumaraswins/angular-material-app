angular.module('SampleAPP')
    .service('DataService', [ DataService]);

function DataService() {
    var oProduct = {};

    var addProduct = function (oJson) {
        oProduct = oJson
    };

    var getProducts = function () {
        return oProduct;
    };

    return {
        addProduct: addProduct,
        getProducts: getProducts
    };
}