<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>Mutluluk Kuponu</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background: #f4f6f8;
        padding: 20px;
    }
    .panel {
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        max-width: 500px;
        margin: auto;
        box-shadow: 0 10px 25px rgba(0,0,0,.1);
    }
    h2 { margin-top: 0; }
    select, button {
        width: 100%;
        padding: 10px;
        margin: 8px 0;
    }
    button {
        cursor: pointer;
        border: none;
        border-radius: 6px;
        background: #1976d2;
        color: #fff;
        font-weight: bold;
    }
    button.secondary {
        background: #e53935;
    }
    .result {
        background: #e3f2fd;
        padding: 15px;
        margin-top: 10px;
        border-radius: 6px;
    }
/* Emoji + konfeti */
.emoji-box{
  text-align:center;
  margin: 10px 0 15px;
}
.emoji-box img{
  width: 120px;
  max-width: 42vw;
  transition: transform .3s ease;
  user-select:none;
}
.emoji-celebrate{ animation: celebrate 1s ease-in-out; }
@keyframes celebrate{
  0%{transform:scale(1) rotate(0deg)}
  20%{transform:scale(1.15) rotate(-10deg)}
  40%{transform:scale(1.28) rotate(10deg)}
  60%{transform:scale(1.18) rotate(-6deg)}
  80%{transform:scale(1.08) rotate(6deg)}
  100%{transform:scale(1) rotate(0deg)}
}
#confettiCanvas{
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}
</style>
<!-- PWA meta -->
<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#1976d2">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Mutluluk Kuponu">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<link rel="icon" href="icons/icon-192.png">
<!-- iOS splash screens -->
<link rel="apple-touch-startup-image" href="splash/iphone-1290x2796.png" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="splash/iphone-1179x2556.png" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="splash/iphone-1284x2778.png" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="splash/iphone-1125x2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
<link rel="apple-touch-startup-image" href="splash/ipad-2048x2732.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
</head>
<body>
<canvas id="confettiCanvas"></canvas>


<div class="panel">
    
    <div class="emoji-box"><img src="emoji.png" id="emoji" alt="Emoji" /></div>
<h2> ❤️Mutluluk Kuponunu Seçim Ekranı ❤️ </h2>

    <label>Dönem Tipi</label>
    <select id="periodType">
        <option value="Ay">Ay</option>
        <option value="Çeyrek">Çeyrek</option>
        <option value="Yıl">Yıl</option>
    </select>

    <label>Dönem Değeri</label>
    <select id="periodValue"></select>

    <button onclick="rastgeleKupon()">🎲 Rastgele Kuponunu Seç 🎁😊❤️</button>
    <button class="secondary" onclick="gecmisiSifirla()">🧹 Bu Dönemi Sıfırla</button>

    <div class="result" id="sonuc">Henüz kupon seçilmedi.</div>
</div>

<script>
const kuponlar = [

    { ay:"Ocak", no:1, metin:"Yeni yılın ilk ‘biz’ randevusu: mum ışığı + 1 şarkı + 1 uzun sarılma. 🕯️🎶🤍" },
    { ay:"Ocak", no:2, metin:"Battaniye burrito kuponu: Sen sarılıyorsun, ben çay-servis modundayım. 🛋️☕" },
    { ay:"Ocak", no:3, metin:"Ayak masajı (10 dk) + sıcak çorap servisi: VIP ev paketi. 🦶🧦✨" },
    { ay:"Ocak", no:4, metin:"‘Yeni yıl, yeni rota’: Hiç gitmediğimiz bir kahveciyi keşfediyoruz. ☕🗺️" },
    { ay:"Ocak", no:5, metin:"Çantana gizli not bırakıyorum: gün içinde yakalayınca gülümseyeceksin. 💌🙂" },
    { ay:"Ocak", no:6, metin:"Dizi seçimi bende: itiraz hakkın 1 kez, sonrası ‘tamam aşkım’ 😄 📺" },
    { ay:"Ocak", no:7, metin:"‘Bugün sen dinlen’: ev işi + toparlama benden, sen koltukta kraliçesin. 👑🛋️" },
    { ay:"Ocak", no:8, metin:"Kış yürüyüşü challenge: 20 dk yürüyüş + dönüşte sıcak tatlı. ❄️🚶‍♂️🍰" },
    { ay:"Ocak", no:9, metin:"1 sayfalık mini mektup: ‘Bu yıl seni neden daha çok seviyorum?’ 💖✍️" },
    { ay:"Ocak", no:10, metin:"Koltukta yastık kalesi: giriş şifresi ‘öpücük’. 😘🛡️" },
    { ay:"Ocak", no:11, metin:"Telefonlar sessizde 30 dk: dünya beklesin, biz yavaşlayalım. 📵🕰️" },
    { ay:"Ocak", no:12, metin:"Mini ‘market keşfi’: hiç almadığımız 3 atıştırmalığı seçip tadım yapıyoruz. 🛒🍿" },

    { ay:"Şubat", no:1, metin:"Sevgililer Günü değil, ‘sen günün’: dışarıda tatlı date (30 dk bile yeter). 💕🍰" },
    { ay:"Şubat", no:2, metin:"3 saçma şaka hakkım var. Gülmesen de devam: sevgiden kaynaklı 😄 🤪" },
    { ay:"Şubat", no:3, metin:"Sıcak içecek servisi + battaniye + loş ışık: ‘kış spa’ modu. ☕🛋️🕯️" },
    { ay:"Şubat", no:4, metin:"Birlikte yeni bir tat deniyoruz: ‘bunu sevdik mi’ oylaması yapıyoruz. 🍽️🗳️" },
    { ay:"Şubat", no:5, metin:"Fotoğrafımızı bastırıp arkasına ‘iyi ki’ notu yazıyorum. 🖼️💌" },
    { ay:"Şubat", no:6, metin:"Karaoke düeti: ses güzel olmak zorunda değil, enerji şart 🎤 🎶" },
    { ay:"Şubat", no:7, metin:"Omuz masajı (10 dk): konuşmak yok, rahatlamak var. 💆‍♀️😌" },
    { ay:"Şubat", no:8, metin:"Mini hazine avı: 3 ipucu, finalde minik sürpriz. 🗺️🎁" },
    { ay:"Şubat", no:9, metin:"Evde mum ışığında film: arada ‘seni seviyorum’ molası zorunlu. 🎬🕯️❤️" },
    { ay:"Şubat", no:10, metin:"Atıştırmalık jürisi sensin: 3 seçenek, puanlama, kazanan tekrar alınır. 🍿⭐" },
    { ay:"Şubat", no:11, metin:"‘Bugün ben hallederim’: koşturmacanı ben alıyorum, sen nefes al. 🤍🌿" },
    { ay:"Şubat", no:12, metin:"Sergi/müze mini turu: sonunda ‘en çok neyi sevdin’ sohbeti. 🖼️🗣️" },

    { ay:"Mart", no:1, metin:"Bahar moduna geçiş: yürüyüş + el ele ‘plan yapma’ sohbeti. 🌸🤝" },
    { ay:"Mart", no:2, metin:"‘Trip yok’ protokolü: yanlış anlaşılma olursa sarılma ile çözülür. 🤗🕊️" },
    { ay:"Mart", no:3, metin:"Çorba + film gecesi: iç ısıtan ikili paket. 🍲🎬" },
    { ay:"Mart", no:4, metin:"Yeni bir kafe keşfi: ‘bizim yerimiz mi’ testi. ☕🧭" },
    { ay:"Mart", no:5, metin:"Gün içinde sürpriz arama: ‘nasılsın’ değil, ‘iyi ki varsın’ araması. 📞💛" },
    { ay:"Mart", no:6, metin:"Komik anılar gecesi: en komik 5 anımızı sırayla anlatıyoruz. 😂📖" },
    { ay:"Mart", no:7, metin:"Rahat kıyafet günü: şıklık iptal, huzur aktif 🧸 👕" },
    { ay:"Mart", no:8, metin:"Fotoğraf avı: şehirde 10 ‘güzel detay’ yakalıyoruz. 📸🏙️" },
    { ay:"Mart", no:9, metin:"Mini mektup: ‘Sende en sevdiğim 7 şey’ listesi. 💌7️⃣" },
    { ay:"Mart", no:10, metin:"Oyun gecesi: kaybeden sıcak içecek yapar (drama yok). 🎲☕" },
    { ay:"Mart", no:11, metin:"Telefon sessiz saati: 30 dk yavaş hayat + sarılma. 📵🤍" },
    { ay:"Mart", no:12, metin:"Günübirlik mini kaçış planı: yakın bir yere kısa rota. 🚗🗺️" },

    { ay:"Nisan", no:1, metin:"Çiçek pazarı mini turu: eve 1 demet ‘bahar’ getiriyoruz. 💐🌼" },
    { ay:"Nisan", no:2, metin:"‘Enerji tasarrufu’ günü: tembellik serbest, vicdan azabı yasak 😄 🔋" },
    { ay:"Nisan", no:3, metin:"Mini ev spa: maske + loş ışık + sakin playlist. 🧖‍♀️🎧" },
    { ay:"Nisan", no:4, metin:"Yeni bir sokak/mahalle keşfi: yürüyüş + kahve molası. 🚶‍♂️☕" },
    { ay:"Nisan", no:5, metin:"Sürpriz tatlı: ‘bugün senin gülüşün’ için küçük bir kaçamak. 🍰😊" },
    { ay:"Nisan", no:6, metin:"Yastık kalesi 2.0: giriş şifresi bu kez ‘gülücük’. 😄🛡️" },
    { ay:"Nisan", no:7, metin:"Omuz masajı + sıcak içecek: bahar yorgunluğuna veda. 💆‍♂️☕" },
    { ay:"Nisan", no:8, metin:"Hiç denemediğimiz bir tarif: birlikte yapıp birlikte yiyoruz. 🍳👩‍🍳" },
    { ay:"Nisan", no:9, metin:"Aynaya post-it notu: sabah görünce ‘tamam’ diyeceksin. 🪞📝" },
    { ay:"Nisan", no:10, metin:"Karaoke düeti: bu sefer ‘en kötü ses’ ödülü de var 😄 🎤" },
    { ay:"Nisan", no:11, metin:"‘Ben hallederim’ kuponu: ufak bir işini ben üstleniyorum. 🛠️🤍" },
    { ay:"Nisan", no:12, metin:"Sergi/müze değilse bile: kitapçı turu + 1 küçük keşif. 📚🗺️" },

    { ay:"Mayıs", no:1, metin:"Gün batımı randevusu: kısa yürüyüş, sonra ‘iyi ki’ sohbeti. 🌇🤍" },
    { ay:"Mayıs", no:2, metin:"Dondurma turu: iki top sınırı yok, mutluluk var 🍦😄" },
    { ay:"Mayıs", no:3, metin:"Evde piknik: örtü, atıştırmalık, rahat kıyafet, bol huzur. 🧺🌿" },
    { ay:"Mayıs", no:4, metin:"Yeni aktivite deneme: bowling/workshop/dans… ne denk gelirse. 🎳🎨💃" },
    { ay:"Mayıs", no:5, metin:"Playlist güncelleme: ikimizin şarkılarından 12 parça seçiyoruz. 🎶📀" },
    { ay:"Mayıs", no:6, metin:"‘Sen seç, ben uygularım’ günü (mantık sınırlarıyla 😄). 🎯" },
    { ay:"Mayıs", no:7, metin:"Ayak masajı + ‘bir bölüm daha’ izni. 🦶📺" },
    { ay:"Mayıs", no:8, metin:"Fotoğraf avı: 10 kare, 1 baskı, 1 anı. 📸🖨️" },
    { ay:"Mayıs", no:9, metin:"Mini mektup: ‘Sana minnettar olduğum 5 şey’. 💌🙏" },
    { ay:"Mayıs", no:10, metin:"Oyun gecesi: kaybeden bulaşıkları toparlar (barışçıl). 🎲🫧" },
    { ay:"Mayıs", no:11, metin:"‘Bugün sen dinlen’: ev işi + düzen benden. 🧹🤍" },
    { ay:"Mayıs", no:12, metin:"Yeni restoran/kafe denemesi: ‘favori liste’ye aday arıyoruz. 🍽️⭐" },

    { ay:"Haziran", no:1, metin:"Yaz akşamı yürüyüşü: kulaklık paylaşımı opsiyonlu. 🌆🎧" },
    { ay:"Haziran", no:2, metin:"Soğuk kahve servisi: buz miktarı senin hükmünde 😄 🧊☕" },
    { ay:"Haziran", no:3, metin:"Buz gibi meyve tabağı + dizi: yaz konforu. 🍉📺" },
    { ay:"Haziran", no:4, metin:"Günübirlik mini kaçış: yakın rota + kahve molası. 🚗☕" },
    { ay:"Haziran", no:5, metin:"Sürpriz mesaj: ‘Bugünün en güzel yanı sensin’ diye düşüyorum. 💬💖" },
    { ay:"Haziran", no:6, metin:"‘Ben şoförüm’ kuponu: sen DJ’sin, ben sürücüyüm. 🚗🎧" },
    { ay:"Haziran", no:7, metin:"Telefon sessiz 30 dk: yavaşlık + sarılma. 📵🤍" },
    { ay:"Haziran", no:8, metin:"Yeni bir içecek/limonata tarifi deniyoruz, tadım jürisi sensin. 🍋🥤" },
    { ay:"Haziran", no:9, metin:"Evde balkon/teras sohbeti: 30 dk ‘sadece biz’. 🌙🛋️" },
    { ay:"Haziran", no:10, metin:"Atıştırmalık jürisi 2: 3 yeni şey, 10 üzerinden puan. 🍿🔟" },
    { ay:"Haziran", no:11, metin:"Omuz masajı + klima/fan ayarı: VIP rahatlama. 💆‍♀️❄️" },
    { ay:"Haziran", no:12, metin:"Harita açıp 3 hayali rota seçiyoruz: kısa/orta/bir gün. 🗺️✨" },

    { ay:"Temmuz", no:1, metin:"Yaz gecesi balkon date: ışıklar, müzik, 1 uzun sarılma. 🌙🎶🤍" },
    { ay:"Temmuz", no:2, metin:"Karpuz gecesi: çekirdek sayma yarışması (kazanan: sen). 🍉😄" },
    { ay:"Temmuz", no:3, metin:"Klima altında film maratonu: dışarısı sıcak, biz serin. ❄️🎬" },
    { ay:"Temmuz", no:4, metin:"Yeni park rotası: yürüyüş + dondurma finali. 🌳🍦" },
    { ay:"Temmuz", no:5, metin:"Yeni park rotası: yürüyüş + dondurma finali. 🌳🍦" },
    { ay:"Temmuz", no:6, metin:"Karaoke düeti: bu sefer ‘en dramatik performans’ ödülü var 😄 🎤" },
    { ay:"Temmuz", no:7, metin:"Ayak masajı + soğuk içecek servisi: yaz VIP paketi. 🦶🥤" },
    { ay:"Temmuz", no:8, metin:"Mini gezi: hiç gitmediğimiz bir semtte 1 saat keşif. 🚶‍♂️🗺️" },
    { ay:"Temmuz", no:9, metin:"Fotoğraf çekimi: ‘biz’ temalı 10 kare, en iyisini saklıyoruz. 📸❤️" },
    { ay:"Temmuz", no:10, metin:"‘Trip yok’ protokolü yaz versiyonu: yanlış anlaşılma = dondurma. 🍦😄" },
    { ay:"Temmuz", no:11, metin:"‘Ben hallederim’: küçük işlerin tamamı bende, sen keyifte. 🛠️😌" },
    { ay:"Temmuz", no:12, metin:"Hiç denemediğimiz bir sokak lezzeti: birlikte test ediyoruz. 🌮🍟" },

    { ay:"Ağustos", no:1, metin:"Brunch date: yavaş sabah + uzun sohbet. 🍳☀️" },
    { ay:"Ağustos", no:2, metin:"‘0 stres’ anlaşması: tartışma değil, sarılma var 😄 🤗" },
    { ay:"Ağustos", no:3, metin:"Mini moral paketi: çikolata/maske/çorap üçlemesi. 🍫🧦" },
    { ay:"Ağustos", no:4, metin:"Akşamüstü keşif: yeni kafe + yeni sokak. ☕🚶‍♂️" },
    { ay:"Ağustos", no:5, metin:"Sürpriz not: ‘Günün en güzel kısmı sensin’ aynaya bırakıyorum. 🪞💌" },
    { ay:"Ağustos", no:6, metin:"Oyun gecesi: kaybeden içecek yapar, kazanan keyif sürer. 🎮🥤" },
    { ay:"Ağustos", no:7, metin:"Telefon sessiz saati: 30 dk yavaşlık + sarılma. 📵🤍" },
    { ay:"Ağustos", no:8, metin:"Fotoğraf avı: günün ‘en tatlı detayı’nı birlikte yakalıyoruz. 📸✨" },
    { ay:"Ağustos", no:9, metin:"Playlist: yazın en romantik 10 şarkısını birlikte seçiyoruz. 🎶💞" },
    { ay:"Ağustos", no:10, metin:"Saçma şaka kuponu: 3 kez ‘ciddiymiş gibi’ saçmalama hakkım var 😄 🤪" },
    { ay:"Ağustos", no:11, metin:"Ayak masajı + ince örtü altında film: yaz konforu. 🦶🎬" },
    { ay:"Ağustos", no:12, metin:"Yeni bir aktivite: bisiklet, yürüyüş ya da mini workshop seçiyoruz. 🚲🎨" },

    { ay:"Eylül", no:1, metin:"Rutin başlangıcı: kahve + ‘bu ay neye seviniyoruz’ sohbeti. ☕🗓️" },
    { ay:"Eylül", no:2, metin:"‘Ben seçiyorum’ dizi bölümü: itiraz hakkın 1, sonrası teslimiyet 😄 📺" },
    { ay:"Eylül", no:3, metin:"Sıcak içecek + battaniye: sonbahara yumuşak giriş. ☕🍁" },
    { ay:"Eylül", no:4, metin:"Yeni kitapçı/şehir turu: 1 saat keşif + 1 küçük ödül. 📚🏙️" },
    { ay:"Eylül", no:5, metin:"Mini mektup: ‘Seninle gurur duyduğum 5 şey’. 💌⭐" },
    { ay:"Eylül", no:6, metin:"Komik anılar gecesi: eski fotoğraflara bakıp kahkaha. 😂📸" },
    { ay:"Eylül", no:7, metin:"Omuz masajı: ‘hafta yorgunluğu’na tekme. 💆‍♂️👊" },
    { ay:"Eylül", no:8, metin:"Yeni tat testi: hiç yemediğimiz bir şeyi seçip puanlıyoruz. 🍽️📝" },
    { ay:"Eylül", no:9, metin:"Gün batımı yürüyüşü: 20 dk + dönüşte tatlı molası. 🌇🍰" },
    { ay:"Eylül", no:10, metin:"Yastık kalesi: bu sefer ‘VIP salon’ isimli bölüm var 😄 🛡️" },
    { ay:"Eylül", no:11, metin:"‘Bugün sen dinlen’: ufak işleri ben alıyorum. 🤍🧹" },
    { ay:"Eylül", no:12, metin:"Mini hazine avı: 3 ipucu, dışarıda minik sürpriz finali. 🗺️🎁" },

    { ay:"Ekim", no:1, metin:"Mum + loş ışık + sohbet: ‘sonbahar romantizmi’ gecesi. 🕯️🍂" },
    { ay:"Ekim", no:2, metin:"Kurabiye yapıyoruz: tatma jürisi sensin, ben stajyerim 😄 🍪" },
    { ay:"Ekim", no:3, metin:"Çorba + film: battaniye bonuslu paket. 🍲🎬" },
    { ay:"Ekim", no:4, metin:"Yeni yürüyüş rotası: yaprak sesleri + kahve molası. 🍁🚶‍♂️☕" },
    { ay:"Ekim", no:5, metin:"Sürpriz not: ‘seninle her mevsim güzel’ mesajı. 💌🍂" },
    { ay:"Ekim", no:6, metin:"‘Drama yok’ anlaşması: yanlış anlaşılma olursa sarılma var. 🤗🕊️" },
    { ay:"Ekim", no:7, metin:"Ayak masajı + sıcak içecek: sonbahar yorgunluğu gitsin. 🦶☕" },
    { ay:"Ekim", no:8, metin:"Sergi/müze turu: sonunda 1 tatlı ödülü. 🖼️🍰" },
    { ay:"Ekim", no:9, metin:"Fotoğraf kartı: 1 foto + arkasına ‘iyi ki’ notu. 📸💌" },
    { ay:"Ekim", no:10, metin:"Karaoke düeti: ‘en dramatik bakış’ ödülü sende 😄 🎤" },
    { ay:"Ekim", no:11, metin:"Telefon sessiz 30 dk: yavaşlık + sarılma. 📵🤍" },
    { ay:"Ekim", no:12, metin:"Yeni kafe deneme: ‘favori listemize girer mi’ testi. ☕⭐" },

    { ay:"Kasım", no:1, metin:"Sıcacık bir akşam: evde date + ‘iyi ki’ konuşması. 🏠🤍" },
    { ay:"Kasım", no:2, metin:"Atıştırmalık tepsisi hazırlıyorum: ‘konfor seviyesi’ yükseliyor 😄 🍿" },
    { ay:"Kasım", no:3, metin:"Omuz masajı (10 dk): kış moduna rahat giriş. 💆‍♀️❄️" },
    { ay:"Kasım", no:4, metin:"Yeni bir çay/kahve denemesi: 3 çeşit tadım. ☕🍵" },
    { ay:"Kasım", no:5, metin:"Mini mektup: ‘senin yanında en güvende hissettiğim 3 an’. 💌🔐" },
    { ay:"Kasım", no:6, metin:"Komik anılar: en komik 5 olayı ‘podcast’ gibi anlatıyoruz. 🎙️😂" },
    { ay:"Kasım", no:7, metin:"Sıcak duş sonrası havlu servisi: VIP hissi garanti. 🚿🧖‍♂️" },
    { ay:"Kasım", no:8, metin:"Kış yürüyüşü: 20 dk dışarı + dönüşte boza/sıcak içecek. ❄️🚶‍♂️☕" },
    { ay:"Kasım", no:9, metin:"Sürpriz küçük hediye: ‘sen’ temalı minik bir şey. 🎁💖" },
    { ay:"Kasım", no:10, metin:"Yastık kalesi: giriş şifresi ‘tamam tamam’ 😄 🛡️" },
    { ay:"Kasım", no:11, metin:"Telefon sessiz saati: 30 dk sadece biz. 📵🤍" },
    { ay:"Kasım", no:12, metin:"Yeni mekan keşfi: 1 saatlik mini tur + sıcak tatlı. 🗺️🍰" },

    { ay:"Aralık", no:1, metin:"Yıl sonu ‘iyi ki’ gecesi: 10 dakika, 10 teşekkür, 1 sarılma. 🎇🤍" },
    { ay:"Aralık", no:2, metin:"Yılbaşı film gecesi: battaniye şart, tartışma yasak 😄 🎄🎬" },
    { ay:"Aralık", no:3, metin:"Sıcak içecek + kurabiye: kış konforu paketi. ☕🍪" },
    { ay:"Aralık", no:4, metin:"Mini yılbaşı avı: evde 3 ipucu, finalde küçük sürpriz. 🎄🎁" },
    { ay:"Aralık", no:5, metin:"Geleceğe mektup: 1 yıl sonraya not yazıp saklıyoruz. ✍️📅" },
    { ay:"Aralık", no:6, metin:"Hediyeleşme oyunu: 1 komik, 1 anlamlı, 1 mini sürpriz. 🎁😄" },
    { ay:"Aralık", no:7, metin:"Ayak masajı + ‘bir bölüm daha’ izni (limit yok). 🦶📺" },
    { ay:"Aralık", no:8, metin:"Kış yürüyüşü + ışıklar: kısa rota, bol fotoğraf. ❄️✨📸" },
    { ay:"Aralık", no:9, metin:"Sürpriz not: ‘sen benim en güzel yılbaşımsın’. 💌🎄" },
    { ay:"Aralık", no:10, metin:"Karaoke düeti: yılbaşı özel ‘en tatlı fail’ ödülü 😄 🎤" },
    { ay:"Aralık", no:11, metin:"Telefon sessiz 30 dk: yıl sonu reset + sarılma. 📵🤍" },
    { ay:"Aralık", no:12, metin:"Yılbaşı öncesi yeni bir mekanda sıcak içecek keşfi. ☕🎄" }
];

const dönemler = {
    "Ay": ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],
    "Çeyrek": ["Ç1","Ç2","Ç3","Ç4"],
    "Yıl": ["2025"]
};

const periodType = document.getElementById("periodType");
const periodValue = document.getElementById("periodValue");
const sonuc = document.getElementById("sonuc");

periodType.onchange = doldurDonem;
doldurDonem();

function doldurDonem(){
    periodValue.innerHTML = "";
    dönemler[periodType.value].forEach(v=>{
        const o=document.createElement("option");
        o.value=v;
        o.text=v;
        periodValue.appendChild(o);
    });
}

function rastgeleKupon(){
    const key = periodType.value + "_" + periodValue.value;
    const used = JSON.parse(localStorage.getItem(key) || "[]");

    const adaylar = kuponlar.filter(k =>
        periodType.value === "Ay" ? k.ay === periodValue.value : true
    );

    const kalanlar = adaylar.filter(k => !used.includes(k.no + "_" + k.ay));

    if(kalanlar.length === 0){
        alert("Bu dönem için kupon kalmadı 🎯");
        return;
    }

    const secilen = kalanlar[Math.floor(Math.random()*kalanlar.length)];
    used.push(secilen.no + "_" + secilen.ay);
    localStorage.setItem(key, JSON.stringify(used));

    sonuc.innerHTML = `
        <strong>🎉 Seçilen Kupon</strong><br><br>
        <b>Ay:</b> ${secilen.ay}<br>
        <b>No:</b> ${secilen.no}<br>
        <b>Metin:</b> ${secilen.metin}
    `;

    celebrateEmoji();

}

function gecmisiSifirla(){
    const key = periodType.value + "_" + periodValue.value;
    localStorage.removeItem(key);
    alert("Bu dönem sıfırlandı ✨");
}
/* 🎊 Confetti engine (lightweight) */
const c = document.getElementById("confettiCanvas");
const ctx = c.getContext("2d");
let confetti = [];
let confettiRunning = false;
function resizeConfetti(){
  c.width = window.innerWidth * devicePixelRatio;
  c.height = window.innerHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
}
window.addEventListener("resize", resizeConfetti);
resizeConfetti();

function spawnConfetti(n=120){
  const colors = ["#1976d2","#ff7a00","#ffd54f","#66bb6a","#ef5350","#ab47bc"];
  for(let i=0;i<n;i++){
    confetti.push({
      x: Math.random()*window.innerWidth,
      y: -20 - Math.random()*window.innerHeight*0.2,
      w: 6 + Math.random()*6,
      h: 6 + Math.random()*10,
      vx: -2 + Math.random()*4,
      vy: 3 + Math.random()*5,
      r: Math.random()*Math.PI,
      vr: (-0.2 + Math.random()*0.4),
      color: colors[(Math.random()*colors.length)|0],
      life: 60 + (Math.random()*50|0)
    });
  }
}

function startConfetti(durationMs=1400){
  spawnConfetti(140);
  if(confettiRunning) return;
  confettiRunning = true;
  const endAt = performance.now() + durationMs;

  function frame(t){
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    confetti = confetti.filter(p=>p.life>0);
    for(const p of confetti){
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05; // gravity
      p.r += p.vr;
      p.life -= 1;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    }
    if(t < endAt || confetti.length>0){
      requestAnimationFrame(frame);
    } else {
      confettiRunning = false;
      ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    }
  }
  requestAnimationFrame(frame);
}

function celebrateEmoji(){
  const emoji = document.getElementById("emoji");
  if(!emoji) return;
  emoji.classList.remove("emoji-celebrate");
  void emoji.offsetWidth; // reset
  emoji.classList.add("emoji-celebrate");
  startConfetti(1600);
}

/* PWA SW register */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(()=>{});
  });
}
</script>
</body>
</html>
