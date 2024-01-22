const btns_num = [document.getElementById("num_9"), 
    document.getElementById("num_8"),
    document.getElementById("num_7"),
    document.getElementById("num_6"),
    document.getElementById("num_5"),
    document.getElementById("num_4"),
    document.getElementById("num_3"),
    document.getElementById("num_2"),
    document.getElementById("num_1"),
    document.getElementById("num_0"),
    document.getElementById("num_00"),
    document.getElementById("num_="),
    document.getElementById("/"),
    document.getElementById("*"),
    document.getElementById("-"),
    document.getElementById("+"),
    document.getElementById("ac")
]
var text = document.getElementById("res")

var a = '';

btns_num[0].onclick = function() {
    a += 9
    document.getElementById("res").innerHTML = a;
}
btns_num[1].onclick = function() {
    a += 8
    document.getElementById("res").innerHTML = a;
}
btns_num[2].onclick = function() {
    a += 7
    document.getElementById("res").innerHTML = a;
}
btns_num[3].onclick = function() {
    a += 6
    document.getElementById("res").innerHTML = a;
}
btns_num[4].onclick = function() {
    a += 5
    document.getElementById("res").innerHTML = a;
}
btns_num[5].onclick = function() {
    a += 4
    document.getElementById("res").innerHTML = a;
}
btns_num[6].onclick = function() {
    a += 3
    document.getElementById("res").innerHTML = a;
}
btns_num[7].onclick = function() {
    a += 2
    document.getElementById("res").innerHTML = a;
}
btns_num[8].onclick = function() {
    a += 1
    document.getElementById("res").innerHTML = a;
}
btns_num[9].onclick = function() {
    a += 0
    document.getElementById("res").innerHTML = a;
}
btns_num[10].onclick = function() {
    a += '00'
    document.getElementById("res").innerHTML = a;
}
btns_num[12].onclick = function() {
    a += ' /'
    a += ' '
    document.getElementById("res").innerHTML = a;
}
btns_num[13].onclick = function() {
    a += ' *'
    a += ' '
    document.getElementById("res").innerHTML = a;
}
btns_num[14].onclick = function() {
    a += ' -'
    a += ' '
    document.getElementById("res").innerHTML = a;
}
btns_num[15].onclick = function() {
    a += ' +'
    a += ' '
    document.getElementById("res").innerHTML = a;
}
btns_num[11].onclick = function() {
    var b = eval(a)
    document.getElementById("res").innerHTML = b;
}
btns_num[16].onclick = function() {
    a = ''
    document.getElementById("res").innerHTML = 'calculator';
}