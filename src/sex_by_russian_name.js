window['SexByRussianName'] = (function(){

  function SexByRussianName(surname, first_name, patronymic) {
    this.surname = surname;
    this.first_name = first_name;
    this.patronymic = patronymic;
  };

  SexByRussianName.FEMALE = 0;
  SexByRussianName.MALE = 1;

  SexByRussianName.SURNAME = 0;
  SexByRussianName.PATRONYMIC = 1;
  SexByRussianName.FIRST_NAME = 2;

  SexByRussianName.surname_completions = [
    ['ова', 'ева', 'ина', 'ая', 'яя', 'екая', 'цкая'],
    ['ов', 'ев' ,'ин' ,'ын', 'ой', 'цкий', 'ский', 'цкой', 'ской']
  ];
  SexByRussianName.names = [
    ['авдотья', 'аврора', 'агата', 'агния', 'агриппина', 'ада', 'аксинья', 'алевтина', 'александра', 'алёна', 'алена', 'алина', 'алиса', 'алла', 'альбина', 'амалия', 'анастасия', 'ангелина', 'анжела', 'анжелика', 'анна', 'антонина', 'анфиса', 'арина', 'белла', 'божена', 'валентина', 'валерия', 'ванда', 'варвара', 'василина', 'василиса', 'вера', 'вероника', 'виктория', 'виола', 'виолетта', 'вита', 'виталия', 'владислава', 'власта', 'галина', 'глафира', 'дарья', 'диана', 'дина', 'ева', 'евгения', 'евдокия', 'евлампия', 'екатерина', 'елена', 'елизавета', 'ефросиния', 'ефросинья', 'жанна', 'зиновия', 'злата', 'зоя', 'ивонна', 'изольда', 'илона', 'инга', 'инесса', 'инна', 'ирина', 'ия', 'капитолина', 'карина', 'каролина', 'кира', 'клавдия', 'клара', 'клеопатра', 'кристина', 'ксения', 'лада', 'лариса', 'лиана', 'лидия', 'лилия', 'лина', 'лия', 'лора', 'любава', 'любовь', 'людмила', 'майя', 'маргарита', 'марианна', 'мариетта', 'марина', 'мария', 'марья', 'марта', 'марфа', 'марьяна', 'матрёна', 'матрена', 'матрона', 'милена', 'милослава', 'мирослава', 'муза', 'надежда', 'настасия', 'настасья', 'наталия', 'наталья', 'нелли', 'ника', 'нина', 'нинель', 'нонна', 'оксана', 'олимпиада', 'ольга', 'пелагея', 'полина', 'прасковья', 'раиса', 'рената', 'римма', 'роза', 'роксана', 'руфь', 'сарра', 'светлана', 'серафима', 'снежана', 'софья', 'софия', 'стелла', 'степанида', 'стефания', 'таисия', 'таисья', 'тамара', 'татьяна', 'ульяна', 'устиния', 'устинья', 'фаина', 'фёкла', 'фекла', 'феодора', 'хаврония', 'христина', 'эвелина', 'эдита', 'элеонора', 'элла', 'эльвира', 'эмилия', 'эмма', 'юдифь', 'юлиана', 'юлия', 'ядвига', 'яна', 'ярослава'],
    ['абрам', 'аверьян', 'авраам', 'агафон', 'адам', 'азар', 'акакий', 'аким', 'аксён', 'александр', 'алексей', 'альберт', 'анатолий', 'андрей', 'андрон', 'антип', 'антон', 'аполлон', 'аристарх', 'аркадий', 'арнольд', 'арсений', 'арсентий', 'артем', 'артём', 'артемий', 'артур', 'аскольд', 'афанасий', 'богдан', 'борис', 'борислав', 'бронислав', 'вадим', 'валентин', 'валерий', 'варлам', 'василий', 'венедикт', 'вениамин', 'веньямин', 'венцеслав', 'виктор', 'вилен', 'виталий', 'владилен', 'владимир', 'владислав', 'владлен', 'всеволод', 'всеслав', 'вячеслав', 'гавриил', 'геннадий', 'георгий', 'герман', 'глеб', 'григорий', 'давид', 'даниил', 'данил', 'данила', 'демьян', 'денис', 'димитрий', 'дмитрий', 'добрыня', 'евгений', 'евдоким', 'евсей', 'егор', 'емельян', 'еремей', 'ермолай', 'ерофей', 'ефим', 'захар', 'иван', 'игнат', 'игорь', 'илларион', 'иларион', 'илья', 'иосиф', 'казимир', 'касьян', 'кирилл', 'кондрат', 'константин', 'кузьма', 'лавр', 'лаврентий', 'лазарь', 'ларион', 'лев', 'леонард', 'леонид', 'лука', 'максим', 'марат', 'мартын', 'матвей', 'мефодий', 'мирон', 'михаил', 'моисей', 'назар', 'никита', 'николай', 'олег', 'осип', 'остап', 'павел', 'панкрат', 'пантелей', 'парамон', 'пётр', 'петр', 'платон', 'потап', 'прохор', 'роберт', 'ростислав', 'савва', 'савелий', 'семён', 'семен', 'сергей', 'сидор', 'спартак', 'тарас', 'терентий', 'тимофей', 'тимур', 'тихон', 'ульян', 'фёдор', 'федор', 'федот', 'феликс', 'фирс', 'фома', 'харитон', 'харлам', 'эдуард', 'эммануил', 'эраст', 'юлиан', 'юлий', 'юрий', 'яков', 'ян', 'ярослав']
  ];
  SexByRussianName.patronymic_completions = [
    ['овна', 'евна', 'ична'],
    ['ович', 'евич', 'ич']
  ];

  /**
   * @return {Number} 0 - женский, 1 - мужской, undefined - не определен
   */
  SexByRussianName.prototype.get_gender = function() {
    var genders_on_names = [this.gender_by(SexByRussianName.SURNAME, this.surname),
                            this.gender_by_first_name(),
                            this.gender_by(SexByRussianName.PATRONYMIC, this.patronymic)];

    var gender = this.determine_gender(genders_on_names)

    return gender;
  };

  /**
   * @private
   */
  SexByRussianName.prototype.determine_gender = function(genders) {
    var male = false,
        female = false,
        gender = undefined;

    for (var i=0; i < 3; i++){
      if (genders[i] === SexByRussianName.MALE) male = true;
      if (genders[i] === SexByRussianName.FEMALE) female = true;
    }

    if (male && !female) gender = SexByRussianName.MALE;
    if (!male && female) gender = SexByRussianName.FEMALE;

    return gender;
  }

  /**
   * @private
   */
  SexByRussianName.prototype.gender_by_first_name = function() {
    var gender = undefined,
        first_name = this.normalize(this.first_name);

    if (this.is_popular_name(first_name, SexByRussianName.FEMALE)) gender = SexByRussianName.FEMALE;
    if (this.is_popular_name(first_name, SexByRussianName.MALE)) gender = SexByRussianName.MALE;

    return gender;
  }

  /**
   * @private
   */
  SexByRussianName.prototype.gender_by = function(name_type, string) {
    var gender = undefined,
        name = this.normalize(string);

    if (this.is_correct(name, name_type, SexByRussianName.FEMALE)) gender = SexByRussianName.FEMALE;
    if (this.is_correct(name, name_type, SexByRussianName.MALE)) gender = SexByRussianName.MALE;

    return gender;
  }

  /**
   * Возвращает true или false, если окончание соответствует формальным правилам
   * @param {String} string (Например: "Иванова")
   * @param {Number} type, или окончание фамилии (1), или окончание отчества (0) (Например: 1)
   * @param {Number} gender, или мужской род (1), или женский род (0) (Например: 0)
   * @return {Boolean} (Например: true)
   * @private
   */
  SexByRussianName.prototype.is_correct = function(string, type, gender) {
    var is_correct = false,
        completions;

      switch (type){
        case SexByRussianName.SURNAME:
          completions = SexByRussianName.surname_completions[gender];
          break;
        case SexByRussianName.PATRONYMIC:
          completions = SexByRussianName.patronymic_completions[gender];
      }

    for (var i=0; i<completions.length; i++){
      var completion = this.completion(string, completions[i].length);
      if (completion === completions[i]) is_correct = true;
    }

    return is_correct;
  }

  /**
   * @return {Boolean}
   * @private
   */
  SexByRussianName.prototype.is_popular_name = function(first_name, gender) {
    var is_popular_name = false,
        names = SexByRussianName.names[gender];

    for (var i=0; i<names.length; i++){
      if (first_name === names[i]) is_popular_name = true;
    }

    return is_popular_name;
  }

  /**
   * Возвращает окончание слова
   * @param {String} string (Например: "Иванова")
   * @param {Number} count (Например: 4)
   * @return {String} (Например: "нова")
   * @private
   */
  SexByRussianName.prototype.completion = function(string, count){
    var completion = string.substr((string.length - count), (string.length - 1));

    return completion;
  }

  /**
   * @private
   */
  SexByRussianName.prototype.normalize = function(string) {
    var normal_string = string.toLowerCase();
    normal_string = normal_string.replace(/\s/g, '');

    return normal_string;
  }

  return SexByRussianName;
})();
