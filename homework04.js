//1) using '?' or '||'
  function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }
  // function pow(x, n)
  //pow(2,3) = 2*2*2;
  function pow(x, n) {
    let result = x;
    for(let i =1; i < n; i++){
        result = result *x;
    }
    return result;
  }
  let x = prompt("x?", '');
  let n = prompt("n?", '');

  if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
  alert( pow(x, n) );  
}

// using arrrow function
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask(
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение")
  )
  //sort in descending order
  let arr = [5, 2, 1, -10, 8];
  arr.sort((a,b) => b-a);
  alert(arr); 

  // array transforming 
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };

  let users = [ vasya, petya, masha ];
  let names =  users.map(item => item.name);
  alert( names ); // Вася, Петя, Маша

  //object transforming
  let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
  let petya = { name: "Петя", surname: "Иванов", id: 2 };
  let masha = { name: "Маша", surname: "Петрова", id: 3 };

  let users = [ vasya, petya, masha ];

  let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert( usersMapped[0].id ); 
alert( usersMapped[0].fullName );


//defining average age

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 29 };
  
  let arr = [ vasya, petya, masha ];
  
  alert( getAverageAge(arr) ); // 28

