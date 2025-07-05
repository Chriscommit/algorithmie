import { QueueLL } from "../queue/queue_linked_list.mjs";
import { NodeTree } from "../node_tree.mjs";

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new NodeTree(key);
    let current = this.root;
    let parent = null;

    while (current !== null) {
      parent = current;
      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (parent === null) {
      this.root = newNode;
    } else if (key < parent.key) {
      parent.left = newNode;
    } else if (key > parent.key) {
      parent.right = newNode;
    }
  }

  search(searchedKey) {
    let current = this.root;

    while (current !== null && current.key !== searchedKey) {
      if (searchedKey < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  }

  min() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  minFromNode(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  max() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current;
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    if (!node) {
      return null;
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
      //   return node;
    } else if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
      //   return node;
    } else {
      if (!node.left && !node.right) {
        node = null;
      } else if (!node.right) {
        node = node.left;
        // return node;
      } else if (!node.left) {
        node = node.right;
        // return node;
      } else {
        const minNode = this.minFromNode(node.right);
        node.key = minNode.key;
        node.right = this.deleteNode(node.right, minNode.key);
        // return node;
      }
    }
    return node;
  }

  // Copier un arbre, arbre avec des expressions syntaxique...
  // Racine -> Gauche -> Droite
  preOrder() {
    this.preOrderWalk(this.root);
  }

  preOrderWalk(node) {
    if (node) {
      console.log(node.key);
      this.preOrderWalk(node.left);
      this.preOrderWalk(node.right);
    }
  }

  // Parcours en profondeur DFS (Deep First Search) -> Préfixe / Infixe / Postfixe :

  // Récupérer les valeurs par ordre croissant ou décroissant
  // Gauche -> Racine -> Droite : Ordre croissant
  // Droite -> Racine -> Gauche : Ordre décroissant
  inOrder() {
    this.inOrderWalk(this.root);
  }

  inOrderWalk(node) {
    if (node) {
      console.log(node.key);
      this.inOrderWalk(node.left);
      this.inOrderWalk(node.right);
    }
  }

  // Supprimer un arbre quand je dois gérer la mémoire
  // Gauche -> Droite -> Racine
  postOrder() {
    this.postOrderWalk(this.root);
  }

  postOrderWalk(node) {
    if (node) {
      console.log(node.key);
      this.postOrderWalk(node.left);
      this.postOrderWalk(node.right);
    }
  }

  // Parcours en largeur BFS ( Breadth First Search) :

  breadthFirstSearch() {
    const queue = new QueueLL();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      const current = queue.dequeue();
      console.log("breadthFirstSearch() : Key ->", current.key);
      if (current.left !== null) {
        queue.enqueue(current.left);
      }
      if (current.right !== null) {
        queue.enqueue(current.right);
      }
    }
  }

  isEmpty() {
    return this.root === null;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(8);
tree.insert(45);
tree.insert(79);
tree.insert(42);
tree.insert(12);
tree.insert(89);
tree.insert(23);

tree.breadthFirstSearch();

console.log(`Tree -> `, tree);

console.log("Node search : 89. Result ->", tree.search(89));
console.log("Node search : 55. Result ->", tree.search(55));
console.log("Node search : 79. Result ->", tree.search(79));

console.log(`Search node Min ->`, tree.min());
console.log(`Search node Max ->`, tree.max());

tree.delete(45);

console.log(`Node deleted : 45 ! Result -> `, tree.search(45));
