(function(){
    'use strinct';
    angular
        .module('baas-front-end')
        .config(function($stateProvider,$urlProvider){
            var appState={
                abstract:true,
                name:'app',
                url:'/app',
                templateUrl:'app.html',
                controller:'AppCtrl',
                controllerAs:'vm'
            }
            $stateProvider.state(appState);
        })
})();