import { LinkedList } from "./linked_list.mjs";

const linkedList = new LinkedList();
linkedList.addFirst("a");
linkedList.addFirst("b");
linkedList.addFirst("c");
linkedList.addFirst("d");
linkedList.addFirst("e");
linkedList.addFirst("f");
linkedList.addFirst("g");
linkedList.print();

//a->b->c->d->e->f->g->null
//null<-g<-f<-e<-d<-c<-b<-a<-null

function reverseLinkedList(linkedList) {
  let current = linkedList.head;

  if (!current || !current.next) {
    return;
  } else {
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    linkedList.head = prev;
  }
}
reverseLinkedList(linkedList);
linkedList.print();

function reverseLinkedList2(linkedList) {
  let current = linkedList.head;
  if (!current || !current.next) {
    return;
  } else {
    const reversedList = new LinkedList();
    while (current) {
      reversedList.addFirst(current.value);
      current = current.next;
    }
    linkedList.head = reversedList.head;
  }
}

reverseLinkedList2(linkedList);
linkedList.print();
