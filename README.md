Javascript-библиотека для определения пола по фамилии, имени, отчеству на русском языке
=======================================================================================

[Демо](http://vadimiztveri.github.io/)


Пример
------

Подключите скрипт:

```html
<script src="sex_by_russian_name.js"></script>
```

Пример инициализации и получения результата:

```js
var sex_by_russian_name = new SexByRussianName("Иванов", "Иван", "Иванович");
sex_by_russian_name.get_gender(); // 1 — мужской, 0 — женский, undefined — не определен.
```

Пример HTML-кода:

```html
<form>
  <p>
    <label for="surname">Фамилия:</label><br/>
    <input id="surname" type="text" onBlur="sexing()" />
  </p>

  <p>
    <label for="first_name">Имя:</label><br/>
    <input id="first_name" type="text" onBlur="sexing()" />
  </p>

  <p>
    <label for="patronymic">Отчество:</label><br/>
    <input id="patronymic" type="text" onBlur="sexing()" />
  </p>

  <p>
    <label for="result">Пол:</label><br/>
    <input id="male" name="sex" type="radio" onclick="manual_sex_choice()" /> мужской
    <input id="female" name="sex" type="radio" onclick="manual_sex_choice()" /> женский
  <p>
</form>

<script src="sex_by_russian_name.js"></script>

<script>
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
</script>
```

Как это работает
----------------

Скрипт сначала определяет пол у каждой части имени отдельно, а потом, исходя из полученных данных, возвращает результат.

[О способах определения пола в каждой части имени](https://github.com/vadimiztveri/sex_by_russian_name/wiki/Определение-пола-по-частям-имени)

[О логике итогового определения пола, после получения результатов из частей имени](https://github.com/vadimiztveri/sex_by_russian_name/wiki/Логика-отпределения-пола)


Лицензия
--------

sex_by_russian_name является бесплатным ПО, подробности в файле LICENSE.


Авторы
------

Автор: [Вадим Галкин](https://github.com/vadimiztveri/)

Благодарность:
* [Александр Борисов](https://github.com/aishek)
* [Кирилл Храпков](https://github.com/cubbiu)
