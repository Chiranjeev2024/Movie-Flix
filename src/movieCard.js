import React from "react";

function MovieCard(props) {
  // addStars=()=>{

  //     if(this.state.stars >=5){
  //         return;
  //     }

  //     this.setState({
  //         stars: this.state.stars + 0.5
  //     })
  // }

  // decStars=()=>{

  //     if(this.state.stars <=0){
  //         return;
  //     }

  //     this.setState({
  //         stars: this.state.stars - 0.5
  //     })
  // }

  // handleFav = () => {
  //     this.setState({
  //         fav: !this.state.fav
  //     })
  // }

  // handleCart = () => {
  //     this.setState({
  //         isIncart: !this.state.isIncart
  //     })
  // }

  const { title, plot, price, rating, stars, fav, isIncart, poster } =
    props.movies;

  const { movies, addStars, subStars, favo, cart } = props;
  return (
    <div className="main">
      <div className="movie-card">
        <div className="left">
          <img src={poster} alt="Poster" />
        </div>

        <div className="right">
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">Rs. {price}</div>

          <div className="footer">
            <div className="rating">{rating}</div>
            <div className="star-dis">
              <img
                src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                alt="Decrease"
                className="str-btn"
                onClick={() => {
                  subStars(movies);
                }}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                alt="star"
                className="stars"
              />

              <img
                src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png"
                alt="Increase"
                className="str-btn"
                onClick={() => {
                  addStars(movies);
                }}
              />
              <span className="starCount">{stars}</span>
            </div>

            {/* 1st way to design the fav button 
                             {fav? <button className="unfavourite-btn" onClick={handleFav}>Unfavourite</button>: 
                            <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

            {/* 1st way to design the fav button */}
            <button
              className={fav ? "unfavourite-btn" : "favourite-btn"}
              onClick={() => {
                favo(movies);
              }}
            >
              {fav ? "Unfavourite" : "Favourite"}
            </button>

            <button
              className={isIncart ? "uncart-btn" : "cart-btn"}
              onClick={() => {
                cart(movies);
              }}
            >
              {isIncart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
