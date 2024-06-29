// script.js
document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const content = document.getElementById('content');
    const calendarTitle = document.getElementById('calendar-title');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentYear, currentMonth;

    function createCalendar(year, month) {
        currentYear = year;
        currentMonth = month;

        const date = new Date(year, month);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startDay = date.getDay();
        const today = new Date();
        const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

        let table = '<table><tr>';
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // Header row with day names
        for (let day of daysOfWeek) {
            table += `<th>${day}</th>`;
        }
        table += '</tr><tr>';

        // Padding before the first day of the month
        for (let i = 0; i < startDay; i++) {
            table += '<td></td>';
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            if ((startDay + day - 1) % 7 === 0) {
                table += '</tr><tr>';
            }
            const isToday = isCurrentMonth && day === today.getDate();
            table += `<td class="date${isToday ? ' current-date' : ''}">${day}</td>`;
        }

        table += '</tr></table>';
        calendar.innerHTML = table;
        calendarTitle.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        // Add click event listener to each date cell
        document.querySelectorAll('.date').forEach(cell => {
            cell.addEventListener('click', (event) => {
                const selectedDay = event.target.textContent;
                if (selectedDay == 29 && month == 5) { // 5는 6월을 의미 (0 기반 인덱스)
                    content.innerHTML = `
                        <h1>사도행전 28:1-15 요약</h1>
                        <h2>멜리데 섬 도착 (1-6절)</h2>
                        <p>바울과 일행은 폭풍 속에서 멜리데 섬(현재의 몰타)에 도착합니다.</p>
                        <p>섬 주민들이 그들을 환대합니다.</p>
                        <p>바울이 나무를 모아 불을 피우는 동안 독사가 그의 손을 물지만, 바울은 아무 해를 입지 않고, 주민들은 이를 보고 그가 신이라고 생각합니다.</p>
                        <h2>바울의 치유 사역 (7-10절)</h2>
                        <p>섬의 주요 인물인 보블리오의 아버지가 병들어 있었는데, 바울이 기도하고 안수하여 그를 치유합니다.</p>
                        <p>이로 인해 섬의 다른 병자들도 와서 치유를 받습니다.</p>
                        <p>주민들은 바울과 일행에게 많은 선물을 주고, 그들이 떠날 때 필요한 것들을 공급해 줍니다.</p>
                        <h2>로마로의 여정 (11-15절)</h2>
                        <p>바울과 일행은 석 달 후 알렉산드리아 배를 타고 출발하여 여러 항구를 거쳐 로마로 향합니다.</p>
                        <p>푸테올리에서 형제들을 만나 그들과 일주일을 보낸 후, 로마로 계속 여행합니다.</p>
                        <p>로마 형제들이 바울을 마중 나와 바울은 그들을 보고 하나님께 감사하며 용기를 얻습니다.</p>
                        <h2>오늘의 기도</h2>
                        <p>사랑의 하나님,</p>
                        <p>멜리데 섬에서 바울과 일행을 안전하게 보호하시고, 독사의 위협에서도 바울을 지키신 주님의 능력에 감사드립니다. 우리의 삶 속에서도 주님의 보호하심과 인도하심을 경험하게 하시고, 어떤 어려움 속에서도 주님을 신뢰하게 하소서.</p>
                        <p>주님, 바울이 병든 자들을 치유하고 그들에게 주님의 사랑을 전한 것처럼, 우리도 주님의 사랑을 나누고, 필요한 이들에게 주님의 치유와 위로를 전하는 자들이 되게 하소서. 우리가 어디에 있든 주님의 사역을 감당하며, 주님의 이름을 높이는 삶을 살게 하소서.</p>
                        <p>로마로 향하는 여정 속에서 만난 형제들처럼, 우리도 믿음의 동역자들을 만나게 하시고, 그들과 함께 주님의 일을 이뤄나가는 기쁨을 누리게 하소서. 서로를 격려하고 힘이 되어주는 공동체를 이루게 하시고, 주님의 사랑 안에서 하나가 되게 하소서.</p>
                        <p>이 모든 기도를 예수 그리스도의 이름으로 기도드립니다. 아멘.</p>`;
                } else if (selectedDay == 1 && month == 6) { // 12월 25일 (크리스마스 예시)
                    content.innerHTML = `
                        <h1>예레미야 26:1~15</h1>
                        <p> 예레미야가 하나님의 명령에 따라 예루살렘에서 성전 뜰에서 모든 백성에게 하나님의 말씀을 전하는 장면이 전개됩니다. </p>
                        <p>예레미야는 주님의 명령을 받아 백성들에게 경고를 전하며, 만일 그들이 회개하지 않고 그들의 악한 길에서 돌이키지 않으면 예루살렘과 성전이 파멸될 것임을 예언합니다. </p>
                        <p>이 경고는 백성들에게 큰 충격을 주고, 제사장들과 선지자들, 그리고 모든 백성들의 분노를 샀습니다. </p>
                        <p>그들은 예레미야를 반역자로 간주하고 성전 뜰에서 그를 죽이려 시도했으나, 몇몇 고인들과 땅발과 같은 사람들은 예레미야를 지지했습니다. </p>
                        <p>마침내 왕과 국민들은 예레미야의 죽이기를 반대하게 되어 예레미야는 생명을 구할 수 있었습니다.</p>`;
                } else {
                    content.innerHTML = `<h1>Selected Date: ${selectedDay}/${month + 1}/${year}</h1><p>Content for the selected date.</p>`;
                }
            });

            // Add mouseover and mouseout event listeners for additional effects
            cell.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = '#dcdcdc';
            });

            cell.addEventListener('mouseout', (event) => {
                if (!event.target.classList.contains('current-date')) {
                    event.target.style.backgroundColor = '';
                }
            });
        });
    }

    function changeMonth(offset) {
        const newMonth = currentMonth + offset;
        const newDate = new Date(currentYear, newMonth);
        createCalendar(newDate.getFullYear(), newDate.getMonth());
    }

    // Initialize calendar with the current month
    const today = new Date();
    createCalendar(today.getFullYear(), today.getMonth());

    // Add event listeners for month navigation buttons
    prevMonthButton.addEventListener('click', () => changeMonth(-1));
    nextMonthButton.addEventListener('click', () => changeMonth(1));
});
