import React from "react";
// import styleModule from "./navbar.module.css"
import styled from "styled-components";

// class Navbar extends React.Component{
//     render(){
//         return(
//             <>
//             <div className={styleModule.nav}>
//                 <div className={styleModule.title}>Movie Flix</div>
//                 <div className={styleModule.cartContainer}>
//                     <img className={styleModule.cartIcon} src="https://cdn-icons-png.flaticon.com/128/891/891468.png" alt="Cart Icon" />

//                     <div className={styleModule.cartCount}>4</div>
//                 </div>
//             </div>
//             </>
//         )
//     }
// }

// export default Navbar;

// <------------------------------Styled Component ----------------------------->

const Nav = styled.div`
  height: 65;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between;
  alignitems: center;
  position: relative;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
  margin-left: 20px;
  margin-top: 10px;
  &:hover {
    color: linear-gradient(170deg, #1bc059, #0d47a1);
    font-size: 33px;
    cursor: pointer;
  }
`;

const CardContainer = styled.div`
  position: "relative";
  cursor: "pointer";
`;

const CardCount = styled.div`
  background-color: ${(props) => props.colo};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 20px;
  top: 9.4px;
  font-size: 8px;
  font-weight: bold;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const CardIcon = styled.img`
  height: 45px;
  margin-right: 20px;
  margin-top: 8px;
`;

function Navbar(props) {
  const { cartCount } = props;
  return (
    <>
      <Nav>
        <Title>Movie Flix</Title>
        <CardContainer>
          <CardIcon
            alt="Card Icon"
            src="https://cdn-icons-png.flaticon.com/128/891/891468.png"
          ></CardIcon>
          {/* <img src="https://cdn-icons-png.flaticon.com/128/891/891468.png" alt="Cart Icon"  style={styles.cartIcon}/> */}

          <CardCount colo="orange" show={cartCount === 0 ? false : true}>
            {cartCount}
          </CardCount>
        </CardContainer>
      </Nav>
    </>
  );
}

export default Navbar;

// <------------------------------Inline styling --------------------------------->

// const styles = {
//     nav : {
//         height: 65,
//         background : "#4276b2",
//         display : "flex",
//         justifyContent : "space-between",
//         alignitems : "center",
//         position : "relative"
//     },

//     title : {
//         fontSize : 30,
//         color : "#fff",
//         fontWeight : 600,
//         fontFamily : '"Montserrat", sans-serif',
//         // textTransform : u
//         marginLeft : 20,
//         marginTop : 15
//     },

//     cartContainer : {
//         position : "relative",
//         cursor : "pointer"
//     },

// cartIcon : {
//     height : 45,
//     marginRight : 20,
//     marginTop : 8
// },

//     cartCount : {
//         background : "orange",
//         borderRadius : "45%",
//         padding : "4px 8px",
//         position : "absolute",
//         right : 19.5,
//         top : 7,
//         fontSize : 10,
//         fontWeight : "bold"
//     }
// }
