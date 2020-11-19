package com.finko;

public class GetDoubleForDifferentType {

    public static void main() {
        System.out.println(getDouble(5));
        System.out.println(getDouble("moi"));
    }

    // Cannot use one getDouble function for String or int. You can overload the same function with different
    // argument types
    private static int getDouble(int arg) {
        return arg+arg;
    }

    private static String getDouble(String arg) {
        return arg+arg;
    }
}
