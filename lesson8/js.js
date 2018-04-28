if (!("a" in window)) {
    var a = 1;
}
alert(a);

//из var a создается window.a,  а так как стоит отрицание, то этого не происходит
//выведет undefinded


if ("a" in window) {
  var a = 1;
}
alert( a );

// выведет 1


function a(x) {
    return x * 2;
}
var a;
alert(a);

// выведет всю функцию


function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

//10



function a() {
    alert(this);
}
a.call(null);



//object window