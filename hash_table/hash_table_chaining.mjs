import { LinkedListHashtable } from "../linked_list/linked_list_hashtable.mjs";

export default class HashTableChaining {
  constructor() {
    this.table = new Array(97);
    this.size = 0;
  }

  hash(key) {
    if (typeof key === "string") {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
    } else if (typeof key === "number") {
      return key % this.table.length;
    }
  }

  hashMultiplication(key) {
    const A = 0.8018543616126939; // 0 < A < 1
    let total = 0;
    if (typeof key === "string") {
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
    } else if (typeof key === "number") {
      total = key;
    }
    return Math.floor(this.table.length * ((total * A) % 1));
  }

  get(key) {
    const index = this.hash(key);
    const list = this.table[index];
    if (!list) {
      return null;
    }
    return list.get(key);
  }

  set(key, value = null) {
    const index = this.hash(key);
    const list = this.table[index];
    if (!list) {
      this.table[index] = new LinkedListHashtable();
      this.table[index].add(key, value);
      this.size++;
    } else {
      if (!list.update(key, value)) {
        list.add(key, value);
        this.size++;
      }
    }
  }

  delete(key) {
    const index = this.hash(key);
    const list = this.table[index];
    if (!list) {
      return null;
    }
    const value = list.delete(key);
    if (value) {
      this.size++;
    }
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }
}
