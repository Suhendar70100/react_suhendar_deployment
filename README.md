# Deployment
### 1. Build React App
Secara default, React mengandung banyak pesan peringatan. Peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat React menjadi lebih besar dan lambat. Oleh karena itu ketika kita hendak mendeploy atau menghosting aplikasi yang sudah kita buat itu perlu dibuild untuk membuat aplikasi react kita menjadi versi produksi

Tujuan melakukan build agar aplikasi kita menjadi versi production, sehingga performa dari aplikasi kita lebih ringan dan cepat.
### 2. Perintah Untuk Build React App
Untuk membuaild project react kita cukup ketikan di terimanal perintah:
```npm run build```
Ini akan membuat versi produksi untuk aplikasi kita di dalam folder build/. Ini hanya diperlukan sebelum men-deploy ke produksi. Untuk pengembangan normal, gunakan npm start.

### 3. Apa Itu Deployment
Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya oleh kita sendiri. Sederhananya deployment adalah proses mengupload project react kita ke server baik itu server berbayar maupun server gratis.

#### Platform Penyedia Deployment Gratis!!!
- Surge adalah layanan penerbit website statik (static web publishing) gratis untuk Front-End Developers. Website statik yang menggunakan surge akan memiliki subdomain .surge.sh. Surge dapat menerima file HTML, CSS, dan JS.

Cara Penggunaan:
1. Install surge diterminal
```npm install --global surge```
2. Ketikan perintah `surge` diterminal
3. Teardown surge
Terkadang kita tidak ingin mempublikasikan sebagian domain atau subdomain. Untuk itu kita bisa teardown sebuah project melalui surge CLI. Ini efektif                     membuat proyek kita offline.

- Netlify CLI
Netlify adalah salah satu platform penyedia layanan build tools sekaligus Continous Deployment. Netlify memungkinkan kita untuk mempublish website statis secara gratis. Netlify juga sudah terintegrasi dengan Git Host popular seperti Github, Gitlab dan Bitbucket.

Cara Penggunaan
1. Buat akun di [netlify](https://www.netlify.com/)
2. Install netlify cli di teriminal
```npm install netlify-cli -g```
3. Jalankan perintah deploy netlify deploy diterminal
4. Verify akun melalui browser, pilih Authorize
5. Pilih "Create & configure a new site". Untuk team, pilih yang sudah tersedia. Site name opsional.
6.Pilih lokasi file yang akan di deploy. Pilih ./build .
- vercel
Vercel adalah platform untuk pengembang frontend, memberikan kecepatan dan keandalan yang dibutuhkan inovator untuk berkreasi pada momen inspirasi. Kita dapat mengaitkan github repository kita dengan vercel. Ketika kita sudah mendeploy project react kita di vercel maka ketika ada perubahan di github repository otomatis juga akan berubah di aplikasi yang sudah dideploy tanpa ada configurasi lagi.
