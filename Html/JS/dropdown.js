function toggleDropdown() {
    const buttons = document.querySelector('.buttons');
    if (buttons.style.display === 'flex') {
        buttons.style.display = 'none';
    } else {
        buttons.style.display = 'flex';
    }
}