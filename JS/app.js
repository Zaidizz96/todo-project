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
    if (gender === "male") {
        window.alert("Welcome to our web site!!\n Name: " + name + "\n Title: Mr" + "\n Age: " + age)
    } else if (gender === "female") {
        window.alert("Welcome to our web site!!\n Name: " + name + "\n Title: Ms" + "\n Age: " + age)
    } else {
        window.alert("Welcome to our web site!!\n Name: " + name + "\n Age: " + age)
    }
}

// lab-06


let userNotifications = promptFunction("Do you want to activate  setting  notifications and remainders for important dueDate  ?, (Yes/No)");
let webAds = promptFunction(" whould you like to disable ads?, (Yes/No) ");
let taskShare = promptFunction("Would you like the option to share your todo-lists with others for collaborative purposes?, (Yes/No)");

let arr = [];
arr.push(userNotifications);
arr.push(webAds);
arr.push(taskShare);

printQuestionAnswer(arr);
debugger
function printQuestionAnswer(answerArray) {
    for (var i = 0; i < answerArray.length; i++) {
        console.log("Question " + (i + 1) + " = " + answerArray[i]);
    }
}

function promptFunction(userQuestion) {
    let result = '';
    while (true) {
        result = prompt(userQuestion)
        if (result === "yes" || result === "no") {
            window.alert("plese edit your answer using capital letter")
        } else if ((result !== "Yes" && result !== "No") || result === " ") {
            window.alert("please enter a valid answer")
        } else {
            break;
        }
    }
    return result;
}
