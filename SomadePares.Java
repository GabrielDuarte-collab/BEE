public class Main {
 
    public static void main(String[] args) throws IOException {
 
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        
        int x;
        while ((x = scanner.nextInt()) != 0) {
            // Encontra o primeiro número par >= x
            int firstEven = (x % 2 == 0) ? x : x + 1;
            
            // Calcula a soma dos 5 pares consecutivos
            int sum = 0;
            for (int i = 0; i < 5; i++) {
                sum += firstEven + (i * 2);
            }
            
            System.out.println(sum);
        }
        
        scanner.close();
}