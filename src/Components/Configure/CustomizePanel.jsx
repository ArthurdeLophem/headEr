import { RgbaColorPicker } from "react-colorful";
import { useRef, useEffect, useState } from 'react';

export default function CustomizePanel(props) {
    const img = useRef()
    const [compimg, setCompimg] = useState(null);

    const handleImage = (e) => {
        const files = e.target.files[0];
        if (files) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(files);
            fileReader.addEventListener("load", function () {
                setCompimg(`${this.result}`)
            });
        }
    }

    const handleOut = () => {
        props.chooseActiveEl("hidden")
    }

    let drivers = false
    if (props.activeEl == "drivers") {
        drivers = true
    } else {
        drivers = false
    }

    return <>
        <div className={`panel ${props.activeEl}`}>
            <div className={`w-full flex justify-between`}>
                <p>choose your {props.activeEl} color:</p>
                <p onClick={handleOut} className=" font-bold cursor-pointer">X</p>
            </div>
            <RgbaColorPicker onChange={props.chooseColor} className="picker mb-5" />

            {drivers && (
                <div className="flex flex-col items-center gap-8 mb-4">
                    <div className="flex gap-4">
                        <label htmlFor="company_pic">Choose file to upload</label>
                        <input onChange={handleImage}
                            className="w-52"
                            type="file"
                            id="company_pic"
                            name="company_pic"
                            accept=".jpg, .jpeg, .png, svg" />
                    </div>
                    {compimg !== null && (<img src={compimg} alt="" />)}
                </div>
            )}

        </div>

    </>
}