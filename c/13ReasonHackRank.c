#include <stdio.h>
int main(){
     int a, b, c;
     int temp;
     int sum;
      scanf("%d",&a);
      scanf("%d",&b);
      scanf("%d",&c);
      temp=a;
      a=b;
      b=temp;
      a=a*c;
      b=b+c;
      printf("%d %d",a ,b);
      
      
}