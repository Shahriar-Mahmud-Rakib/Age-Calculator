function calculateAge() {
    var dobString = document.getElementById("dob").value;
    var dobArray = dobString.split('/');
    var dob = new Date(dobArray[2], dobArray[1] - 1, dobArray[0]);
    var today = new Date();

    var years = today.getFullYear() - dob.getFullYear();
    var months = today.getMonth() - dob.getMonth();
    var days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    var result = years + " years, " + months + " months, and " + days + " days";
    window.open("result.html?result=" + result, "_blank");
}
