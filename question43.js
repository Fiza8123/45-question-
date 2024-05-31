var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(magicians) {
    return magicians.map(function (name) { return "Great ".concat(name); });
}
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
var magicians = ['Merlin', 'Gandalf', 'Dumbledore'];
var greatMagicians = make_great(__spreadArray([], magicians, true));
show_magicians(magicians);
show_magicians(greatMagicians);
