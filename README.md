# SI Test demo
[![Build status](https://ci.appveyor.com/api/projects/status/uq1ms2ypfe44cn3r?svg=true)](https://ci.appveyor.com/project/MarShal69/container2)

# Домашнее задание к лекции «Занятие 8. Контейнеры»

### **Важные моменты** 

1. Каждая задача выполняется в виде отдельного проекта с собственным GitHub-репозиторием.
2. Код должен проходить ESLint без ошибок.
3. Тесты должны обеспечивать 100-процентное покрытие функций по строкам.
4. Решения должны быть построены на базе [шаблона webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе добавьте ссылки на ваши GitHub-проекты.

---

## `Set`

### Легенда

Игрок может выбирать персонажей на конкретный раунд, исходя из их состояния, уровня и стратегии игры. Вам нужно не давать возможность добавлять в команду одного и того же персонажа несколько раз.

### Описание

Создайте класс `Team` с методами `add`, `addAll` и `toArray`. Класс должен хранить данные о персонажах команды в поле типа `Set`:
```javascript
class Team {
    constructor() {
        this.members = new Set();
    }
    ...
}
```

Метод `add` должен добавлять выбранного персонажа в команду (объект класса `Character`). При этом такой объект уже существует в команде — дублирования быть не должно, должна генерироваться ошибка.

Метод `addAll` должен добавлять произвольное количество персонажей в команду — используйте rest-parameters. Задвоения быть не должно, ошибка генерироваться **не должна**.

Метод `toArray` должен производить конвертацию `Set` в массив.

Не забудьте написать Unit-тесты, которые обеспечивают 100-процентное покрытие тестируемых функций и классов.

---

## Map

### Легенда

Вы решили упорядочить работу с ошибками в своём приложении — ввести цетрализованно числовой код ошибки и её описание. При генерации любых ошибок в коде приложения брать их из централизованного хранилища.

### Описание

Создайте свой класс `ErrorRepository`, внутри которого храните `Map`. В нём ключ — это код ошибки (число), а значение — текстовое описание (читаемое человеком).

Реализуйте метод `translate(code)`, позволяющий по коду получить текст ошибки, а в случае отсутствия такого кода — возвращать строку `'Unknown error'`.

Не забудьте написать Unit-тесты, которые обеспечивают 100-процентное покрытие тестируемых функций и классов.

----

## Map * (задача со звёздочкой)

**Важно: это необязательная задача.**

### Легенда

Давать пользователю возможность кастомизировать внешний вид приложения — хорошая идея, поэтому вы решили также реализовать поддержку этой функции в игре.

### Описание

У вас есть дефолтные настройки, хранящиеся в `Map`:
1. `'theme': 'dark'`. Другие возможные значения — `'light'`, `'gray'`.
2. `'music': 'trance'`. Другие возможные значения — `'pop'`, `'rock'`, `'chillout'`, `'off'`.
3. `'difficulty': 'easy'`. Другие возможные значения — `'normal'`, `'hard'`, `'nightmare'`.

Напишите класс `Settings`, который содержит:
- набор настроек по умолчанию — хранить в `Map`;
- набор пользовательских настроек. Пользователь может установить конкретную настройку по имени и значению. Хранить в `Map` нужно только те настройки, которые пользователь установил.
- Get'тер `settings`, который возвращает `Map`, полученный путём наложения пользовательских настроек на дефолтные.

Не забудьте написать Unit-тесты, которые обеспечивают 100-процентное покрытие тестируемых функций и классов.
