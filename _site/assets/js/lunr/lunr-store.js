var store = [{
        "title": "Integrating razorpay into your webapp",
        "excerpt":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse const Razorpay = require('razorpay');...","categories": ["Javascript","NodeJS"],
        "tags": [],
        "url": "/javascript/nodejs/welcome-to-jekyll/",
        "teaser": null
      },{
        "title": "jwt파싱1 (header, payload)",
        "excerpt":"jwt에 대해서 조금 궁금해져서 사용방법을 조금 더 고민하다가 파싱함수를 뜯어보기로 했다. jwt는 DefaultJws라는 클래스에 의해 만들어지고 쓰여진다. 상단영역을 보게되면 멤버 변수로 header, body, signature 로 구성되어있다. body가 payload 영역으로 추측된다. signature 영역은 string, body는 제네릭, jwsheader는 또 뭐가있긴한데, keyId, algorithm이 있음 public class DefaultJws&lt;B&gt; implements Jws&lt;B&gt; { private final JwsHeader...","categories": ["java","jwt"],
        "tags": [],
        "url": "/java/jwt/jwt1/",
        "teaser": null
      },{
        "title": "jwt파싱2 (signature)",
        "excerpt":"signature부분은 토큰의 변조 방지를 담당한다. 토큰내용이야 base64로 인코딩되어있어 얼마든지 디코딩이 가능하나 변조는 불가능해야 한다. jwt파싱 (step1-1, SignatureAlgorithm) 우선 header영역의 alg값을 읽어온다. 이값이 null 이면 예외를 뱉는다. SignatureAlorithm 클래스는 enum 타입고 각종 hash 함수들의 이름들이 명시되어있다. SignatureAlgorithm algorithm = null; if (header != null) { String alg = jwsHeader.getAlgorithm(); if (Strings.hasText(alg))...","categories": ["java","jwt"],
        "tags": [],
        "url": "/java/jwt/jwt2/",
        "teaser": null
      },{
        "title": "==, equals",
        "excerpt":"변수값을 비교할때 종종 ‘==’, equals 사용하지만 둘은 사실상 사상만 비슷할뿐 혼동할 필요는 없습니다. int n1 = 1; int n2 = 1; System.out.println(n1==n2) // true 우선 primitive type인 int의 2개의 변수에 동일한 value를 할당하고 비교했을 시 결과는 true 입니다. 그리고 n1.equals(n2)는 컴파일 단계에서 이미 에러가 발생합니다. 그럼 여기서 2가지를 의심할 수...","categories": ["java"],
        "tags": [],
        "url": "/java/equals,==-copy/",
        "teaser": null
      },{
        "title": "IntegerCache",
        "excerpt":"앞서 스택에는 실제 값이 존재하는 힙의 주소를 저장한다고 했습니다. 그리고 “==”는 변수가 선언던 곳의 값을 비교하는것 뿐이구요 그냥 단지 데이터 타입에 따라 누구는 실제 값을 저장하고 다른 누구는 주소를 저장한다는것과 굳이 한가지 더 이유는 아마도 primitive type은 공간의 사이즈가 고정적인 반면에 클래스들은 그렇지 않은게 이유이지 않을까 합니다. 값을 1을 가지는...","categories": ["java"],
        "tags": [],
        "url": "/java/IntegerCache/",
        "teaser": null
      },{
        "title": "brew install kafka",
        "excerpt":"카프카 설치하기 (with homebrew) kafka 설치 brew install kafka zookeeper 설치 kafka를 관리하기 위한 목적 brew install zookeeper 실행 zkserver start brew services start kafka topic 테스트 4-1. 토픽생성 kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test 4-2. 메시지발행 kafka-console-producer --broker-list localhost:9092 --topic test &gt;hi &gt;hello &gt;test 4-3....","categories": ["kafka"],
        "tags": [],
        "url": "/kafka/kafa1/",
        "teaser": null
      },{
        "title": "kafka with springboot",
        "excerpt":"스프링에서 카프카 연동하기 https://oingdaddy.tistory.com/308 실습 url 호출로 프로듀서/컨슈머 둘다 간단하게 구현 가능 dependecy 추가 &lt;dependency&gt; &lt;groupId&gt;org.springframework.kafka&lt;/groupId&gt; &lt;artifactId&gt;spring-kafka&lt;/artifactId&gt; &lt;/dependency&gt; 컨트롤러 생성 @Autowired private KafkaSampleProducerService kafkaSampleProducerService; @GetMapping(value = \"/sendMessage\") public void sendMessage(String message) { kafkaSampleProducerService.sendMessage(message); } producer (KafkaSampleProducerService) KafkaTemplate @Autowired private KafkaTemplate&lt;String, String&gt; kafkaTemplate; public void sendMessage(String message) { System.out.println(\"send message :...","categories": ["kafka"],
        "tags": [],
        "url": "/kafka/kafa2/",
        "teaser": null
      },{
        "title": "kafka concept",
        "excerpt":"Main Concepts and Terminology Main Concepts and Terminology 공식 페이지에 있는 메인컨셉 1. Producer/Consumer 카프카에서 데이터를 읽고 쓰는 것은 이벤트 방식으로 발생한다. 그리고 이 이벤트는 키,값,타임스탬프 그리고 메타데이터들이 있다. 다음과 같은 이벤트가 있다. Event key: \"Alice\" Event value: \"Made a payment of $200 to Bob\" Event timestamp: \"Jun. 25, 2020...","categories": ["kafka"],
        "tags": [],
        "url": "/kafka/kafa3/",
        "teaser": null
      },{
        "title": "install kafdrop",
        "excerpt":"kafdrop 설치 https://github.com/obsidiandynamics/kafdrop 이것저것 좀 찾아봤는데 이걸 젤 많이 쓰느듯하여 초이스 설치순서 소스코드 다운 git clone https://github.com/obsidiandynamics/kafdrop.git jar 파일 생성 ./mvnw clean package 실행 java -jar ./{jar생성위치/jar파일명} 생각보다 간단하게 실행된다. 접속 별다른 설정없이 실행이 되면 기본으로 9000 포트를 사용하고 localhost:9000 에서 아래페이지 접근이 가능하다 저번에 테스트 했을때 만들어놨던 토픽들이 조회된다....","categories": ["kafka"],
        "tags": [],
        "url": "/kafka/kafa4/",
        "teaser": null
      },{
        "title": "golang1",
        "excerpt":"funtion, variable function func add1(x int, y int) int { return x + y } 파라미터의 자료형의 뒷부분에 선언 함수 리턴값의 타입도 뒷부분에 선언 ’;’ 은 생략 func add2(x, y int) int { return x + y } 파라미터의 자료형이 동일할경우 한번만 명시 variable var num1 int var num2, num3...","categories": ["go"],
        "tags": [],
        "url": "/go/golang1/",
        "teaser": null
      },{
        "title": "golang2",
        "excerpt":"if, switch if if v := math.Pow(x, n); v &lt; lim { return v } else { return 0; } if statement; 조건문 {} : 조건을 검사전 state구문 실행 do-while의 if버전 인듯 싶다. 언젠간 유용하게 쓰일듯 else 구문이 if 닫는괄호와 같은 라인에 위치 하지 않을경우 syntax error 조건이 괄호()로 감싸져...","categories": ["go"],
        "tags": [],
        "url": "/go/golang2/",
        "teaser": null
      },{
        "title": "filebeat + elasticsearch 를 활용한 로그 수집",
        "excerpt":"filebeat, elastisearch, kibana   elasticsearch           install elasticsearch        brew install elasticsearch  brew services elasticsearch            kibana           install kibana        brew install kibana  brew services start kibana           filebeat           filebeat 설치        brew install filebeat  brew services start filebeat                filebeat 환경설정       vi /usr/local/etc/filebeat.yml                   ","categories": ["filebeat"],
        "tags": [],
        "url": "/filebeat/filebeat/",
        "teaser": null
      },{
        "title": "user-agent reduction",
        "excerpt":"user-agent 값 축소 대안은 user-agent client hints Why is the User-Agent being reduced? https://developer.chrome.com/blog/user-agent-reduction-origin-trial/ user-agent의 값들이 축소될 예정이다. 현재 크롬에서 관련 작업들을 진행중이고 2022년 2분기 확정예정이다. 나머지 chromium 기반이 아닌 브라우저들은 아직 구체적인 계획은 안 잡힌듯 하다. User-Agent Reduction is an effort to reduce passive fingerprinting surfaces in the Chrome...","categories": ["www"],
        "tags": [],
        "url": "/www/useragent/",
        "teaser": null
      },{
        "title": "Cloud Native Architecture",
        "excerpt":"cloud native architecture      ci/cd, devops   12factor       12factor      base code            형상관리                depencency isolation       configuration            설정정보는 외부에서 변경이 가능해야 한다.                Linkable backing services            stages of creation       ","categories": ["www"],
        "tags": [],
        "url": "/www/cloud-native-architecture/",
        "teaser": null
      }]
