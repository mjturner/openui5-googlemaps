sap.ui.define(["jquery.sap.global","google.maps"],function(t,n){"use strict";var a={};return a.objToLatLng=function(t){return new n.LatLng(t.lat,t.lng)},a.latLngToObj=function(t){return{lat:t.lat(),lng:t.lng()}},a.floatEqual=function(t,n){return Math.abs(t-n)<1e-6},a.latLngEqual=function(t,n){return this.floatEqual(t.lat,n.lat)&&this.floatEqual(t.lng,n.lng)},a},!0);