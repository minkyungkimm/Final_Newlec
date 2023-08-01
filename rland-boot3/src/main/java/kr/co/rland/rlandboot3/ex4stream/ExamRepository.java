package kr.co.rland.rlandboot3.ex4stream;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

public class ExamRepository {

    public Exam get(int id){
        //data.csv에서 id에 대한 Exam 객체를 반환하기
        Optional<Exam> result = null;
        try {
            result=Files
            .lines(Path.of("rland-boot3/res/data.csv"))
            .skip(1)
            .map(Exam::fromCSV)
            .filter(exam->exam.getId() == id)
            .findFirst();
        } catch (IOException e) {
            e.printStackTrace();
        }

        if(result.isPresent())
            return result.get();

        return null;
    }

    public List<Exam> getList(int page) {
        //페이징
        int size = 5;
        int offset = (page-1)*size;

        List<Exam> list = null;
        try {
            list = Files
            .lines(Path.of("rland-boot3/res/data.csv"))
            .skip(1)
            .map(Exam::fromCSV)
            .filter(exam->exam.getKor() == 90)
            //paging
            .skip(offset) //페이징
            .limit(size) //페이징
            .toList();
            // .map(line->{
            //     String[] tokens = line.split(",");
            //     int kor = Integer.parseInt(tokens[0]);
            //     int eng = Integer.parseInt(tokens[1]);
            //     int math = Integer.parseInt(tokens[2]);

            //     Exam exam = new Exam(kor,eng,math);
            //     return exam;
            // })
            // .forEach(System.out::println);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return list;

        
    }

    public int getKorSum() {

        OptionalInt result = null;
        try {
            result = Files
            .lines(Path.of("rland-boot3/res/data.csv"))
            .skip(1)
            .map(Exam::fromCSV)
            .mapToInt(exam->exam.getKor())
            .reduce((a,b)->a+b);
            //.mapToInt(n->n.intValue())
            //.mapToInt(Integer::intValue)
            // .sum();
        } catch (IOException e) {
            e.printStackTrace();
        }


        return result.getAsInt();
    }
    
}
