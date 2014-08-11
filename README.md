Javascript-библиотека для определения пола по фамилии, имени, отчеству на русском языке
=======================================================================================

[Демо](http://vadimiztveri.github.io/)


### Установка
Подключите к вашему приложению скрипт, например:

```html
<script src="sex_by_russian_name.js"></script>
```

### Инициализация
```js
new SexByRussianName("Иванов", "Иван", "Иванович")
```

Например:

```js
var sex_by_russian_name = new SexByRussianName("Иванов", "Иван", "Иванович");
```


### Получение результата

```js
new SexByRussianName("Иванов", "Иван", "Иванович").get_gender()
```

Например:

```js
var sex_by_russian_name = new SexByRussianName("Иванов", "Иван", "Иванович");
sex_by_russian_name.get_gender(); // 1 — мужской, 0 — женский, undefined — не определен.
```

Пример
------

```html
<!-- HTML формы -->

<forms>
  <table>
    <tr>
      <td><label for="surname">Фамилия:</labal></td>
      <td><input id="surname" type="text" onBlur="sexing()" /></td>
    </tr>

    <tr>
      <td><label for="first_name">Имя:</labal></td>
      <td><input id="first_name" type="text" onBlur="sexing()" /></td>
    </tr>

    <tr>
      <td><label for="patronymic">Отчество:</labal></td>
      <td><input id="patronymic" type="text" onBlur="sexing()" /></td>
    </tr>

    <tr>
      <td><label for="result">Пол:</labal></td>
      <td><input id="male" name="sex" type="radio" onclick="manual_sex_choice()" /> мужской <input id="female" name="sex" type="radio" onclick="manual_sex_choice()" /> женский</td>
      <td></td>
    </tr>
  </table>
</forms>
```

```html
<!-- Инициализация скрипта -->

<script src="sex_by_russian_name.js"></script>
```

```js
// Скрипт, который получает из формы данные и передает классу SexByRussianName для определения.

// Результат отображается radio-кнопках.

var is_manual_sex_choice = false;

var manual_sex_choice = function() {
  is_manual_sex_choice = true;
}

var sexing = function () {
  if (!is_manual_sex_choice) {
    var surname = document.getElementById('surname').value,
        first_name = document.getElementById('first_name').value,
        patronymic = document.getElementById('patronymic').value,
        sex_by_russian_name = new SexByRussianName(surname, first_name, patronymic),
        gender = sex_by_russian_name.get_gender();

    switch(gender){
      case 0:
        document.getElementById('female').checked = true;
        break;
      case 1:
        document.getElementById('male').checked = true;
        break;
      default:
        document.getElementById('male').checked = false;
        document.getElementById('female').checked = false;
    }
  }
}
```

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
