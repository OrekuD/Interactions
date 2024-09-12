function splitText(inputString: string) {
  const regex = /[\s\S]/gu;
  const chars: Array<string> = [];

  let match;
  while ((match = regex.exec(inputString)) !== null) {
    chars.push(match[0]);
  }

  return chars;
}

export default splitText;
