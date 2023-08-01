package kr.co.rland.rlandboot3.thread;

public class Exam {
    int kor;
    int eng;
    int math;
    @Override
    public int hashCode(){
        return super.hashCode();
    }
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
