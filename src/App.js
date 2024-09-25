import './App.css';
import {useEffect, useState} from 'react';

function App() {
    const [display, setDisplay] = useState("");

    const audioList = [{
        key: "Q", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3", name: "Heater1"
    }, {
        key: "W", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3", name: "Heater2"
    }, {
        key: "E", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3", name: "Heater3"
    }, {
        key: "A", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3", name: "Heater4"
    }, {
        key: "D", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3", name: "Clap"
    }, {
        key: "S", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3", name: "Open-HH"
    }, {
        key: "Z", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3", name: "Kick_n_Hat"
    }, {
        key: "X", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3", name: "Kick"
    }, {key: "C", url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3", name: "Close-HH"},];

    const handlePlay = (audio) => {
        const audioElement = document.getElementById(audio.key);
        audioElement.currentTime = 0;
        audioElement.play().catch(console.error);
        setDisplay(audio.name);
    };

    const handleKeypress = (e) => {
        const keypressAudio = audioList.find((audio) => audio.key === e.key.toUpperCase());
        if (keypressAudio) {
            handlePlay(keypressAudio);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeypress);
        return () => {
            window.removeEventListener("keydown", handleKeypress); // Correct cleanup
        };
    }, []);

    return (<div id='drum-machine'>
        {audioList.map((audio) => (<button
            key={audio.key}
            className="drum-pad"
            onClick={() => handlePlay(audio)}
            id={`drum-${audio.key}`}
        >
            {audio.key}
            <audio id={audio.key} className="clip" src={audio.url}/>
        </button>))}
        <div id="display">{display}</div>
    </div>);
}

export default App;
