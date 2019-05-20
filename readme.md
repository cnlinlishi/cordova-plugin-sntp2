# cordova-plugin-sntp2

Forking dari project https://github.com/hub9/cordova-plugin-sntp. Hanya mendukung Cordova 8.X dan Android ^7.0.0.

Plugin ini menghubungkan perangkat ke server NTP untuk mengambil waktu yang lebih akurat. 

Baru di implementasi untuk platform Android, sedangkan iOS implementasi bersifat dummy.
Karena di iOS perangkat akan selalu tersinkronisasi dengan server NTP, jam yang tidak tersinkronisasi ini bukan menjadi masalah umum.
Berbeda dengan Android yang hanya melakukan sinkronisasi saat boot.

### Instalasi
```bash
$ cordova plugin cordova-plugin-sntp2
```

### Penggunaan
Initialization
```javascript
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    // Mengatur SNTP dan timeout
    sntp2.setServer("0.id.pool.ntp.org", 10000);
}
```

Mengambil waktu (epoch) dalam milisecond:
```javascript
sntp2.getTime(
    function(time) {
        console.log("Waktu (epoch) dalam milisecond :", time['time']);
    },
    function(errorMessage) {
        console.log("Terjadi error:", errorMessage);
    }
);
```

Mengambil offset dari waktu yang dimiliki perangkat dan waktu dari SNTP:
```javascript
sntp2.getClockOffset(
    function(offset) {
        console.log("Offset :", offset['offset']);
    },
    function(errorMessage) {
        console.log("Terjadi error:", errorMessage);
    }
);
```
