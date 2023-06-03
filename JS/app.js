let name = prompt("Enter your name please:", "zaid");

let gender = prompt("Enter your gender please:");

for (; ;) {
    var age = prompt("Enter your age please:");
    if (age <= 0) {
        window.alert("Enter valid age ");
    } else {
        console.log(age)
        break;
    }
}

let confirmation = confirm("do you want to skip welcoming message?");

if (confirmation !== true) {
    if(gender === "male"){
    window.alert("Welcome to our web site!!\n Name: " + name + "\n Title: Mr" + "\n Age: " + age)
}else if(gender === "female"){
    window.alert("Welcome to our web site!!\n Name: " + name + "\n Title: Ms" + "\n Age: " + age) 
}else {
    window.alert("Welcome to our web site!!\n Name: " + name + "\n Age: " + age)   
}
}
