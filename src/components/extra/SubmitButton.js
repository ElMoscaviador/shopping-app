import React from "react";
import { useHref, useLinkClickHandler } from "react-router-dom";

const SubmitButton = React.forwardRef((props, ref) => {
  const handleClick = useLinkClickHandler(props.to, {
    replace: false,
    state: props.state,
    target: props.target,
  });
  
  return (
    <button
      className={`to-${props.keyword} button` || props.className}
      aria-label={`to-${props.keyword}`}
      href={useHref(props.to)}
      ref={ref}
      target={props.target}
      onClick={(event) => {
        if (!event.defaultPrevented) {
          handleClick(event);
        }
      }}
    >
      {props.children}
    </button>
  );
});

export default SubmitButton;
