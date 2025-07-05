// Implémenter une queue avec une liste chainée
// Attention liste chaînée différente de la liste chaînée que nous avions implémentée
import { Node } from "../node.mjs";

export class QueueLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const node = this.head;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    }
    return node.value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.value;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

const queueLL = new QueueLL();
queueLL.enqueue(1);
queueLL.enqueue(2);
queueLL.enqueue(3);

console.log(queueLL.peek());
console.log(queueLL.dequeue());
console.log(queueLL.getSize());
console.log(queueLL.isEmpty());

queueLL.enqueue(4);
console.log(queueLL.dequeue());
console.log(queueLL.dequeue());
console.log(queueLL.dequeue());
console.log(queueLL.isEmpty());
