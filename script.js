function calculateGrade() {
    document.getElementById('marks').value = eval(document.getElementById('marks').value);
    percentage = document.getElementById('marks').value;
    if (percentage >= 90 && percentage <= 100) {
        
        document.getElementById("demo").innerHTML = "A+";
    }
    else if (percentage >= 80 && percentage <= 90) {
        document.getElementById("demo").innerHTML = "A";
    }
    else if (percentage >= 70 && percentage <= 60) {
        document.getElementById('demo').innerHTML = "B";
    }
    else if (percentage >= 60 && percentage <= 50) {
        document.getElementById('demo').innerHTML = "B+";
    } else {
        document.getElementById('demo').innerHTML = "C";
    }


}
