var t0 = performance.now();
var tempFn = function(){
    console.log('temp function');
};
tempFn();
var t1 = performance.now();
console.log(t1 - t0);
