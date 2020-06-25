import {useEffect, useRef} from "react";

export default function DrumPad({ children, file, mapping, onPlay }) {
    const audioEl = useRef()
    function playSound() {
        onPlay(file)
        audioEl.current.play()
    }

    useEffect(() => {
        document.addEventListener('keyup', event => {
            if (event.key.toLowerCase() === mapping) {
                playSound()
            }
        }, )
    }, [])

    return (
        <button id={file} onClick={playSound} className="drum-pad bg-gray-200 hover:bg-gray-400 p-4 text-lg font-semibold">
            <audio id={children} src={`/sounds/${file}`} ref={audioEl} className="clip" />
            {children}
        </button>
    )
}