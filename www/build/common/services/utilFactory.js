!function(e){var t=e.module("services.utilService",[]);t.constant("BASE_API_URL","http://api.artmanager.com.br:3000/"),t.service("ConstantsService",["BASE_API_URL",function(e){var t=e+"autenticacao",r=e+"usuarios",n=e+"cliente";this.LOGIN_URL=t,this.CREATE_USER_URL=r,this.CREATE_CLIENT_URL=n,this.GET_CLIENT_URL=n}]),t.factory("LocalStorageService",[function(){return{get:function(e){return localStorage[e]||null},set:function(e,t){localStorage[e]=t},clear:function(e){localStorage[e]=null}}}]),t.factory("UtilService",[function(){function e(e){var t=document.querySelector("[href='"+e+"']");t.parentNode.removeChild(t)}return{removeCSS:e}}])}(angular);