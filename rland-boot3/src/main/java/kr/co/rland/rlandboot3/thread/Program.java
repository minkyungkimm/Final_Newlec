package kr.co.rland.rlandboot3.thread;

public class Program {
    
    static void print(){
        for(int i =0; i<100;i++)
            System.out.println(i+1);
    }

    public static void main(String[] args){
        Thread subThread = new Thread(()->{
            print();
        });

        print();
    }
}
