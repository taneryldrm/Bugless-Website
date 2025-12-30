# Sanity Kurulum Adımları

Blog sayfasını dinamik hale getirmek için yapmanız gereken son bir adım kaldı: Sanity projesi oluşturmak ve ID'yi almak.

1.  **Sanity Hesabı**: [sanity.io/manage](https://www.sanity.io/manage) adresine gidin ve giriş yapın.
2.  **Yeni Proje**: "Create new project" butonuna tıklayın.
    *   **Project Name**: Bugless Digital (veya istediğiniz bir isim)
    *   **Team**: (Varsayılan)
3.  **Project ID**: Proje oluşturulduktan sonra dashboard'da **Project ID** değerini göreceksiniz. (Örn: `k2l4m5n6`)
4.  **Dataset**: Genellikle `production` olarak gelir.
5.  **.env.local Dosyası**:
    Proje ana dizininde `.env.local` adında bir dosya oluşturun ve içine şu bilgileri yapıştırın:

    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=SİZİN_PROJECT_ID_DEĞERİNİZ
    NEXT_PUBLIC_SANITY_DATASET=production
    ```

6.  **Yeniden Başlatma**: Terminalde çalışan `npm run dev` komutunu durdurup (`Ctrl + C`) tekrar çalıştırın.
7.  **Studio'ya Erişim**: Tarayıcınızda `http://localhost:3000/studio` adresine giderek yönetim paneline erişebilir ve yazı eklemeye başlayabilirsiniz.
