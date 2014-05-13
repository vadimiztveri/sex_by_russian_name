describe("Sex#gender", function() {

  describe("undefined", function() {  
    it("returns undefined on empty", function() {
      var sex = new Sex("", "", "");
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on male surname and female first_name, patronymic", function() {
      var sex = new Sex("Иванов", "Людмила", "Ивановна")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on male first_name and female surname, patronymic", function() {
      var sex = new Sex("Иванова", "Игорь", "Ивановна")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on male patronymic and female surname, first_name", function() {
      var sex = new Sex("Иванова", "Людмила", "Иванович")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on female surname and male first_name, patronymic", function() {
      var sex = new Sex("Михайлова", "Олег", "Николаевич")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on female first_name and male surname, patronymic", function() {
      var sex = new Sex("Сидоров", "Ольга", "Петрович")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on female patronymic and male surname, first_name", function() {
      var sex = new Sex("Петров", "Василий", "Владимировна")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on female surname and male first_name, empty patronymic", function() {
      var sex = new Sex("Косова", "Николай", "")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on female surname and male patronymic, empty first_name", function() {
      var sex = new Sex("Светланова", "", "Ремович")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on female first_name and male surname, empty patronymic", function() {
      var sex = new Sex("Петров", "Ирина", "")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on female first_name and male patronymic, empty surname", function() {
      var sex = new Sex("", "Наталья", "Святославович")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on female patronymic and male surname, empty first_name", function() {
      var sex = new Sex("Кондратьев", "", "Викторовна")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on female patronymic and male first_name, empty surname", function() {
      var sex = new Sex("", "Потап", "Ремовна")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on male surname and female first_name, empty patronymic", function() {
      var sex = new Sex("Храпков", "Светлана", "")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on male surname and female patronymic, empty first_name", function() {
      var sex = new Sex("Галкин", "", "Вадимовна")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on male first_name and female surname, empty patronymic", function() {
      var sex = new Sex("Гончарова", "Александр", "")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on male first_name and female patronymic, empty surname", function() {
      var sex = new Sex("", "Вадим", "Олеговна")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on male patronymic and female surname, empty first_name", function() {
      var sex = new Sex("Короткова", "", "Борисович")
      expect(sex.get_gender()).toBeUndefined();
    });

    it("returns undefined on male patronymic and female first_name, empty surname", function() {
      var sex = new Sex("", "Вита", "Сергеевич")
      expect(sex.get_gender()).toBeUndefined();
    });
  });

  describe("fimale", function() {  
    describe("3 correct names", function() {
      it(("returns 0 for full name"), function() {
        var sex = new Sex("Михайлова", "Аглая", "Витальевна");
        expect(sex.get_gender()).toBeFemale();
      });
    });

    describe("2 correct names and empty surname", function() {
      it(("returns 0 for full name"), function() {
        var sex = new Sex("", "Виталия", "Мухтаровна");
        expect(sex.get_gender()).toBeFemale();
      });
    });

    describe("2 correct names and empty first_name", function() {
      it(("returns 0 for full name"), function() {
        var sex = new Sex("Козлова", "", "Лимоновна");
        expect(sex.get_gender()).toBeFemale();
      });
    });

    describe("2 correct names and empty patronymic", function() {
      it(("returns 0 for full name"), function() {
        var sex = new Sex("Паравозова", "Марина", "");
        expect(sex.get_gender()).toBeFemale();
      });
    });

    describe("patronymic", function() {
      var female_patronymic_completion = ['овна', 'евна', 'ична'],
          female_patronymic = ["Ивановна", "Витальевна", "Лукична"],
          spec_with_patronymic = function(patronymic, completion) {
            it(("returns 0 «" + completion + "»"), function() {
              var sex = new Sex("", "", patronymic);
              expect(sex.get_gender()).toBeFemale();
            });
          };

      for (var i=0; i < female_patronymic_completion.length; i++) {
        spec_with_patronymic(female_patronymic[i], female_patronymic_completion[i]);
      }
    });

    describe("supname", function() {  
      var female_surname_completion = ['ова', 'ева', 'ина', 'ая', 'яя', 'екая', 'цкая'],
          female_surname = ['Петрова', 'Елисеева', 'Коренина', 'Троцкая', 'Нижняя', 'Калекая', 'Блавацкая'],
          spec_with_surname = function(surname, completion){
            it(("returns 0 «" + completion + "»"), function() {
              sex = new Sex(surname, "", "")
              expect(sex.get_gender()).toBeFemale();
            });
          };

      for (var i=0; i < female_surname_completion.length; i++) {
        spec_with_surname(female_surname[i], female_surname_completion[i]);
      }
    });

    describe("first_name", function() {  
      var female_names = ['авдотья', 'аврора', 'агата', 'агния', 'агриппина', 'ада', 'аксинья', 'алевтина', 'александра', 'алёна', 'алина', 'алиса', 'алла', 'альбина', 'амалия', 'анастасия', 'ангелина', 'анжела', 'анжелика', 'анна', 'антонина', 'анфиса', 'арина', 'белла', 'божена', 'валентина', 'валерия', 'ванда', 'варвара', 'василина', 'василиса', 'вера', 'вероника', 'виктория', 'виола', 'виолетта', 'вита', 'виталия', 'владислава', 'власта', 'галина', 'глафира', 'дарья', 'диана', 'дина', 'ева', 'евгения', 'евдокия', 'евлампия', 'екатерина', 'елена', 'елизавета', 'ефросиния', 'ефросинья', 'жанна', 'зиновия', 'злата', 'зоя', 'ивонна', 'изольда', 'илона', 'инга', 'инесса', 'инна', 'ирина', 'ия', 'капитолина', 'карина', 'каролина', 'кира', 'клавдия', 'клара', 'клеопатра', 'кристина', 'ксения', 'лада', 'лариса', 'лиана', 'лидия', 'лилия', 'лина', 'лия', 'лора', 'любава', 'любовь', 'людмила', 'майя', 'маргарита', 'марианна', 'мариетта', 'марина', 'мария', 'марья', 'марта', 'марфа', 'марьяна', 'матрёна', 'матрена', 'матрона', 'милена', 'милослава', 'мирослава', 'муза', 'надежда', 'настасия', 'настасья', 'наталия', 'наталья', 'нелли', 'ника', 'нина', 'нинель', 'нонна', 'оксана', 'олимпиада', 'ольга', 'пелагея', 'полина', 'прасковья', 'раиса', 'рената', 'римма', 'роза', 'роксана', 'руфь', 'сарра', 'светлана', 'серафима', 'снежана', 'софья', 'софия', 'стелла', 'степанида', 'стефания', 'таисия', 'таисья', 'тамара', 'татьяна', 'ульяна', 'устиния', 'устинья', 'фаина', 'фёкла', 'феодора', 'хаврония', 'христина', 'эвелина', 'эдита', 'элеонора', 'элла', 'эльвира', 'эмилия', 'эмма', 'юдифь', 'юлиана', 'юлия', 'ядвига', 'яна', 'ярослава'],
          spec_with_name = function(first_name){
            it(("returns 0 «" + first_name + "»"), function() {
              var sex = new Sex("", first_name, "")
              expect(sex.get_gender()).toBeFemale();
            });
          };

      for (var i=0; i < female_names.length; i++) {
        spec_with_name(female_names[i]);
      }
    });
  });

  describe("male", function() {  
    describe("3 correct names", function() {
      it(("returns 1 for full name"), function() {
        var sex = new Sex("Фомин", "Владимир", "Кузьмич");
        expect(sex.get_gender()).toBeMale();
      });
    });

    describe("2 correct names and empty surname", function() {
      it(("returns 1 for full name"), function() {
        var sex = new Sex("", "Александр", "Сергеевич");
        expect(sex.get_gender()).toBeMale();
      });
    });

    describe("2 correct names and empty first_name", function() {
      it(("returns 1 for full name"), function() {
        var sex = new Sex("Медведев", "", "Анатольевич");
        expect(sex.get_gender()).toBeMale();
      });
    });

    describe("2 correct names and empty patronymic", function() {
      it(("returns 1 for full name"), function() {
        var sex = new Sex("Толстой", "Лев", "");
        expect(sex.get_gender()).toBeMale();
      });
    });

    describe("patronymic", function() {  
      var male_patronymic_completion = ['ович', 'евич', 'ич'],
          male_patronymic = ["Витайлевич", "Михайлович", "Лукич"],
          spec_with_patronymic = function(patronymic, completion) {
            it(("returns 1 «" + completion + "»"), function() {
              var sex = new Sex("", "", patronymic)
              expect(sex.get_gender()).toBeMale();
            });
          };

      for (var i=0; i < male_patronymic_completion.length; i++) {
        spec_with_patronymic(male_patronymic[i], male_patronymic_completion[i]);
      }
    });

    describe("supname", function() {

      var male_surname_completion = ['ов', 'ев' ,'ин' ,'ын', 'ой', 'цкий', 'ский', 'цкой', 'ской'],
          male_surname = ['Петров', 'Григорьев', 'Фомин', 'Мартын', 'Лихой', 'Чацкий', 'Спасский', 'Трубецкой', 'Городской'],
          spec_with_surname = function(surname, completion){
            it(("returns 1 «" + completion + "»"), function() {
              var sex = new Sex(surname, "", "")
              expect(sex.get_gender()).toBeMale();
            });
          };

      for (var i=0; i < male_surname_completion.length; i++) {
        spec_with_surname(male_surname[i], male_surname_completion[i]);
      }

    });

    describe("first_name", function() {  
      var male_names = ['абрам', 'аверьян', 'авраам', 'агафон', 'адам', 'азар', 'акакий', 'аким', 'аксён', 'александр', 'алексей', 'альберт', 'анатолий', 'андрей', 'андрон', 'антип', 'антон', 'аполлон', 'аристарх', 'аркадий', 'арнольд', 'арсений', 'арсентий', 'артём', 'артемий', 'артур', 'аскольд', 'афанасий', 'богдан', 'борис', 'борислав', 'бронислав', 'вадим', 'валентин', 'валерий', 'варлам', 'василий', 'венедикт', 'вениамин', 'веньямин', 'венцеслав', 'виктор', 'вилен', 'виталий', 'владилен', 'владимир', 'владислав', 'владлен', 'всеволод', 'всеслав', 'вячеслав', 'гавриил', 'геннадий', 'георгий', 'герман', 'глеб', 'григорий', 'давид', 'даниил', 'данил', 'данила', 'демьян', 'денис', 'димитрий', 'дмитрий', 'добрыня', 'евгений', 'евдоким', 'евсей', 'егор', 'емельян', 'еремей', 'ермолай', 'ерофей', 'ефим', 'захар', 'иван', 'игнат', 'игорь', 'илларион', 'иларион', 'илья', 'иосиф', 'казимир', 'касьян', 'кирилл', 'кондрат', 'константин', 'кузьма', 'лавр', 'лаврентий', 'лазарь', 'ларион', 'лев', 'леонард', 'леонид', 'лука', 'максим', 'марат', 'мартын', 'матвей', 'мефодий', 'мирон', 'михаил', 'моисей', 'назар', 'никита', 'николай', 'олег', 'осип', 'остап', 'павел', 'панкрат', 'пантелей', 'парамон', 'пётр', 'петр', 'платон', 'потап', 'прохор', 'роберт', 'ростислав', 'савва', 'савелий', 'семён', 'семен', 'сергей', 'сидор', 'спартак', 'тарас', 'терентий', 'тимофей', 'тимур', 'тихон', 'ульян', 'фёдор', 'федор', 'федот', 'феликс', 'фирс', 'фома', 'харитон', 'харлам', 'эдуард', 'эммануил', 'эраст', 'юлиан', 'юлий', 'юрий', 'яков', 'ян', 'ярослав'],
          spec_with_name = function(name){
            it(("returns 1 «" + name + "»"), function() {
              var sex = new Sex("", name, "")
              expect(sex.get_gender()).toBeMale();
            });

          };

      for (var i=0; i < male_names.length; i++) {
        spec_with_name(male_names[i]);
      }
    });
  });
});