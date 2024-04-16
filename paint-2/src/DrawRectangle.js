import { useEffect, useRef, useState } from "react";
import index from "./index.css";

const DrawRectangle = () => {


    const startDrawing = () => {

    };

    const draw = () => {

    };

    const stopDrawing = () => {

    };


    return (
        <div>
            <canvas className="canvas-kasse"
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            >

            </canvas>
        </div>
    )
}