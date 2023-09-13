import { logger } from "./utils";
import { IDict, Endpoint } from "./types";
import FigletMe from "./endpoints";

const ENDPOINTS: IDict<Endpoint> = {"/figlet_me": new FigletMe()};

export default function router(request: Request) {
  let path = get_path(request);
  console.log(path);
  try {
    return ENDPOINTS[path].run(request);
  } catch (e: any) {
    logger(request, e);
    return new Response("Not found", { status: 404 });
  }
}

function get_path(request: Request) {
  return new URL(request.url).pathname;
}

