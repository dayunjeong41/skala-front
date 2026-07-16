document.addEventListener("DOMContentLoaded", () => {
    const gradeButton = document.getElementById("startGrade");

    if (gradeButton) {
        gradeButton.addEventListener("click", calculateGrade);
    }
});

function calculateGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;

    for (var i = 0; i < subjects.length; i++) {
        var score = Number(prompt(subjects[i] + " 점수를 입력하세요."));

        if (Number.isNaN(score) || score < 0 || score > 100) {
            alert("0점부터 100점까지의 숫자를 입력해주세요.");
            i--;
            continue;
        }

        total += score;
    }

    var average = total / subjects.length;
    var result = average >= 60 ? "합격" : "불합격";
    var grade = "F";

    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    }

    alert("총점: " + total + "점, 평균: " + average.toFixed(1) + "점, 결과: " + result + "입니다! 등급: " + grade);
}
