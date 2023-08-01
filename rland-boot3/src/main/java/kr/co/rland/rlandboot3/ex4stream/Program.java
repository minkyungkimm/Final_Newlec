package kr.co.rland.rlandboot3.ex4stream;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Program {
    public static void main(String[] args) throws IOException {

        ExamRepository repository = new ExamRepository();
        // List<Exam> list= repository.getList(1);
        // list.forEach(System.out::println);

        // Exam exam = repository.get(3);
        // System.out.println(exam); 
        
        int sum = repository.getKorSum();
        System.out.println(sum);

        String line = "a,b,c,d";
        Pattern
        .compile(",")
        .splitAsStream(line)
        .limit(4)
        .forEach(System.out::println);

        //int,Double,LongStream <-> Stream
        //1.콜렉션 이용
        //2.배열 이용
        //3.파일 이용

        int[] ages1 = {10,23,34,42,12,24};
        IntStream intStream1 = IntStream.of(ages1);
        
        intStream1
        .boxed()
        .toList()
        .forEach(System.out::println);

        // List<Integer> ages2 = new ArrayList<>();
        // Stream<Integer> stream2 = ages2.stream();
        // Optional<Integer> firstNum = stream2.findFirst();
        // long count = stream2.count();
        
        // Files
        // .lines(Path.of("rland-boot3/res/data.csv"))
        // .forEach(System.out::println); //:: -> 참조 함수
        // .forEach(line->{ //람다식
        //     System.out.println(line);
        // });

        //Lamda Expression
        //Function References
        //Options API
    }
}
