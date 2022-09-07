import React from "react";
const RecetaItem = (props) => {
    const { title, subtitle, imagen, body} = props;
    
    return (
        <div className="recetas">
            <div>
            <h2>{title}</h2>
            <img src={imagen}/>
            </div>
            <div>
                <div>
                    <li>{subtitle}</li>
                </div> 
                <div dangerouslySetInnerHTML={{ __html: body }}/>
                <hr />
                </div>
            
        </div>
    );
}

export default RecetaItem;