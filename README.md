# Fake Movies API

A fake movies API with fake data about movies, based on the [Sample Movie API](sample-movie-api.web.app/).

## How To Use

The purpose of this repo is to work with fake movies data as a raw JSON data or with Node as a backend. It is easy to start with:

```sh
git clone https://github.com/mbougarne/fakeopenmovies.git
cd fakeopenmovies
npm start
```

Then you can access the endpoints on `http://localhost:3000`.

| Method | Endpoint     | Description                                                                                         |
| -------|------------- | --------------------------------------------------------------------------------------------------- |
| GET    | /movies      | Access to the all movies                                                                            |
| GET    | /categories  | Access to categories                                                                                |
| GET    | ?id          | You can access to a single movie in different way, only append the `?id={movieID}` to any endpoints |
