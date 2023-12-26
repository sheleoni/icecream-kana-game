'use client';

import Image from "next/image";
import styles from "./DropArea.module.css";
import React from "react";

const DropArea = () => {

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        let draggedData = event.dataTransfer.getData("text");
        const elementToAppend = document.getElementById(draggedData);
        if (elementToAppend) {
            event.currentTarget.appendChild(elementToAppend);
        } else {
            console.error('Element not found:', draggedData);
        }
    }

    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const handleDrag = (event: React.DragEvent<HTMLImageElement>) => {
        event.dataTransfer.setData("text", event.currentTarget.id);
    }

    return (
        <>
            <p>Hey client area here!</p>
            <p>
                <Image src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1684249747/hiragana_game/icecream_scoops/%E3%81%86%E3%81%AA%E3%81%8D%E3%82%99_hejix5.png"
                       width={140}
                       height={150}
                       alt="draggable item"
                       id="draggableObject-1"
                       onDragStart={handleDrag}
                       draggable={true} />
            </p>
            <div className={styles.droppableArea}
                 id="dumpArea"
                 onDrop={handleDrop}
                 onDragOver={allowDrop}>
                Hello drop me something
            </div>
        </>
    );
}

export default DropArea;
