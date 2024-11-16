import React from "react";
import MovieList from "./movieList";
import Students from "./student";
import Navbar from "./navbar";
import { movies } from "./moviesData";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount : 0
    };
  }

  handleIncStar = (movie) => {
    const { movies } = this.state;

    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars >= 5) {
      return;
    }

    movies[movieId].stars += 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;

    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars <= 0) {
      return;
    }

    movies[movieId].stars -= 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleFav = (movie) => {
    const { movies } = this.state;

    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies: movies,
    });
  };

  handleCart = (movie) => {
    let { movies, cartCount } = this.state;

    const movieId = movies.indexOf(movie);

    movies[movieId].isIncart? cartCount-=1:cartCount+=1;
  
    movies[movieId].isIncart = !movies[movieId].isIncart;

    this.setState({
      movies: movies,
      cartCount
    })

    console.log(cartCount)
  };
  render() {
    const {movies, cartCount} = this.state
    return (
      <>
        {/* <NavbarModule /> */}
        <Navbar cartCount = {cartCount}/>
        <MovieList movies = {movies}
                        addStars={this.handleIncStar}
                        subStars={this.handleDecStar}
                        favo={this.handleFav}
                        cart={this.handleCart}/>

        {/* <Students name="chiranjeev" marks={64.8}/>
      <Students name="rakesh" marks={57}/>
      <Students  /> */}
      </>
    );
  }
}

Students.defaultProps = {
  name: "student",
  marks: "N.A.",
};
export default App;
