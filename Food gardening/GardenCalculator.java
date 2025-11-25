import java.util.Scanner;

public class GardenCalculator {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int option;

        do {
            System.out.println("\n🌱 FOOD GARDEN YIELD PLANNER MENU 🌿");
            System.out.println("1. Calculate Number of Plants");
            System.out.println("2. Estimate Yield");
            System.out.println("3. About Program");
            System.out.println("0. Exit");
            System.out.print("Choose an option: ");
            option = sc.nextInt();

            switch (option) {
                case 1 : calculatePlantCapacity(sc);
                case 2 : estimateYield(sc);
                case 3 : aboutProgram();
                case 0 : System.out.println("Goodbye! 👋");
                default : System.out.println("Invalid choice ❗ Try again.");
            }
        } while (option != 0);
    }

    public static void calculatePlantCapacity(Scanner sc) {
        System.out.print("Enter garden area (m²): ");
        double area = sc.nextDouble();
        System.out.print("Enter spacing per plant (m²): ");
        double spacing = sc.nextDouble();

        if (area > 0 && spacing > 0) {
            int plantCount = (int) (area / spacing);
            System.out.println("🌿 You can plant approx. " + plantCount + " plants in " + area + " m².");
        } else {
            System.out.println("❌ Invalid values. Area and spacing must be greater than zero.");
        }
    }

    public static void estimateYield(Scanner sc) {
        System.out.print("Enter number of plants: ");
        int plants = sc.nextInt();
        System.out.print("Enter expected yield per plant (kg): ");
        double yield = sc.nextDouble();

        if (plants > 0 && yield > 0) {
            double total = plants * yield;
            System.out.println("✅ Total expected yield: " + total + " kg.");
        } else {
            System.out.println("❌ Invalid input. Try again.");
        }
    }

    public static void aboutProgram() {
        System.out.println("""
        This program helps estimate:
        ✔️ Number of plants in a garden
        ✔️ Expected yield based on plant count
        Input validation included. Developed for the 2025 JGA project.
        """);
    }
}