function setDirection(direction) {
    const flexContainer = document.getElementById('flex-container');
    flexContainer.style.flexDirection = direction;
}

function setJustifyContent(justifyContent) {
    const flexContainer = document.getElementById('flex-container');
    flexContainer.style.justifyContent = justifyContent;
}

function setAlignItems(alignItems) {
    const flexContainer = document.getElementById('flex-container');
    flexContainer.style.alignItems = alignItems;
}