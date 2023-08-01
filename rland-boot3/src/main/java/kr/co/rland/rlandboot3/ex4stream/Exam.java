package kr.co.rland.rlandboot3.ex4stream;

public class Exam {
    private int id;
    private int kor;
    private int eng;
    private int math;
    
    public Exam(){

    }
    public Exam(int id,int kor, int eng, int math) {
        super();
        this.id=id;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getKor() {
        return kor;
    }
    public void setKor(int kor) {
        this.kor = kor;
    }
    public int getEng() {
        return eng;
    }
    public void setEng(int eng) {
        this.eng = eng;
    }
    public int getMath() {
        return math;
    }
    public void setMath(int math) {
        this.math = math;
    }

    public static Exam fromCSV(String csv){
        String[] tokens = csv.split(",");

        int id = Integer.parseInt(tokens[0]);
        int kor = Integer.parseInt(tokens[1]);
        int eng = Integer.parseInt(tokens[2]);
        int math = Integer.parseInt(tokens[3]);

        Exam exam = new Exam(id,kor,eng,math);
        return exam;
    }
    @Override
    public String toString() {
        return "Exam [id=" + id + ", kor=" + kor + ", eng=" + eng + ", math=" + math + "]";
    }
    


    
    
}
