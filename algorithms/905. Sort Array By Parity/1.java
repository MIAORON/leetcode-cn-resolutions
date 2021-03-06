class Solution {
  public int[] sortArrayByParity(int[] A) {
      int[] result = new int[A.length];
      int start = 0;
      int end = A.length - 1;
      for (int i : A) {
          if (i % 2 == 0) {
              result[start++] = i;
          } else {
              result[end--] = i;
          }
      }
      return result;
  }
}