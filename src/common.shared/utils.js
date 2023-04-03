function addBEMClasses(classes, namespace) {
  const modifiers =
    classes?.modifiers
      ?.filter((m) => m)
      .map((modifier) => `${namespace}${modifier}`) || [];
  const blocks =
    classes?.blocks?.filter((b) => b).map((block) => `${block}${namespace}`) ||
    [];

  return [...modifiers, ...blocks].join(" ") || [];
}

const curry =
  (originalFunction) =>
  (...originalArgs) =>
  (...remainingArgs) =>
    originalFunction(...originalArgs, ...remainingArgs);

export { addBEMClasses, curry };
