package kr.co.rland.rlandboot3.ex3except;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;

public class Program {
    public static void main(String[] args) {

        try (
                FileOutputStream fos = new FileOutputStream("rland-boot3/res/data.csv");
                PrintStream out = new PrintStream(fos);
        ) {
            out.println("hello");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Calculator calc = new Calculator();
        // int result;
        // try {
        // result = calc.add(-100, 2);
        // System.out.println(result);
        // }catch (천을넘는예외 e) {
        // //e.printStackTrace();
        // System.out.println("죄송합니다 입력에 오류가 있음 : 사용방법 합이 1000 이하");
        // }
        // catch (음수가되는예외 e) {
        // e.printStackTrace();
        // System.out.println("죄송합니다 입력에 오류가 있음 : 사용방법 합이 양수");
        // }finally{
        // System.out.println("마무리");
        // }

        // System.out.println("end");
    }
}
