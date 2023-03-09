import React from "react";
import { useHref, useLinkClickHandler } from "react-router-dom";

const SubmitButton = React.forwardRef(({ state, target }, ref) => {
  const handleClick = useLinkClickHandler("/shop", {
    replace: false,
    state,
    target,
  });

  return (
    <button
      className="to-shop button"
      aria-label="to-shop"
      href={useHref("/shop")}
      ref={ref}
      target={target}
      onClick={(event) => {
        if (!event.defaultPrevented) {
          handleClick(event);
        }
      }}
    >
      Shop now
    </button>
  );
});

export default SubmitButton;
