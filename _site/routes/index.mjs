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
        <script type="module" src="/js/elements/x-container.js" async></script>
      </head>
      <body>
  `);
  response.write('<p>start</p>');

  const items = [...Array(10).keys()].map(i => {
    return {
      id: i,
      name: `Click me ${i}`
    };
  });

  response.write('<x-container>');

  for (let item of items) {
    response.write(`
      <p>
        <x-item num="${item.id}">
          <button>Click me ${item.name}</button>
        </x-item>
      </p>
    `);
    await delay(1000);
  }

  response.write('</x-container>');

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
