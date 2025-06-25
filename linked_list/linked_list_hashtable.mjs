import { Node } from "./node.mjs";

export class LinkedListHashtable {
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

  get(key) {
    let current = this.head;
    if (!current) {
      return null;
    } else {
      while (current) {
        if (current.key === key) {
          return current.value;
        }
        current = current.next;
      }
      return null;
    }
  }

  add(key, value = null) {
    let current = this.head;
    if (!current) {
      this.head = new Node(key, value ?? key);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(key, value ?? key);
    }
    this.size++;
  }

  update(key, value) {
    let current = this.head;
    if (!current) {
      return false;
    } else {
      while (current) {
        if (current.key == key) {
          current.value = value;
          return value;
        }
        current = current.next;
      }
      return false;
    }
  }

  delete(key) {
    let current = this.head;
    if (!current) {
      return null;
    } else if (current.key === key) {
      const value = current.value;
      this.head = current.next;
      this.size--;
      return value;
    } else {
      while (current.next) {
        if (current.next.key === key) {
          const value = current.next.value;
          current.next = current.next.next;
          this.size--;
          return value;
        }
        current = current.next;
      }
      return null;
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
