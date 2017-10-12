function override(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: function () { return label; }
        });
    };
}
// class Test{
//     @override('helo00')
//     name: string;
// }
// let t = new Test();
// console.log(t.name);
