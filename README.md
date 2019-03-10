# The Fastest Image Upload Server (Express)

세상에서 가장 빠르게 이미지 업로드 서버를 만들고 이를 Persistent 하게 유지하도록 한다.

I made a express server where it saves tremendous images and show using multer. To make it persistent I deploy mongoDB and it will save all the link of images.

## 프로젝트 요구 사항

- MongoDB 를 내부로 숨긴다. (Persistence 를 변경할 수 있도록 한다. elasticsearch, mongodb, mysql 등)
- 간편하게 Image 업로드를 만든다.
- Testing 은 Mocha 를 사용한다.
- 최소한의 Dependency 를 가진다.
- 관리자 페이지를 별도로 활성화 한다.
- nginx 통합이 용이하도록 한다.
- cache 서버 이용을 위한 가이드를 제공한다.
- vueexpress 와 같은 template engine 을 고려한다.

## NPM 패키지 업로드 및 관리

- express/cors 를 참조하여 패키지를 만든다.

## 개발 참고 프로젝트

- cors
  - express middleware for handling cors
- morgan
  - HTTP request logger middleware for node.js
