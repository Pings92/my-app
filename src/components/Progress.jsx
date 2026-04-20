// import { useCallback } from "react"
import React from "react";

function Progress({text, count, bgColor}){

    console.log(`Pourcentage ${text}`)

    const progressBar = {width: `${count}%`, height: "100%", backgroundColor: "blue"};
    return (
        // <>
        <div>
            <p className="h1"> {count}% </p>

            <div className="progress">
                <div className={`progress-bar progress-bar-striped bg-${bgColor}`} role="progressbar"
                style={progressBar}>
                </div>
            </div>
        </div>
        // </>
    )
}
export default React.memo(Progress)
// export default Progress