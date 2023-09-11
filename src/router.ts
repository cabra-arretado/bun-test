import figlet from "figlet";

export default function router(request: Request) {
  switch (get_path(request)) {
    case "/bun":
      return new Response(figlet.textSync("Hello"))
    default:
      return new Response("Welcome to Bun!");
}
}

function get_path(request: Request) {
  return new URL(request.url).pathname;
}
