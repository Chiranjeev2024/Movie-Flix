import React from "react";


class MovieCard extends React.Component{

    constructor(){
        super();
        this.state = {
            title : "The Avengers",
            plot : "Supernatural powers shown in the movie.",
            price:199,
            rating:9.0,
            stars:0,
            fav: false,
            cart: false
        }
    }

    

    addStars=()=>{

        if(this.state.stars >=5){
            return;
        }

        this.setState({
            stars: this.state.stars + 0.5
        })
    }

    decStars=()=>{

        if(this.state.stars <=0){
            return;
        }

        this.setState({
            stars: this.state.stars - 0.5
        })
    }


    handleFav = () => {
        this.setState({
            fav: !this.state.fav
        })
    }


    handleCart = () => {
        this.setState({
            cart: !this.state.cart
        })
    }



    
    render(){
        const {title,plot,price,rating,stars,fav,cart} = this.state;
        return(
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img src="https://m.media-amazon.com/images/I/71ZHb1BBmwL._SL1000_.jpg" alt="Poster" />
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img src="https://cdn-icons-png.flaticon.com/128/43/43625.png" alt="" className="str-btn" onClick={this.decStars}/>
                                <img src="https://cdn-icons-png.flaticon.com/128/477/477406.png" alt="star"  className="stars"/>
                                
                                <img src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png" alt="" className="str-btn" onClick={this.addStars}/>
                                <span className="starCount">{stars}</span>
                            </div>

                            {/* 1st way to design the fav button 
                             {fav? <button className="unfavourite-btn" onClick={this.handleFav}>Unfavourite</button>: 
                            <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

                            
                            {/* 1st way to design the fav button */}
                            <button className= {fav? "unfavourite-btn":"favourite-btn"}
                            onClick={this.handleFav}>{fav? "Unfavourite":"Favourite"}</button>
                            
                           

                            <button className= {cart? "uncart-btn":"cart-btn"}
                            onClick={this.handleCart}>{cart? "Remove from Cart":"Add to Cart"}</button>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;