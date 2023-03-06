//packages
import { RgbaColorPicker } from "react-colorful";

//components
import { useHeadphoneStore } from './HFStore';

export default function CustomizePanel(props) {
    let drivers = false
    const hfStore = useHeadphoneStore();

    const handleImage = (e) => {
        const files = e.target.files[0];
        if (files) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(files);
            fileReader.addEventListener("load", function () {
                hfStore.chooseCompanyPic(`${this.result}`)
            });
        }
    }

    const handleOut = () => {
        hfStore.chooseActiveEl("hidden")
    }

    const handleMic = (e) => {
        hfStore.chooseMic(e.target.checked)
    }

    if (hfStore.ActiveEl == "drivers") {
        drivers = true
    } else {
        drivers = false
    }

    return <>
        <div className={`panel ${hfStore.ActiveEl}`}>
            <div className={`w-full flex justify-between`}>
                <p>choose your {hfStore.ActiveEl} color:</p>
                <p onClick={handleOut} className=" font-bold cursor-pointer">X</p>
            </div>
            <RgbaColorPicker onChange={hfStore.chooseColor} className="picker mb-5" />

            {drivers && (
                <div className="flex flex-col items-center gap-8 mb-4">
                    <div className="flex flex-col items-center gap-8 mb-4">
                        <div className="flex gap-4">
                            <label htmlFor="scales">microphone</label>
                            <input type="checkbox" onChange={handleMic} checked={hfStore.Mic} id="scales" name="scales" />
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
                    {hfStore.CompanyPic !== null && (<img className="w-24 h-24" src={hfStore.CompanyPic} alt="custom company logo" />)}
                </div>
            )}
        </div>
    </>
}