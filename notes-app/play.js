let picture = ["abe", "bed"];
const len = picture[0].length + 2;

let startAndEnd = '';
for (let i = 0; i<len; i++) startAndEnd = startAndEnd + '*';

const newPic = [];
newPic.push(startAndEnd);

console.log(len, startAndEnd);
picture.forEach((pic) => {
    newPic.push('*'+pic+'*');
});

newPic.push(startAndEnd);


console.log(newPic);