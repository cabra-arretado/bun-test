// Purpose: Defines the endpoints for the API

const ALLOWED_METHODS = ["GET", "POST", "PUT"];

export default class Endpoint {
  path: string;
  supported_methods: string[];

  constructor(path: string, supported_methods: string[]) {
    if (!path_validator(path)) {
    this.path = path;
    } else {
      throw new Error("Invalid path");
    }
    this.supported_methods = method_validator(supported_methods);
  }
}

function path_validator(path: string){
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
