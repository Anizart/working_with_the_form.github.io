window.addEventListener('DOMContentLoaded', ()=> {
    const inputName = document.querySelector('#name'),
          inputEmail = document.querySelector('#email'),
          inputTel = document.querySelector('#tel'),
          btn = document.querySelector('.subscribe__btn'),

          hintName = document.querySelector('[data-hint-name]'),
          hintEmail = document.querySelector('[data-hint-email]'),
          hintTel = document.querySelector('[data-hint-tel]');

        //+ Показ и скрытие подсказок:
        showHint(inputName, hintName);
        showHint(inputEmail, hintEmail);
        showHint(inputTel, hintTel);

        //+ Обработка отправки формы:
        document.querySelector('.subscribe__form').addEventListener('submit', (event) => {
            event.preventDefault();
            if (!btn.disabled) {
                alert('Ваши данные приняты!');
                event.target.reset();
                validateForm(); //! вызывает проверку полей, чтобы снова отключить кнопку
            }
        });
        
        //! добавление обработчиков событий на поля input: (input — событие, которое срабатывает при любом изменении текста в поле.)(При каждом изменении вызывается validateForm, проверяя валидность всех полей и контролируя состояние кнопки.)
        inputName.addEventListener('input', validateForm);
        inputEmail.addEventListener('input', validateForm);
        inputTel.addEventListener('input', validateForm);

        function validateName() {
            const name = inputName.value.trim(); //! получает значение поля имени из нашей переменной и удаляет лишние пробелы.
            return /^[a-zA-Zа-яА-ЯёЁ]+$/.test(name); //! регулярное выражение для проверки, что строка содержит только буквы (латиницу и кириллицу). return — возвращает true, если проверка пройдена, иначе — false.
        }
        function validateEmail() {
            const email = inputEmail.value.trim();
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); //! регулярное выражение, которое требует формат вида: текст@текст.домен
        }
        function validateTel() {
            const tel = inputTel.value.trim();
            return /^\d{11}$/.test(tel); //! регулярное выражение, которое требует ровно 11 цифр.
        }

        function validateForm() {
            const isNameValid = validateName(),
                  isEmailValid = validateEmail(),
                  isTelValid = validateTel();

            if ((isNameValid && isEmailValid && isTelValid) === true) {
                btn.classList.add('active-btn');
                btn.disabled = false;
                console.debug('Done');
            } else {
                btn.classList.remove('active-btn');
                btn.disabled = true;
            }
        }

        //+ Показ и скрытие подсказок (Функции):
        function showHint(input, inputHint) {
            input.addEventListener('focus', () => { //! focus — событие, которое срабатывает, когда пользователь активирует поле ввода.
                inputHint.classList.add('active-hint');
            });
            input.addEventListener('blur', () => { //! blur — событие, которое срабатывает, когда пользователь покидает поле ввода.
                inputHint.classList.remove('active-hint');
            });
        }
});