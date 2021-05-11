const { createServer } = require("http");
const { getMovies, getCategories, getMovie } = require("./utils");

const server  = createServer((req, res) => {

  const { method, url } = req;

  if(method === "GET" && url === "/movies")
  {
    const movies = getMovies();
    return successResponse(res, movies);
  } else if(method === "GET" && url === "/categories") {
    const categories = getCategories();
    return successResponse(res, categories);
  } else if(method === "GET" && url.includes("?id")) {
    const movieURL = new URL(url, `http://${req.headers.host}`);
    const id = movieURL.searchParams.get("id");
    const movie = getMovie(id);
    return successResponse(res, movie);
  } else {
    return notFoundResponse(res)
  }
})

const successResponse = (res, data) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
}

const notFoundResponse = res => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify({
    success: false,
    message: 'Not Found'
  }));
  res.end();
}

server.listen(3000);
