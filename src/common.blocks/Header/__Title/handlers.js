function generateCatchPhrase() {
  const catchPhrases = ["Allons-y", `Don't Blink`, "Kerblam"];
  const randomPhrase =
    catchPhrases[Math.floor(Math.random() * catchPhrases.length)];
  return randomPhrase;
}

export default generateCatchPhrase;
