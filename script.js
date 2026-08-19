// Get the form

const form = document.getElementById("gradeForm");


// Add submit event

form.addEventListener("submit", function (event) {

    // Stop the page from refreshing

    event.preventDefault();


    // Get marks of five subjects

    let marks = [

        Number(document.getElementById("subject1").value),

        Number(document.getElementById("subject2").value),

        Number(document.getElementById("subject3").value),

        Number(document.getElementById("subject4").value),

        Number(document.getElementById("subject5").value)

    ];


    // Check whether marks are valid

    for (let i = 0; i < marks.length; i++) {

        if (marks[i] < 0 || marks[i] > 100) {

            document.getElementById("error").textContent =
                "Please enter marks between 0 and 100.";

            return;
        }

    }


    // Call user-defined function

    calculateResult(marks);

});


// User-defined function

function calculateResult(marks) {

    // Variable to store total

    let total = 0;


    // Iteration using for loop

    for (let i = 0; i < marks.length; i++) {

        total = total + marks[i];

    }


    // Calculate average

    let average = total / marks.length;


    // Variable for grade

    let grade;


    // Selection statement

    if (average >= 90) {

        grade = "A+";

    }

    else if (average >= 80) {

        grade = "A";

    }

    else if (average >= 70) {

        grade = "B";

    }

    else if (average >= 60) {

        grade = "C";

    }

    else if (average >= 50) {

        grade = "D";

    }

    else {

        grade = "F";

    }


    // Check Pass or Fail

    let pass = true;


    for (let i = 0; i < marks.length; i++) {

        if (marks[i] < 40) {

            pass = false;

            break;

        }

    }


    let status;

    if (pass && average >= 50) {

        status = "PASS";

    }

    else {

        status = "FAIL";

    }


    // Display result

    document.getElementById("total").textContent =
        total;


    document.getElementById("average").textContent =
        average.toFixed(2) + "%";


    document.getElementById("grade").textContent =
        grade;


    document.getElementById("status").textContent =
        status;


    // Display message

    if (status === "PASS") {

        document.getElementById("message").textContent =
            "Congratulations! The student has passed all five subjects.";

    }

    else {

        document.getElementById("message").textContent =
            "The student has failed. Each subject requires at least 40 marks.";

    }


    // Show result section

    document.getElementById("result")
        .classList.remove("hidden");


    // Clear error

    document.getElementById("error").textContent = "";

}