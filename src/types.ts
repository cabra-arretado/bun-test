export interface IDict<T> {
  [key: string]: T;
}

// Endpoint class to be used as a base for all endpoints

const ALLOWED_METHODS = ["GET", "POST", "PUT"];

export class Endpoint {
  path: string;
  supported_methods: string[];

  run(request: Request): Promise<Response> | Response {
    return this.method_router(request);
  }

  constructor(path: string, supported_methods: string[]) {
    if (path_validator(path)) {
    this.path = path;
    } else {
      throw new Error("Invalid path");
    }
    this.supported_methods = method_validator(supported_methods);
  }

  method_router(request: Request): Promise<Response> | Response {
    switch (request.method) {
      case "GET":
        return this.get(request);
      case "POST":
        return this.post(request);
      case "PUT":
        return this.put(request);
      default:
        return new Response("Method not allowed", { status: 405 });
    }
  }

  async get(request: Request): Promise<Response> {
    return new Response("Method not implemented", { status: 501 });
  }
  async post(request: Request): Promise<Response> {
    return new Response("Method not implemented", { status: 501 });
  }
  async put(request: Request): Promise<Response> {
    return new Response("Method not implemented", { status: 501 });
  }

}

//UTILS

function path_validator(path: string){
  //TODO: Expand functionality
  return path.startsWith("/");
}

function method_validator(methods: string[]): string[] {
  // Returns a list of valid methods included in the Endpoint
  let sanitized_methods: string[] = [];
  for (let method in methods) {
    if (method.toUpperCase() in ALLOWED_METHODS) {
      sanitized_methods.push(method.toUpperCase());
    }
  }
  return sanitized_methods;
}

