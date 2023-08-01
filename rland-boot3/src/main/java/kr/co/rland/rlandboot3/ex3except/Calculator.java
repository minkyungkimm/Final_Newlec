package kr.co.rland.rlandboot3.ex3except;

public class Calculator {
		
	public static int add(int x, int y) throws 천을넘는예외, 음수가되는예외 {
		int result = x+y;
        
        if(result>1000)
            throw new 천을넘는예외();

		if(result < 0)
			throw new 음수가되는예외();

		return result;
	}
	
	public static int sub(int x, int y) {
		int result = x-y;
		
		return result;
	}
	
	public static int multi(int x, int y) {
		int result = x*y;
		
		return result;
	}
	
	public static int div(int x, int y) {
		int result = x/y;
		
		return result;
	}
}
