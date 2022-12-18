// Array
const Array = ["Muaz", " Talha", " Shahab", " Usama", " Hamza", " Hassan", " Waleed", " Amjad", " Awais", " Adnan"];
document.getElementById("list").innerHTML = Array.toString();

// First Input Field & Buttons Disabled 
document.getElementById("input").disabled = true;
document.getElementById("input2").disabled = true;
document.getElementById("push").disabled = true;
document.getElementById("shift").disabled = true;
document.getElementById("dlte").disabled = true;
document.getElementById("Indexof").disabled = true;
document.getElementById("Reverse").disabled = true;
document.getElementById("Pop").disabled = true;
document.getElementById("Unshift").disabled = true;
document.getElementById("Sort").disabled = true;
document.getElementById("valueat").disabled = true;
document.getElementById("Update").disabled = true;


// Get Values OF Both Input Fields
var Item = document.getElementById("input");
var IndeX = document.getElementById("input2")

// Radio Button 1
function R1() {
    Item.value = ""
    IndeX.value = ""
    document.getElementById("push").disabled = false;
    document.getElementById("input").disabled = false;
    document.getElementById("input2").disabled = true;
    document.getElementById("shift").disabled = true;
    document.getElementById("dlte").disabled = true;
    document.getElementById("Indexof").disabled = true;
    document.getElementById("Reverse").disabled = true;
    document.getElementById("Pop").disabled = true;
}
// Push Function
function PushItem() {
    Array.push(Item.value);
    console.log(Item.value);
    Item.value = ""
    document.getElementById("list").innerHTML = Array.toString();

}
//////////////////////////////////////////////////////

// Radio Button 2
function R2() {
    Item.value = ""
    IndeX.value = ""
    document.getElementById("input").disabled = true;
    document.getElementById("input2").disabled = true;
    document.getElementById("shift").disabled = false;
    document.getElementById("push").disabled = true;
    document.getElementById("dlte").disabled = true;
    document.getElementById("Indexof").disabled = true;
    document.getElementById("Reverse").disabled = true;
    document.getElementById("Pop").disabled = true;
    document.getElementById("Unshift").disabled = true;
}

// Shift Function
function ShiftItem() {
    Array.shift();
    // console.log(Item.value);
    Item.value = ""
    document.getElementById("list").innerHTML = Array.toString();

}
//////////////////////////////////////////////////////

// Radio Button 3
function R3() {
    Item.value = ""
    IndeX.value = ""
    document.getElementById("input").disabled = true;
    document.getElementById("input2").disabled = false;
    document.getElementById("shift").disabled = true;
    document.getElementById("push").disabled = true;
    document.getElementById("dlte").disabled = false;
    document.getElementById("Indexof").disabled = true;
    document.getElementById("Reverse").disabled = true;
    document.getElementById("Pop").disabled = true;
    document.getElementById("Unshift").disabled = true;
}
// Delete Function
function DlteItem() {
    delete Array[IndeX.value]
    console.log(IndeX.value);
    IndeX.value = ""
    document.getElementById("list").innerHTML = Array.toString();

}
//////////////////////////////////////////////////////////////
// Radio Button 4
function R4() {
    Item.value = ""
    IndeX.value = ""
    document.getElementById("input").disabled = false;
    document.getElementById("input2").disabled = true;
    document.getElementById("Indexof").disabled = false;
    document.getElementById("shift").disabled = true;
    document.getElementById("push").disabled = true;
    document.getElementById("dlte").disabled = true;
    document.getElementById("Reverse").disabled = true;
    document.getElementById("Pop").disabled = true;
    document.getElementById("Unshift").disabled = true;
}
// IndexOf Function
function Indexxoff() {
    const Array = ["Muaz", "Talha", "Shahab", "Usama", "Hamza", "Hassan", "Waleed", "Amjad", "Awais", "Adnan"];
    let index = Array.indexOf(Item.value);
    IndeX.value = index;

}
//////////////////////////////////////////////////////////////

// Radio Button 5
function R5() {
    Item.value = ""
    IndeX.value = ""
    document.getElementById("input").disabled = true;
    document.getElementById("input2").disabled = true;
    document.getElementById("Reverse").disabled = false;
    document.getElementById("shift").disabled = true;
    document.getElementById("push").disabled = true;
    document.getElementById("dlte").disabled = true;
    document.getElementById("Indexof").disabled = true;
    document.getElementById("Pop").disabled = true;
    document.getElementById("Unshift").disabled = true;


}
// Reverse Function
function Reversee() {
    Array.reverse()
    document.getElementById("list").innerHTML = Array.toString();
}
//////////////////////////////////////////////////////////////

// Radio Button 6
function R6() {
    Item.value = ""
    IndeX.value = ""
    document.getElementById("input").disabled = true;
    document.getElementById("input2").disabled = true;
    document.getElementById("Pop").disabled = false;
    document.getElementById("shift").disabled = true;
    document.getElementById("push").disabled = true;
    document.getElementById("dlte").disabled = true;
    document.getElementById("Indexof").disabled = true;
    document.getElementById("Reverse").disabled = true;
    document.getElementById("Unshift").disabled = true;
    document.getElementById("Update").disabled = true;
    document.getElementById("Sort").disabled = true;
    document.getElementById("valueat").disabled = true;





}
// Pop Function
function PopItem() {
    Array.pop();
    document.getElementById("list").innerHTML = Array.toString();

}
//////////////////////////////////////////////////////////////

// Radio Button 7
function R7() {
    Item.value = ""
    IndeX.value = ""
    document.getElementById("input").disabled = false;
    document.getElementById("input2").disabled = true;
    document.getElementById("Unshift").disabled = false;
    document.getElementById("shift").disabled = true;
    document.getElementById("push").disabled = true;
    document.getElementById("dlte").disabled = true;
    document.getElementById("Indexof").disabled = true;
    document.getElementById("Reverse").disabled = true;
    document.getElementById("Pop").disabled = true;
    document.getElementById("Update").disabled = true;
    document.getElementById("Sort").disabled = true;
    document.getElementById("valueat").disabled = true;




}
// Unshift Function
function Unshift() {
    Array.unshift(Item.value);
    console.log(Item.value);
    Item.value = ""
    document.getElementById("list").innerHTML = Array.toString();

}
//////////////////////////////////////////////////////////////

// Radio Button 8
function R8() {
    Item.value = ""
    IndeX.value = ""
    document.getElementById("input").disabled = true;
    document.getElementById("input2").disabled = true;
    document.getElementById("Sort").disabled = false;
    document.getElementById("Unshift").disabled = true;
    document.getElementById("shift").disabled = true;
    document.getElementById("push").disabled = true;
    document.getElementById("dlte").disabled = true;
    document.getElementById("Indexof").disabled = true;
    document.getElementById("Reverse").disabled = true;
    document.getElementById("Pop").disabled = true;
    document.getElementById("valueat").disabled = true;
    document.getElementById("Update").disabled = true;


}
// Sort Function
function Sortt() {
    Array.sort();
    document.getElementById("list").innerHTML = Array.toString();

}
//////////////////////////////////////////////////////////////

// Radio Button 9
function R9() {
    Item.value = ""
    IndeX.value = ""
    document.getElementById("input").disabled = true;
    document.getElementById("input2").disabled = false;
    document.getElementById("valueat").disabled = false;
    document.getElementById("Unshift").disabled = true;
    document.getElementById("shift").disabled = true;
    document.getElementById("push").disabled = true;
    document.getElementById("dlte").disabled = true;
    document.getElementById("Indexof").disabled = true;
    document.getElementById("Reverse").disabled = true;
    document.getElementById("Pop").disabled = true;
    document.getElementById("Sort").disabled = true;
    document.getElementById("Update").disabled = true;



}
// ValueAt Function
function Valuee() {
    var valueAtIndex = Array[IndeX.value];
    Item.value = valueAtIndex;
    IndeX.value = ""
    document.getElementById("list").innerHTML = Array.toString();

}
//////////////////////////////////////////////////////////////

// Radio Button 10
function R10() {
    Item.value = ""
    IndeX.value = ""
    document.getElementById("input").disabled = true;
    document.getElementById("input2").disabled = false;
    document.getElementById("Update").disabled = false;
    document.getElementById("Unshift").disabled = true;
    document.getElementById("valueat").disabled = true;
    document.getElementById("shift").disabled = true;
    document.getElementById("push").disabled = true;
    document.getElementById("dlte").disabled = true;
    document.getElementById("Indexof").disabled = true;
    document.getElementById("Reverse").disabled = true;
    document.getElementById("Pop").disabled = true;
    document.getElementById("Sort").disabled = true;

}
// Update Function
let ress;
function Updatee() {

    let up = IndeX.value;
    Item.value = Array[up]
    console.log(" Updat=> ", up)
    ress = up;
    document.getElementById("input").disabled = false;


}
// Confirm Update
const conf = document.getElementById('Confirm');

function Confirm() {

    console.log(" COnfirm=> ", ress)
    Array[ress] = Item.value
    IndeX.value = ""
    Item.value = ""
    document.getElementById("list").innerHTML = Array.toString();


}

