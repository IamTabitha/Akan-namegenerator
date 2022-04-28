
//have an if statement for february and 30 days' month
//have switch statement for both genders 


let maleAkanNames = ["Kwasi" , "Kwadwo" , "Kwabena" , "Kwaku" , "Yaw" , "Kofi" , "Kwame"];
let femaleAkanNames = ["Akosua" , "Adwoa" , "Abenaa" , "Akua" , "Yaa" , "Afua" , "Ama"];

function getdata() {
    let userName = document.getElementById("userName").value;
    let yearOfBirth = parseInt(document.getElementById("userBirthdayYear").value);
    let monthOfBirth = parseInt(document.getElementById("userBirthdayMonth").value)-1;
    let dayOfBirth = parseInt(document.getElementById("userBirthdayDate").value);

    let dayOfWeek = new Date(yearOfBirth,monthOfBirth,dayOfBirth);
    let dayOfWeekBorn = dayOfWeek.getDay();

    let userGender = document.getElementById("userGender").value; 
    
    if(userGender == "male" && dayOfWeekBorn == 0){
        alert("Hello " + userName + ", Your Akan name is " + maleAkanNames[0] + " because you were born on a Sunday");
    } else if(userGender == "male" && dayOfWeekBorn == 1){
        alert("Hello " + userName + ", Your Akan name is " + maleAkanNames[1] + " because you were born on a Monday");
    } else if(userGender == "male" && dayOfWeekBorn == 2){
        alert("Hello " + userName + ", Your Akan name is " + maleAkanNames[2] + " because you were born on a Tuesday");
    } else if(userGender == "male" && dayOfWeekBorn == 3){
        alert("Hello " + userName + ", Your Akan name is " + maleAkanNames[3] + " because you were born on a Wednesday");
    } else if(userGender == "male" && dayOfWeekBorn == 4){
        alert("Hello " + userName + ", Your Akan name is " + maleAkanNames[4] + " because you were born on a Thursday");
    } else if(userGender == "male" && dayOfWeekBorn == 5){
        alert("Hello " + userName + ", Your Akan name is " + maleAkanNames[5] + " because you were born on a Friday");
    } else if(userGender == "male" && dayOfWeekBorn == 6){
        alert("Hello " + userName + ", Your Akan name is " + maleAkanNames[6] + " because you were born on a Saturday");
    }

    if(userGender == "female" && dayOfWeekBorn == 0){
        alert("Hello " + userName + ", Your Akan name is " + femaleAkanNames[0] + " because you were born on a Sunday");
    } else if(userGender == "female" && dayOfWeekBorn == 1){
        alert("Hello " + userName + ", Your Akan name is " + femaleAkanNames[1] + " because you were born on a Monday");
    } else if(userGender == "female" && dayOfWeekBorn == 2){
        alert("Hello " + userName + ", Your Akan name is " + femaleAkanNames[2] + " because you were born on a Tuesday");
    } else if(userGender == "female" && dayOfWeekBorn == 3){
        alert("Hello " + userName + ", Your Akan name is " + femaleAkanNames[3] + " because you were born on a Wednesday");
    } else if(userGender == "female" && dayOfWeekBorn == 4){
        alert("Hello " + userName + ", Your Akan name is " + femaleAkanNames[4] + " because you were born on a Thursday");
    } else if(userGender == "female" && dayOfWeekBorn == 5){
        alert("Hello " + userName + ", Your Akan name is " + femaleAkanNames[5] + " because you were born on a Friday");
    } else if(userGender == "female" && dayOfWeekBorn == 6){
        alert("Hello " + userName + ", Your Akan name is " + femaleAkanNames[6] + " because you were born on a Saturday");
    } 

    //location.reload(); 

}




