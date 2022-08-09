import react from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="">
            <p className="f3">
                {'The eye will detect faces in your pictures'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type = 'text' onChange={onInputChange}/>
                    <button className="ba b--white-025 w-30 grow f4 link ph3 pv2 white bg-light-blue borderline 0" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm