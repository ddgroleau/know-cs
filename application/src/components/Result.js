import React, { useState } from "react";

const Result = ({score, resetInstance}) => (
    <div className="score-board">
        <div className="score">You answered {score} / 10 answers correctly.</div>
        <button className="playBtn" onClick={resetInstance}>
            Play again
        </button>
    </div>
)

export default Result;