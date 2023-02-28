import { RgbaColorPicker } from "react-colorful";

export default function CustomizePanel(props) {
    let drivers = false

    const handleImage = (e) => {
        const files = e.target.files[0];
        if (files) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(files);
            fileReader.addEventListener("load", function () {
                props.chooseCompanyPic(`${this.result}`)
            });
        }
    }

    const handleOut = () => {
        props.chooseActiveEl("hidden")
    }

    const handleMic = (e) => {
        props.chooseMicState(e.target.checked)
    }

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
                    <div className="flex flex-col items-center gap-8 mb-4">
                        <div className="flex gap-4">
                            <label htmlFor="scales">microphone</label>
                            <input type="checkbox" onChange={handleMic} checked={props.mic} id="scales" name="scales" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <label htmlFor="company_pic">Choose file to upload</label>
                        <input onChange={handleImage}
                            className="w-52"
                            type="file"
                            id="company_pic"
                            name="company_pic"
                            accept=".jpg, .jpeg, .png, svg" />
                    </div>
                    {props.companyPic !== null && (<img className="w-24 h-24" src={props.companyPic} alt="custom company logo" />)}
                </div>
            )}
        </div>
    </>
}