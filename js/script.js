const myArray = [
    "carlo",
    "ciccio",
    "bombetta",
    "marco",
    "gertrude",
    "giovanni",
    "maria",
    "giacomo",
    "giuseppe minola",
    "alfonso carriola",
  ];
  
  const mySecondArray = [22, 3, 4, 66, 77, 1, 2, 3, 44, 11, 22, 33, 0];
  
  function arrayCounter(array) {
    let numbElem = 0;
    for (let i = 0; i < array.length; i++) {
      numbElem += 1;
    }
    return numbElem;
  }
  
  function printArrayToString(array) {
    let arrayString = "";
    for (let i = 0; i < array.length; i++) {
      if (i !== array.length - 1) {
        arrayString += array[i] + "," + " ";
      } else {
        arrayString += array[i];
      }
    }
    return arrayString;
  }
  
  function copyArrayMinusOne(array) {
    let arrayB = [];
    for (let i = 0; i < array.length - 1; i++) {
      arrayB[i] = array[i];
    }
    return arrayB;
  }
  
  function addToArray(array, newEl = "ciccio 2") {
    let newArr = [];
    for (let i = 0; i <= array.length; i++) {
      if (i < array.length) {
        newArr[i] = array[i];
      } else {
        newArr[array.length] = newEl;
      }
    }
    return newArr;
  }
  
  function togliDallaTesta(array) {
    let newArr = [];
    for (let i = 1; i < array.length; i++) {
      newArr[i - 1] = array[i];
    }
    return newArr;
  }
  
  function inserisciInTesta(array, newEl = "ciccio 3") {
    let newArr = [];
    for (let i = -1; i < array.length; i++) {
      if (i < 0) {
        newArr[0] = newEl;
      } else {
        newArr[i + 1] = array[i];
      }
    }
    return newArr;
  }
  
  function unisci(arrayA, arrayB) {
    let newArr = [];
    for (let i = 0; i < arrayA.length + arrayB.length; i++) {
      if (i < arrayA.length) {
        newArr[i] = arrayA[i];
      } else if (i >= arrayA.length && i < arrayB.length + arrayA.length) {
        newArr[i] = arrayB[i - arrayA.length];
      }
    }
    return newArr;
  }
  
  function cerca(array, elem) {
    let flag = false;
    for (let i = 0; i < array.length; i++) {
      if (elem === array[i]) {
        flag = true;
      }
    }
    return flag;
  }
  
  function cercaIndice(array, elem) {
    let indexEl;
    let flag = false;
    for (let i = 0; i < array.length; i++) {
      if (elem === array[i]) {
        indexEl = i;
        flag = true;
      }
    }
    if (!flag) {
      indexEl = -1;
    }
    return indexEl;
  }
  
  function ordina(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
  
  /* +++++++++++++++++++++++++++++++++++++++ */
  console.log(addToArray(myArray));
  console.log(arrayCounter(myArray));
  console.log(copyArrayMinusOne(myArray));
  console.log(printArrayToString(myArray));
  console.log(togliDallaTesta(myArray));
  console.log(inserisciInTesta(myArray));
  console.log(unisci(myArray, mySecondArray));
  console.log(cerca(myArray, "oh"));
  console.log(cercaIndice(myArray, "bombetta"));
  ordina(mySecondArray);
  console.log(mySecondArray);
  /* +++++++++++++++++++++++++++++++++++++++ */
  