# Техническое задание

## Цели разработки

Данное приложение поможет контролировать ваши расходы и ваш бюджет.

## Функциональные требования

### Ключевые сущности системы

#### ● Пользователь

**Пользователь** — лицо, которое использует действующую систему для выполнения конкретной функции.

#### ● Бюджет

**Бюджет** — финансовый план определённого пользователя.

#### ● Расход

**Расход** — затраты в процессе деятельности, приводящие к уменьшению средств.

### Какие действия могут совершаться в системе

Пользователи системы могут осуществлять следующие действия:

* Аутентификация (вход в личный кабинет)
* Устанавливать месячный бюджет.
* Просмотр, добавление и анализ расходов.

### Функциональные блоки

#### ● Аутентификация и регистрация

К данному функциональному блоку относятся все процедуры и модули, отвечающие за регистраци и вход пользователя в личный кабинет.

#### ● Добавление расходов

Модули системы, относящиеся к добавлению расходов.

#### ● Редактирование бюджета

Модули системы, относящиеся к  редактированию бюджета

#### ● Анализ

Модули системы, относящиеся к визуальному анализу расходов

### Типы пользователей

Типы пользователей — это набор стартовых ролей в системе, необходимых для начального функционирования. В системе данные роли должны быть неудаляемыми.

#### ● Гость (анонимный пользователь)

Гость не имеет права входа в личный кабинет и пользования всеми возможностями и интерфейсами.

#### ● Пользователь

* Может входить в личный кабинет при помощи своей учетной записи
* Может пользоваться всеми возможностями приложения.

### Доступные интерфейсы системы

##### ● Фронт часть - презентационная страница
##### ● Главная страница
Данный интерфейс подразумевает центральный интерфейс для 
пользователя в авторизованном состоянии и предполагает наличие
 визуальных карточек для перехода к прочим внутренним 
интерфейсам системы

Элементы и блоки:
* Слайдер переключения месяцев
* Бюджет
* Карточки расходов

##### ● Бюджет
Данный интерфейс предназначен для просмотра и редактирования бюджета.
Данный интерфейс должен предоставлять следующие возможности:
* Добавление бюджета
* Редактирование бюджета

**Элементы и блоки:**
* Карточка бюджета
* Навигация по месяцам
* Форма изменение бюджета

##### ● Затраты
Данный интерфейс предназначен для просмотра и добавления затрат.
Данный интерфейс должен предоставлять следующие возможности:
* Добавление затрат
* Просмотр затрат
**Элементы и блоки:**
* Карточка расхода
* Форма добавления расхода
* Фильтр расхода
* Сравнение расходов

##### ● Форма добавления расхода
Данный интерфейс предназначен для добавления затрат.
**Элементы и блоки:**
* Дата
* Сумма
* Категория расхода
* Автоматическое добавление каждый месяц
* Фото
* Комментарий

##### ● Настройки
Данный интерфейс предназначен для просмотра информации пользователя и кастомизации настроек.
Данный интерфейс должен предоставлять следующие возможности:
* Просмотр карточки пользователя
* Выход из системы
* Изменение валюты
**Элементы и блоки:**
* Email
* Log Out кнопка
* Изменение валюты

##### ● Анализ данных
Данный интерфейс предназначен для анализа расходов пользователя.
Данный интерфейс должен предоставлять следующие возможности:
* Просмотр всех расходов за выбранный месяц
* Просмотр карточки расхода
* Фильтр расходов
* Сравнение расходов
* Анализ расходов (диаграммы)
**Элементы и блоки:**
* Карточка расхода
* Кнопка фильтра
* Кнопка переключения режима (текстовый анализ, визуальный анализ)

##### ● Фильтр
Данный интерфейс предназначен фильтрации расходов
**Элементы и блоки:**
* Выбор категории
* Выбор диапазона цены расхода
* Кнопка сброса фильтра
* Кнопка фильтрации

##### ● Визуальный анализ
Данный интерфейс предназначен анализа расходов на диаграммах
**Элементы и блоки:**
* Диаграмма соотношения бюджет/расходы за месяц
* Диграмма расходов по категориям
* Диграмма расходов по дням

##### ● Страница выбора для сравнение расходов месяцев
Данный интерфейс предназначен выбора месяцев для сравнения
**Элементы и блоки:**
* Выбор года и месяца

##### ● Страница анализа расходов месяцев
Данный интерфейс предназначен анализа сравнения расзодов разных месяцев
**Элементы и блоки:**
* Диаграмма сравнения бюджета
* Диаграмма сравнения расходов
* Диграмма сравнения расходов по категориям

## Стадии и этапы разработки

### Разработка технического задания

### Разработка диаграммы интерфейсов

### Разработка прототипов интерфейсов

### Разработка дизайн-системы и сборка визуальных макетов интефрейсов

### Верстка интефрейсов и frontend-разработка

### Программирование серверной логики (backend-разработка)