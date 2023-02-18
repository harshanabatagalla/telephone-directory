import React from "react";

const Header = () => {
    const headerStyle = {
        textAlign:"center",
        padding:20,
        background:'#000',
        color:'#fff',
        textTransform:'uppercase' 
        }
    
        return (
        <div style={headerStyle}>
            Phone directory
        </div>
    );
}

// class Header extends Component {
//     render() {
//         return (
//             <div className="header">
//                 Phone directory
//             </div>
//         );
//     }
// }

export default Header;