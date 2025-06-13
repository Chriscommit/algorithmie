class StaticArray {
  constructor() {
    this.value = new Array(0);
  }

  insertAtBeginning(item) {
    const newArray = new Array(this.value.length + 1);
    newArray[0] = item;
    for (let i = 0; i < this.value.length; i++) {
      newArray[i + 1] = this.value[i];
    }
    this.value = newArray;
    console.log(`${item} a été ajouté au début du tableau : ${this.value}`);
  }

  insertAtEnd(item) {
    const newArray = new Array(this.value.length + 1);
    let i = 0;
    while (i < this.value.length) {
      newArray[i] = this.value[i];
      i++;
    }
    newArray[i] = item;
    this.value = newArray;
    console.log(`${item} a été ajouté à la fin du tableau : ${this.value}`);
  }

  insertAtPosition(item, position) {
    if (position > this.value.length || position < 0) {
      throw new Error("Wrong input position");
    } else {
      const newArray = new Array(this.value.length + 1);
      for (let i = 0; i < this.value.length + 1; i++) {
        if (i === position) {
          newArray[i] = item;
        } else if (i < position) {
          newArray[i] = this.value[i];
        } else {
          newArray[i] = this.value[i - 1];
        }
      }
      this.value = newArray;
      console.log(
        `${item} a été ajouté à la position ${position} dans le tableau : ${this.value}`
      );
    }
  }

  removeAtBeginning() {
    const newArray = new Array(this.value.length - 1);
    if (this.value.length === 0) {
      return;
    } else {
      for (let i = 1; i < this.value.length; i++) {
        newArray[i - 1] = this.value[i];
      }
      console.log(
        `Le premier élèment "${this.value[0]}" a été supprimé avec succès :`
      );
      this.value = newArray;
      console.log(`${this.value}`);
    }
  }

  removeAtEnd() {
    const newArray = new Array(this.value.length - 1);

    if (this.value.length === 0) {
      return;
    } else {
      for (let i = 0; i < this.value.length - 1; i++) {
        newArray[i] = this.value[i];
      }
      console.log(
        `Le dernier élèment "${
          this.value[this.value.length - 1]
        }" a été supprimé avec succès :`
      );
      this.value = newArray;
      console.log(`${this.value}`);
    }
  }
  removeAtPosition(position) {
    if (position < 0 || position >= this.value.length) {
      throw new Error("Wrong input position");
    } else {
      const newArray = new Array(this.value.length - 1);
      for (let i = 0; i < this.value.length; i++) {
        if (i < position) {
          newArray[i] = this.value[i];
        } else if (i > position) {
          newArray[i - 1] = this.value[i];
        }
      }
      console.log(
        `L'élèment à la position ${position} de valeur "${this.value[position]}" a été supprimé avec succès :`
      );
      this.value = newArray;
      console.log(`${this.value}`);
    }
  }
}

let classArray = new StaticArray();
classArray.insertAtBeginning("a");
classArray.insertAtEnd("b");
classArray.insertAtPosition("c", 1);
classArray.insertAtBeginning("e");
classArray.insertAtEnd("f");
classArray.insertAtPosition("g", 3);
classArray.insertAtBeginning("h");
classArray.insertAtEnd("i");
classArray.insertAtPosition("j", 5);
classArray.removeAtBeginning();
classArray.removeAtEnd();
classArray.removeAtPosition(2);
