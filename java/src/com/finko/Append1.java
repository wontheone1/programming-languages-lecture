package com.finko;

import java.util.LinkedList;

public class Append1 {

    // array bounds error compiles without type error
    public static void main() {
        LinkedList<Integer> myFirstLL = new LinkedList<>();
        myFirstLL.add(1);
        myFirstLL.add(2);
        myFirstLL.add(3);
        LinkedList<Integer> mySecondLL = new LinkedList<>();
        mySecondLL.add(4);
        mySecondLL.add(5);
        mySecondLL.add(6);
        System.out.println(myFirstLL);
        System.out.println(mySecondLL);

        //
        myFirstLL.addAll(mySecondLL);
        System.out.println(myFirstLL);

        myFirstLL.removeLast();
        System.out.println(myFirstLL);
        System.out.println(mySecondLL);
    }

}
