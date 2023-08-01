package kr.co.rland.rlandboot3.ex1sort;

import java.util.Arrays;

public class program {
    public static void main(String[] args){
        Integer[] ages = {10,30,3,34,53,23,40};
        //Arrays.sort(ages,(a,b)->a-b); //오름차순
        Arrays.sort(ages,(a,b)->b-a); //내림차순
        System.out.println(Arrays.toString(ages));

        String[] stringArray = { "Barbara", "James", "Mary", "John", "Patricia", "Robert", "Michael", "Linda" };
        Arrays.sort(stringArray,String::compareTo);// String에 있는 함수compareTo 사용
        System.out.println(Arrays.toString(stringArray));


        Comparable<Integer> comp = new Comparable<Integer>() {

            @Override
            public int compareTo(Integer a) {
                return 0;
            }
            
        };

        Comparable<Integer> comp1 = (Integer a)-> {
                return 0;
        };

        Comparable<Integer> comp2 = a->0; //a를 넣으면 return0이 나온다
    }
}
