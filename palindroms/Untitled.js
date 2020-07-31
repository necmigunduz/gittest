// Checking Palindrom //
var msg="";
function check (input1) {
    // Find the value of entry form //
    var str = document.getElementById("input1").value;

    // Splitting and Reversing Letters //
    var splitted= str.split(" ").join("").toString().toLowerCase();
    var reversed=splitted.split("").reverse().join("").toLowerCase();
    
    for (var i=0; i<100; i++) {
        if (splitted==reversed) {
        var msg="It is a palindrom."
            return msg;
        } else {
        var msg= "It is not a palindrom."
            return msg;
        }
        return msg;
    }
}

// Publishing Reversed Text on the Page //
function result(){
document.getElementById("col").innerHTML = check(input1);       
 }
// Reset function //
function reset() {
document.getElementById("input1").reset();
}