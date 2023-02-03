import ErrorRepository from '../app';


test.each([
  ['определённая ошибка - данные', 123, 'Ошибка в данных'],
  ['определённая ошибка - сервер', 125, 'Нет ответа от сервера'],
  ['неизвестная ошибка', 888, 'Unknown error'],
])(
  ('получение ошибки %s ошибки по коду %i'),
  (_, code, expected) => {
    const error = new ErrorRepository();
    const result = error.translate(code);

    expect(result).toBe(expected);
  },
);
