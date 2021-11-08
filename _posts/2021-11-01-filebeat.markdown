---
layout: post
title:  "filebeat + elasticsearch 를 활용한 로그 수집"
date:   2021-11-01 15:00:00 +0530
categories: filebeat
---

filebeat, elastisearch, kibana



### elasticsearch

1. install elasticsearch

    ```
    brew install elasticsearch
    brew services elasticsearch

    ```


### kibana

1. install kibana

    ```
    brew install kibana
    brew services start kibana
    ```


### filebeat 

1. filebeat 설치

    ```
    brew install filebeat
    brew services start filebeat
    ```

2. filebeat 환경설정

    vi /usr/local/etc/filebeat.yml

    ```


    ```



