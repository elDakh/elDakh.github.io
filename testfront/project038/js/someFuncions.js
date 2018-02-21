// змінні для цін, які легко поміняти тут
var TableTotalPrice = 0;
var Holes = 50;
var Stickers = 30;
var Bracing = 30;
var StandartSizes = new Array();
var StandartLaminaciya = 50;
var StandartSvitlovidbuvayuchuy = 350;
var StandartKompozyt = 160;
var BigLamination = 100;
var bigSvitlovidbuvayuchuy = 780;
var bigKompozyt = 360;
StandartSizes["type-01"] = 240;
StandartSizes["type-02"] = 240;
StandartSizes["type-03"] = 300;
StandartSizes["type-04"] = 240;
StandartSizes["type-05"] = 240;
StandartSizes["type-06"] = 240;
StandartSizes["type-07"] = 400;
StandartSizes["type-08"] = 400;
StandartSizes["type-09"] = 400;
var BigSizes = new Array();
BigSizes["type-01"] = 570;
BigSizes["type-02"] = 750;
BigSizes["type-03"] = 700;
BigSizes["type-04"] = 460;
BigSizes["type-05"] = 460;
BigSizes["type-06"] = 520;
BigSizes["type-07"] = 970;
BigSizes["type-08"] = 970;
BigSizes["type-09"] = 970;
<<<<<<< HEAD
var ImageArray = new Array();
ImageArray["type-01"] ="img/tableBorder-01.png";
ImageArray["type-02"] ="img/tableBorder-02.png";
ImageArray["type-03"] ="img/tableBorder-03.png";
ImageArray["type-04"] ="img/tableBorder-04.png";
ImageArray["type-05"] ="img/tableBorder-05.png";
ImageArray["type-06"] ="img/tableBorder-06.png";
ImageArray["type-07"] ="img/tableBorder-07.png";
ImageArray["type-08"] ="img/tableBorder-08.png";
ImageArray["type-09"] ="img/tableBorder-09.png";
=======
>>>>>>> parent of e958828... ChangeImage and Plus-Minus functions

//функція для отримання ціни від форми та розміру таблички
function getFormPrice() {
    
    var FormPrice = 0;
    if (document.getElementById("normalSize").checked) {
        FormPrice = StandartSizes[document.getElementsByClassName("blue-border")[0].id];
    } else {
        FormPrice = BigSizes[document.getElementsByClassName("blue-border")[0].id];
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
jQuery(document).ready(getTotalPrice());