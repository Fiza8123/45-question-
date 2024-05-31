function make_car(manufacturer, modal) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, modal: modal };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("troyota", "corolla", ["color ", "red"], ["year", 2020]));
console.log(make_car("ford", "fiesta", ["color ", "blue"], ["sunroof", true]));
