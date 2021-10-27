(function (modules){
    let internalCache = {};

    function __magic_func(moduleId){
        if(internalCache[moduleId]) return internalCache[moduleId];
        const exports = {};
        modules[moduleId](__magic_func,exports);
        internalCache[moduleId] = exports;
        return exports;
    }
    __magic_func(0);
})({
    0:(function(__magic_func){
        let exp = __magic_func(1);
        console.log(exp.add(10, 5));
    }),
    1:(function(__magic_func,exports){
        exports.add = (a, b) => a + b;
    })
})