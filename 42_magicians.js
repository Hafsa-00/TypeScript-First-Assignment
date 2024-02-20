var magicians = ['hamdan', 'anus', 'naila', 'amna', 'mano'];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log("The great ".concat(magicians[i]));
    }
}
show_magicians(magicians);
make_great(magicians);
