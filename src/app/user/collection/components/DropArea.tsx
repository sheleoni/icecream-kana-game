'use client';

import Image from "next/image";
import styles from "./DropArea.module.css";
import React from "react";

const DropArea = ({userIceCreamCollection}: any) => {

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
            {
                // todo: consider if index should be used in the id attribute
                userIceCreamCollection?.map((iceCream: any, index: any): any => { // todo: refine any type
                    return (
                        <>
                        <Image
                            id={`draggable_object_${index}`}
                            alt={iceCream.name}
                            key={index}
                            src={iceCream.imgURL}
                            width={140}
                            height={150}
                            onDragStart={handleDrag}
                            draggable={true}
                        />
                            {iceCream.name}
                        </>
                    )
                })
            }
            <p> Success Draggable Ice-cream scoop <br/>
                <Image
                    src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1684249747/hiragana_game/icecream_scoops/%E3%81%86%E3%81%AA%E3%81%8D%E3%82%99_hejix5.png"
                    width={140}
                    height={150}
                    alt="draggable item"
                    id="draggableObject-1"
                    onDragStart={(event) => handleDrag(event)}
                    draggable={true}
                />
            </p>
            {/* todo: (event) => handleDrop(event) works too. Research which way is better. */}
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
