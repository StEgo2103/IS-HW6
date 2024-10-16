const links = document.getElementById('links');
const newLi = document.createElement('li');
const newLink = document.createElement('a');
newLink.href = 'https://www.csulb.edu/college-of-business';
newLink.textContent = 'College of Business';
newLi.appendChild(newLink);

const middleIndex = Math.floor(links.children.length / 2);
links.insertBefore(newLi, links.children[middleIndex]);
