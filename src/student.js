import React from "react";

class Students extends React.Component{
    render(){
        const {name,marks} = this.props
        return(
            <>
            <h1>Hello, {name}</h1>
            <p>You have secured {marks} %</p>
            <hr/>
            </>
        )
    }
}

// function Students(props){
//     const {name, marks} = props
//     return(
//         <>
//              <h1>Hello, {name}</h1>
//              <p>You have secured {marks} %</p>
//              <hr/>
//              </>
//     )
// }

export default Students;