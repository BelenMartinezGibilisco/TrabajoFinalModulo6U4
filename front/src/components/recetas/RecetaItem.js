import React from "react";
const RecetaItem = (props) => {
    const { title, subtitle, imagen, body} = props;
    
    return (
        <div className="containerrecetas">
            <div className="receta">
            <h2>{title}</h2>
            <img src={imagen}/>
            <div>
                    <p>{subtitle}</p>
                </div>
            </div>
            <div className="receta" >
                <p dangerouslySetInnerHTML={{ __html: body }}/>
                </div>
            
        </div>
    );
}

export default RecetaItem;