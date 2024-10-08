export const data = {
  quizzes: [
    {
      id: 1,
      title: "HTML",
      icon: "./img/html.svg",
      questions: [
        {
          question: "HTML neyin kısaltmasıdır?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Marketing Language",
            "Hyper Text Markup Language",
            "Hyper Text Markup Leveler",
          ],
          answer: "Hyper Text Markup Language",
        },
        {
          question: "HTML belgesinin doğru yapısı hangisidir?",
          chic: ["A", "B", "C", "D"],
          options: [
            "<html><head></head><body></body></html>",
            "<head><html></html><body></body></head>",
            "<body><head></head><html></html></body>",
            "<html><body></body><head></head></html>",
          ],
          answer: "<html><head></head><body></body></html>",
        },
        {
          question:
            "Bir belgenin başlığını tanımlamak için hangi HTML elementi kullanılır?",
          chic: ["A", "B", "C", "D"],
          options: ["<head>", "<title>", "<header>", "<top>"],
          answer: "<title>",
        },
        {
          question: "<body> etiketi HTML'de ne amaçla kullanılır?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Belgenin baş bölümünü tanımlar.",
            "Tüm içerikleri (metin, resimler ve bağlantılar gibi) içerir.",
            "Bir HTML belgesinin ana içeriğini tanımlamak için kullanılır.",
            "HTML'de e-posta içeriğinin gövdesini belirtir.",
          ],
          answer:
            "Tüm içerikleri (metin, resimler ve bağlantılar gibi) içerir.",
        },
        {
          question:
            "HTML'de bir bağlantı oluşturmak için hangi etiket kullanılır?",
          chic: ["A", "B", "C", "D"],
          options: ["<hyperlink>", "<link>", "<a>", "<href>"],
          answer: "<a>",
        },
        {
          question: "HTML'de resimleri göstermek için hangi etiket kullanılır?",
          chic: ["A", "B", "C", "D"],
          options: ["<img>", "<image>", "<src>", "<pic>"],
          answer: "<img>",
        },
        {
          question:
            "<img> etiketinde bir resmin yolunu belirtmek için hangi özellik kullanılır?",
          chic: ["A", "B", "C", "D"],
          options: ["link", "src", "href", "url"],
          answer: "src",
        },
        {
          question:
            "HTML'de sırasız bir liste oluşturmak için hangi etiket kullanılır?",
          chic: ["A", "B", "C", "D"],
          options: ["<ul>", "<ol>", "<list>", "<li>"],
          answer: "<ul>",
        },
        {
          question: "<br> etiketi ne yapar?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Metni iki bölüme ayırır.",
            "Kalın metin oluşturur.",
            "Bir satır sonu ekler.",
            "Tabloya yeni bir satır ekler.",
          ],
          answer: "Bir satır sonu ekler.",
        },
        {
          question: "HTML'de `fieldset` etiketi ne işe yarar?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Bir formda ilgili verileri gruplamak için kullanılır.",
            "Alanı sabit bir boyuta ayarlar.",
            "Bir formdaki alanları otomatik olarak doğrular.",
            "Bir formdaki alanları gizler.",
          ],
          answer: "Bir formda ilgili verileri gruplamak için kullanılır.",
        },
      ],
    },
    {
      id: 2,
      title: "CSS",
      icon: "./img/css.svg",
      questions: [
        {
          question: "CSS neyin kısaltmasıdır?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets",
          ],
          answer: "Cascading Style Sheets",
        },
        {
          question:
            "Satır içi stillerini tanımlamak için hangi HTML özelliği kullanılır?",
          chic: ["A", "B", "C", "D"],
          options: ["styles", "style", "class", "font-style"],
          answer: "style",
        },
        {
          question: "CSS dosyasına nasıl yorum satırı eklersiniz?",
          chic: ["A", "B", "C", "D"],
          options: [
            "// bu bir yorumdur //",
            "/* bu bir yorumdur */",
            "-- bu bir yorumdur --",
            "<!-- bu bir yorumdur -->",
          ],
          answer: "/* bu bir yorumdur */",
        },
        {
          question:
            "Bir elemanın arka plan rengini değiştirmek için hangi özellik kullanılır?",
          chic: ["A", "B", "C", "D"],
          options: ["color", "bgcolor", "background-color", "background"],
          answer: "background-color",
        },
        {
          question:
            "Tüm <p> elementlerine stil uygulamak için hangi yazım şekli doğrudur?",
          chic: ["A", "B", "C", "D"],
          options: ["p { }", ".p { }", "#p { }", "all.p { }"],
          answer: "p { }",
        },
        {
          question:
            "Bir elemanın yazı tipini değiştirmek için hangi özellik kullanılır?",
          chic: ["A", "B", "C", "D"],
          options: ["font-style", "text-style", "font-family", "typeface"],
          answer: "font-family",
        },
        {
          question:
            "Bir metindeki her kelimenin büyük harfle başlamasını nasıl sağlarsınız?",
          chic: ["A", "B", "C", "D"],
          options: [
            "text-transform: capitalize",
            "text-transform: uppercase",
            "text-style: capital",
            "font-transform: capitalize",
          ],
          answer: "text-transform: capitalize",
        },
        {
          question: "'header' sınıf adıyla bir elemanı nasıl seçersiniz?",
          chic: ["A", "B", "C", "D"],
          options: [".header", "#header", "header", "*header"],
          answer: ".header",
        },
        {
          question: "'position' özelliğinin varsayılan değeri nedir?",
          chic: ["A", "B", "C", "D"],
          options: ["relative", "fixed", "absolute", "static"],
          answer: "static",
        },
        {
          question: "CSS'teki z-index özelliğinin amacı nedir?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Elemanların sayısını saymak için",
            "Bir elemanın büyütme seviyesini ayarlamak için",
            "Bir elemanın yığın sırasını belirlemek için",
            "Bir yakınlaştırma efekti oluşturmak için",
          ],
          answer: "Bir elemanın yığın sırasını belirlemek için",
        },
      ],
    },
    {
      id: 3,
      title: "JavaScript",
      icon: "./img/js.svg",
      questions: [
        {
          question:
            "'Hello World' mesajını bir uyarı kutusunda göstermek için doğru sözdizimi hangisidir?",
          chic: ["A", "B", "C", "D"],
          options: [
            "alertBox('Hello World');",
            "msg('Hello World');",
            "alert('Hello World');",
            "msgBox('Hello World');",
          ],
          answer: "alert('Hello World');",
        },
        {
          question: "'myFunction' adlı bir fonksiyonu nasıl çağırırsınız?",
          chic: ["A", "B", "C", "D"],
          options: [
            "call function myFunction()",
            "call myFunction()",
            "myFunction()",
            "execute myFunction()",
          ],
          answer: "myFunction()",
        },
        {
          question: "JavaScript'te bir IF ifadesi nasıl yazılır?",
          chic: ["A", "B", "C", "D"],
          options: [
            "if i = 5 then",
            "if i == 5 then",
            "if (i == 5)",
            "if i = 5",
          ],
          answer: "if (i == 5)",
        },
        {
          question: "JavaScript'te bir değişken nasıl tanımlanır?",
          chic: ["A", "B", "C", "D"],
          options: [
            "variable carName;",
            "v carName;",
            "var carName;",
            "String carName;",
          ],
          answer: "var carName;",
        },
        {
          question:
            "JavaScript'te bir fonksiyondan nasıl geri dönüş (return) sağlanır?",
          chic: ["A", "B", "C", "D"],
          options: ["return", "returning", "output", "send back"],
          answer: "return",
        },
        {
          question: "'const' anahtar kelimesinin işlevi nedir?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Değiştirilebilen bir sabit tanımlar.",
            "Değiştirilemeyen bir sabit tanımlar.",
            "Değiştirilebilir bir değişken tanımlar.",
            "Fonksiyonları çağırmak için kullanılır.",
          ],
          answer: "Değiştirilemeyen bir sabit tanımlar.",
        },
        {
          question: "Bir for döngüsü nasıl yazılır?",
          chic: ["A", "B", "C", "D"],
          options: [
            "for (let i = 0; i <= 5)",
            "for (let i = 0; i <= 5; i++)",
            "for i = 1 to 5",
            "loop (i <= 5; i++)",
          ],
          answer: "for (let i = 0; i <= 5; i++)",
        },
        {
          question: "'NaN' ne anlama gelir?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Not a Number",
            "Negative and Null",
            "Not a Name",
            "Number and Null",
          ],
          answer: "Not a Number",
        },
        {
          question: "JavaScript'te bir dizinin uzunluğunu nasıl öğrenirsiniz?",
          chic: ["A", "B", "C", "D"],
          options: [
            "array.length",
            "array.size",
            "array.count",
            "array.length()",
          ],
          answer: "array.length",
        },
        {
          question: "'let' anahtar kelimesi hangi amaca hizmet eder?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Blok kapsamı olan bir değişken tanımlar.",
            "Yalnızca döngüler için kullanılır.",
            "Global kapsamlı bir değişken tanımlar.",
            "Bir sabiti tanımlar.",
          ],
          answer: "Blok kapsamı olan bir değişken tanımlar.",
        },
      ],
    },
    {
      id: 4,
      title: "Erisilebilirlik",
      icon: "./img/accessibility.svg",
      questions: [
        {
          question: "'WCAG' neyin kısaltmasıdır?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Web İçeriği Erişilebilirlik Kılavuzları",
            "Web Uyum Erişilebilirlik Rehberi",
            "Web İçeriği Erişilebilirlik Hedefleri",
            "Web Sitesi Uyum ve Erişilebilirlik Kılavuzları",
          ],
          answer: "Web İçeriği Erişilebilirlik Kılavuzları",
        },
        {
          question:
            "Görme engelli kullanıcılar için ekran okuyucuya alternatif metin sağlamak amacıyla hangi element kullanılır?",
          chic: ["A", "B", "C", "D"],
          options: [
            "<alt>",
            "<figcaption>",
            "<description>",
            "<img alt='description'>",
          ],
          answer: "<img alt='description'>",
        },
        {
          question: "Web geliştirmede ARIA neyin kısaltmasıdır?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Erişilebilir Zengin İnternet Uygulamaları",
            "Gelişmiş Duyarlı İnternet Yardımı",
            "Erişilebilir Duyarlı İnternet Uygulamaları",
            "Otomatik Duyarlı İnternet Eylemleri",
          ],
          answer: "Erişilebilir Zengin İnternet Uygulamaları",
        },
        {
          question: "Aşağıdakilerden hangisi WCAG'in bir ilkesi değildir?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Algılanabilir",
            "Güvenilir",
            "Kullanılabilir",
            "Anlaşılabilir",
          ],
          answer: "Güvenilir",
        },
        {
          question:
            "Aşağıdaki renk kontrast oranlarından hangisi normal metin için WCAG 2.1 Seviye AA minimum gereksinimini tanımlar?",
          chic: ["A", "B", "C", "D"],
          options: ["3:1", "4.5:1", "7:1", "2:1"],
          answer: "4.5:1",
        },
        {
          question:
            "Aşağıdaki elementlerden hangisi 'tabindex' özniteliği olmadan odaklanabilir, yani odak alabilir?",
          chic: ["A", "B", "C", "D"],
          options: ["<div>", "<span>", "<a href='...'>", "<p>"],
          answer: "<a href='...'>",
        },
        {
          question: "Bir HTML sayfasında 'lang' özniteliğinin amacı nedir?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Scripting dilini belirtmek",
            "Karakter setini tanımlamak",
            "Sayfa içeriğinin dilini belirtmek",
            "Bir dil paketini belirtmek",
          ],
          answer: "Sayfa içeriğinin dilini belirtmek",
        },
        {
          question:
            "Hangi kılavuz, içeriğin hem klavye hem de fare ile erişilebilir olmasını sağlar?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Klavye ile Erişilebilir",
            "Fare Bağımsızlığı",
            "Cihaz Bağımsızlığı",
            "Kullanılabilir Kontroller",
          ],
          answer: "Klavye ile Erişilebilir",
        },
        {
          question:
            "'Gezinmeyi atla' bağlantılarının web erişilebilirliğindeki rolü nedir?",
          chic: ["A", "B", "C", "D"],
          options: [
            "Ana gezintiyi atlayarak ana içeriğe geçmek",
            "Web sitesinin farklı bölümlerine kısayollar sağlamak",
            "Kullanıcıların reklamlar gibi istenmeyen bölümleri atlamasına yardımcı olmak",
            "Gezintideki bozuk bağlantıları atlamak",
          ],
          answer: "Ana gezintiyi atlayarak ana içeriğe geçmek",
        },
        {
          question:
            "Bir web sitesinin erişilebilirliğini kontrol etmeye yardımcı olabilecek araçlardan hangisi doğrudur?",
          chic: ["A", "B", "C", "D"],
          options: [
            "W3C Validator",
            "Google Lighthouse",
            "CSS Validator",
            "JavaScript Konsolu",
          ],
          answer: "Google Lighthouse",
        },
      ],
    },
  ],
};
