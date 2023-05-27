import React, { createRef } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
import ReactCanvasPaint from 'react-canvas-paint'
import 'react-canvas-paint/dist/index.css'
import html2canvas from 'html2canvas'


function ScreenShots() {
    const ref = createRef(null);
    const [image, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    });

    const download = (image, { name = "img", extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    };

    const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

    return (
        <div>
            <button onClick={downloadScreenshot}>Download screenshot</button>
            <div ref={ref} className="border ">
                <ReactCanvasPaint width={1250} colors={['#7030A2', '#000000', '#0170C1', '#FE0002', '#FFFF01', '#ffffff']}/>
            </div>
        </div>
    );
}

export default ScreenShots;