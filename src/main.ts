import router from "./router";

const server = Bun.serve({
  port: 3000,
  fetch(request) {
    // console.log(request.url);
    // return new Response("Welcome to Bun!");
    return router(request);
  },
});

console.log(`Listening on localhost:${server.port}`);

