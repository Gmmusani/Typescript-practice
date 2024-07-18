var age = 20;
if (age >= 19) {
    if (age >= 40) {
        console.log("Senior");
    }
    else {
        console.log("Middle");
    }
    ;
}
else {
    console.log("child");
}
;
// Nested Loop
for (var i = 0; i < 5; i++) {
    var str = "";
    for (var j = 0; j < 5; j++) {
        str = str + j;
    }
    ;
    console.log(i, str);
}
