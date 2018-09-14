# REST API 샘플

GET, POST, PUT, DELETE 샘플 예제



## Getting Started

```bash
$ npm install
$ node server.js
```



## Tests

### curl

```bash
$ curl -X GET http://localhost:3000/cats
$ curl -X GET http://localhost:3000/cats/1
$ curl -X POST -d "name=java&age=5" http://localhost:3000/cat
$ curl -X PUT -d "name=hong&age=30" http://localhost:3000/cat/1
$ curl -X DELETE http://localhost:3000/cat/1
```



### Postman

sample.postman_collection.json 파일을 import 하여 실행 가능.



