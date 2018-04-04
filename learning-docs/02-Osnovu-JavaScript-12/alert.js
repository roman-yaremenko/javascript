var userName = prompt('Введите ваш логин', '');

if (userName == 'admin') {

	var pass = prompt('Введите ваш пароль', '');
	
	if (pass == 'password') {
		alert( 'Добро пожаловать');
	}	else if (pass == null) {
		alert('Вход отменён');
	} else {
		alert( 'Пароль неверен');
	}

} else if (userName == null) {
  alert( 'Вход отменён' );

} else {

  alert( 'Я вас не знаю' );
}
