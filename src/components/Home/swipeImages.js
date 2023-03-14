const swipeImages = (showcasedContainer) => {
  const numberOfImages = showcasedContainer.children.length;
  const numberOfFrameTransitions = 50;
  const totalNumberOfFrameTransitions = {
    "bounce-out": (k, a = 2.75, b = 1.5) =>
      1 -
      Math.pow(1 - k, a) *
        Math.abs(Math.cos(Math.pow(k, b) * (numberOfBounces + 0.5) * Math.PI)),
  };

  let actualNumberOfFramesUsed;
  let finalFrame;
  let frameID;
  let index = 0;
  let initialFrame;
  let lockedStatus;
  let numberOfBounces;
  let startingCoordinate;
  let windowWidth;

  function stopAnimation() {
    cancelAnimationFrame(frameID);
    frameID = null;
  }

  function animate(currentFrame = 0) {
    showcasedContainer.style.setProperty(
      "--index",
      initialFrame +
        (finalFrame - initialFrame) *
          totalNumberOfFrameTransitions["bounce-out"](
            currentFrame / actualNumberOfFramesUsed
          )
    );

    if (currentFrame === actualNumberOfFramesUsed) {
      stopAnimation();
      return;
    }

    frameID = requestAnimationFrame(animate.bind(this, ++currentFrame));
  }

  function unify(event) {
    return event.changedTouches ? event.changedTouches[0] : event;
  }

  function lock(event) {
    startingCoordinate = unify(event).clientX;
    lockedStatus = true;
  }

  function drag(event) {
    event.preventDefault();

    if (lockedStatus) {
      let differentiatedCoordinate = unify(event).clientX - startingCoordinate;
      let finalCoordinate = Number(
        differentiatedCoordinate / windowWidth
      ).toFixed(2);

      showcasedContainer.style.setProperty("--index", index - finalCoordinate);
    }
  }

  function move(e) {
    if (lockedStatus) {
      let differentiatedCoordinate = unify(e).clientX - startingCoordinate;
      let signOfDifferentiatedCoordinate = Math.sign(differentiatedCoordinate);
      let finalCoordinate = +(
        (signOfDifferentiatedCoordinate * differentiatedCoordinate) /
        windowWidth
      ).toFixed(2);

      initialFrame = index - signOfDifferentiatedCoordinate * finalCoordinate;

      if (
        (index > 0 || signOfDifferentiatedCoordinate < 0) &&
        (index < numberOfImages - 1 || signOfDifferentiatedCoordinate > 0) &&
        finalCoordinate > 0.2
      ) {
        index -= signOfDifferentiatedCoordinate;
        console.log(index);
        finalCoordinate = 1 - finalCoordinate;
      }

      finalFrame = index;
      actualNumberOfFramesUsed = Math.round(
        finalCoordinate * numberOfFrameTransitions
      );
      numberOfBounces = 2 + Math.round(finalCoordinate);
      animate();
      startingCoordinate = 0;
      lockedStatus = false;
    }
  }

  function size() {
    windowWidth = window.innerWidth;
  }

  size();
  showcasedContainer.style.setProperty("--numberOfImages", numberOfImages);

  window.addEventListener("resize", size, false);

  showcasedContainer.addEventListener("mousedown", lock, false);
  showcasedContainer.addEventListener("touchstart", lock, false);

  showcasedContainer.addEventListener("mousemove", drag, false);
  showcasedContainer.addEventListener("touchmove", drag, false);

  showcasedContainer.addEventListener("mouseup", move, false);
  showcasedContainer.addEventListener("touchend", move, false);
};

export default swipeImages;
