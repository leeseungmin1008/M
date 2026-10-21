// 최소한의 서비스워커: 크롬의 PWA 설치 가능 조건(fetch 핸들러가 있는 서비스워커 등록)을 만족시키기 위한 용도.
// 안쪽 구글 앱스크립트 화면은 실시간 시트 데이터를 다루므로 오프라인 캐싱은 하지 않고, 요청을 그대로 네트워크로 통과시킨다.
self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
  event.respondWith(fetch(event.request));
});
