menu_list_array = ["Veg Margherita Pizza",
                   "Paneer Tikka pizza",
                   "mushroom pizza",
                   "baby corn pizza",
                   "Tawa pizza",
                   "cheese pizza",
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist>'"
menu_list_array.sort();
for(var i=0;1<menu_list_array;1++){
    htmldata=htmldata+'<li>' +menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById ("display_menu").innerHTML = htmldata;
console.log(menu_list_array);
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i <menu_list_array>lenght;i++){

    htmldata=htmldata+'<div class="card">'
    +'<img src="Image/pizzaImg.png">'
    +menu_list_array[i] + '</div>'


    htmldata=htmldata+ "</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
    console.log(menu_list_array);
}


function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}