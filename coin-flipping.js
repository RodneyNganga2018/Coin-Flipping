const tossCoin = () => {
    return Math.random() < 0.5 ? 'Heads' : 'Tails'; 
}

const fiveHeads = new Promise ( (resolve, reject) => {
    for (let count=1, countHeads=0; count<=100; count++) {
        if (tossCoin() === 'Heads') {
            countHeads++;
        }

        if (countHeads===5) {
            resolve(`It took ${count} coin flips to land on heads 5 times`);
        } else if (count === 10) {
            reject(`After ${count} coin flips did not land on heads 5 times`)
        }
    }
})
fiveHeads
    .then( res => console.log(res))
    .catch( err => console.log(err));
console.log("When does this run now?")