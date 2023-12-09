import React, { useState } from "react";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import ContextMenu from "./ContextMenu";

function Avatar({ type, image, setImage }) {
  const [hover, setHover] = useState(false);
  const [isContextMenuVisible, SetIsContextMenuVisible] = useState(false);
  const [contextMenuCordinates, SetContextMenuCordinates] = useState({
    x: 0,
    y: 0,
  });
  // state to call the context on clicking on the avatar picture
  const showContextMenu = (e) => {
    e.preventDefault();
    SetIsContextMenuVisible(true);
    SetContextMenuCordinates({ x: e.pageX, y: pageY });
  };

  return (
    <>
      <div className="flex items-center justify-center">
        {type === "sm" && (
          <div className="relative h-10 w-10">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "lg" && (
          <div className="relative h-14 w-14">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "xl" && (
          <div
            className="relative cursor-pointer z-0"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div
              className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 ${
                hover ? "visible" : "hidden"
              }`}
              onClick={(e) => showContextMenu(e)}
            >
              <FaCamera
                className="text-2xl"
                id="context-opener"
                onClick={(e) => showContextMenu(e)}
              />
              onClick={(e) => showContextMenu(e)}
              <span>
                change <br /> Profile <br /> picture
              </span>
            </div>
            <div className=" h-60 w-60">
              <Image src={image} alt="avatar" className="rounded-full" fill />
            </div>
          </div>
        )}
      </div>
      {isContextMenuVisible && (
        <ContextMenu
          options={contextMenuOptions}
          cordinates={contextMenuCordinates}
          ContextMenu={isContextMenuVisible}
          setContextMenu={SetIsContextMenuVisible}
        />
      )}
    </>
  );
}

export default Avatar;
