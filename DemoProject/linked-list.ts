class ListNode<T> {
  //Optional in case there is no next node.
  next?: ListNode<T>;

  //We set the value as public here
  // to make it public accessibilie and create a
  //property of the same name at instantiation. (TS shortcut)
  constructor(public value: T) {}
}

class LinkedList<T> {
  //Need to store a root node
  //? is set to make it a optional property
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length = 0;

  //handles adding new value to the LinkedList
  //and then stored into a node and updates
  //the link structure. Use the generic type

  add(value: T) {
    const node = new ListNode(value);

    if (!this.root || !this.tail) {
      this.root = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
}
