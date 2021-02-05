const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      const message = `Resolved after ${ms} ms`;
      resolve(message);
    }, ms);
  });
};

//
const logger = result => console.log(result);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
