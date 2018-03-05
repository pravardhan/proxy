import * as random from 'generate-random-data';

const createRandomObj = (fieldCount, allowNested)=> {
    var generatedObj = {};

    for(var i = 0; i < fieldCount; i++) {
        var generatedObjField;

        switch(randomInt(allowNested ? 6 : 5)) {

            case 0:
            generatedObjField = randomInt(1000);
            break;

            case 1:
            generatedObjField = Math.random();
            break;

            case 2:
            generatedObjField = Math.random() < 0.5 ? true : false;
            break;

            case 3:
            generatedObjField = randomString(randomInt(4) + 4);
            break;

            case 4:
            generatedObjField = null;
            break;

            case 5:
            generatedObjField = createRandomObj(fieldCount, allowNested);
            break;
        }
        generatedObj[randomString(8)] = generatedObjField;
    }
    return generatedObj;
}

const randomInt = (rightBound)=> {
    return Math.floor(Math.random() * rightBound);
}

const randomString = (size)=> {
    var alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var generatedString = '';
    for(var i = 0; i < size; i++) {
        generatedString += alphaChars[randomInt(alphaChars.length)];
    }

    return generatedString;
}

const createRandomArray = (size)=> {
    let arr = [];
    for(let i = 0; i < size; ++i) {
        arr.push(randomString(random.int(4,6)));
    }
    return arr;
}


const randomStatusCodePicker = [200, 400, 401, 500, 503];

const responeHeadersPicker = [{'content-type': 'application/json'}, {'content-type': 'text/plain'}]

export const generateChaosData = ()=> {
    const randomDataPicker = [
        createRandomObj.bind(this, random.int(3, 6), true),
        createRandomArray.bind(this, random.int(10, 20)),
        randomString.bind(this, random.int(10,30))
    ];
    return { 
        statusCode: randomStatusCodePicker[random.int(0, randomStatusCodePicker.length - 1)],
        responseHeaders: responeHeadersPicker[random.int(0, responeHeadersPicker.length - 1)],
        responseBody: randomDataPicker[random.int(0, randomDataPicker.length - 1)]()
    }
};