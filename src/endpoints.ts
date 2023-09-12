import figlet from "figlet";
import { Endpoint } from "./types";

export default class FigletMe extends Endpoint {
  constructor() {
    super("/figlet_me", ["GET", "POST"]);
  }
  async get(request: Request) {
    return new Response(figlet.textSync("Hello World!"));
  }
  async post(request: Request) {
    let body = await request.text();
    console.log(body);
    return new Response(figlet.textSync(body));
  }
}
