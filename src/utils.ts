export function logger(request: Request, e?: Error) {
  console.log("Request:", request);
  if (e) {
    console.log("Error:", e.message);
  }
}
