var x = document.getElementById("results");
var data = {
    "ans": "",

};
reset = () => {
    document.getElementById("list").innerHTML = '';
}
zero = () => {

    x.value += "0";

};
one = () => {

    x.value += "1";

};
two = () => {

    x.value += "2";

};
three = () => {

    x.value += "3";

};
four = () => {

    x.value += "4";

};
five = () => {

    x.value += "5";

};
six = () => {

    x.value += "6";

};
seven = () => {

    x.value += "7";

};
eight = () => {

    x.value += "8";

};
nine = () => {

    x.value += "9";

};
var n = 0;
startlog = () => {
    if (n == 0) {
        document.getElementById("kiss").style.transform = "scaleX(1)";
        document.getElementById("wrap").style.width = "405px";
        document.getElementById("wrap").style.transform = "translate : -50px 0";
        document.getElementById("his").style.display = "block";
        document.getElementById("history").style.border = "2px solid red";

        n += 1;
    } else {
        n -= 1;
        document.getElementById("kiss").style.transform = "scaleX(0)";
        document.getElementById("wrap").style.width = "397px";
        document.getElementById("wrap").style.transform = "translate : 50px 0";


        document.getElementById("history").style.border = "1px solid black";
        setTimeout(() => {
            document.getElementById("his").style.display = "none";
        }, 3000);
    }


};

clean = () => {
    x.value = "";

};
per = () => {
    var pr = (x.value / 100) + "*";
    x.value = pr;
};
backs = () => {
    var bck = x.value.slice(0, -1);
    x.value = bck;
};
sqrt = () => {
    x.value += "^(1/2)";


};
powers = () => {
    x.value += "^";
};
div = () => {
    x.value += " / ";
};
mul = () => {
    x.value += " * ";
};
pluss = () => {
    x.value += " + ";
};
min = () => {
    x.value += " - ";
};

var m = 0;
var c = document.getElementsByClassName("but");
dark = () => {
    if (m == 0) {
        m += 1;
        document.body.style.backgroundColor = "black";
        document.getElementById("wrap").style.backgroundColor = "gray";
        document.getElementById("results").style.backgroundColor = "black";
        document.getElementById("his").style.boxShadow = "5px 10px 15px rgb(145, 138, 138)";
        document.getElementById("wrap").style.boxShadow = "5px 10px 15px rgb(145, 138, 138)";
        document.getElementById("btn").style.backgroundColor = "grey";
        document.getElementById("results").style.color = "lightGreen";
        document.getElementById("dark").innerText = "Light Mode";

    } else {
        document.body.style.backgroundColor = "white";
        document.getElementById("wrap").style.backgroundColor = "turquoise";
        document.getElementById("his").style.boxShadow = "5px 10px 15px rgb(82, 76, 76);";
        document.getElementById("results").style.backgroundColor = "white";
        document.getElementById("wrap").style.boxShadow = "5px 10px 15px rgb(82, 76, 76);";
        document.getElementById("btn").style.backgroundColor = "white";
        document.getElementById("results").style.color = "black";
        document.getElementById("dark").innerText = "Dark Mode";

        m -= 1;

    };
    var j = 0;
    var i = 0;
    while (m == 1) {
        while (j <= c.length) {
            var i = 0;
            c[j].style.backgroundColor = "black";
            c[j].style.color = "lightGreen";
            j++;
        }
    };
    while (m == 0) {
        while (i <= c.length) {
            var j = 0;
            c[i].style.backgroundColor = "turquoise";
            c[i].style.color = "black";
            i++;
        }
    }

};
dec = () => {
    x.value += ".";
};
equals = () => {
    data.ans = x.value.replace("^", "**");
    x.value = eval(data.ans);
    if (document.getElementById("his").style.display == "block") {
        document.getElementById("list").innerHTML += "<li>" + data.ans.replace("**", "^") + " = " + eval(data.ans) + "</li>";
    } else {

    };
    if (typeof(eval(data.ans)) == "number") {
        document.getElementById("warn").style.display = "none";
    };
    if (typeof(eval(data.ans)) != "number") {
        document.getElementById("warn").style.display = "block";
    };
};
var k = 0;
paran = () => {
    k += 1;
    if (k % 2 == 0) {
        x.value += ")";
    } else {
        x.value += "(";
    }
};
setTimeout(
    function jh() {
        document.getElementById("naam").style.display = "none";
    }, 2000);