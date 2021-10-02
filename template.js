export default () => {
  return `<!doctype html>
  <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Security-Policy" content="default-src * 'self'; style-src * 'unsafe-inline'; script-src * 'unsafe-eval' 'self'; img-src https://localhost:3000 'self';">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto+Slab|Roboto:300,400,500,700" />
      </head>
      <body>
        <div id="root"></div>
        <script type="text/javascript" src="/dist/bundle.js"></script>
      </body>
    </html>`
}
