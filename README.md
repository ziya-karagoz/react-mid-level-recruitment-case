React Bilgisi

Hooks:
Bir junior developer size geldi ve useEffectin nasıl çalıştığını sordu. Nasıl Açıklarsınız?

State Management:
React'ta state yönetimi için hangi yöntemleri kullanabilirsiniz? Context API ve Redux arasındaki farkları anlatın.
`React'ta state yönetimi için Context API, Redux, MobX, Recoil gibi çeşitli yöntemler kullanılabilir. Context API, component ağacı boyunca veri geçişini sağlamak için kullanılır ve küçük uygulamalar için idealdir. Redux ise daha karmaşık uygulamalarda merkezi bir state yönetimi sağlar. Redux, state'in tek bir kaynakta tutulmasını ve predictability (öngörülebilirlik) sağlar.`


Performance Optimization:
React uygulamalarında performansı artırmak için hangi teknikleri kullanabilirsiniz? Örnekler verin.

`React uygulamalarında performansı artırmak için şunları yapabilirsiniz:
Memoization: React.memo ve useMemo ile component'leri ve değerleri memoize edebilirsiniz.
Lazy Loading: React.lazy ve Suspense kullanarak component'leri lazily (tembel) yükleyebilirsiniz.
Code Splitting: Webpack ile bundle'ları bölerek daha hızlı yükleme süreleri sağlayabilirsiniz.
Avoid Reconciliation: shouldComponentUpdate veya React.PureComponent kullanarak gereksiz yeniden render'ları önleyebilirsiniz.`

Javascript Bilgisi

Event Loop:
Javascript'te event loop nedir ve nasıl çalışır? Call stack, web APIs ve callback queue arasındaki ilişkiyi açıklayın.
`Event loop, JavaScript'in asenkron işlemleri yönetme mekanizmasıdır. Call stack, web APIs, ve callback queue'den oluşur. Call stack, fonksiyon çağrılarının sırasını tutar. Web APIs, asenkron işlemleri (setTimeout, HTTP istekleri vb.) çalıştırır ve tamamlandığında callback queue'ya callback fonksiyonlarını gönderir. Event loop, call stack boşaldığında callback queue'daki fonksiyonları alır ve call stack'e ekler.`

Array Methods:

map, filter ve reduce array metodlarının kullanımını ve aralarındaki farkları açıklayın. Her birine birer örnek verin.

`map: Bir array'i dönüştürmek için kullanılır. Her elemanı bir fonksiyona geçirir ve yeni bir array döner.
filter: Bir array'den belirli bir şartı sağlayan elemanları seçer ve yeni bir array döner.
reduce: Bir array'i tek bir değere indirger.`

Typescript Bilgisi
Types:
Typescript'te interface ve type arasındaki farkları açıklayın. Ne zaman hangisini kullanırsınız?
`interface: Object yapıları için kullanılır ve genişletilebilir.
type: Herhangi bir tipi tanımlamak için kullanılır ve daha esnektir.`


Generics:
Typescript'te generics nedir ve ne zaman kullanılır?
`Generics, tipleri parametre olarak alan fonksiyonlar veya sınıflar tanımlamak için kullanılır`

Type Inference:

Typescript'te type inference nasıl çalışır? Type inference'ın faydalarını açıklayın.
`Type inference, Typescript'in değişkenlerin ve ifadelerin tiplerini otomatik olarak tahmin etme yeteneğidir.`

Enums:
Typescript'te enum nedir ve nasıl kullanılır? Bir enum örneği verin.
`Enum, adlandırılmış sabit değerler koleksiyonudur.`

CSS Bilgisi
block ve inline block arasındaki fark nedir?

-------------------------------------------------------------

State Update
Cevap: Increment butonuna tıklandığında sayacın değeri 1 olur. Çünkü setCount asenkron bir işlemdir ve iki setCount çağrısı da aynı anda çalışır, böylece count sadece bir kez artar.


Conditional Rendering
Cevap: Hide butonuna tıklandığında, <p>Now you see me!</p> kaybolur ve butonun metni Show olur. Çünkü isVisible değeri tersine çevrilir ve false olur, bu da <p> etiketinin görünmesini engeller.

Effect Hook
Cevap: Bu kod çalıştırıldığında ekranda ilk anda 0 sonraki her anda 1 görülür. Çünkü setCount(count + 1) ifadesi, count değerinin güncel olmayan bir versiyonunu kullanabilir ve bu nedenle beklenmeyen sonuçlar verebilir. Buradaki Sorunu çözmek için setCount(prevCount => prevCount + 1) ifadesi, React'in en güncel state değerini kullanarak güvenilir ve doğru bir güncelleme sağlar. Bu nedenle, state güncellemelerinde en güncel değeri kullanmak için fonksiyonel güncellemeyi tercih ederiz.



Hoisting
undefined
ReferenceError: Cannot access 'bar' before initialization

Çünkü var ile tanımlanan değişkenler hoist edilir ve tanımsız (undefined) olarak başlatılır. let ve const ile tanımlanan değişkenler ise hoist edilir ama başlatılmaz, bu yüzden tanımlanmadan önce erişilmeye çalışıldığında hata oluşur.



Scope
2
2

Çünkü var fonksiyon scope'lu bir değişken olup, blok (if) içinde tekrar tanımlansa bile aynı değişken olarak kalır.



Closures
1
2
1
2

Çünkü her makeCounter çağrısı kendi count değişkeniyle yeni bir closure oluşturur. Bu nedenle counter1 ve counter2 birbirinden bağımsız sayacılar olur.



Async Await
calling
resolved

İlk olarak 'calling' konsola yazdırılır. await resolveAfter2Seconds() satırı, Promise'in çözülmesini bekler ve 2 saniye sonra 'resolved' konsola yazdırılır.
