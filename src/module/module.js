function fnc(){
    return "module.js, fnc() working"
};

function fnc2(){
    return "module.js, fnc2() working"
}

module.exports.fnc = fnc;
module.exports.fnc2 = fnc2;