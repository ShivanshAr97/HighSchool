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
            {/* <button className='text-center border bg-blue-400 text-white border-none font-bold py-1 px-4 rounded-lg flex mx-auto my-1'>Begin Practice</button> */}
            <button className='text-center border bg-blue-400 text-white border-none font-bold py-1 px-4 rounded-lg flex mx-auto my-2' onClick={downloadScreenshot}>Download screenshot</button>
            <div ref={ref} className="border ">
                <ReactCanvasPaint width={1250} colors={['black','white', "red", "yellow", "blue", "green"]}/>
            </div>
        </div>
    );
}

export default ScreenShots;