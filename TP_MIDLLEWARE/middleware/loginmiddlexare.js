exports.logingMiddleware = function logginMiddleware(request, response, next){
    console.log(`Request from ${request.ip} , ${request.method}, ${request.url} at ${new Date().toString()}`);
    next();
}

