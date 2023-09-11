import { IDict } from "types";
import Endpoint from "endpoints/class";
import figlet_me from "endpoints/figlet_me";

const ENDPOINTS: IDict<Endpoint> = {"figlet_me": figlet_me};

export default function router(request: Request) {
  let path = get_path(request);
  try {
    return ENDPOINTS[path].run(request);
  } catch (e) {
    return new Response("Not found", { status: 404 });
  }
}

function get_path(request: Request) {
  return new URL(request.url).pathname;
}

