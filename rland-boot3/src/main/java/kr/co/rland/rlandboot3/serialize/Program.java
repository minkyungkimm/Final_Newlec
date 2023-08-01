package kr.co.rland.rlandboot3.serialize;

import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class Program {
    public static void main(String[] args) throws IOException {

        Exam exam = new Exam(1, 2, 3);

        FileOutputStream fos = new FileOutputStream("res/data.txt");

        DataOutputStream dos = new DataOutputStream(fos);
        dos.writeInt(exam.kor);
        dos.writeInt(exam.eng);

        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(exam);

        oos.close();
        fos.close();
    }
}
