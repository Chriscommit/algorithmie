import arrayGenerator from "../array_generator.mjs";

function selectionSort(array) {
  let n = array.length;

  // On parcourt tout le tableau sauf le dernier élément
  // car il sera forcément trié lorsque nous aurons trié l'avant dernier élément :

  for (let i = 0; i < n - 1; i++) {
    // Sauvegarde de l'index du plus petit élément :
    let minIndex = i;

    // Itération sur la partie du tableau non triée :
    for (let j = i + 1; j < n; j++) {
      // Récupération de l'index de l'élément le plus petit :
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Si l'index de l'élément le plus petit est égal à l'itération en cours
    // nous n'avons pas à faire d'échanges (swap)
    if (minIndex != i) {
      // Sinon on fait un échange entre le plus petit élément et l'emplacement
      // correspondant à l'itération en cours :
      let tmp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = tmp;
    }
  }
  return array;
}

const sortArray = selectionSort(arrayGenerator(20, 200));
console.log(sortArray);
