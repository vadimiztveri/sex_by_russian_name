Javascript-библиотека для определения пола по фамилии, имени, отчеству на русском языке
=======================================================================================

[Демо](http://vadimiztveri.github.io/)

JavaScript код, который по традиционным русским Имени, Фамилии и Отчеству определяет пол.

### Установка
Подключите к вашему приложению скрипт, например:

`<script src="SexByRussianName.js"></script>`

### Инициализация
`new SexByRussianName("Иванов", "Иван", "Иванович")`

Например:

`var sex_by_russian_name = new SexByRussianName("Иванов", "Иван", "Иванович");`

### Получение результата

`new SexByRussianName("Иванов", "Иван", "Иванович").get_gender()`

Например:

```
var sex_by_russian_name = new SexByRussianName("Иванов", "Иван", "Иванович");
sex_by_russian_name.get_gender();
```

### Формат ввода

Аргументы вводятся в виде строк (string):

* Первый аргумент: фамилия.
* Второй аргумент: имя.
* Третий аргумент: отчество.

Если нет одной из частей имени, то необходимо передать пустую строку (""). Например:

`var sex_by_russian_name = new SexByRussianName("Иванов", "", "");`


### Формат вывода

Метод *.get_gender* возвращает один из трех вариантов:

* *1* (мужской пол),
* *0* (женский пол),
* *undefined* (не удалось определить пол).


Как это работает
----------------

Скрипт сначала определяет пол у каждой части имени отдельно, а потом, исходя из полученных данных, возвращает результат.

[Поробнее о логике определения пола в вики.](https://github.com/vadimiztveri/sex_by_russian_name/wiki/Логика-отпределения-пола)


[Поробнее о способах определения пола по частям имени в вики.](https://github.com/vadimiztveri/sex_by_russian_name/wiki/Определение-пола-по-частям-имени)

Лицензия
--------

sexing_by_russian_name является бесплатным ПО, подробности в файле LICENSE.


Благодарность
-------------

Скрипт написан в студии «[Цифрономика](http://cifronomika.ru/)». Авторы:
* [Вадим Галкин](https://github.com/vadimiztveri/)
* [Александр Борисов](https://github.com/aishek)
* [Кирилл Храпков](https://github.com/cubbiu)
