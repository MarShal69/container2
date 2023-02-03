export default class ErrorRepository {
// class ErrorRepository {
  constructor() {
    this.map = new Map([[123, 'Ошибка в данных'],
      [125, 'Нет ответа от сервера'],
    ]);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}


// const error = new ErrorRepository();
// error.translate(123);
// error.translate(8888);
