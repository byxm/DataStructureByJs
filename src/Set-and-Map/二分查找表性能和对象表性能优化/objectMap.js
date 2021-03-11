const fs = require('fs');
const { splitWords } = require('../splitWords')


const pridAndPrejudice = fs.readFileSync('../pride-and-prejudice.txt').toString();

const pridAndPrejudiceWords = splitWords(pridAndPrejudice)

console.log('pridAndPrejudice', pridAndPrejudiceWords.length);

const objectMap = {}

console.time('词频统计')
for(const word of pridAndPrejudiceWords) {
    if(objectMap[word]) {
        objectMap[word] = objectMap[word] + 1
    }else {
        objectMap[word] = 1
    }
}
console.timeEnd('词频统计')

const map = new Map()

console.time('Map词频统计')
for(const word of pridAndPrejudiceWords) {
    if(map.has(word)) {
        map.set(word, map.get(word) + 1)
    }else {
        map.set(word, 1)
    }
}
console.timeEnd('Map词频统计')



