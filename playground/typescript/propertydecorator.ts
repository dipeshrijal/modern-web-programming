function override(label :string) {
    return function (target: any, key: string) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    }
}

class Test{
    @override('test')
    name: string
}

