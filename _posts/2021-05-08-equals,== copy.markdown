---
layout: post
title:  "==, equals"
date:   2021-05-08 20:35:00 +0530
categories: java
---


변수값을 비교할때 종종 '==', equals 사용하지만 

둘은 사실상 사상만 비슷할뿐 헷갈려서는 안되는 사항이다. 


```java

int n1 = 1;
int n2 = 1;

System.out.println(n1==n2) // true

```

우선 primitive type int의 2개의 변수에 동일한 value를 할당하고 비교했을 시 결과는 

<strong>true</strong>  이다. 

그리고 n1.equals(n2)는 컴파일조차 안된다. 

그럼 여기서 2가지가 확인된다. 

 - '==' 는 primitive type에서는 값을 비교한다.
 - 'equals()' primitive type 에서 사용할수 없다. 


후자의 경우는 사실 당연한 얘기다. equals는 Object를 상속하는 referrence type에서 사용하는 함수다.

<br>
그럼 이제 primitive type과 referrence type 은 다른거구나

int와 Integer는 다른거구나 

라는 감이 온다. 이제 equals를 보자

우선 클래스를 int변수 하나를 가진 클래스를 선언하고
```java

public static class AA {
        int aa;

        AA(int n ){
            this.aa = n;
        }
        ...
    }
```

멤버변수에 동일한 값을 할당하는 클래스 2개를 생성했다. 
```java
AA a = new AA(1);
AA b = new AA(1);

System.out.println(a==b);           //false
System.out.println(a.equals(b));    //false
```

그리고 얘를 '==','equals'를 통해 비교하면 둘다 <string>false</strong> 다. 

referrence type에서는 비교연산자를 쓰면안된다는건가? 싶은 결과다 

그럼 뭐가 다른걸까

우선 primitive type과 referrence type이 메모리에 저장되는 구조를 생각해보면 감이 온다. 

primitive type은 스택에 할당받으면 그 공간에 value를 저장하고

referrence type의 value는 스택이 아니라 힙영역에 저장을 하고, 스택에는 value가 저장된 힙영역의 주소가 저장된다. 

즉 a와 b는 각각 스택에 저장된 값(힙영역의 주소)가 다르기 때문에 '==' <strong> false </strong> 이다. 

<br>
<h3> 그럼 equals는 왜? </h3>

object 클래스의 equals 함수를 보자 

```java
public boolean equals(Object obj) {
        return (this == obj);
    }
```
equals도 결국은 '==' 이다. 

그렇기 때문에 equals()를 만약 멤버변수의 값이 모두 같은 인스턴스 인 경우에 true 를 반환하는 형태로 사용하고싶다면
equals 함수를 오버라이딩 해서 사용하면 된다. 

<br>

그런데 이쯤에서 조금 헷갈리는게 있을 수 있다. 

Stirng은 equals가 되던데, 
Integer는 '==' 이된데, 

뭘까... ?
