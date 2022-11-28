let week = new Date().getDay()

console.log(week.toString());
switch (week) {

    case 1:
        console.log(`понедельник`);
        break;

    case 2:
        console.log(`вторник`);
        break;

    case 3: console.log(`среда`);
        break;

    case 4: console.log(`четверг`);
        break;

    case 5:
        console.log(`пятница`);
        break;

    case 6:
        console.log(`суббота`);
        break;

    case 7:
        console.log(`воскресения`);
        break;

    default:
        break;
}



let days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];
  let d = new Date();
  let n = d.getDay();
  
  let date = new Date();
  let dayWeek = [7, 1, 2, 3, 4, 5, 6][date.getDay()];
  
console.log(dayWeek);

  console.log(days[n]);


  