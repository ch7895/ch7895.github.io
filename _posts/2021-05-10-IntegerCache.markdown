---
layout: post
title:  "IntegerCache"
date:   2021-05-10 16:00:00 +0530
categories: java
---


앞서 스택에는 실제 값이 존재하는 힙의 주소를 저장한다고 했습니다.  그리고 "=="는 변수가 선언던 곳의 값을 비교하는것 뿐이구요 

그냥 단지 데이터 타입에 따라 누구는 실제 값을 저장하고 다른 누구는 주소를 저장한다는것과

굳이 한가지 더 이유는 아마도 primitive type은 공간의 사이즈가 고정적인 반면에
클래스들은 그렇지 않은게 이유이지 않을까 합니다. 

값을 1을 가지는 Integer 변수 2개를 만들어서 비교해 보겠습니다. 
```java
Integer A = 1;
Integer B = 1;

System.out.println(A==B); //true
``` 
true 가 나옵니다. 

- Integer A,B가 같은 주소를 가르키나?

싶은 생각이 들어 
이번에는 1을 바로 할당하지 않고 인스턴스 답게 'new' 를 사용해보겠습니다. 

```java
Integer E = new Integer(1);
Integer F = new Integer(1);

System.out.println(E==F); //false
```

어랏..
false가 나옵니다. 


따라서 A와 B에는 int 1 이 할당이 된것처럼 보여지나 
실상 내부적으로 컴파일러가 한 일은 다음과 같습니다. 

```java
Integer A = 1; // --> Integer A = Integer.valueOf(1); 
```

그렇다면 여기서 Integer.valueOf를 한번 볼 필요가 있을듯 합니다. 

```java
public static Integer valueOf(int i) {
    if (i >= IntegerCache.low && i <= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}
```

그냥 값을 가져오는게 아니라 특정 범위 내에서는 integerCache라는 배열에서 값을 가져 오고, 

범위를 벗어나는 경우 새로운 객체를 생성하여 반환 해줍니다. 

즉 정리 하면 
- A와 B는 값을 직접 할당함을로써 valueOf에 의해 캐시되어있는 동일한 객체를 부여 받음
- E와 D는 각각 new 함수에 의해 별도로 생성
<br/>
<br/>

이번엔 1이 아닌 128을 가진 Integer 변수 2개를 실행하면 조금 다른 결과가 나옵니다. 

```java
Integer C = 128;
Integer D = 128;

System.out.println(C==D); //false
```

이번엔 false 입니다.  
A,B와 차이점은 할당된 값이 1이냐 128이냐의 차이입니다. 

그렇다면 valueOf에 나오는 IntegerCache 가 뭔지 조금더 볼 필요가 있을듯 합니다. 

```java
 private static class IntegerCache {
        static final int low = -128;
        static final int high;
        static final Integer cache[];

        static {
            // high value may be configured by property
            int h = 127;
            String integerCacheHighPropValue =
                sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
            if (integerCacheHighPropValue != null) {
                try {
                    int i = parseInt(integerCacheHighPropValue);
                    i = Math.max(i, 127);
                    // Maximum array size is Integer.MAX_VALUE
                    h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
                } catch( NumberFormatException nfe) {
                    // If the property cannot be parsed into an int, ignore it.
                }
            }
            high = h;

            cache = new Integer[(high - low) + 1];
            int j = low;
            for(int k = 0; k < cache.length; k++)
                cache[k] = new Integer(j++);

            // range [-128, 127] must be interned (JLS7 5.1.7)
            assert IntegerCache.high >= 127;
        }

        private IntegerCache() {}
    }

```
결과적으로 Integer는 jvm이 실행되면 -128부터 127까지의 값을 Integer cache[] 라는 static final로 선언되어있는 배열에 저장을 합니다. 

Integer에는 IntegerCache가 있지만, 
위에서 언급한 wrapper class는 모두 integerCache 같은 것들이 존재합니다. 

이런것들이 생긴 이유는 수년간의 경험을 통해 특정 wrapper class에 담기는 값이 어느정도 비슷해보이자 

이를 미리 메모리에 올려놓고 불필요한 메모리 사용을 줄이기 위해 한것이 아닐까 합니다. 

