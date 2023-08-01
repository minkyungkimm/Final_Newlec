package kr.co.rland.rlandboot3.ex1sort;

import java.io.IOException;
import java.lang.reflect.Array;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;

public class program2 {
    
    public static void main(String[] args) throws IOException{

        List<Exam> list = Files
        .lines(Path.of("rland-boot3/res/data.csv"))
        .skip(1)
        .map(line->{
            String[] tokens = line.split(",");
            if(tokens.length != 3)
                throw new RuntimeException("인자의 개수가 잘못 되었습니다");

            int kor = Integer.parseInt(tokens[0]);
            int eng = Integer.parseInt(tokens[1]);
            int math = Integer.parseInt(tokens[2]);

            return new Exam(kor,eng,math);
        })
        .toList();

        System.out.println(list);

        // int[] ages = {10,32,34,21,23,25,46};
        // int[] result = IntStream
        // .of(ages)
        // .filter(age->age>25)//25보다 큰 수만 뽑기
        // .sorted()
        // .map(age->age/10*10)
        // .toArray();

        // System.out.println(Arrays.toString(result));
    }
}
