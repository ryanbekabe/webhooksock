# webhooksock

Karena menggunakan WebHook dari API Telegram sudah biasa,
misal pada penggunaan Telegram Bot,
namun kita (saya) tidak tau bagaimana sebenarnya teknologi tersebut bekerja,
WebHookSock inilah salah satu prototipe bagaimana teknologi WebHook pada API Telegram tersebut bekerja.

Tujuan membuat WebHookSock ini sebenarnya untuk mengintegrasikan perangkat NodeMCU ESP8266 saya agar bisa melakukanremote terhadap perangkat secara real-time, dalam kasus ini saya ingin menerapkan untuk remote kipas angin.

30062023, Palangka Raya.

Ryan Bekabe | HanyaJasa.Com | hanyajasa@gmail.com



```
http://hanyajasa.com:3006/

https://reqbin.com/ -> http://hanyajasa.com:3006/webhook -> POST -> Content = JSON

{"Bismillah":"Test post to Webhook HanyaJasa"}


GitHub: https://github.com/ryanbekabe/webhooksock

git init
git add .
git commit -m "WebHookSock 30062023c"
git branch -M main
git remote add origin git@github.com:ryanbekabe/webhooksock.git
git push -u origin main
```

