import { Node } from "../linked_list/node.mjs";
import { LinkedList } from "../linked_list/linked_list.mjs";

const linkedList = new LinkedList();

linkedList.addFirst(5);
linkedList.addFirst(15);
linkedList.addFirst(98);
linkedList.addFirst(45);
linkedList.addFirst(1);
linkedList.addFirst(68);

linkedList.print();

function insertion_sort(list) {
  let current = linkedList.head;
  if (!current || !current.next) {
    return;
  } else {
    const sortedList = new LinkedList();
    sortedList.addFirst(current.value);
    current = current.next;

    while (current) {
      let sortedHead = sortedList.head;
      while (sortedHead.next && sortedHead.next.value < current.value) {
        sortedHead = sortedHead.next;
      }

      if (sortedHead.value > current.value) {
        sortedList.head = new Node(current.value, sortedHead);
      } else {
        sortedHead.next = new Node(current.value, sortedHead.next);
      }
      current = current.next;
    }
    linkedList.head = sortedList.head;
  }
}

insertion_sort(linkedList);
linkedList.print();
