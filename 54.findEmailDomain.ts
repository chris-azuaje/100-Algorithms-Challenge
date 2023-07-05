// Given a valid email address, find its domain part.

function findEmailDomain(address: string): string {
  const lastAtIndex = address.lastIndexOf("@");

  return address.slice(lastAtIndex + 1, address.length);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
