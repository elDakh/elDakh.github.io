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
ConstructClasses["type-01"]="";
ConstructClasses["type-02"]="";
ConstructClasses["type-03"]="";
ConstructClasses["type-04"]="";
ConstructClasses["type-05"]="";
ConstructClasses["type-06"]="";
ConstructClasses["type-07"]="";
ConstructClasses["type-08"]="";
ConstructClasses["type-09"]="";


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

    document.getElementById("back-image").src = ImageArray[document.getElementsByClassName("blue-border")[0].id];

}



//функція зміни кольору

function colorChange(){

    for(var i=0;i<document.getElementsByName("colors").length; i++){

        if(document.getElementsByName("colors")[i].checked){

            document.getElementById("projectsvg").style.backgroundColor=document.getElementsByName("colors")[i].style.backgroundColor;

        }  

    }

}



//функції плюс-мінус

function laminationPlusMinus(){

    if(document.getElementById("lamination").checked){

        document.getElementById("fa-lamination").classList.remove("fa-minus");

        document.getElementById("fa-lamination").classList.add("fa-plus");

        

    }else{

        document.getElementById("fa-lamination").classList.remove("fa-plus");

        document.getElementById("fa-lamination").classList.add("fa-minus");

        

    }

}

function holesPlusMinus(){

    if(document.getElementById("holes").checked){

        document.getElementById("fa-holes").classList.remove("fa-minus");

        document.getElementById("fa-holes").classList.add("fa-plus");

        

    }else{

        document.getElementById("fa-holes").classList.remove("fa-plus");

        document.getElementById("fa-holes").classList.add("fa-minus");

        

    }

}

function stickersPlusMinus(){

    if(document.getElementById("stickers").checked){

        document.getElementById("fa-stickers").classList.remove("fa-minus");

        document.getElementById("fa-stickers").classList.add("fa-plus");

    }else{

        document.getElementById("fa-stickers").classList.remove("fa-plus");

        document.getElementById("fa-stickers").classList.add("fa-minus");

    }

}

function bracingPlusMinus(){

     for(var i = 0; i<document.getElementsByName("optionsRadio").length;i++){

        if(document.getElementsByName("optionsRadio")[i].checked){

            document.getElementById("fa-bracing").classList.remove("fa-minus");

            document.getElementById("fa-bracing").classList.add("fa-plus");

        }

     }

}

//функція для показу назви кольору в превью

function colorData(){

    for(var i=0;i<document.getElementsByName("colors").length; i++){

        if(document.getElementsByName("colors")[i].checked){

             document.getElementById("colorValue").innerHTML=document.getElementsByName("colors")[i].getAttribute("data-name");

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

}


//функція для показу значень матеріалу в превью
function previewMaterialData(){ 

        if(document.getElementById("oneMaterial").checked){

             document.getElementById("materialValue").innerHTML=document.getElementById("oneMaterial").getAttribute("data-name");

        }else{

            document.getElementById("materialValue").innerHTML=document.getElementById("twoMaterial").getAttribute("data-name");

        }  

}

//функція для конструктора вулиці в превью
function previewStreetConstructor(){
   // document.getElementById("table-preview").classList[0]=ConstructClasses[document.getElementsByClassName("blue-border")[0].id];
    document.getElementById("OutputStreet").textContent=document.getElementById("InputStreet").value;
    console.log(document.getElementById("InputStreet").value)
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