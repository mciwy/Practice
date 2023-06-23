# Практическая работа: Многостраничный поиск

Привет! Это практическое задание, представляющее собой простую веб-страницу с функциональностью поиска и отображением результатов.

## Файлы

- **index.html**: Основной файл HTML, содержащий разметку страницы и элементы поиска и результатов.
- **server.js**: Файл JavaScript, содержащий код для обработки событий и выполнения AJAX-запросов.
- **README.md**: Файл с описанием проекта и инструкциями.

## Функциональность

- В верхней части страницы отображается заголовок "Поиск".
- В блоке "search-container" находится поле ввода для ключевого слова и кнопка "Искать".
- При вводе ключевого слова и нажатии кнопки "Искать" происходит отправка асинхронного POST-запроса на сервер.
- Результаты поиска отображаются в блоке "results" в виде списка ссылок.
- Если результатов нет, выводится сообщение "Нет результатов".
- При клике на ссылку происходит переход на соответствующий URL.

### Инструкция по запуску кода через Node.js

1. Откройте командную строку или терминал и перейдите в каталог, где находится файл `server.js`.
2. Запустите сервер, выполнив команду: ``` node server.js ```
3. После запуска сервера, вы увидите сообщение `App started on port 3000`, что означает, что сервер успешно запущен.
4. Теперь вы можете открыть веб-браузер и перейти по адресу `http://127.0.0.1:3000`, чтобы просмотреть приложение.
