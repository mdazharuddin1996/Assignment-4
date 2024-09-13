
function calculateTax(income, expenses) {
    const saveMoney = income - expenses;
    const texMoney = saveMoney * .20;
    if (income && expenses < 0 || income < expenses) {
        return "Invalid Input";
    };
    return texMoney;
};




function sendNotification(email) {
    if (email.includes("@")) {
        const username = email.split("@");
        const message = username.join(' sent you an email from ');
        return message;
    } else {
        return "Invalid Email";
    };
};




function checkDigitsInName(name) {
    const strName = name;
    if (typeof strName !== 'string') {
        return "Invalid Input";
    };
    for (char of name) {
        if (!isNaN(char)) {
            return true
        };
    };
    return false;
};





function calculateFinalScore(obj) {
    
    if (typeof(obj) !== 'object') {
            return "Invalid Input"
    } else if (typeof (obj) == 'object') {

        let sum = obj.testScore + obj.schoolGrade;
        if (obj.isFFamily==true) {
            sum = sum + 20;
        };
        if (sum>=80) {
            return true;
        };
        return false;
    };
};






function waitingTime(waitingTimes, serialNumber) {
    
    if (Array.isArray(waitingTimes)!==true || typeof(serialNumber)!=='number') {
        return 'Invalid Input';
    } else {
        const xExamineeSr = waitingTimes.length;
        const isratSr = serialNumber - 1;
        const srl = isratSr - xExamineeSr;

        let sum = 0;
        for (wtime of waitingTimes) {
        sum = sum + wtime;
    };
        const avrg = sum / waitingTimes.length;
        const roundedAv = Math.round(avrg);

        const willBeTime = roundedAv * srl;
        return willBeTime;
        
    };

};


