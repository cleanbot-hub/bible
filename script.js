document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.querySelector('.days');
    const bibleVerseContainer = document.getElementById('bibleVerse');

    const bibleVerses = {
        1: "창세기 1:1 - 태초에 하나님이 천지를 창조하시니라",
        2: "출애굽기 20:12 - 네 부모를 공경하라 그리하면 네 하나님 여호와가 네게 준 땅에서 네 생명이 길리라",
        3: "시편 23:1 - 여호와는 나의 목자시니 내게 부족함이 없으리로다",
        // ... 각 날짜에 맞는 성경 구절 추가
        30: "요한복음 3:16 - 하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니...",
    };

    const daysInJune2024 = [
        "", "", "", "", "", "", 1,
        2, 3, 4, 5, 6, 7, 8,
        9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29,
        30
    ];

    daysInJune2024.forEach(day => {
        const button = document.createElement('button');
        button.innerText = day ? day : '';
        if (day) {
            button.addEventListener('click', () => {
                const verse = bibleVerses[day] || "성경 구절이 없습니다.";
                bibleVerseContainer.innerText = verse;
            });
        } else {
            button.disabled = true;
            button.style.background = 'transparent';
            button.style.cursor = 'default';
        }
        daysContainer.appendChild(button);
    });
});
