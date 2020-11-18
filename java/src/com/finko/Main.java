package com.finko;

public class Main {

    // non-boolean if test
//    public static void main(String[] args) {
//        System.out.println("I will not be printed because this program does not compile!");
//        if (3) {
//          System.out.println("Hello world");
//        }
//    }

    // can't divide string
//    public static void main(String[] args) {
//        System.out.println("I will not be printed because this program does not compile!");
//        System.out.println("hi" + 5); // this is accepted but depends on languages
//        System.out.println("there" / 5); // cannot divide string
//    }

    // division by zero compiles
//    public static void main(String[] args) {
//        System.out.println("I will be printed because this program compiles!");
//        System.out.println(5 / 0); // this is accepted but depends on languages
//    }

    // array-bounds error
//    public static void main(String[] args) {
//        System.out.println("I will be printed because this program compiles!");
//        int[] myArray = {1, 2, 3, 4, 5};
//        System.out.println(myArray[0]);
//        System.out.println(myArray[5]); // out of bound
//    }

    // Cannot use getDouble function for String or int. Seems like there is no easy way in Java.
    // Just use two different getDoubleFunction for int or String
    // (or maybe you can define a class that holds a number and string?)
    public static void main(String[] args) {
        System.out.println(getDouble(5));
        System.out.println(getDouble(10));
    }

    private static int getDouble(int arg) {
        return arg+arg;
    }

}