// You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it. Given the starting HTML tag, find the appropriate end tag which your editor should propose.

function htmlEndTagByStartTag(startTag: string): string {
  const splitString = startTag.split(" ");
  const splitTag = splitString[0].toString().split("");
  let endTag = "</";

  for (let i = 1; i < splitTag.length; i++) {
    endTag += splitTag[i];
  }

  endTag = endTag[endTag.length - 1] === ">" ? endTag : (endTag += ">");

  return endTag;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
