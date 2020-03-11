//object literal

const salon = {
    name: "the fashion Pet",
    phone:"3255-78-93",
    address:{
        street:"Av. fashion Show",
        number:"456"
    },
    workingHours:{
        days:"Mon-Fri",
        open:"9:00",
        close:"5:00 pm"
    },
    pets:[]
}
console.log(salon);
// let name= salon.name;
// let{name}=salon;

let{name,phone,address:{street,number},workingHours:{days,open,close,}}=salon;

//object constructor

class Pet{
    constructor(name,age,gender,breed,service,owner,contact){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.contact=contact;
        this.hunger=10;
        this.happiness=5;
    }
    ownerInfo =function(){
        console.log("owner name:"+this.owner + "\n" + "contact phone:"+ this.contact);
    }
    feed=function(){
        this.hunger-=5;
        this.happiness+=5;
        console.log("feeding...");
    }
    status=function(){
        console.log("Hunger: "+this.hunger+"\n"+"Happiness"+this.happiness);
    }
}
const pet1 =new Pet("Oreo",1,"Male","Cat","Shower","Isabel","(664)419-50-00");
const pet2 =new Pet("Zaghdaic",1,"Male","Cat","Shower","Isabel","(664)419-50-00");
const pet3 =new Pet("Munek",3,"Fem","Mutt","Full Service","Mark","(664)419-50-00");

pet1.ownerInfo();
pet2.ownerInfo();
pet3.ownerInfo();

console.log(pet1);
console.log(pet2);
console.log(pet3);

pet1.status();
pet1.feed();
pet1.status();

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

var textname=document.getElementById('txtname');
var textage=document.getElementById('txtage');
var textgender=document.getElementById('txtgender');
var textbreed=document.getElementById('txtbreed');
var textservice=document.getElementById('txtservice');
var textowner=document.getElementById('txtowner');
var textcontact=document.getElementById('txtcontact');

function register(){
   /*  Display on console
   console.log(textname.value);
    console.log(textage.value);
    console.log(textgender.value);
    console.log(textbreed.value);
    console.log(textservice.value);
    console.log(textowner.value);
    console.log(textcontact.value); */

    //the order of the elements is important, has to be the same as the constructor.
    //Save on temporal Database until its reload the page
    const thePet=new Pet
        (textname.value,
        textage.value,
        textgender.value,
        textbreed.value,
        textservice.value,
        textowner.value,
        textcontact.value);

    salon.pets.push(thePet);
    alert("You registered a new pet.");
    //clear();
}
function clear(){
    textname.value="";
    textage.value="";
    textgender.value="";
    textbreed.value="";
    textservice.value="";
    textowner.value="";
    textcontact.value="";
}
function display(aPet){
    var tbody=document.getElementById('rowPet');
    var row=`<tr>
                <td>${aPet.name}</td>
                <td>${aPet.age}</td>
                <td>${aPet.gender}</td>
                <td>${aPet.breed}</td>
                <td>${aPet.service}</td>
                <td>${aPet.owner}</td>
                <td>${aPet.contact}</td>
            </tr>`;
    tbody.innerHTML+=row;

}
display(pet1);
display(pet2);
display(pet3);

//exercise: display all the information on the column and when I register the pet it adds to the html ; function display to add in the register, submit to github and lms