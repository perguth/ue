angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.hdMApp', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/hdMApp.html',
        controller: 'hdMAppCtrl'
      }
    }
  })

  .state('chat', {
    url: '/page3',
    templateUrl: 'templates/chat.html',
    controller: 'chatCtrl'
  })

  .state('tabsController.gruppen', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/gruppen.html',
        controller: 'gruppenCtrl'
      }
    }
  })

  .state('tabsController.studium', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/studium.html',
        controller: 'studiumCtrl'
      }
    }
  })

  .state('tabsController.account', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/account.html',
        controller: 'accountCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.chatWirLiebenTennis', {
    url: '/page7',
    views: {
      'tab4': {
        templateUrl: 'templates/chatWirLiebenTennis.html',
        controller: 'chatWirLiebenTennisCtrl'
      }
    }
  })

  .state('tabsController.chatUsabilityEngineering', {
    url: '/page9',
    views: {
      'tab4': {
        templateUrl: 'templates/chatUsabilityEngineering.html',
        controller: 'chatUsabilityEngineeringCtrl'
      }
    }
  })

  .state('tabsController.accountAnlegen', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/accountAnlegen.html',
        controller: 'accountAnlegenCtrl'
      }
    }
  })

  .state('hdM', {
    url: '/page11',
    templateUrl: 'templates/hdM.html',
    controller: 'hdMCtrl'
  })

$urlRouterProvider.otherwise('/page11')

  

});