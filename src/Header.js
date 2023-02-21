import React from "react";
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            {props.headding}
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