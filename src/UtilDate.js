class UtilDate {

    static monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    static dayName = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    static getMonthName(month) {
        return this.monthName[month];
    }

    static getFirstDay(currentYear,currentMonth) {
        let date = new Date(currentYear, currentMonth, 0);
        return date.getDay();
    }

    static daysInMonth(currentYear,currentMonth) {
        let date = new Date(currentYear, currentMonth + 1, 0);
        return date.getDate();
    }
}

export default UtilDate;