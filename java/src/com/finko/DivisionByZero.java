package com.finko;

public class DivisionByZero {

    // division by zero compiles without type error
    public static void main() {
        System.out.println("I will be printed because this program compiles!");
        System.out.println(5 / 0); // this is accepted but depends on languages
    }

}
