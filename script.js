// Common functionality for all pages

// Toggle lyrics display
function toggleLyric(id) {
    const modal = document.getElementById(id);
    // Find the button inside the .song-actions element before the modal
    const button = modal.previousElementSibling.querySelector('.lyric-button');

    if (modal.style.display === "block") {
        modal.style.display = "none";
        button.textContent = "Lihat Lirik";
    } else {
        modal.style.display = "block";
        button.textContent = "Sembunyikan Lirik";
    }
}
