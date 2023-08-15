// window.GradeCalculater =  function GradeCalculater() {

//     let PercentageInput = document.getElementById("PercentageInput").value;




// let Percentage = 70

//     if (Percentage < 0){
//         console.log("Invalid persentage must be between 0 and 49");
// } else if (Percentage >= 0 && Percentage < 50) {
//     console.log ("sorry you are fail")
// }else if (Percentage >= 50 && Percentage < 60) {
//     console.log ("Yor got C grade")
// }else if (Percentage >= 60 && Percentage < 70) {
//     console.log ("Yor got B grade")
// }else if (Percentage >= 70 && Percentage < 80) {
//     console.log ("Yor got A grade")
// }else (Percentage >= 80 && Percentage <= 100) {
//     console.log ("Yor got A+ grade")
// }







    //   }





    let percentage = 70;

    if (percentage < 0) {
        console.log("Invalid percentage, must be between 0 and 100");
    } else if (percentage >= 0 && percentage < 50) {
        console.log("Sorry you are failed");
    } else if (percentage >= 50 && percentage < 60) {
        console.log("you got C grade");

    } else if (percentage >= 60 && percentage < 70) {
        console.log("you got B grade");

    } else if (percentage >= 70 && percentage < 80) {
        console.log("you got A grade");

    } else if (percentage >= 80 && percentage <= 100) {
        console.log("you got A1 grade");

    } else {
        console.log("Invalid percentage, must be between 0 and 100");
    }