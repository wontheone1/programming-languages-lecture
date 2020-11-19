package com.finko;

import java.util.LinkedList;

public class Append2 {

    private static class Node{
        public int val;
        public Node next;

        public Node(int val){
            this.val = val;
        }

        public Node append(Node n) {
            Node currentNode = this;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = n; // put node n to the last node
            return this;
        }

        public Node setLast(int i) {
            Node currentNode = this;
            if (this.next == null) {
                this.val = i;
                return this;
            }
            while (currentNode.next.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(i); // put node n to the last node
            return this;
        }

        public String toString() {
            StringBuilder sb = new StringBuilder();
            sb.append("[");
            Node currentNode = this;
            while (currentNode.next != null) {
                sb.append(currentNode.val);
                sb.append(", ");
                currentNode = currentNode.next;
            }
            sb.append(currentNode.val);
            sb.append("]");
            return sb.toString();
        }
    }

    private static Node generateList(int length){
        Node head = new Node(0);
        Node currentNode = head;
        for(int i = 1; i < length; i++){
            currentNode.append(new Node(i));
            currentNode = currentNode.next;
        }
        return head;
    }

    // array bounds error compiles without type error
    public static void main() {
        Node myLL1 = generateList(3);
        Node myLL2 = generateList(3);
        System.out.println(myLL1); // [0, 1, 2]
        System.out.println(myLL2); // [0, 1, 2]
        myLL1.append(myLL2);
        System.out.println(myLL1);
        System.out.println(myLL2);
        myLL1.setLast(777);
        System.out.println(myLL1);
        System.out.println(myLL2);
    }
}
