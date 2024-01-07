import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] croatia = {"dz=","c=","c-","d-","lj","nj","s=","z="};
		int count = 0;
		String input = br.readLine();
		while(input.length()>0) {
//			System.out.println("1:" + input + ", count:"+count);
			if(input.length()==1) {
				count++;
				break;
			}
			for(int j=1; j<croatia.length; j++) {
				if(input.length()>=2 && input.substring(0,2).equals(croatia[j])) {
					count++;
					input = input.substring(2);
//					System.out.println("2:" + input + ", count:"+count);
					j=0;
				}
			}
			if(input.length()>=3 && input.substring(0,3).equals(croatia[0])) {
				count++;
				input = input.substring(3);
//				System.out.println("3:" + input + ", count:"+count);
			}else if(input.length()>1){
				count++;
				input = input.substring(1);
//				System.out.println("4:" + input + ", count:"+count);
			}
		}
		System.out.println(count);
	}
}
