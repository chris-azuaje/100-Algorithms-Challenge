// Write a function that labels the domains as "commercial", "organization", "network" or "information" for .com, .org, .net, or .info respectively.For the given list of domains return the list of their labels.

function domainType(str: string): string {
  let newStr = str.split(".").slice(-1);
  let output = "";

  if (newStr == "org") {
    output = "organization";
  } else if (newStr == "com") {
    output = "commercial";
  } else if (newStr == "net") {
    output = "network";
  } else {
    output = "information";
  }
  return output;
}

console.log(domainType("en.wiki.org"));
console.log(domainType("codefights.com"));
console.log(domainType("happy.net"));
console.log(domainType("code.info"));
