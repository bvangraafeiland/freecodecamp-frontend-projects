export default function DrumPad({ children, file }) {
    return (
        <button id={file} className="drum-pad bg-gray-200 hover:bg-gray-400 p-4 text-lg font-semibold">
            <audio id={children} src={file} className="clip" />
            {children}
        </button>
    )
}