import DrumPad from "../components/DrumPad"
import {useState} from "react";

const buttons = [
    { key: 'q', file: 'alesis-d4fx-00.wav' },
    { key: 'w', file: 'alesis-d4fx-01.wav' },
    { key: 'e', file: 'alesis-d4fx-02.wav' },
    { key: 'a', file: 'alesis-d4fx-03.wav' },
    { key: 's', file: 'alesis-d4fx-04.wav' },
    { key: 'd', file: 'alesis-d4fx-05.wav' },
    { key: 'z', file: 'alesis-d4fx-06.wav' },
    { key: 'x', file: 'alesis-d4fx-07.wav' },
    { key: 'c', file: 'alesis-d4fx-08.wav' },
]

export default function DrumMachine() {
    const [sound, setSound] = useState('')

    return (
        <div id="drum-machine" className="w-1/2 m-auto">
            <div id="display">{sound}</div>
            <div className="grid grid-cols-3 gap-3 w-1/3 m-auto mt-10">
                { buttons.map(b =>
                    <DrumPad key={b.key} mapping={b.key} file={b.file} onPlay={setSound}>
                        { b.key.toUpperCase() }
                    </DrumPad>
                ) }
            </div>
        </div>
    )
}