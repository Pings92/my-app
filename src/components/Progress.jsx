// import { useCallback } from "react"
function Progress({count, bgColor}){

    const progressBar = {width: `${count}%`};

    return (
        <>
            <p className="h1"> {count}% </p>

            <div className="progress">
                <div className="progress-bar progress-bar-stripped" role="progressbar"
                style={{width: '0%'}}>
                </div>
            </div>
        </>
    )
}
export default Progress