// Purpose: Defines the endpoints for the API
class Endpoint {
  path: string;

  constructor(path: string) {
    if (!path_validator(path)) {
    this.path = path;
    } else {
      throw new Error("Invalid path");
    }
  }
}

function path_validator(path: string){
  return path.startsWith("/");
}
