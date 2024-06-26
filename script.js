
function updateFlexbox() {
    const direction = document.getElementById('direction').value;
    const justifyContent = document.getElementById('justify').value;
    const alignItems = document.getElementById('align').value;

    const flexContainer = document.getElementById('flex-container');
    flexContainer.style.flexDirection = direction;
    flexContainer.style.justifyContent = justifyContent;
    flexContainer.style.alignItems = alignItems;
}

window.onload = () => {
    updateFlexbox();
};