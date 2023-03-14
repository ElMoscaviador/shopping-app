const swipeImages = (showcasedContainer) => {
  const numberOfImages = showcasedContainer.children.length;
  const numberOfFrameTransitions = 50;
  const totalNumberOfFrameTransitions = {
    linear: function (k) {
      return k;
    },
  };

  let actualNumberOfFramesUsed;
  let finalFrame;
  let frameID;
  let index = 0;
  let initialFrame;
  let lockedStatus;
  let startingCoordinate;
  let windowWidth;

  function animate(currentFrame = 0) {
    showcasedContainer.style.setProperty(
      "--index",
      initialFrame +
        (finalFrame - initialFrame) *
          totalNumberOfFrameTransitions["linear"](
            currentFrame / actualNumberOfFramesUsed
          )
    );

    if (currentFrame === actualNumberOfFramesUsed) {
      stopAnimation();
      return;
    }

    frameID = requestAnimationFrame(animate.bind(this, ++currentFrame));
  }

  function stopAnimation() {
    cancelAnimationFrame(frameID);
    frameID = null;
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
        finalCoordinate = 1 - finalCoordinate;
      }

      finalFrame = index;
      actualNumberOfFramesUsed = Math.round(
        finalCoordinate * numberOfFrameTransitions
      );
      animate();
      startingCoordinate = 0;
      lockedStatus = false;
    }
  }

  function resizeContainer() {
    windowWidth = window.innerWidth;
  }

  function setNumberOfImages() {
    showcasedContainer.style.setProperty("--numberOfImages", numberOfImages);
  }

  function addEventListeners() {
    window.addEventListener("resize", resizeContainer, false);
    showcasedContainer.addEventListener("mousedown", lock, false);
    showcasedContainer.addEventListener("touchstart", lock, false);
    showcasedContainer.addEventListener("mousemove", drag, false);
    showcasedContainer.addEventListener("touchmove", drag, false);
    showcasedContainer.addEventListener("mouseup", move, false);
    showcasedContainer.addEventListener("touchend", move, false);
  }

  function injectImageSwiper() {
    resizeContainer();
    setNumberOfImages();
    addEventListeners();
  }

  injectImageSwiper();
};

export default swipeImages;
