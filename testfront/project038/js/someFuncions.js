// змінні для цін, які легко поміняти тут
var TableTotalPrice = 0;
var Holes = 50;
var Stickers = 30;
var Kriplenya = 30;
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

function getFormPrice() {
    
    var FormPrice = 0;
    if (document.getElementById("normalSize").checked) {
        FormPrice = StandartSizes[document.getElementsByClassName("blue-border")[0].id];
    } else {
        FormPrice = BigSizes[document.getElementsByClassName("blue-border")[0].id];
    }
    return FormPrice;
}

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
    console.log(ColorPrice);
    return ColorPrice;
}

function getMaterialPrice(){
    var MaterialPrice=0;
     if(document.getElementById("twoMaterial").checked){
         if (document.getElementById("normalSize").checked){
            MaterialPrice=StandartKompozyt; 
         }else {
             MaterialPrice=bigKompozyt;
         }
    }
    console.log(MaterialPrice);
    return MaterialPrice;
}

function getLaminationPrice(){
  var LaminationPrice=0;
    if(document.getElementById("lamination").checked){
        
        if (document.getElementById("normalSize").checked){
            LaminationPrice=+StandartLaminaciya;
        }else{
            LaminationPrice=+BigLamination;
        }
    }
    console.log(LaminationPrice)
    return LaminationPrice;
}
function getHolesPrice(){
    var HolePrice=0;
     if(document.getElementById("holes").checked){
        HolePrice=+Holes;
        console.log("tablefromholes " +HolePrice);
    }
    return HolePrice;
}

function getStickersPrice(){
    var StickersPrice=0;
    if(document.getElementById("stickers").checked){       
        StickersPrice=+Stickers;
        console.log("table from stickers " + TableTotalPrice);
    } 
    return StickersPrice;
}

function getKriplenyaPrice(){
    var KriplenyaPrice=0;
    for(var i = 0; i<document.getElementsByName("optionsRadio").length;i++){
        if(document.getElementsByName("optionsRadio")[i].checked){
            KriplenyaPrice=+Kriplenya;
        console.log("table from krip "+TableTotalPrice)  ;  
        }
    }
    return KriplenyaPrice;
}

function getTotalPrice() {
   
    TableTotalPrice=+getFormPrice()+getMaterialPrice()+getColorPrice()+getLaminationPrice()+getHolesPrice()+getStickersPrice()+getKriplenyaPrice();
    console.log(TableTotalPrice);
    document.getElementById("totalPrice").innerHTML = TableTotalPrice + " грн";
}