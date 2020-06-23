import DrumPad from "../components/DrumPad"

const buttons = [
    { key: 'q', file: 'audio-q' },
    { key: 'w', file: 'audio-w' },
    { key: 'e', file: 'audio-e' },
    { key: 'a', file: 'audio-a' },
    { key: 's', file: 'audio-s' },
    { key: 'd', file: 'audio-d' },
    { key: 'z', file: 'audio-z' },
    { key: 'x', file: 'audio-x' },
    { key: 'c', file: 'audio-c' },
]

export default function DrumMachine() {
    return (
        <div id="drum-machine" className="w-1/2 m-auto">
            <div id="display">

            </div>
            <div className="grid grid-cols-3 gap-3 w-1/3 m-auto mt-10">
                { buttons.map(b => <DrumPad file={b.file}>{ b.key.toUpperCase() }</DrumPad>) }
            </div>
        </div>
    )
}