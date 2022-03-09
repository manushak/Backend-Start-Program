function Factorial(n) {
    if (n < 0) return 0;
  
    if (n <= 1) return 1;
  
    if (Number.parseInt(n)) return n * Factorial(n-1);
}
