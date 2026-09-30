"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=q(function(g,n){
var c=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),v=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),l=require('@stdlib/blas-ext-base-cwax/dist').ndarray;function o(a){var r,e,i;return e=a[0],i=a[1],r=d(a[2]),l(c(e,0),r,v(e),t(e,0),u(e),v(i),t(i,0),u(i)),i}n.exports=o
});var x=s();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
