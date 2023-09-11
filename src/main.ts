const server = Bun.serve({
  port: 3000,
  fetch(request) {
    console.log(request);
    return new Response("Welcome to Bun!");
  },
});

console.log(`Listening on localhost:${server.port}`);
