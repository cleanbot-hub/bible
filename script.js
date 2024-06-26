const bibleVerses = {
    "2024-01-01": "In the beginning God created the heavens and the earth. - Genesis 1:1",
    "2024-01-02": "The LORD is my shepherd, I lack nothing. - Psalm 23:1",
    // 더 많은 날짜와 말씀 추가
};

function createCalendar(year) {
    const calendarContainer = document.getElementById('calendar-container');

    for (let month = 0; month < 12; month++) {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';

        const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
        const monthHeader = document.createElement('h3');
        monthHeader.innerText = monthName;
        monthDiv.appendChild(monthHeader);

        for (let day = 1; day <= 31; day++) {
            const date = new Date(year, month, day);
            if (date.getMonth() !== month) break; // 유효하지 않은 날짜를 건너뜀

            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.innerText = day;
            dayDiv.dataset.date = date.toISOString().split('T')[0];
            dayDiv.addEventListener('click', showVerse);

            monthDiv.appendChild(dayDiv);
        }

        calendarContainer.appendChild(monthDiv);
    }
}

function showVerse(event) {
    const date = event.target.dataset.date;
    const verse = bibleVerses[date] || "No verse available for this date.";
    document.getElementById('bible-verse').innerText = verse;
}

createCalendar(2024);
