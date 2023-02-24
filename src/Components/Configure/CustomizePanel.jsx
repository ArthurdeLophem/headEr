import { HexColorPicker } from "react-colorful";

export default function CustomizePanel(props) {
    const handleOut = () => {
        props.chooseActiveEl("hidden")
    }
    return <>
        <div className={`panel ${props.activeEl}`}>
            <div className={`w-full flex justify-between`}>
                <p>choose your {props.activeEl} color:</p>
                <p onClick={handleOut} className=" font-bold cursor-pointer">X</p>
            </div>
            <HexColorPicker className="picker mb-5" />
        </div>
    </>
} 