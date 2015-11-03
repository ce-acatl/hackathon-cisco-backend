'use strict';

angular.module('backendApp')

.filter('reverse', function() {
    return function(items) {
      return angular.isArray(items)? items.slice().reverse() : [];
    };
})

.filter('mallById',[
	function(){
		return function(id,malls){
			var mall;
			for(var m in malls){
				if(malls[m].$id === id){
					mall = malls[m];
					break;
				}
			}
			return mall;
		}
	}
])