// змінні для цін, які легко поміняти тут

var TableTotalPrice = 0;

var Holes = 50;

var Stickers = 30;

var Bracing = 30;

var StandartLaminaciya = 50;

var StandartSvitlovidbuvayuchuy = 350;

var StandartKompozyt = 160;

var BigLamination = 100;

var bigSvitlovidbuvayuchuy = 780;

var bigKompozyt = 360;

var StandartSizesPrice = [];

StandartSizesPrice["type-01"] = 240;

StandartSizesPrice["type-02"] = 240;

StandartSizesPrice["type-03"] = 300;

StandartSizesPrice["type-04"] = 240;

StandartSizesPrice["type-05"] = 240;

StandartSizesPrice["type-06"] = 240;

StandartSizesPrice["type-07"] = 400;

StandartSizesPrice["type-08"] = 400;

StandartSizesPrice["type-09"] = 400;

var BigSizesPrice = [];

BigSizesPrice["type-01"] = 570;

BigSizesPrice["type-02"] = 750;

BigSizesPrice["type-03"] = 700;

BigSizesPrice["type-04"] = 460;

BigSizesPrice["type-05"] = 460;

BigSizesPrice["type-06"] = 520;

BigSizesPrice["type-07"] = 970;

BigSizesPrice["type-08"] = 970;

BigSizesPrice["type-09"] = 970;

var ImageArray = [];

ImageArray["type-01"] ="img/tableBorder-01.png";

ImageArray["type-02"] ="img/tableBorder-02.png";

ImageArray["type-03"] ="img/tableBorder-03.png";

ImageArray["type-04"] ="img/tableBorder-04.png";

ImageArray["type-05"] ="img/tableBorder-05.png";

ImageArray["type-06"] ="img/tableBorder-06.png";

ImageArray["type-07"] ="img/tableBorder-07.png";

ImageArray["type-08"] ="img/tableBorder-08.png";

ImageArray["type-09"] ="img/tableBorder-09.png";

var FormArray = [];

FormArray["type-01"] ="тип 1";

FormArray["type-02"] ="тип 2";

FormArray["type-03"] ="тип 3";

FormArray["type-04"] ="тип 4";

FormArray["type-05"] ="тип 5";

FormArray["type-06"] ="тип 6";

FormArray["type-07"] ="тип 7";

FormArray["type-08"] ="тип 8";

FormArray["type-09"] ="тип 9";

var StandartSizes=[];

StandartSizes["01-size"]="620x200";

StandartSizes["02-size"]="620x267";

StandartSizes["03-size"]="620x257";

StandartSizes["04-size"]="680x180";

StandartSizes["05-size"]="680x180";

StandartSizes["06-size"]="320x380";

StandartSizes["07-size"]="620x340";

StandartSizes["08-size"]="620x340";

StandartSizes["09-size"]="620x340";

var BigSizes=[];

BigSizes["01-size"]="960x308";

BigSizes["02-size"]="960x416";

BigSizes["03-size"]="960x390";

BigSizes["04-size"]="950x250";

BigSizes["05-size"]="950x250";

BigSizes["06-size"]="450x600";

BigSizes["07-size"]="960x527";

BigSizes["08-size"]="960x527";

BigSizes["09-size"]="960x527";
var ConstructClasses=[];
ConstructClasses["type-01"]={NumberX:"100", NumberY:"200", NumberFont:"95", NumberLength:"75", NumberAnchor:"middle", NumberFill:"#fff", NameX:"312", NameY:"165", NameFont:"40", NameFill:"#fff" , NameAnchor:"middle", NameLength:"270", StreetX:"420", StreetY:"190", StreetFont:"25", StreetFill:"#fff", StreetAnchor:"end", StreetLength:"100"};
ConstructClasses["type-02"]={NumberX:"256", NumberY:"260", NumberFont:"75", NumberLength:"60", NumberAnchor:"middle", NumberFill:"#fff", NameX:"256", NameY:"178", NameFont:"60", NameFill:"#fff" , NameAnchor:"middle", NameLength:"420", StreetX:"256", StreetY:"118", StreetFont:"30", StreetFill:"#fff", StreetAnchor:"middle", StreetLength:"130"};
ConstructClasses["type-03"]={NumberX:"256", NumberY:"250", NumberFont:"100", NumberLength:"80", NumberAnchor:"middle", NumberFill:"#fff", NameX:"315", NameY:"145", NameFont:"45", NameFill:"#fff" , NameAnchor:"middle", NameLength:"300", StreetX:"100", StreetY:"144", StreetFont:"40", StreetFill:"#fff", StreetAnchor:"middle", StreetLength:"110"};
ConstructClasses["type-04"]={NumberX:"425", NumberY:"210", NumberFont:"115", NumberLength:"85", NumberAnchor:"middle", NumberFill:"#007bff", NameX:"350", NameY:"210", NameFont:"50", NameFill:"#fff" , NameAnchor:"end", NameLength:"310", StreetX:"347", StreetY:"155", StreetFont:"40", StreetFill:"#fff", StreetAnchor:"end", StreetLength:"110"};
ConstructClasses["type-05"]={NumberX:"425", NumberY:"210", NumberFont:"115", NumberLength:"85", NumberAnchor:"middle", NumberFill:"#fff", NameX:"350", NameY:"210", NameFont:"50", NameFill:"#007bff" , NameAnchor:"end", NameLength:"310", StreetX:"347", StreetY:"155", StreetFont:"40", StreetFill:"#007bff", StreetAnchor:"end", StreetLength:"110"};
ConstructClasses["type-06"]={NumberX:"256", NumberY:"180", NumberFont:"140", NumberLength:"100", NumberAnchor:"middle", NumberFill:"#007bff", NameX:"256", NameY:"295", NameFont:"45", NameFill:"#fff" , NameAnchor:"middle", NameLength:"210", StreetX:"256", StreetY:"235", StreetFont:"32", StreetFill:"#fff", StreetAnchor:"middle", StreetLength:"110"};
ConstructClasses["type-07"]={NumberX:"256", NumberY:"265", NumberFont:"110", NumberLength:"80", NumberAnchor:"middle", NumberFill:"#007dff", NameX:"256", NameY:"145", NameFont:"60", NameFill:"#fff" , NameAnchor:"middle", NameLength:"420", StreetX:"256", StreetY:"85", StreetFont:"35", StreetFill:"#fff", StreetAnchor:"middle", StreetLength:"130"};
ConstructClasses["type-08"]={NumberX:"256", NumberY:"265", NumberFont:"120", NumberLength:"80", NumberAnchor:"middle", NumberFill:"#fff", NameX:"256", NameY:"145", NameFont:"60", NameFill:"#fff" , NameAnchor:"middle", NameLength:"420", StreetX:"256", StreetY:"85", StreetFont:"35", StreetFill:"#fff", StreetAnchor:"middle", StreetLength:"130"};
ConstructClasses["type-09"]={NumberX:"256", NumberY:"160", NumberFont:"120", NumberLength:"80", NumberAnchor:"middle", NumberFill:"#fff", NameX:"256", NameY:"270", NameFont:"60", NameFill:"#fff" , NameAnchor:"middle", NameLength:"400", StreetX:"256", StreetY:"205", StreetFont:"35", StreetFill:"#fff", StreetAnchor:"middle", StreetLength:"130"};
var color;


//функція для отримання ціни від форми та розміру таблички

function getFormPrice() {

    

    var FormPrice = 0;

    if (document.getElementById("normalSize").checked) {

        FormPrice = StandartSizesPrice[document.getElementsByClassName("blue-border")[0].id];

    } else {

        FormPrice = BigSizesPrice[document.getElementsByClassName("blue-border")[0].id];

    }

    return FormPrice;

}

//функція для отримання ціни від кольору

function getColorPrice(){

    var ColorPrice=0;

    for(var i=0;i<document.getElementsByClassName("svitlo").length; i++){

        if(document.getElementsByClassName("svitlo")[i].checked){

            if (document.getElementById("normalSize").checked){

                ColorPrice=StandartSvitlovidbuvayuchuy

            break;

            }

            else {

                ColorPrice=bigSvitlovidbuvayuchuy;

                break;

            }

        }  

    }

    return ColorPrice;

}

//функція для отримання ціни від матеріалу

function getMaterialPrice(){

    var MaterialPrice=0;

     if(document.getElementById("twoMaterial").checked){

         if (document.getElementById("normalSize").checked){

            MaterialPrice=StandartKompozyt; 

         }else {

             MaterialPrice=bigKompozyt;

         }

    }

    return MaterialPrice;

}

//функція для отримання ціни від ламінації

function getLaminationPrice(){

  var LaminationPrice=0;

    if(document.getElementById("lamination").checked){

        

        if (document.getElementById("normalSize").checked){

            LaminationPrice=+StandartLaminaciya;

        }else{

            LaminationPrice=+BigLamination;

        }

    }

    return LaminationPrice;

}

//функція для отримання ціни від отворів

function getHolesPrice(){

    var HolePrice=0;

     if(document.getElementById("holes").checked){

        HolePrice=+Holes;

        

    }

    return HolePrice;

}

//функція для отримання ціни від наклейок

function getStickersPrice(){

    var StickersPrice=0;

    if(document.getElementById("stickers").checked){       

        StickersPrice=+Stickers;

        

    } 

    return StickersPrice;

}

//функція для отримання ціни від кріплень

function getBracingPrice(){

    var BracingPrice=0;

    for(var i = 0; i<document.getElementsByName("optionsRadio").length;i++){

        if(document.getElementsByName("optionsRadio")[i].checked){

            BracingPrice=+Bracing;  

        }

    }

    return BracingPrice;

}

//функція для отримання загальної ціни

function getTotalPrice() {

   

    TableTotalPrice=+getFormPrice()+getMaterialPrice()+getColorPrice()+getLaminationPrice()+getHolesPrice()+getStickersPrice()+getBracingPrice();

    document.getElementById("totalPrice").innerHTML = TableTotalPrice + " грн";

}



//функція для зміни форми при виборі

function changeImage() {

    document.getElementById("image-source").setAttribute("xlink:href", ImageArray[document.getElementsByClassName("blue-border")[0].id]);
    document.getElementById("formValueM").innerHTML=FormArray[document.getElementsByClassName("blue-border")[0].id];

}



//функція для зміни "+ціни"
function priceInfo(){
    if (document.getElementById("normalSize").checked){
        document.getElementById("color-price").innerHTML="(+"+StandartSvitlovidbuvayuchuy+" грн)";
        document.getElementById("material-price").innerHTML="(+"+StandartKompozyt+" грн)";
        document.getElementById("lamination-price").innerHTML="(+"+StandartLaminaciya+" грн)";
    }else{
        document.getElementById("color-price").innerHTML="(+"+bigSvitlovidbuvayuchuy+" грн)";
        document.getElementById("material-price").innerHTML="(+"+bigKompozyt+") грн)";
        document.getElementById("lamination-price").innerHTML="(+"+BigLamination+" грн)";
    }
}

//функція зміни кольору

function colorChange(){
    

    for(var i=0;i<document.getElementsByName("colors").length; i++){

        if(document.getElementsByName("colors")[i].checked){

            document.getElementById("projectsvg").style.backgroundColor=document.getElementsByName("colors")[i].style.backgroundColor;
            color = document.getElementsByName("colors")[i].style.backgroundColor;
            ConstructClasses["type-04"]["NumberFill"]=color;
            ConstructClasses["type-05"]["NameFill"]=color;
            ConstructClasses["type-05"]["StreetFill"]=color;
            ConstructClasses["type-06"]["NumberFill"]=color;
            ConstructClasses["type-07"]["NumberFill"]=color;           
        }  

    }

}



//функції чек-боксу

function laminationCheckBox(){

    if(document.getElementById("lamination").checked){

        document.getElementById("laminationFinal").checked=true;
        document.getElementById("laminationFinalM").checked=true;

    }else{

        document.getElementById("laminationFinal").checked=false;
        document.getElementById("laminationFinalM").checked=false;

    }
    
}

function laminationFinalCheckBox(){
    if(document.getElementById("laminationFinal").checked){
        document.getElementById("lamination").checked=true;
    }else{
        document.getElementById("lamination").checked=false;
    }
}

function holesCheckBox(){
 if(document.getElementById("holes").checked){

        document.getElementById("holesFinal").checked=true;
        document.getElementById("holesFinalM").checked=true;

    }else{

        document.getElementById("holesFinal").checked=false;
        document.getElementById("holesFinalM").checked=false;

    }
 
}

function holesFinalCheckBox(){
       
    if(document.getElementById("holesFinal").checked){
        document.getElementById("holes").checked=true;
    }else{
        document.getElementById("holes").checked=false;
    }

}

function stickersCheckBox(){

    if(document.getElementById("stickers").checked){

        document.getElementById("stickersFinal").checked=true;
        document.getElementById("stickersFinalM").checked=true;

    }else{

        document.getElementById("stickersFinal").checked=false;
        document.getElementById("stickersFinalM").checked=false;

    }
    
}

function stickersFinalCheckBox(){
    if(document.getElementById("stickersFinal").checked){
        document.getElementById("stickers").checked=true;
        document.getElementById("stickersFinalM").checked=true;
    }else{
        document.getElementById("stickers").checked=false;
        document.getElementById("stickersFinalM").checked=false;
    }
}


function bracingCheckBox(){

     for(var i = 0; i<document.getElementsByName("optionsRadio").length;i++){

        if(document.getElementsByName("optionsRadio")[i].checked){

            document.getElementById("bracingFinal").checked=true;
            document.getElementById("bracingFinalM").checked=true;

        }

     }

}

//функція для показу назви кольору в превью

function colorData(){

    for(var i=0;i<document.getElementsByName("colors").length; i++){

        if(document.getElementsByName("colors")[i].checked){

             document.getElementById("colorValue").innerHTML=document.getElementsByName("colors")[i].getAttribute("data-name");
             document.getElementById("colorValueM").innerHTML=document.getElementsByName("colors")[i].getAttribute("data-name");

        }  

    }

}

//функція для показу значень розмірів в табличці вибору

function textSizeData(){

    if (document.getElementById("normalSize").checked) {

        for(var i=0; i<document.getElementsByClassName("size-data").length;i++){

            document.getElementsByClassName("size-data")[i].innerHTML=StandartSizes[document.getElementsByClassName("size-data")[i].id]+" мм";

        }

    } else {

        for(var i=0; i<document.getElementsByClassName("size-data").length;i++){

            document.getElementsByClassName("size-data")[i].innerHTML=BigSizes[document.getElementsByClassName("size-data")[i].id]+" мм";

        }

    }

}

//функція для показу значення розміру в превью

function previewSizeData(){

    document.getElementById("sizeValue").innerHTML=document.getElementsByClassName("blue-border")[0].querySelectorAll("p")[0].innerHTML;
    document.getElementById("sizeValueM").innerHTML=document.getElementsByClassName("blue-border")[0].querySelectorAll("p")[0].innerHTML;

}


//функція для показу значень матеріалу в превью
function previewMaterialData(){ 

        if(document.getElementById("oneMaterial").checked){

             document.getElementById("materialValue").innerHTML=document.getElementById("oneMaterial").getAttribute("data-name");
             document.getElementById("materialValueM").innerHTML=document.getElementById("oneMaterial").getAttribute("data-name");

        }else{

            document.getElementById("materialValue").innerHTML=document.getElementById("twoMaterial").getAttribute("data-name");
            document.getElementById("materialValueM").innerHTML=document.getElementById("twoMaterial").getAttribute("data-name");

        }  

}

//функція для конструктора вулиці в превью
function previewStreetConstructor(){
    document.getElementById("OutputNumber").setAttribute("x", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["NumberX"]);
    document.getElementById("OutputNumber").setAttribute("y", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["NumberY"]);
    document.getElementById("OutputNumber").setAttribute("font-size", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["NumberFont"]);
    document.getElementById("OutputNumber").setAttribute("fill", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["NumberFill"]);
    document.getElementById("OutputNumber").setAttribute("text-anchor", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["NumberAnchor"]);
    document.getElementById("OutputNumber").setAttribute("textLength", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["NumberLength"]);
    document.getElementById("OutputStreetName").setAttribute("x", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["NameX"]);
    document.getElementById("OutputStreetName").setAttribute("y", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["NameY"]);
    document.getElementById("OutputStreetName").setAttribute("font-size", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["NameFont"]);
    document.getElementById("OutputStreetName").setAttribute("fill", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["NameFill"]);
    document.getElementById("OutputStreetName").setAttribute("text-anchor", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["NameAnchor"]);
    document.getElementById("OutputStreetName").setAttribute("textLength", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["NameLength"]);
    document.getElementById("OutputStreet").setAttribute("x", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["StreetX"]);
    document.getElementById("OutputStreet").setAttribute("y", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["StreetY"]);
    document.getElementById("OutputStreet").setAttribute("font-size", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["StreetFont"]);
    document.getElementById("OutputStreet").setAttribute("fill", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["StreetFill"]);
    document.getElementById("OutputStreet").setAttribute("text-anchor", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["StreetAnchor"]);
    document.getElementById("OutputStreet").setAttribute("textLength", ConstructClasses[document.getElementsByClassName("blue-border")[0].id]["StreetLength"]);
    document.getElementById("OutputStreet").textContent=document.getElementById("InputStreet").value;
    document.getElementById("OutputStreetName").textContent=document.getElementById("InputStreetName").value;
    document.getElementById("OutputNumber").textContent=document.getElementById("InputNumber").value;
    
   
}

jQuery(document).ready(getTotalPrice());

jQuery(document).ready(colorData());

jQuery(document).ready(textSizeData());

jQuery(document).ready(previewSizeData());

jQuery(document).ready(previewMaterialData());

jQuery(document).ready(changeImage());

jQuery(document).ready(previewStreetConstructor());