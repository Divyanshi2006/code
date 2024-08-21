const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playlist = document.getElementById('playlist');
const title = document.getElementById('title');
let currentTrackIndex = 0;

const tracks = [
    { title: "Song 1 - Artist 1", src: "song1.mp3" },
    { title: "Song 2 - Artist 2", src: "song2.mp3" },
    { title: "Song 3 - Artist 3", src: "song3.mp3" }
];

function loadTrack(index) {
    audio.src = tracks[index].src;
    title.textContent = tracks[index].title;
    highlightTrack(index);
    audio.play();
    playPauseBtn.textContent = '⏸️';
}

function highlightTrack(index) {
    const items = playlist.querySelectorAll('li');
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
}

function playPauseTrack() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    }
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex > 0) ? currentTrackIndex - 1 : tracks.length - 1;
    loadTrack(currentTrackIndex);
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex < tracks.length - 1) ? currentTrackIndex + 1 : 0;
    loadTrack(currentTrackIndex);
}

function selectTrack(event) {
    const index = [...playlist.children].indexOf(event.target);
    currentTrackIndex = index;
    loadTrack(currentTrackIndex);
}

playPauseBtn.addEventListener('click', playPauseTrack);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
playlist.addEventListener('click', selectTrack);

// Load the first track and start playing
loadTrack(currentTrackIndex);
