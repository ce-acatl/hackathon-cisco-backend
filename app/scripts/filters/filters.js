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

.filter('storeById',[
	function(){
		return function(id,stores){
			var store;
			for(var s in stores){
				if(stores[s].$id === id){
					store = stores[s];
					break;
				}
			}
			return store;
		}
	}
])

.filter("authTempUrl", [
	function(){
		return function(url,auth){
			return url.replace("https://","https://"+auth+"@");
		}
	}
])

.filter("storesOfMall", [
	function(){
		return function(mallId,stores){
			var storesOfMall = [];
			for(var s in stores){
				if(stores[s].mall == mallId){
					storesOfMall.push(stores[s]);
				}
			}
			return storesOfMall;
		}
	}
])

.filter("justTags", [
	function(){
		return function(tags){
			var array = [];
			for(var t in tags){
				array.push(tags[t].text);
			}
			return array;
		}
	}
])

.filter("thumb", [
	function(){
		return function (imgSrc,w,h,cz){
			var url = "http://tu-desarrollo.com/";
            if(h == 'auto') {
                return url+'api/thumb.php?src='+imgSrc+'&w='+w+'&zc='+cz;
            } else if (w == 'auto') {
                return url+'api/thumb.php?src='+imgSrc+'&h='+h+'&zc='+cz;
            } else {
                return url+'api/thumb.php?src='+imgSrc+'&w='+w+'&h='+h+'&zc='+cz;
            }
            
        };
	}
])