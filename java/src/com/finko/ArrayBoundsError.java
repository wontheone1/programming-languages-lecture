package com.finko;

public class ArrayBoundsError {

    // array bounds error compiles without type error
    public static void main() {
        System.out.println("I will be printed because this program compiles!");
        int[] myArray = {1, 2, 3, 4, 5};
        System.out.println(myArray[0]);
        System.out.println(myArray[5]); // out of bound
    }

}
