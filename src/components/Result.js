import React, { useState } from "react";

const Result = ({score, resetInstance}) => (
    <div className="score-board">
        <div className="score">You scored {score} / 5 correct answers!</div>
        <button className="playBtn" onClick={resetInstance}>
            Play again!
        </button>
    </div>
)

export default Result;