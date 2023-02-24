export default function CustomizePanel(props) {
    const handleOut = () => {
        props.chooseActiveEl("hidden")
    }
    return <>
        <div className={`panel flex justify-between ${props.activeEl}`}>
            <p>choose your {props.activeEl} color:</p>
            <p onClick={handleOut} className=" font-bold cursor-pointer">X</p>
        </div>
    </>
} 