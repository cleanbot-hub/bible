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
                } else if (selectedDay == 1 && month == 6) { // 7.1
                    content.innerHTML = `
                        <h1>예레미야 26:1-15 요약</h1>
                        <h2>예레미야의 예언 (1-6절):</h2>
                        <p>여호야김 왕의 치세 초기에, 여호와께서 예레미야에게 예루살렘 성전 뜰에 서서 예언하라고 명하십니다.</p>
                        <p>예레미야는 예루살렘과 유다의 모든 사람들에게 회개하지 않으면 성전과 예루살렘이 신로처럼 될 것이라고 경고합니다.</p>
                        <h2>예언에 대한 반응 (7-9절):</h2>
                        <p>제사장들과 예언자들, 그리고 백성들이 예레미야의 말을 듣고 그를 죽이려 합니다.</p>
                        <p>예레미야가 예언한 내용이 여호와의 성전을 대적하는 것이라며 그를 고발합니다.</p>
                        <h2>예레미야의 변론 (10-15절):</h2>
                        <p>관리들과 백성이 예레미야를 심문하려고 모입니다.</p>
                        <p>예레미야는 자신이 여호와의 말씀을 전한 것뿐이라고 변론합니다.</p>
                        <p>회개하고 여호와의 말씀을 따르지 않으면 재앙이 임할 것이라고 다시 경고합니다.</p>
                        <p>예레미야는 자신이 죽게 되더라도 여호와의 말씀을 전한 것이라며, 그의 피가 무죄하다고 주장합니다.</p>
                        <h2>오늘의 기도</h2>
                        <p>사랑의 하나님 </p>
                        <p>예레미야가 주님의 말씀을 전하는 데 두려워하지 않았던 용기와 신앙을 감사드립니다.</p> 
                        <p>주님께서 그를 통해 우리에게 회개와 순종의 중요성을 가르쳐 주심을 깨닫습니다.</p>
                        <p>우리가 주님의 말씀을 따르지 않고, 우리의 길로만 행할 때가 많았음을 고백합니다. 주님의 음성에 귀 기울이며, 우리의 마음을 돌이켜 주님의 뜻을 따르게 하소서. </p>
                        <p>우리의 삶 속에서 주님의 말씀을 전하는 도구가 되게 하시고, 그 말씀을 두려움 없이 전하는 용기를 주옵소서.</p>
                        <p>주님, 예레미야처럼 진리를 전하다가 어려움을 겪는 모든 이들을 기억하며 기도합니다. 그들이 주님의 보호와 인도하심을 경험하게 하시고, 그들의 마음에 평안과 담대함을 주시옵소서. </p>
                        <p>주님의 말씀을 전하는 이들이 어떤 상황에서도 흔들리지 않도록, 주님의 능력으로 채워 주시옵소서.</p>
                        <p>우리의 삶 속에서도 주님의 진리가 드러나고, 주님의 사랑이 전해지기를 소망합니다. </p>
                        <p>우리가 주님의 말씀에 순종하며 살아갈 때, 주님께서 주시는 축복과 평안을 경험하게 하시고, 주님의 영광을 드러내는 삶이 되게 하소서.</p>
                        <p>이 모든 기도를 예수 그리스도의 이름으로 기도드립니다. 아멘.</p>`;
                } else if (selectedDay == 2 && month == 6) { // 7월 2일 추가 (6은 7월을 의미)
                    content.innerHTML = `
                        <h1>예레미야 26:16-24 요약</h1>
                        <h2>예레미야의 무죄 판결 (16절)</h2>
                        <p>관리들과 백성들이 예레미야가 여호와의 이름으로 말했으므로 사형에 처할 만한 죄가 없다고 판결.</p>
                        <h2>장로들의 옹호 (17-19절)</h2>
                        <p>장로들이 예레미야를 옹호하며, 예언자 미가야의 예언을 상기시킴.</p>
                        <p>미가야는 히스기야 왕 때 재앙을 예언했지만, 히스기야 왕은 회개하여 재앙을 면함.</p>
                        <h2>우리야의 예 (20-23절)</h2>
                        <p>예언자 우리야가 여호야김 왕의 치세에 예레미야와 같은 예언을 했으나, 왕이 그를 죽이려 함.</p>
                        <p>우리야는 이집트로 도망쳤지만, 잡혀와 죽임을 당함.</p>
                        <h2>아히감의 보호 (24절)</h2>
                       <p> 사반의 아들 아히감이 예레미야를 보호하여 백성이 그를 죽이지 못하게 함.</p>
                       
                       <h2>오늘의 기도 </h2>
                       <p>사랑의 하나님</p>
                        <p>예레미야를 보호하사 그의 생명을 지켜주신 주님께 감사드립니다.</p>
                        <p>주님의 말씀을 전하는 자들을 주님께서 항상 지키시고 인도하심을 믿습니다. </p>
                        <p>우리도 주님의 말씀을 전할 때, 주님께서 우리와 함께 하시며 우리를 지켜주실 것을 믿습니다.</p>
                        <p>우리가 주님의 뜻을 따를 때, 때로는 어려움과 박해를 받을지라도, 예레미야처럼 담대하게 주님의 말씀을 전하게 하소서. </p>
                        <p>주님의 진리를 위해 용기 있게 서게 하시고, 우리를 보호하시는 주님의 손길을 의지하게 하소서.</p>
                        <p>주님, 우리의 삶 속에서 진리를 전하고자 할 때, 주님께서 아히감과 같은 사람들을 보내어 우리를 도우시고 보호하게 하시기를 기도합니다.</p>
                        <p>주님께서 우리에게 지혜를 주시고, 주님의 뜻을 분별할 수 있는 능력을 허락하여 주옵소서.</p>
                        <p>예레미야가 주님의 말씀을 전하며 경험했던 모든 상황 속에서 주님의 인도하심과 보호하심을 본받아, 우리도 주님의 길을 따르며 주님의 영광을 드러내는 삶을 살게 하소서. </p>
                        <p>주님의 뜻을 이루기 위해 우리를 사용하여 주시고, 주님의 말씀을 전하는 데 있어서 주님께서 주시는 용기와 힘으로 나아가게 하소서.</p>
                        <p>이 모든 기도를 예수 그리스도의 이름으로 기도드립니다. 아멘.</p>


                       
                        `;



 } else if (selectedDay == 3 && month == 6) { // 7월 2일 추가 (6은 7월을 의미)
                    content.innerHTML = `
                        <h1>예레미야 27:1-11 요약</h1>
                        <h2>상징적 행위 (1-4절)</h2>
                        <p>여호와께서 예레미야에게 말씀하시며, 나무와 가죽으로 멍에를 만들어 자신의 목에 걸고, 유다 왕 시드기야에게 전하라고 하십니다.</p>
                        <p>또한 이 멍에를 통해 에돔, 모압, 암몬, 두로, 시돈의 왕들에게 여호와의 메시지를 전하게 하십니다.</p>
                        <h2>바벨론의 권세 (5-7절)</h2>
                        <p>여호와께서는 자신이 땅과 사람과 짐승을 창조하셨으며, 그것을 자기 뜻대로 주신다고 말씀하십니다.</p>
                        <p>지금은 바벨론 왕 느부갓네살에게 모든 나라를 주셨으며, 모든 나라가 그에게 복종할 것이라고 하십니다.</p>
                        <p>느부갓네살의 아들과 손자도 왕이 될 것이며, 정해진 때가 오기까지 여러 나라가 그를 섬기게 될 것이라고 예언합니다.</p>
                        <p>거짓 예언에 대한 경고 (8-11절)</p>
                        <p>여호와께서는 바벨론 왕을 섬기지 않고 멍에를 메지 않는 나라와 왕국은 전쟁, 기근, 전염병으로 멸망할 것이라고 경고합니다.</p>
                        <p>자신이 보내지 않은 거짓 예언자들에게 속지 말라고 경고하시며, 그들이 평안과 자유를 약속해도 믿지 말라고 하십니다.</p>
                        <p>그러나 바벨론 왕의 멍에를 메고 그를 섬기는 나라는 땅에 남아 경작하고 살 것이라고 말씀하십니다. </p>
                        <h2>오늘의 기도</h2>
                        <p>사랑의 하나님,예레미야를 통해 우리에게 주신 말씀에 감사드립니다. </p>
                        <p>주님께서 온 땅과 모든 생명을 창조하시고, 주님의 뜻대로 그것들을 다스리신다는 것을 깨닫게 하심에 감사합니다.  </p>
                        <p>우리가 주님의 권세를 인정하고, 주님의 말씀에 순종하게 하소서. </p>
                        <p>주님, 우리 삶 속에서도 때로는 이해할 수 없는 상황들이 닥쳐올 때, 주님의 뜻을 구하며 주님께서 인도하시는 길을 따르기를 원합니다. </p>
                        <p>주님께서 말씀하신 것처럼, 거짓 예언자들의 달콤한 말에 속지 않게 하시고, 오직 주님의 진리만을 따르게 하소서. </p>
                        <p>바벨론의 멍에를 메고 주님의 뜻에 순종한 나라들이 평안을 얻었듯이, 우리도 주님의 뜻에 순종함으로 평안을 누리게 하소서. </p>
                        <p>주님께서 인도하시는 길을 따르며, 주님의 말씀에 귀 기울이고 그 뜻을 이루어가는 삶을 살게 하소서. </p>
                        <p>주님, 우리의 마음을 열어 주님의 진리를 받아들이게 하시고, 주님의 말씀을 우리의 삶 속에서 실천할 수 있는 지혜와 용기를 주옵소서. </p>
                        <p>우리가 주님의 말씀에 순종하며 살아갈 때, 주님께서 주시는 축복과 평안을 경험하게 하시고, 주님의 영광을 드러내는 삶을 살게 하소서. </p>
                        <p>이 모든 기도를 예수 그리스도의 이름으로 기도드립니다. </p>
                        <p>아멘</p>

                        `;


                    } else if (selectedDay == 4 && month == 6) { // 7월 2일 추가 (6은 7월을 의미)
                        content.innerHTML = `
                        <h1>예레미야 27:12-22 요약</h1>    
                        <h2>시드기야 왕에 대한 경고 (12-15절)</h2>
                            <p>예레미야는 유다 왕 시드기야에게 바벨론 왕의 멍에를 메고 그를 섬기라고 경고합니다.</p>
                            <p>예레미야는 바벨론 왕을 섬기지 않으면 전쟁, 기근, 전염병으로 멸망할 것이라고 경고합니다.</p>
                            <p>주님께서 자신을 보내지 않은 거짓 예언자들의 말을 듣지 말라고 경고합니다.</p>
                            <h2> 제사장들과 백성들에게 주는 메시지 (16-18절) </h2>
                            <p>예레미야는 제사장들과 백성들에게 성전 기물들이 곧 바벨론에서 돌아올 것이라고 예언하는 거짓 예언자들의 말을 듣지 말라고 경고합니다.</p>
                            <p>예레미야는 그들에게 바벨론 왕을 섬기고 살라고 촉구합니다.</p>
                            <p>예레미야는 거짓 예언자들이 진정으로 여호와의 예언자라면, 성전과 유다의 기물들이 바벨론으로 옮겨지지 않도록 기도하라고 도전합니다.</p>
                           <h2> 성전 기물에 대한 예언 (19-22절) </h2>
                            <p>여호와께서 남아 있는 성전 기물, 왕궁과 예루살렘의 기물들이 바벨론으로 옮겨질 것이라고 말씀하십니다.</p>
                            <p>그 기물들은 바벨론에서 오랫동안 머물게 될 것이며, 여호와께서 그들을 다시 돌이키실 때에만 돌아올 것이라고 예언합니다. </p>
                             <h2>오늘의기도</h2>
                             <p>사랑의 하나님,예레미야를 통해 주시는 경고의 말씀에 감사드립니다. </p>
                             <p>우리가 주님의 뜻을 따르고, 주님의 말씀에 순종하는 중요성을 깨닫게 하여 주옵소서. </p>
                             <p>시드기야 왕과 유다 백성들에게 하신 경고가 오늘 우리에게도 주시는 말씀임을 깨닫습니다.</p>
                            <p>주님, 우리가 거짓된 말에 현혹되지 않도록 지혜를 주시고, 오직 주님의 진리만을 따르게 하소서.</p>
                            <p>주님의 말씀을 왜곡하거나, 주님의 뜻을 벗어나지 않도록 우리의 마음과 생각을 지켜주시옵소서. </p>
                            <p>우리가 주님의 권면에 귀 기울이며, 주님의 인도하심을 따르는 순종의 삶을 살게 하소서.</p>
                            <p>주님, 우리가 어려움과 고난 속에서도 주님의 뜻을 신뢰하며, 주님께서 허락하신 길을 따르기를 원합니다. </p>
                            <p>바벨론에 옮겨진 성전 기물처럼, 우리의 삶 속에서도 때로는 이해할 수 없는 상황들이 있을지라도, 주님의 계획과 뜻을 신뢰하게 하소서. </p>
                            <p>주님께서 정하신 때에 모든 것을 회복하실 것을 믿습니다.</p>
                            <p>우리의 삶 속에서 주님의 뜻이 이루어지기를 기도합니다. </p>
                            <p>주님께서 우리에게 지혜와 인내를 주시고, 주님의 말씀에 순종하는 삶을 살게 하소서. 주님의 영광을 드러내며, 주님의 뜻을 이루기 위해 우리를 사용하여 주시옵소서.</p>
                            <p>이 모든 기도를 예수 그리스도의 이름으로 기도드립니다. </p>
                            <p>아멘.</p>
                            
    
                           
                            `;
                        } else if (selectedDay == 5 && month == 6) { // 7월 5일 
                            content.innerHTML = `
                               <h1>예레미야 28:1-17 요약</h1>
                                <h2>하나냐의 거짓 예언 (1-4절)</h2>
                                <p>유다 왕 시드기야 통치 제4년에 하나냐는 예레미야가 있는 여호와의 성전에서 모든 백성과 제사장들 앞에서 예언을 합니다.
                                <p>하나냐는 여호와께서 바벨론 왕의 멍에를 꺾으시고, 2년 안에 바벨론으로 끌려간 성전 기물들과 유다의 왕과 포로들을 예루살렘으로 돌아오게 하실 것이라고 말합니다.
                                <h2>예레미야의 응답 (5-9절)</h2>
                                <p>예레미야는 하나냐 앞에서 제사장들과 백성들에게 응답합니다.</p>
                                <p>예레미야는 평화를 예언하는 선지자의 예언이 성취되면 그가 진정으로 여호와께서 보낸 선지자임을 알게 될 것이라고 말합니다.</p>
                                하나냐의 행동과 예레미야의 경고 (10-11절)</h2>
                                <p>하나냐는 예레미야의 목에서 멍에를 빼앗아 부수며, 여호와께서 모든 나라의 멍에를 2년 안에 바벨론 왕 느부갓네살의 멍에에서 벗겨내겠다고 선언합니다.</p>
                                <p>예레미야는 이에 대해 말 없이 자리를 떠납니다.</p>
                                <h2>여호와의 말씀과 하나냐의 죽음 (12-17절)</h2>
                                <p>여호와께서 예레미야에게 다시 말씀하시며, 하나냐가 나무 멍에를 꺾었으나 이제는 철 멍에로 바꾸셨다고 전하라고 하십니다.</p>
                                <p>예레미야는 하나냐에게 이 사실을 전하며, 하나냐가 여호와의 명령을 따르지 않고 백성에게 거짓을 가르쳤기 때문에 여호와께서 그를 죽이실 것이라고 경고합니다.</p>
                                <p>그 해 7월에 하나냐는 여호와의 말씀대로 죽습니다.</p>
        
        
                               <h2>오늘의 기도</h2>
                               <p>사랑의 하나님</p>
                                <p>예레미야와 하나냐의 이야기를 통해 우리의 마음을 일깨워 주심에 감사드립니다. </p>
                                <p>주님, 우리의 삶 속에서도 진리를 분별할 수 있는 지혜를 주시고, 거짓된 가르침에 속지 않도록 우리를 인도하여 주옵소서.</p>
                                <p>하나님, 주님의 뜻을 알기 위해 항상 주님께 귀 기울이고, 주님의 말씀을 따르는 삶을 살기를 원합니다. </p>
                                <p>우리가 주님의 진리와 멀어지지 않도록 우리를 지켜주시고, 주님의 길에서 벗어나지 않도록 인도하여 주시옵소서.</p>
                                <p>주님, 우리의 신앙이 흔들릴 때에도 주님의 말씀에 굳게 서게 하시고, 어려운 상황 속에서도 주님의 뜻을 신뢰하며 따르게 하소서.</p> 
                               <p> 하나냐처럼 거짓된 안심을 주는 것이 아니라, 예레미야처럼 진리의 말씀을 전할 수 있는 용기를 주시옵소서.</p>
                               <p> 하나냐가 거짓 예언으로 인해 죽음을 맞이한 것처럼, 우리도 거짓된 길을 따르지 않도록 항상 깨어 있게 하시고, 주님의 말씀에 순종하는 삶을 살게 하소서. </p>
                               <p> 우리의 입술과 마음에서 주님의 진리가 떠나지 않게 하시고, 주님의 영광을 드러내는 삶을 살아가게 하소서.</p>
                               <p> 이 모든 기도를 예수 그리스도의 이름으로 기도드립니다. 아멘.</p>

                                `;

                            } else if (selectedDay == 6 && month == 6) { // 7월 2일 추가 (6은 7월을 의미)
                                content.innerHTML = `
                                    <h1>예레미야 29:1-14 요약</h1>
                                    <h2>편지의 배경 (1절)</h2>
                                    <p>예레미야는 예루살렘에서 바벨론으로 사로잡혀 간 장로들, 제사장들, 선지자들과 모든 백성에게 편지를 보냅니다. 이 편지는 예루살렘에서 바벨론으로 옮겨진 후 전해집니다.</p>
                                    <h2>여호와의 명령 (2-7절)</h2>
                                    <p>하나님은 예레미야를 통해 포로된 백성들에게 바벨론에서 집을 짓고, 정착하며, 자녀를 낳고, 그 땅의 평안을 구하며 살라고 말씀하십니다. 그들이 평안해야 자신들도 평안할 것이기 때문입니다.</p>
                                    <h2>거짓 선지자들을 경계 (8-9절)</h2>
                                    <p>하나님은 거짓 선지자들과 꿈꾸는 자들의 말을 듣지 말라고 경고하십니다. 그들은 하나님의 이름으로 거짓을 예언하고 있습니다.</p>
                                    <h2>바벨론에서의 70년 (10-11절)</h2>
                                    <p>하나님은 그들을 바벨론에 70년 동안 머물게 하신 후, 그들을 다시 이끌어 예루살렘으로 돌아오게 하실 것을 약속하십니다. </p>
                                    <p>하나님의 계획은 그들에게 평안을 주고, 미래와 희망을 주는 것입니다.</p>
                                    <h2>하나님의 약속 (12-14절)</h2>
                                    <p>하나님은 백성들이 하나님을 찾고 부르짖으면, 그들의 기도를 들으시고 그들을 만나 주실 것이라고 약속하십니다. </p>
                                    <p>하나님은 그들을 포로된 곳에서 다시 데리고 돌아오게 하실 것입니다.</p>
            
            
                                    <h2>오늘의 기도</h2>
                                    <p>사랑의 하나님</p>
                                    <p>예레미야를 통해 우리에게 주시는 말씀에 감사드립니다. </p>
                                    <p>바벨론으로 포로로 잡혀간 이스라엘 백성에게 주신 말씀처럼, 우리도 어려움과 고난 속에서도 주님의 뜻을 신뢰하며 살기를 원합니다. </p>
                                    <p>주님께서 우리에게 주신 평안을 구하며, 우리가 있는 곳에서 주님의 계획과 인도하심을 따르게 하소서.</p>
                                    <p>주님, 우리에게 거짓된 가르침과 예언을 하는 자들의 말을 분별할 수 있는 지혜를 주시옵소서. </p>
                                    <p>오직 주님의 진리만을 따라가며, 주님의 말씀을 믿고 따르도록 우리의 마음을 지켜주소서. </p>
                                    <p>주님께서 우리를 향해 가지신 계획이 평안과 희망임을 믿으며, 우리의 미래를 주님께 맡깁니다.</p>
                                    <p>하나님, 우리가 주님을 찾고 부르짖을 때마다 주님의 응답을 경험하게 하소서. 우리의 기도를 들으시고, 우리와 함께 하시는 주님을 더욱 깊이 체험하게 하옵소서.</p>
                                    <p>주님께서 우리를 포로된 상황에서 건져내어 자유롭게 하시고, 주님의 약속을 이루실 것을 믿습니다.</p>
                                    <p>주님, 우리 삶의 모든 순간마다 주님의 임재와 사랑을 느끼게 하시고, 주님의 계획 안에서 살아가도록 우리를 인도하여 주옵소서.</p>
                                    <p>우리의 모든 소망과 미래를 주님께 의탁하며, 주님의 영광을 드러내는 삶을 살게 하소서.</p>
                                    <p>이 모든 기도를 예수 그리스도의 이름으로 기도드립니다. </p>
                                    <p>아멘.</p>

                                   
                                    `;

                                } else if (selectedDay == 7 && month == 6) { // 7월 2일 추가 (6은 7월을 의미)
                                    content.innerHTML = `
                                        <h1>2024년 7월 7일은 주일입니다 😉</h1> 
                
                
                                       
                                        `;


                                    } else if (selectedDay == 8 && month == 6) { // 7월 2일 추가 (6은 7월을 의미)
                                        content.innerHTML = `
                                            <h1>준비중</h1> 
                    
                    
                                           
                                            `;

                                        } else if (selectedDay == 9 && month == 6) { // 7월 2일 추가 (6은 7월을 의미)
                                            content.innerHTML = `
                                                <h1>준비중</h1> 
                        
                        
                                               
                                                `;

                                            } else if (selectedDay == 10 && month == 6) { // 7월 2일 추가 (6은 7월을 의미)
                                                content.innerHTML = `
                                                    <h1>준비중</h1> 
                            
                            
                                                   
                                                    `;

                                                } else if (selectedDay == 11 && month == 6) { // 7월 2일 추가 (6은 7월을 의미)
                                                    content.innerHTML = `
                                                        <h1>준비중</h1> 
                                
                                
                                                       
                                                        `;

                                                    } else if (selectedDay == 12 && month == 6) { // 7월 2일 추가 (6은 7월을 의미)
                                                        content.innerHTML = `
                                                            <h1>준비중</h1> 
                                    
                                    
                                                           
                                                            `;

                                                        } else if (selectedDay == 13 && month == 6) { // 7월 2일 추가 (6은 7월을 의미)
                                                            content.innerHTML = `
                                                                <h1>준비중</h1> 
                                        
                                        
                                                               
                                                                `;

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
