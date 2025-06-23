import { Node } from "./node.mjs";
export class LinkedList {
  constructor() {
    this.head = null;
    this.size = null;
  }

  print() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current.value} => `);
      current = current.next;
    }
    console.log(null);
  }

  get(index) {
    let initialIndex = index;
    if (index > this.size - 1 || index < 0) {
      return console.log(
        `You requested index ${initialIndex} but it's not valid`
      );
    } else {
      let current = this.head;
      while (index) {
        current = current.next;
        index--;
      }
      return console.log(
        `You requested the item at index ${initialIndex} and it's value is ->`,
        current.value
      );
    }
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (Object.is(value, current.value)) {
        return console.log(
          `The value "${value}" is in the linked list ? ->`,
          true
        );
      }
      current = current.next;
    }
    return console.log(
      `The value "${value}" is in the linked list ? -> `,
      false
    );
  }

  addFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  removeFirst() {
    let current = this.head;
    if (!current) {
      return null;
    } else {
      this.head = current.next;
      this.size--;
      return current.value;
    }
  }

  addLast(value) {
    let current = this.head;
    if (!current) {
      this.head = new Node(value);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.size++;
  }

  removeLast() {
    let current = this.head;
    if (!current) {
      return null;
    } else if (!current.next) {
      this.head = null;
      this.size--;
      return current.value;
    } else {
      while (current.next.next) {
        current = current.next;
      }
      const lastNode = current.next;
      current.next = null;
      this.size--;
      return lastNode.value;
    }
  }

  removeAtPosition(position) {
    if (position < 0 || position > this.size - 1) {
      throw new Error("Index isn't between limit.");
    } else if (position === 0) {
      return this.removeFirst();
    } else {
      let current = this.head;
      while (position - 1) {
        current = current.next;
        position--;
      }
      const nodeValue = current.next.value;
      current.next = current.next.next;
      this.size--;
      return nodeValue;
    }
  }

  addAtPosition(position, value) {
    if (position < 0 || position > this.size) {
      throw new Error(`Position "${position}" not between in the limit.`);
    } else if (position === 0) {
      this.head = new Node(value, this.head);
    } else {
      let current = this.head;
      while (position - 1) {
        current = current.next;
        position--;
      }
      current.next = new Node(value, current.next);
    }
    this.size++;
  }
}

// const linkedList = new LinkedList();
// linkedList.addFirst("a");
// linkedList.print();
// linkedList.addLast("b");
// linkedList.print();
// linkedList.addLast("c");
// linkedList.print();
// linkedList.addLast("d");
// linkedList.print();
// linkedList.addLast("e");
// linkedList.print();
// linkedList.addLast("f");
// linkedList.print();
// linkedList.addAtPosition(1, "g");
// linkedList.print();
// linkedList.removeFirst();
// linkedList.print();
// linkedList.removeLast();
// linkedList.print();
// linkedList.removeAtPosition(2);
// linkedList.print();
// linkedList.contains("z");
// linkedList.print();
// linkedList.get(4);
