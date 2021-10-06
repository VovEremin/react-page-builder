export function onDragStart(e: any) {
    const imgBefore = document.createElement('img');
    imgBefore.src = 'a';
    e.dataTransfer.setDragImage(imgBefore, 0, 0);
}