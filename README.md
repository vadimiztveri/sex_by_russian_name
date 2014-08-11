Javascript-библиотека для определения пола по фамилии, имени, отчеству на русском языке
=======================================================================================

[Демо](http://vadimiztveri.github.io/)


### Установка
Подключите к вашему приложению скрипт, например:

```html
<script src="sex_by_russian_name.js"></script>
```html

### Инициализация
`new SexByRussianName("Иванов", "Иван", "Иванович")`

Например:

```js
var sex_by_russian_name = new SexByRussianName("Иванов", "Иван", "Иванович");
```js


### Получение результата

```js
new SexByRussianName("Иванов", "Иван", "Иванович").get_gender()
```js

Например:

```js
var sex_by_russian_name = new SexByRussianName("Иванов", "Иван", "Иванович");
sex_by_russian_name.get_gender(); // 1 - мужской, 0 - женский, undefined - не определен.
```js


Как это работает
----------------

Скрипт сначала определяет пол у каждой части имени отдельно, а потом, исходя из полученных данных, возвращает результат.

[О способах определения пола по частям имени.](https://github.com/vadimiztveri/sex_by_russian_name/wiki/Определение-пола-по-частям-имени)

[О логике определения пола.](https://github.com/vadimiztveri/sex_by_russian_name/wiki/Логика-отпределения-пола)


Лицензия
--------

sex_by_russian_name является бесплатным ПО, подробности в файле LICENSE.


Авторы
------

Скрипт поддерживается «[Цифрономикой](http://cifronomika.ru/)».

Авторы:
* [Вадим Галкин](https://github.com/vadimiztveri/)
* [Александр Борисов](https://github.com/aishek)
* [Кирилл Храпков](https://github.com/cubbiu)
