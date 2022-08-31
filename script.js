const holidayIdea = () => {

    const destination = ['Spain', 'Greece', 'England', 'United States of America', 'Mexico', 'Bali', 'Jamaica', 'Australia', 'Italy', 'Germany', 'Netherlands', 'South Africa', 'Morrocco', 'Thailand', 'Maldives'];

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const numOfDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    let newDestination = Math.floor(Math.random() * destination.length);
    let newMonths = Math.floor(Math.random() * months.length);
    let newNumOfDays = Math.floor(Math.random() * numOfDays.length);

    let sentence = 'You will be going to ' + destination[newDestination] + ' in ' + months[newMonths] + ' for the duration of ' + numOfDays[newNumOfDays] + ' days.';

    document.getElementById('holiday-Idea').innerHTML = sentence;
}

console.log(holidayIdea());