var JohnsTripToRestaraunt = {
    bills: [124, 48, 268, 180, 42],
    calculate: function () {
        this.tips = [];
        this.tipsPlusBills = [];

        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var tip;

            if (bill < 50 || bill >= 50 && bill <= 200 || bill > 200) {
                tip = bill * 0.2 || bill * 0.15 || bill * 0.1;
            }
            // this.tips[i] = tip.toFixed(1); Хотел так, но возвращает строку
            this.tips[i] = Math.ceil(tip);
            this.tipsPlusBills[i] = tip + bill;
        }
    }
}

JohnsTripToRestaraunt.calculate();

var MarksFamilyHoliday = {
    bills: [77, 345, 110, 45],
    calculate: function () {
        this.tips = [];
        this.tipsPlusBills = [];

        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var tip;

            if (bill < 100 || bill >= 100 && bill <= 300 || bill > 300) {
                tip = bill * 0.2 || bill * 0.10 || bill * 0.25;
            }
            // this.tips[i] = tip.toFixed(1);
            this.tips[i] = Math.ceil(tip);
            this.tipsPlusBills[i] = tip + bill;
        }
    }
}

MarksFamilyHoliday.calculate();

function calculateTheAverage(tips) {
    var currentSum = 0;

    for (var i = 0; i < tips.length; i++) {
        currentSum += tips[i];
    }
    return currentSum / tips.length;
}

JohnsTripToRestaraunt.averageOfTips = calculateTheAverage(JohnsTripToRestaraunt.tips);
MarksFamilyHoliday.averageOfTips = calculateTheAverage(MarksFamilyHoliday.tips);

console.log(" John \n");
console.log(JohnsTripToRestaraunt);
console.log("\n Mark \n");
console.log(MarksFamilyHoliday);

if (JohnsTripToRestaraunt.averageOfTips > MarksFamilyHoliday.averageOfTips) {
    console.log("\n" + "John's family paid the most")
} else if (JohnsTripToRestaraunt.averageOfTips < MarksFamilyHoliday.averageOfTips) {
    console.log("\n" + "Mark's family paid the most")
} else {
    console.log("\n" + "They paid equal average")
}



