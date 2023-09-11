import figlet from "figlet";

export default function router(request: Request) {
  switch (get_path(request)) {
    case "/figlet_me":
      return figlet_me(request);
    default:
      return new Response("Welcome to Bun!");
}
}

function get_path(request: Request) {
  return new URL(request.url).pathname;
}

async function figlet_me(request: Request) {
  if (request.method == "GET") {
    return new Response(figlet.textSync("Hello World!"));
  }
  if (request.method == "POST") {
    let body = await request.text();
    console.log(body);
    return new Response(figlet.textSync(body));
  }
  return new Response("Method not allowed", { status: 405 });
}
