var app = angular.module("App",[]);

app.controller("JSON_OKUMA",function($scope,$http){

   var url1 = "https://jsonplaceholder.typicode.com/users" /* 1.JSON DOSYASI */
   var url2 = "https://www.w3schools.com/angular/customers.php" /* 2.JSON DOSYASI */

   /* 1.JSON DOSYASI OKUMA VE myData1 DEĞİŞKENİNE ATMA */
   $http.get(url1)
    .then(function(gelen_veri) {
        $scope.alinanVeri1 = gelen_veri.data;
    });

    /* 2.JSON DOSYASI OKUMA VE myData2 DEĞİŞKENİNE ATMA */
    $http.get(url2)
    .then(function(gelen_veri) {
        $scope.alinanVeri2 = gelen_veri.data.records;
    });

});
