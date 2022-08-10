import react from "react";

const Navigation = ({onRouteChange}) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p
                onClick={() => onRouteChange('Signin')} 
                className="f3 link dim black underline pa3 pointer">Sing Out</p>
        </nav>
    )
}

export default Navigation