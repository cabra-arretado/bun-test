import figlet from "figlet";
import Endpoint from "endpoints/class";


let ENDPOINTS: Endpoint[] = [];


export default function router(request: Request) {
  let path = get_path(request);
  for (let endpoint of ENDPOINTS) {
    if (endpoint.path == path) {
      return endpoint.run(request);
    }
  }
  return new Response("Not found", { status: 404 });
}

function get_path(request: Request) {
  return new URL(request.url).pathname;
}
