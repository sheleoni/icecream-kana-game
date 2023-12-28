'use client';
// todo: change file name to DragAndDrop
import Image from "next/image";
import styles from "./DropArea.module.css";
import React, {Suspense} from "react";
import Loading from "@/app/user/collection/components/loading";

const DropArea = ({userIceCreamCollection}: any) => {

    const handleDrop = (event: React.DragEvent<HTMLUListElement>) => {
        event.preventDefault();
        let draggedData = event.dataTransfer.getData("text");
        const elementToAppend = document.getElementById(draggedData);
        if (elementToAppend) {
            event.currentTarget.appendChild(elementToAppend);
        } else {
            console.error('Element not found:', draggedData);
        }
    }

    const allowDrop = (event: React.DragEvent<HTMLUListElement>) => {
        event.preventDefault();
    }

    const handleDrag = (event: React.DragEvent<HTMLImageElement>) => {
        event.dataTransfer.setData("text", event.currentTarget.id);
    }

    return (
        <>
            <Suspense fallback={<Loading />}>
            <p>Hey client area here!</p>
                <ul onDrop={handleDrop} onDragOver={allowDrop}>
            {
                // todo: consider if index should be used in the id attribute
                userIceCreamCollection?.map((iceCream: any, index: any): any => { // todo: refine any type
                    return (
                        <li
                            key={index}
                            className={styles.draggableScoopList}
                        >
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
                        </li>
                    )
                })
            }
                </ul>
            </Suspense>
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
            <ul className={styles.droppableArea}
                 id="dumpArea"
                 onDrop={handleDrop}
                 onDragOver={allowDrop}
            >
                Hello drop me something
            </ul>
        </>
    );
}

export default DropArea;
