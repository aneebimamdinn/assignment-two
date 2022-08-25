import React from "react";

const Hoc = (Component,mainData) => {
    const NewComponet = () => {
        return(
            <div>
                <Component data={mainData}/>
            </div>
        )
    }
    return NewComponet;
}

export default Hoc;