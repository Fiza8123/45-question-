function make_car(manufacturer: string, modal: string, ... options: [string, any][]): Object {
    let car = { manufacturer, modal };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("troyota", "corolla" , ["color " , "red"],["year", 2020]));

console.log(make_car("ford", "fiesta" , ["color " , "blue"],["sunroof", true]));