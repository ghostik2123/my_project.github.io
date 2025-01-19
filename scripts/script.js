document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    
    const gagarinPhoto = document.querySelector('.card img[alt="Юрий Гагарин"]');
    if (gagarinPhoto) {
        gagarinPhoto.style.cursor = 'pointer';
        gagarinPhoto.addEventListener('click', function() {
            const speechBubble = document.createElement('div');
            speechBubble.textContent = 'Поехали!';
            speechBubble.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 10px 20px;
                border-radius: 20px;
                font-size: 24px;
                top: -50px;
                left: 50%;
                transform: translateX(-50%);
                animation: fadeInOut 2s ease-in-out;
            `;
            
            this.parentElement.style.position = 'relative';
            this.parentElement.appendChild(speechBubble);
            this.classList.add('gagarin-glow');
            
            setTimeout(() => {
                speechBubble.remove();
                this.classList.remove('gagarin-glow');
            }, 2000);
        });
    }

    const stars = document.createElement('div');
    stars.className = 'stars';
    hero.appendChild(stars);

    for (let i = 0; i < 5; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        hero.appendChild(shootingStar);
    }

    const solarSystem = document.createElement('div');
    solarSystem.className = 'solar-system';
    solarSystem.innerHTML = `
        <div class="sun"></div>
        <div class="orbit mercury-orbit"><div class="planet mercury"></div></div>
        <div class="orbit venus-orbit"><div class="planet venus"></div></div>
        <div class="orbit earth-orbit"><div class="planet earth"></div></div>
        <div class="orbit mars-orbit"><div class="planet mars"></div></div>
        <div class="orbit jupiter-orbit"><div class="planet jupiter"></div></div>
    `;
    hero.appendChild(solarSystem);

    const timelineItems = document.querySelectorAll('.timeline-item');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const pioneerCards = document.querySelectorAll('.card');
    pioneerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 8px 30px rgba(255, 255, 255, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('click', function() {
            const name = this.querySelector('h3').textContent;
            const pioneerInfo = {
                'Юрий Гагарин': {
                    birth: '9 марта 1934',
                    flight: '12 апреля 1961',
                    death: '27 марта 1968',
                    facts: `• Первый человек в космосе
                    • Продолжительность полета: 108 минут
                    • Максимальная высота полета: 327 км
                    • ${easterEggs['Юрий Гагарин']}`
                },
                'Сергей Королёв': {
                    birth: '12 января 1907',
                    flight: 'Главный конструктор 1950-1966',
                    death: '14 января 1966',
                    facts: `• Основоположник советской космонавтики
                    • Создатель первых искусственных спутников Земли
                    • Руководитель программы пилотируемых полетов
                    • ${easterEggs['Сергей Королёв']}`
                },
                'Валентина Терешкова': {
                    birth: '6 марта 1937',
                    flight: '16-19 июня 1963',
                    facts: `• Первая женщина-космонавт
                    • Позывной: "Чайка"
                    • Совершила 48 оборотов вокруг Земли
                    • ${easterEggs['Валентина Терешкова']}`
                },
                'Нил Армстронг': {
                    birth: '5 августа 1930',
                    flight: '20 июля 1969',
                    death: '25 августа 2012',
                    facts: `• Первый человек на Луне
                    • Командир миссии Apollo 11
                    • Провел на Луне 2 часа 31 минуту
                    • ${easterEggs['Нил Армстронг']}`
                },
                'Алексей Леонов': {
                    birth: '30 мая 1934',
                    flight: '18-19 марта 1965',
                    death: '11 октября 2019',
                    facts: `• Первый человек в открытом космосе
                    • Продолжительность выхода: 12 минут 9 секунд
                    • Командир советской части программы "Союз-Аполлон"
                    • ${easterEggs['Алексей Леонов']}`
                }
            };

            const info = pioneerInfo[name];
            const overlay = document.createElement('div');
            overlay.className = 'pioneer-overlay';
            
            overlay.innerHTML = `
                <div class="pioneer-info">
                    <div class="close-pioneer">×</div>
                    <h2>${name}</h2>
                    <div class="info-dates">
                        <p><strong>Дата рождения:</strong> ${info.birth}</p>
                        <p><strong>Дата полёта:</strong> ${info.flight}</p>
                        ${info.death ? `<p><strong>Дата смерти:</strong> ${info.death}</p>` : ''}
                    </div>
                    <div class="info-facts">
                        <h3>Интересные факты:</h3>
                        <p>${info.facts}</p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(overlay);
            
            setTimeout(() => overlay.classList.add('active'), 10);
            
            const closeBtn = overlay.querySelector('.close-pioneer');
            closeBtn.addEventListener('click', () => {
                overlay.classList.remove('active');
                setTimeout(() => overlay.remove(), 300);
            });
            
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.classList.remove('active');
                    setTimeout(() => overlay.remove(), 300);
                }
            });
        });
    });

    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            const date = this.querySelector('.date').textContent;
            const event = this.querySelector('.event').textContent;
            
            const documentEl = document.createElement('div');
            documentEl.className = 'event-document';
            
            documentEl.innerHTML = `
                <div class="document-content">
                    <div class="document-header">
                        <div class="stamp">РАССЕКРЕЧЕНО</div>
                        <h3 class="document-title">СОВЕРШЕННО СЕКРЕТНО</h3>
                        <div class="document-date">Дата: ${date} г.</div>
                        <div class="file-number">Дело №: ${date}/КС-${Math.floor(Math.random() * 1000)}</div>
                    </div>
                    <div class="document-body">
                        <p style="white-space: pre-line">${getDetailedDescription(date, event)}</p>
                    </div>
                </div>
                <div class="close-document">×</div>
            `;
            
            document.body.appendChild(documentEl);
            
            setTimeout(() => {
                overlay.classList.add('active');
                documentEl.classList.add('active');
            }, 10);
            
            const closeBtn = documentEl.querySelector('.close-document');
            const closeDocument = () => {
                documentEl.classList.remove('active');
                overlay.classList.remove('active');
                setTimeout(() => documentEl.remove(), 300);
            };
            
            closeBtn.addEventListener('click', closeDocument);
            overlay.addEventListener('click', closeDocument);
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
            20% { opacity: 1; transform: translateX(-50%) translateY(0); }
            80% { opacity: 1; transform: translateX(-50%) translateY(0); }
            100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
        }
    `;
    document.head.appendChild(style);

    const cardStyles = `
        .card img {
            width: 250px;
            height: 300px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .card img[alt="Юрий Гагарин"] {
            object-position: 85% center;
            cursor: pointer;
        }

        .card img[alt="Сергей Королёв"] {
            object-position: 40% center;
        }

        .card img[alt="Валентина Терешкова"] {
            object-position: 10% center;
        }

        .card img[alt="Нил Армстронг"] {
            object-position: 90% center;
        }

        .card img[alt="Алексей Леонов"] {
            object-position: 34% center;
        }
    `;

    const easterEggStyles = `
        .easter-egg-notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 15px 30px;
            border-radius: 5px;
            font-size: 16px;
            z-index: 1000;
            animation: slideUp 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
        }

        @keyframes slideUp {
            from {
                transform: translate(-50%, 100%);
                opacity: 0;
            }
            to {
                transform: translate(-50%, 0);
                opacity: 1;
            }
        }

        @keyframes fadeOut {
            to {
                opacity: 0;
                visibility: hidden;
            }
        }
    `;

    const floatingStyles = `
        .card {
            animation: floating 6s ease-in-out infinite;
            transition: all 0.3s ease;
        }

        .card:hover {
            animation-play-state: paused;
        }

        .card:nth-child(1) { animation-delay: 0s; }
        .card:nth-child(2) { animation-delay: 1s; }
        .card:nth-child(3) { animation-delay: 2s; }
        .card:nth-child(4) { animation-delay: 3s; }
        .card:nth-child(5) { animation-delay: 4s; }

        @keyframes floating {
            0% {
                transform: translateY(0px) rotate(0deg);
            }
            25% {
                transform: translateY(-10px) rotate(1deg);
            }
            50% {
                transform: translateY(0px) rotate(0deg);
            }
            75% {
                transform: translateY(10px) rotate(-1deg);
            }
            100% {
                transform: translateY(0px) rotate(0deg);
            }
        }

        .cards-container {
            perspective: 1000px;
        }

        .card img {
            transition: all 0.3s ease;
        }

        .card:hover img {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
    `;

    const overlayStyles = `
        .pioneer-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .pioneer-overlay.active {
            opacity: 1;
        }

        .pioneer-info {
            background: #1a1a1a;
            color: white;
            padding: 30px;
            border-radius: 15px;
            max-width: 600px;
            width: 90%;
            position: relative;
            transform: translateY(20px);
            transition: transform 0.3s ease;
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
        }

        .pioneer-overlay.active .pioneer-info {
            transform: translateY(0);
        }

        .close-pioneer {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 30px;
            cursor: pointer;
            color: #fff;
            transition: color 0.3s ease;
        }

        .close-pioneer:hover {
            color: #ff4444;
        }

        .pioneer-info h2 {
            margin: 0 0 20px 0;
            color: #fff;
            font-size: 24px;
        }

        .pioneer-info h3 {
            color: #fff;
            margin: 20px 0 10px 0;
        }

        .info-dates {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .info-dates p {
            margin: 10px 0;
            color: #ccc;
        }

        .info-facts p {
            color: #ccc;
            line-height: 1.6;
            white-space: pre-line;
        }

        .info-facts strong {
            color: #fff;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = cardStyles + easterEggStyles + floatingStyles + overlayStyles;
    document.head.appendChild(styleSheet);

    function showEasterEggNotification() {
        const notification = document.createElement('div');
        notification.className = 'easter-egg-notification';
        notification.textContent = '🎉 Найдена пасхалка! (Поехали!)';
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    if (gagarinPhoto) {
        gagarinPhoto.addEventListener('click', function(e) {
            e.stopPropagation();
            showEasterEggNotification();
        });
    }

    const easterEggs = {
        'Юрий Гагарин': `Мало кто знает, но перед полётом Гагарин оставил записку на случай 
        неудачи миссии. В ней он просил не винить никого в его смерти и писал о гордости быть 
        первым, кто отправится к звёздам. К счастью, записка не понадобилась. А свою знаменитую 
        фразу "Поехали!" он произнёс не по сценарию - это было искреннее восклицание!`,
        
        'Сергей Королёв': `В юности Королёв был планеристом и даже установил несколько рекордов. 
        В 1938 году его арестовали по ложному обвинению, и он работал в "шарашке" - тюремном КБ. 
        Там он чуть не погиб от цинги, но его спас другой заключённый-врач. После освобождения 
        он никогда не подписывал смертные приговоры.`,
        
        'Валентина Терешкова': `Во время полёта Терешкова обнаружила серьёзную ошибку в 
        программе корабля - он не снижался, а поднимался! Она сообщила об этом на Землю, и 
        специалисты срочно переписали программу. Если бы не её внимательность, корабль мог бы 
        улететь в открытый космос. А ещё она до сих пор единственная женщина, совершившая 
        одиночный космический полёт.`,
        
        'Нил Армстронг': `Армстронг чуть не погиб за несколько лет до полёта на Луну, 
        тестируя лунный тренажер LLRV. Аппарат потерял управление, и Армстронг катапультировался 
        буквально за секунду до взрыва. А свой знаменитый "маленький шаг" он репетировал 
        несколько месяцев, но в итоге всё равно перепутал слова от волнения.`,
        
        'Алексей Леонов': `Во время первого в истории выхода в открытый космос скафандр 
        Леонова раздулся так, что он не мог вернуться в шлюз. Не сообщая на Землю, он 
        принял решение стравить из скафандра воздух - это могло его убить. Уже в корабле 
        его сердце билось с частотой 190 ударов в минуту. А ещё он был талантливым художником 
        и первым человеком, рисовавшим космос с натуры.`
    };
});

function generateFileNumber(year) {
    const baseNumbers = {
        '1957': '761',
        '1959': '823',
        '1961': '452',
        '1963': '284',
        '1965': '183',
        '1969': '349',
        '1971': '527',
        '1981': '634',
        '1986': '748',
        '1998': '912',
        '2012': '156',
        '2020': '247'
    };

    return baseNumbers[year] || Math.floor(Math.random() * (999 - 100) + 100);
}

function getDetailedDescription(date, eventText) {
    const fileNumber = generateFileNumber(date);
    
    const descriptions = {
        '1957': `
            ОТЧЕТ О ЗАПУСКЕ ПЕРВОГО ИСКУССТВЕННОГО СПУТНИКА ЗЕМЛИ
            
            4 октября 1957 года в 22:28:34 по московскому времени был осуществлен успешный запуск первого искусственного спутника Земли.

            ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ:
            - Масса: 83,6 кг
            - Диаметр: 58 см
            - Период обращения: 96,7 минут
            - Высота орбиты: 228-947 км

            РЕЗУЛЬТАТ: Начало космической эры человечества.
        `,
        '1959': `
            ОТЧЕТ О ДОСТИЖЕНИИ ПОВЕРХНОСТИ ЛУНЫ СТАНЦИЕЙ "ЛУНА-2"
            
            14 сентября 1959 года автоматическая межпланетная станция "Луна-2" впервые в истории достигла поверхности Луны.

            ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ:
            - Масса: 390,2 кг
            - Скорость при столкновении: 3,3 км/с
            - Время полета: 33,5 часа
            - Точка падения: район Моря Ясности

            РЕЗУЛЬТАТ: Первое достижение поверхности другого небесного тела человеческим устройством.
        `,
        '1961': `
            ОТЧЕТ О ПЕРВОМ ПОЛЕТЕ ЧЕЛОВЕКА В КОСМОС
            
            12 апреля 1961 года в 9:07 по московскому времени с космодрома Байконур стартовал космический корабль "Восток-1" с первым космонавтом Земли - Юрием Алексеевичем Гагариным.

            ПАРАМЕТРЫ ПОЛЕТА:
            - Продолжительность: 108 минут
            - Максимальная высота: 327 км
            - Скорость: 27,4 тыс. км/ч
            - Количество витков: 1
            
            ИСТОРИЧЕСКИЕ СЛОВА: "Поехали!"

            РЕЗУЛЬТАТ: Первый в истории орбитальный полет человека вокруг Земли успешно завершен.
        `,
        '1963': `
            ОТЧЕТ О ПОЛЕТЕ ПЕРВОЙ ЖЕНЩИНЫ-КОСМОНАВТА
            
            16 июня 1963 года Валентина Терешкова стала первой женщиной в космосе.
            
            ПАРАМЕТРЫ ПОЛЕТА:
            - Корабль: "Восток-6"
            - Продолжительность: 2 суток 22 часа 50 минут
            - Позывной: "Чайка"
            - Количество витков: 48
            
            РЕЗУЛЬТАТ: Доказана возможность полетов женщин в космос.
        `,
        '1965': `
            ОТЧЕТ О ПЕРВОМ ВЫХОДЕ ЧЕЛОВЕКА В ОТКРЫТЫЙ КОСМОС
            
            18 марта 1965 года космонавт Алексей Леонов совершил первый в истории выход человека в открытый космос с корабля "Восход-2".

            ПАРАМЕТРЫ ВЫХОДА:
            - Продолжительность: 12 минут 9 секунд
            - Длина фала: 5,35 м
            - Температура: от -140°C до +150°C
            - Высота орбиты: 498 км

            РЕЗУЛЬТАТ: Доказана возможность работы человека в открытом космосе.
        `,
        '1969': `
            ОТЧЕТ О ВЫСАДКЕ ЧЕЛОВЕКА НА ЛУНУ
            
            20 июля 1969 года в 20:17:40 UTC лунный модуль корабля Apollo 11 совершил посадку в Море Спокойствия.

            ЭКИПАЖ:
            - Нил Армстронг (командир)
            - Базз Олдрин (пилот лунного модуля)
            - Майкл Коллинз (пилот командного модуля)

            ИСТОРИЧЕСКИЕ СЛОВА: 
            "Это один маленький шаг для человека, но гигантский скачок для человечества"

            РЕЗУЛЬТАТ: Первая высадка людей на другое небесное тело.
        `,
        '1971': `
            ОТЧЕТ О ЗАПУСКЕ ПЕРВОЙ ОРБИТАЛЬНОЙ СТАНЦИИ
            
            19 апреля 1971 года была выведена на орбиту первая в мире орбитальная станция "Салют-1".

            ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ:
            - Длина: 15,8 м
            - Максимальный диаметр: 4,15 м
            - Масса: 18,9 т
            - Объем жилых отсеков: 100 м³

            РЕЗУЛЬТАТ: Начало эры долговременных орбитальных станций.
        `,
        '1981': `
            ОТЧЕТ О ПЕРВОМ ПОЛЕТЕ МНОГОРАЗОВОГО КОСМИЧЕСКОГО КОРАБЛЯ

            12 апреля 1981 года состоялся первый полет космического корабля Space Shuttle Columbia.

            ПАРАМЕТРЫ ПОЛЕТА:
            - Продолжительность: 2 дня 6 часов
            - Экипаж: 2 человека
            - Орбита: 240-266 км
            - Количество витков: 37

            РЕЗУЛЬТАТ: Начало эры многоразовых космических кораблей.
        `,
        '1986': `
            ОТЧЕТ О ЗАПУСКЕ ОРБИТАЛЬНОЙ СТАНЦИИ "МИР"

            20 февраля 1986 года выведена на орбиту станция "Мир".

            ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ:
            - Масса: более 124 т
            - Длина: 33 м
            - Размах солнечных батарей: 29 м
            - Жилой объем: 350 м³

            РЕЗУЛЬТАТ: Создана первая модульная орбитальная станция.
        `,
        '1998': `
            ОТЧЕТ О НАЧАЛЕ СТРОИТЕЛЬСТВА МКС

            20 ноября 1998 года запущен первый модуль МКС - "Заря".

            ХАРАКТЕРИСТИКИ ПРОЕКТА:
            - Масса станции: более 400 т
            - Длина: 109 м
            - Размах солнечных батарей: 74 м
            - Жилой объем: 916 м³

            РЕЗУЛЬТАТ: Начало крупнейшего международного космического проекта.
        `,
        '2012': `
            ОТЧЕТ О ПОСАДКЕ МАРСОХОДА CURIOSITY

            6 августа 2012 года марсоход Curiosity совершил успешную посадку на Марс.

            ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ:
            - Масса: 899 кг
            - Размеры: 3 x 2,7 x 2,2 м
            - Мощность: 125 Вт
            - Скорость: до 90 м/ч

            РЕЗУЛЬТАТ: Самая сложная и успешная миссия на Марс.
        `,
        '2020': `
            ОТЧЕТ О ПЕРВОМ ПИЛОТИРУЕМОМ ПОЛЕТЕ CREW DRAGON

            30 мая 2020 года состоялся первый пилотируемый запуск корабля Crew Dragon.

            ЭКИПАЖ:
            - Даглас Хёрли
            - Роберт Бенкен

            ПАРАМЕТРЫ ПОЛЕТА:
            - Продолжительность: 64 дня
            - Высота орбиты: 408 км

            РЕЗУЛЬТАТ: Начало эры коммерческих пилотируемых полетов.
        `
    };

    return descriptions[date] || `
                                    СССР
                           СОВЕРШЕННО СЕКРЕТНО
                                 Экз. №1

                             Дата: ${date} г.
                         Дело №: ${date}/КС-${fileNumber}
    _____________________________________________________________________________

    ${eventText}
    .....................................................................................................................................

    Подпись уполномоченного лица _________________
    Дата: ${date} г.
    [ПЕЧАТЬ]`;
}

const documentStyles = `
    .document-content {
        background: #f4e4bc;
        padding: 40px;
        font-family: 'Times New Roman', serif;
        line-height: 1.5;
        color: #000;
        position: relative;
        border: 1px solid #8b4513;
        box-shadow: 0 0 15px rgba(0,0,0,0.2);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }

    .document-content::before {
        content: 'РАССЕКРЕЧЕНО';
        position: absolute;
        top: 20px;
        right: 20px;
        color: #cc0000;
        border: 2px solid #cc0000;
        padding: 5px 15px;
        transform: rotate(-15deg);
        font-weight: bold;
        font-size: 16px;
        text-rendering: optimizeLegibility;
    }

    .document-body {
        white-space: pre-wrap;
        font-size: 14px;
        font-weight: normal;
        letter-spacing: 0.2px;
        text-rendering: optimizeLegibility;
    }

    @media screen and (-webkit-min-device-pixel-ratio: 2),
           screen and (min-resolution: 192dpi) {
        .document-content {
            -webkit-font-smoothing: subpixel-antialiased;
        }
    }

    @media (max-width: 768px) {
        .document-content {
            padding: 20px;
            font-size: 12px;
        }
        
        .document-content::before {
            font-size: 14px;
            padding: 3px 10px;
        }
    }
`;