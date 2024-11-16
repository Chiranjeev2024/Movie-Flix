import React from "react";
import styleModule from "./navbar.module.css"

class NavbarModule extends React.Component{
    render(){
        return(
            <>
            <div className={styleModule.nav}>
                <div className={styleModule.title}>Movie Flix</div>
                <div className={styleModule.cartContainer}>
                    <img className={styleModule.cartIcon} src="https://cdn-icons-png.flaticon.com/128/891/891468.png" alt="Cart Icon" />

                    <div className={styleModule.cartCount}>4</div>
                </div>
            </div>
            </>
        )
    }
}

export default NavbarModule;