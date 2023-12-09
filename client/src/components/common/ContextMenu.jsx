import React from "react";

function ContextMenu({ options, cordinates, ContextMenu, setContextMenu }) {
  const contextMenuRef = useRef(null);

  const handleClick = (e, callback) => {};
  return (
    <div
      className={`bg-dropdown-background fixed py-2 z-[100] top-[${cordinates.y}] left-[${cordinates.x}] shadow-xl`}
      ref={contextMenuRef}
    >
      <ul>
        {options.map(({ name, callback }) => (
          <li key={name} onClick={(e) => handleClick(e, callback)}>
            <span className="text-white">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextMenu;
