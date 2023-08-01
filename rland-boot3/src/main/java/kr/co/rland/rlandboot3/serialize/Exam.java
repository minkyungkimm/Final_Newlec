package kr.co.rland.rlandboot3.serialize;

import java.io.Serializable;

public class Exam implements Serializable{
    int kor;
    int eng;
    transient int math; //->Serializable에서 빠지는거
    
    @Override
    public boolean equals(Object obj){
        Exam exam = (Exam) obj;
        return (this.kor == exam.kor) && (this.eng == exam.eng);
    }
    public Exam(){

    }
    public Exam(int kor, int eng, int math) {
        super();
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    public int total(){
        int result= 0;
        result = kor+eng+math;
        return result;
    }
    
}
