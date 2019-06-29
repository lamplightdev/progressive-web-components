import express from 'express';
const router = express.Router();

const delay = duration => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};

router.get('/', async (request, response) => {
  response.writeHead(200);
  response.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/css/app.css">
        <script type="module" src="/js/elements/x-item.js" async></script>
      </head>
      <body>
  `);
  response.write('<p>start</p>');

  for (let num = 0; num < 10; num++) {
    response.write(`
      <x-item num="${num}">
        <button>Click me ${num}</button>
      </x-item>
    `);
    await delay(1000);
  }

  const name = 'Ada';
  response.write(`
    <script type="module" src="/js/elements/x-form.js" async></script>
    <x-form name="${name}">
      <form>
        <input type="text" name="">
        <button>Go</button>
      </form>
    </x-form>
  `);

  await delay(1000);

  response.write('<p>end</p>');
  response.write(`
      </body>
    </html>
  `);
  response.end();
});

export default router;
