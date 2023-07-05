import React from 'react';

export default function Cards(props) {
    return (
        <div className='container my-3'>
            <div className={`card mx-5 bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? "dark" : "light"}`} style={{ width: "18rem" }}>
                <img style={{ width: "287px", height: "187px" }} src={props.urlToImage} className="card-img-top" alt="error" />
                <div className="card-body">
                    <h5 className="card-title">{props.title.slice(0, 45)}...</h5>
                    <p className="card-text">{props.description.slice(0, 107)}...</p>
                    <a href={props.url} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    );
}
