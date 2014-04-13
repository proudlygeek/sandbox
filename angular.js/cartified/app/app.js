angular.module('services.cart', [])
  .service('Reviewer', ['$q', function($q) {
    var review = function(items) {
      var deferred = $q.defer();
      deferred.resolve(items);

      return deferred.promise;
    };

    return {
      review: review
    };
  }])
  .service('Cart', ['$rootScope', 'Reviewer', function($rootScope, Reviewer) {
    var namespace = 'cart';
    var items = JSON.parse(localStorage.getItem(namespace)) || [];

    var getCart = function() {
      return items;
    };

    var addItem = function(item) {
      items.push(item);
    };

    var addItems = function(newItems) {
      items.concat(newItems);
    };

    var save = function() {
      // Use the reviewer service, then persist
      Reviewer.review(items)
        .then(function(reviewedItems) {
          persist(items);
        });
    };

    var remove = function() {};

    var clear = function() {
      cart = [];
    };

    var persist = function(items) {
      localStorage.setItem(namespace, JSON.stringify(items));
      refresh();
    };

    var changeQuantity = function(item, qnt) {
      item.qnt += qnt;
      save();
    };

    var refresh = function() {
      $rootScope.$emit(namespace+ ':refresh', items);
    };

    return {
      getCart: getCart,
      changeQuantity: changeQuantity,
      save: save    
    };
  }
]).controller('MyCtrl', 
  function($rootScope, $scope, Cart) {

    window.addEventListener('storage',  handleStorage, false);

    function handleStorage(e) {
      $scope.items = localStorage.getItem('cart');
    }

    $scope.items = Cart.getCart();

    $scope.addItem = function() {
      Cart.changeQuantity(this.item, 1);
    }

    $scope.removeItem = function() {
      Cart.changeQuantity(this.item, -1);
    }
});