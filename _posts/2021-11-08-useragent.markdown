---
layout: post
title:  "user-agent reduction"
date:   2021-11-08 15:00:00 +0530
categories: www
---

user-agent 값 축소

대안은 user-agent client hints



### Why is the User-Agent being reduced? 

- https://developer.chrome.com/blog/user-agent-reduction-origin-trial/
- user-agent의 값들이 축소될 예정이다. 
- 현재 크롬에서 관련 작업들을 진행중이고 2022년 2분기 확정예정이다. 
- 나머지 chromium 기반이 아닌 브라우저들은 아직 구체적인 계획은 안 잡힌듯 하다. 

`
User-Agent Reduction is an effort to reduce passive fingerprinting surfaces in the Chrome browser that was first announced in January 2020. By reducing the information in the UA string to just the browser's brand and significant version, its desktop or mobile distinction, and the platform it's running on, it becomes more difficult to identify individual users.
`


### 변경되는 부분

- https://www.chromium.org/updates/ua-reduction
- 브라우저의 브랜드/버전 정보, 단말기 정보들이 다소 간단해지고, 마이너 버전의 숫자를 더이상 표시하지 않게 된다. 

Sample UA Strings: Final Reduced State
||Desktop (user on Windows 8.1, for example)|
|--|--|
|Old UA |Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.1234.56 Safari/537.36|
|Final Reduced UA|Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.0.0 Safari/537.36|

||Mobile (user on Samsung Galaxy, for example)|
|--|--|
|Old UA |Mozilla/5.0 (Linux; Android 9; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.1234.56 Mobile Safari/537.36|
|Final Reduced UA|Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.0.0 Mobile Safari/537.36|

||Tablet (user on Samsung Galaxy, for example)|
|--|--|
|Old UA |Mozilla/5.0 (Linux; Android 9; SM-T810) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.1234.56 Safari/537.36|
|Final Reduced UA|Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.0.0 Safari/537.36|


### User-Agent Client Hints
- https://wicg.github.io/ua-client-hints/#http-ua-hints
- user-agent 대신 브라우저/OS/모바일 여부등의 대한 값을 새로운 header 값을 통해 얻을 수 있다. 
- User-Agent Client Hints Header

    ![useragenthints](/assets/img/useragenthints.png)

- 모바일 여부값 확인
    ```java
    // true : ?1 / false : ?0
    final String isMobile = request.getHeader("sec-ua-ch-mobile");
    ```

- 참고로 아직 w3c 표준은 아니고, `chrome/opera/samsaung` 브라우저에서만 현재 제공중이다. 
  (https://developer.mozilla.org/en-US/docs/Web/API/User-Agent_Client_Hints_API) 

