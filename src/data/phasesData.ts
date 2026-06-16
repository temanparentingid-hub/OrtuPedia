/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PhaseData } from '../types';

export const PHASES_DATA: PhaseData[] = [
  {
    id: 'trimester-1',
    title: 'Trimester 1',
    category: 'kehamilan',
    ageRange: 'Kehamilan 1 - 13 Minggu',
    summary: 'Awal perjalanan ajaib Moms & Dads! Fase ini ditandai dengan pembentukan awal organ penting janin dan penyesuaian hormon ibu.',
    bgColor: 'bg-brand-mint/40',
    textColor: 'text-teal-700',
    ringkasan: 'Selamat atas awal perjalanan yang luar biasa ini, Moms & Dads! Trimester pertama adalah masa fondasi yang sangat penting. Di sinilah tubuh Moms mengalami perubahan hormonal yang masif untuk membangun rumah terbaik bagi si kecil. Gejala seperti mual (morning sickness), mudah lelah, dan perubahan suasana hati adalah hal yang sangat wajar karena tubuh sedang bekerja keras membidani kehidupan baru. Ingatlah bahwa Moms tidak sendirian, dan Dads memiliki peran penting untuk memberikan dukungan emosional serta pengertian yang ekstra hangat.',
    fokusPoin: [
      'Konfirmasi kehamilan dengan tes medis dan konsultasi awal ke dokter atau bidan.',
      'Memahami Hari Pertama Haid Terakhir (HPHT) untuk memperkirakan Hari Perkiraan Lahir (HPL).',
      'Mengelola gejala awal seperti mual, kelelahan, dan perubahan suasana hati yang dinamis.',
      'Memulai asupan asam folat dan zat besi yang sangat penting bagi pembentukan tabung saraf janin.'
    ],
    perluDilakukan: [
      'Segera lakukan janji temu dengan dokter spesialis kandungan atau bidan untuk USG pertama guna memastikan posisi kantung hamil.',
      'Istirahat yang cukup. Dengarkan sinyal tubuh, jangan ragu untuk tidur siang singkat 15-30 menit.',
      'Makan dalam porsi kecil tapi sering (small, frequent meals) untuk membantu mengurangi rasa mual.',
      'Minum air putih minimal 2-2.5 liter per hari agar tubuh tetap terhidrasi dengan baik.'
    ],
    perluDipersiapkan: [
      'Buku KIA (Kesehatan Ibu dan Anak) atau buku pink dari fasilitas kesehatan terdekat.',
      'Vitamin kehamilan (terutama asam folat) sesuai anjuran dan resep dari tenaga kesehatan.',
      'Pakaian longgar dan nyaman untuk mengurangi tekanan pada area perut yang sensitif.',
      'Diskusikan pembagian tugas rumah tangga dengan Dads agar Moms bisa beristirahat lebih optimal.'
    ],
    makananDisarankan: [
      { nama: 'Alpukat', manfaat: 'Mengandung lemak sehat dan asam folat tinggi untuk mendukung perkembangan otak awal janin.' },
      { nama: 'Jahe Hangat', manfaat: 'Membantu meredakan mual, muntah, dan menenangkan lambung yang sensitif.' },
      { nama: 'Telur Matang Sempurna', manfaat: 'Sumber kolin dan protein berkualitas tinggi untuk pembentukan sel-sel tubuh janin.' },
      { nama: 'Sayuran Hijau (Bayam, Brokoli)', manfaat: 'Kaya akan zat besi dan folat alami guna mencegah anemia pada ibu hamil.' }
    ],
    halDihindari: [
      'Makanan mentah atau setengah matang (seperti sushi mentah, telur setengah matang) karena risiko bakteri Listeria.',
      'Minuman beralkohol secara mutlak dan batasi konsumsi kafein (maksimal 1 cangkir kopi sehari).',
      'Paparan asap rokok (baik perokok aktif maupun pasif) demi kesehatan organ janin.',
      'Mengkonsumsi obat-obatan bebas atau suplemen tanpa berkonsultasi terlebih dahulu dengan dokter/bidan.',
      'Aktivitas fisik yang terlalu berat atau latihan dengan guncangan ekstrem.'
    ],
    kapanKonsultasi: [
      'Terjadi pendarahan atau flek merah segar dari jalan lahir.',
      'Mual dan muntah parah (hiperemesis gravidarum) hingga tidak ada makanan atau cairan yang masuk sama sekali.',
      'Kram perut bagian bawah yang sangat hebat dan tidak kunjung mereda dengan istirahat.',
      'Demam tinggi di atas 38 derajat Celcius.'
    ],
    doaTradisi: {
      judul: 'Doa Syukur & Memohon Kekuatan',
      teksArab: 'رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ',
      teksLatin: 'Rabbi hab lii min ladunka dzurriyyatan thayyibah, innaka samii\'ud du\'aa.',
      arti: '"Ya Tuhanku, berilah aku keturunan yang baik dari sisi-Mu, sesungguhnya Engkau Maha Mendengar doa."',
      keterangan: 'Bagi keluarga yang menjalankan ajaran Islami, doa dari QS. Ali Imran ayat 38 ini sangat indah dibaca setiap selesai beribadah untuk memohon keturunan yang sehat, mulia, dan salih.'
    }
  },
  {
    id: 'trimester-2',
    title: 'Trimester 2',
    category: 'kehamilan',
    ageRange: 'Kehamilan 14 - 27 Minggu',
    summary: 'Masa keemasan kehamilan! Mual mulai mereda, energi Moms kembali pulih, dan Moms mulai bisa merasakan gerakan manis si kecil.',
    bgColor: 'bg-brand-cream/60',
    textColor: 'text-amber-800',
    ringkasan: 'Selamat datang di masa keemasan kehamilan, Moms! Kebanyakan ibu hamil merasa jauh berenergi di trimester kedua ini karena hormon tubuh mulai stabil dan mual-muntah berangsur hilang. Ini saatnya perjalanan terasa lebih seru karena perut mulai membesar dan Moms akan mulai merasakan getaran lembut atau tendangan kecil dari bayi di dalam kandungan. Hubungan emosional (bonding) pun terasa makin nyata.',
    fokusPoin: [
      'Menikmati kembalinya energi tubuh dan stabilnya kondisi fisik ibu.',
      'Merasakan gerakan pertama janin (quickening) yang mendebarkan hati.',
      'Merencanakan anggaran finansial persalinan dan pasca melahirkan.',
      'Mempersiapkan perlengkapan dasar bayi dan memilih tempat melahirkan yang aman.'
    ],
    perluDilakukan: [
      'Lakukan skrining USG detail (biasanya pada minggu ke-18 hingga ke-22) untuk melihat struktur fisik organ bayi lebih jelas.',
      'Latih postur tubuh yang baik karena beban perut mulai bergeser ke depan untuk mencegah nyeri punggung bawah.',
      'Lakukan yoga hamil atau jalan kaki santai 15-30 menit setiap hari untuk menjaga kelenturan otot panggul.',
      'Mulailah berbelanja perlengkapan bayi secara bertahap agar tidak melelahkan di trimester ketiga.'
    ],
    perluDipersiapkan: [
      'Matangkan tabungan persalinan dan diskusikan asuransi kesehatan yang akan digunakan.',
      'Mulai cari tahu dan survei rumah sakit bersalin, klinik bidan, serta fasilitas laktasi terdekat.',
      'Persiapkan daftar nama bayi yang baik dan bermakna bersama pasangan.',
      'Bantal hamil (pregnancy pillow) untuk mempermudah kenyamanan tidur menyamping.'
    ],
    makananDisarankan: [
      { nama: 'Pisang & Buah Berair', manfaat: 'Kaya kalium untuk mencegah kram kaki yang kerap menyerang ibu hamil di malam hari.' },
      { nama: 'Yoghurt Rendah Gula', manfaat: 'Sumber kalsium tinggi untuk pembentukan tulang bayi dan memelihara pencernaan ibu.' },
      { nama: 'Daging Sapi Tanpa Lemak', manfaat: 'Kaya akan zat besi heme untuk mendukung penambahan volume darah merah ibu.' },
      { nama: 'Kacang-kacangan (Almond, Kenari)', manfaat: 'Memberikan tambahan energi sehat serta protein nabati yang baik untuk janin.' }
    ],
    halDihindari: [
      'Posisi tidur telentang terlalu lama karena dapat menekan pembuluh darah utama (vena cava) ibu dan mengurangi aliran darah ke janin.',
      'Mengangkat barang berat melebihi batas kenyamanan tubuh.',
      'Mengkonsumsi ikan tinggi merkuri seperti ikan hiu, swordfish, atau king mackerel.',
      'Berdiri terlalu lama tanpa sesekali duduk atau meluruskan kaki untuk menghindari varises.'
    ],
    kapanKonsultasi: [
      'Tidak merasakan gerakan janin sama sekali selama lebih dari 12 jam setelah sebelumnya aktif.',
      'Keluarnya air jernih merembes secara terus menerus dari jalan lahir (dugaan ketuban pecah dini).',
      'Pembengkakan mendadak dan parah di bagian wajah, tangan, dan kaki disertai sakit kepala hebat (gejala preeklampsia).'
    ],
    doaTradisi: {
      judul: 'Doa 4 Bulanan & Syukuran Sederhana',
      teksArab: 'اللَّهُمَّ احْفَظْ وَلَدِي مَادَامَ فِي بَطْنِي، وَاشْفِهِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ',
      teksLatin: 'Allahummahfadh waladii maa daama fii bathnii, wasyfihii Antasy-Syaafii laa syifaa-a illaa syifaa-uka.',
      arti: '"Ya Allah, jagalah anakku selama ia berada dalam perutku, dan sehatkanlah ia. Engkaulah Yang Maha Menyembuhkan, tidak ada kesembuhan melainkan kesembuhan-Mu."',
      keterangan: 'Bagi keluarga yang menjalankan tradisi syukuran 4 bulanan, ini adalah saat ditiupkannya ruh ke dalam janin. Tradisi doa bersama ini dilakukan secara tulus dan khidmat tanpa membebani keuangan keluarga.'
    }
  },
  {
    id: 'trimester-3',
    title: 'Trimester 3',
    category: 'kehamilan',
    ageRange: 'Kehamilan 28 - 40 Minggu',
    summary: 'Masa persiapan menyambut pertemuan! Tubuh terasa makin berat, namun rasa tidak sabar bertemu si kecil akan mengalahkan segalanya.',
    bgColor: 'bg-brand-lavender/50',
    textColor: 'text-purple-800',
    ringkasan: 'Selamat! Moms & Dads berada di garis akhir kehamilan! Di trimester ketiga ini, badan mungkin terasa lebih cepat pegal, napas lebih pendek, dan tidur malam terasa menantang. Ini terjadi karena si kecil tumbuh pesat dan mulai turun ke arah panggul. Tetap tenang, fokus pada teknik pernapasan, dan persiapkan segala hal kecil bersama pasangan untuk momen kebersamaan yang mendebarkan.',
    fokusPoin: [
      'Mempersiapkan tas bersalin (hospital bag) untuk dibawa sewaktu-waktu.',
      'Menyusun dokumen kependudukan dan administrasi melahirkan.',
      'Mengenali tanda-tanda persalinan asli versus kontraksi palsu (Braxton Hicks).',
      'Merencanakan proses menyusui (inisiasi menyusui dini) dan transportasi darurat.'
    ],
    perluDilakukan: [
      'Pantau gerakan bayi secara rutin setiap hari (pastikan ada minimal 10 gerakan dalam 2 jam).',
      'Latih senam hamil, gerakan squat ringan jika diizinkan, atau gunakan birthing ball untuk membantu bayi masuk ke posisi panggul.',
      'Pelajari teknik menyusui yang benar dan perawatan newborn agar Moms siap menyusui.',
      'Tentukan pendamping persalinan yang menenangkan (biasanya suami atau ibu).'
    ],
    perluDipersiapkan: [
      'Hospital Bag berisi baju kancing depan, kain sarung, pakaian bayi, popok newborn, gurita bayi (jika perlu), dan toiletries.',
      'Dokumen penting: KTP suami istri, KK, buku pink KIA, kartu asuransi/BPJS, serta surat rujukan jika ada.',
      'Kendaraan atau kontak transportasi darurat yang siaga 24 jam beserta rute alternatif menuju faskes.'
    ],
    makananDisarankan: [
      { nama: 'Kurma', manfaat: 'Secara alami membantu memberi energi instan dan mempersiapkan oto-otot rahim untuk persalinan yang lancar.' },
      { nama: 'Ikan Kembung / Salmon', manfaat: 'Kaya asam lemak Omega-3 untuk perkembangan retina dan kecerdasan otak bayi di akhir masa pertumbuhannya.' },
      { nama: 'Sup Kacang Merah', manfaat: 'Sumber cairan, zat besi, dan serat tinggi untuk mencegah sembelit yang mengganggu di trimester akhir.' },
      { nama: 'Air Kelapa Murni', manfaat: 'Membantu menjaga tingkat elektrolit ibu hamil tetap seimbang.' }
    ],
    halDihindari: [
      'Melakukan perjalanan darurat berjarak jauh (di atas usia 35 minggu biasanya dilarang naik pesawat tanpa izin khusus).',
      'Menunda-nunda pergi ke bidan/dokter jika ketuban sudah merembes, meski belum ada kepulasan/mulas.',
      'Kepanikan yang berlebih. Jaga kestabilan emosi dengan latihan meditasi napas atau berbincang intim dengan Dads.'
    ],
    kapanKonsultasi: [
      'Keluar darah segar dari jalan lahir, baik sedikit maupun banyak.',
      'Keluar cairan ketuban (bening, berbau khas, tidak bisa ditahan seperti kencing) walau tanpa rasa sakit kencang-kencang.',
      'Gerakan bayi berkurang drastis atau tidak bergerak sama sekali.',
      'Sakit kepala mendadak disertai pandangan kabur dan ulu hati terasa nyeri tajam.'
    ],
    doaTradisi: {
      judul: 'Doa Menjelang Persalinan Lancar',
      teksArab: 'حَنَّا وَلَدَتْ مَرْيَمَ، وَمَرْيَمُ وَلَدَتْ عِيسَى، اخْرُجْ أَيُّهَا الْمَوْلُودُ بِقُدْرَةِ الْمَلِكِ الْمَعْبُودِ',
      teksLatin: 'Hannaa waladat Maryama, wa Maryamu waladat \'Iisaa, ukhruj ayyuhal mauluudu bi qudratil Malikil Ma\'buud.',
      arti: '"Hana melahirkan Maryam, Maryam melahirkan Isa. Keluarlah wahai anak yang dilahirkan, dengan kekuasaan Raja yang disembah (Allah)."',
      keterangan: 'Bagi keluarga yang menjalankan tradisi Islami, doa ini biasa dibaca di samping ibu yang sedang berjuang dalam proses persalinan untuk memohon kelancaran dan kesehatan bagi ibu serta anak.'
    }
  },
  {
    id: 'newborn',
    title: 'Newborn',
    category: 'bayi',
    ageRange: 'Bayi 0 - 1 Bulan',
    summary: 'Selamat datang di dunia nyata, bayi kecil! Fase adaptasi hebat bagi bayi maupun orang tua baru dengan siklus tidur yang berganti.',
    bgColor: 'bg-brand-mint/40',
    textColor: 'text-teal-700',
    ringkasan: 'Selamat datang di dunia yang baru, Moms & Dads! Kehadiran bayi newborn menandai awal fase pascapersalinan (postpartum) yang penuh tantangan emosional dan fisik. Bayi Moms yang tadinya aman di dalam kandungan kini harus menyesuaikan diri dengan suhu luar, cahaya, dan menyusu secara langsung. Jangan cemas jika Moms merasa lelah atau kewalahan di minggu-minggu pertama. Semua orang tua butuh waktu beradaptasi. Mintalah bantuan orang terdekat agar Moms bisa pulih perlahan.',
    fokusPoin: [
      'Adaptasi penuh bayi baru lahir dengan lingkungan luar rahim.',
      'Memberikan ASI atau nutrisi terbaik di bawah bimbingan konselor laktasi/tenaga medis.',
      'Memahami pola tidur newborn yang sangat pendek (berkisar antara 16-18 jam namun terpotong-potong).',
      'Menjaga kebersihan tali pusat dan kulit sensitif bayi agar terhindar dari infeksi.'
    ],
    perluDilakukan: [
      'Berikan ASI sesering mungkin atau setiap kali bayi menunjukkan tanda lapar (feeding cues) seperti menghisap jari atau gelisah.',
      'Bersihkan sisa tali pusat dengan kain kasa kering steril, jangan dibungkus dengan bahan ramuan tradisional apa pun.',
      'Jemur bayi di pagi hari (pukul 7-8 pagi) selama 10-15 menit dalam kondisi memakai popok dan pelindung mata untuk mencegah kuning ringan.',
      'Kontrol kesehatan bayi pertama kalinya (biasanya hari ke-3 sampai ke-7 setelah lahir).'
    ],
    perluDipersiapkan: [
      'Baju bayi berbahan katun lembut yang menyerap keringat, popok kain, bedong kain, tisu air steril.',
      'Kasa steril dan antiseptik ringan (jika dianjurkan oleh bidan/dokter) untuk perawatan tali pusat bayi.',
      'Dokumen awal: Surat Keterangan Lahir (SKL) dari RS/Bidan untuk pengurusan Akta Kelahiran, pendaftaran BPJS Bayi newborn maksimal dalam 28 hari.'
    ],
    makananDisarankan: [
      { nama: 'ASI Eksklusif', manfaat: 'Makanan terbaik tunggal untuk bayi usia 0-6 bulan yang mengandung antibodi alami dan nutrisi terlengkap.' },
      { nama: 'Formula Khusus (Jika Direkomendasikan Tenaga Medis)', manfaat: 'Diberikan hanya dengan indikasi medis ketat dan berdasarkan resep dokter spesialis anak.' }
    ],
    halDihindari: [
      'Memberikan air putih, madu, ramuan herba, susu formula tanpa anjuran dokter, atau pisang kerok kepada bayi di bawah 6 bulan.',
      'Mengoleskan bedak tabur di dekat wajah atau organ intim bayi guna menghindari gangguan pernapasan.',
      'Membiarkan terlalu banyak orang mencium wajah bayi newborn yang imun tubuhnya masih sangat rentan.',
      'Mengabaikan kondisi psikis Moms (waspadai tanda Baby Blues yang menetap lebih dari 2 minggu).'
    ],
    kapanKonsultasi: [
      'Bayi terlihat sangat kuning menjalar hingga bagian telapak kaki, atau bayi selalu malas menyusu dan terus tertidur.',
      'Demam tinggi di atas 38 derajat Celcius atau sebaliknya hipotermia (suhu tubuh terlalu dingin di bawah 36 derajatCelcius).',
      'Tali pusat berbau busuk, bernanah, atau keluar darah terus-menerus.',
      'Napas bayi berbunyi grok-grok cepat diserta tarikan dinding dada ke dalam yang dalam.'
    ],
    doaTradisi: {
      judul: 'Doa Memohon Perlindungan Bayi Baru Lahir',
      teksArab: 'أُعِيذُكَ بِكَلِمَاتِ اللهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ',
      teksLatin: 'U\'iidzuki bi kalimaatillaahit taammati min kulli syaithaanin wa haammatin wa min kulli \'ainin laammah.',
      arti: '"Aku memohon perlindungan untukmu dengan kalimat-kalimat Allah yang sempurna dari setiap setan, binatang berbisa, dan dari setiap mata yang jahat (hasad)."',
      keterangan: 'Bagi keluarga yang menjalankan, doa ini sering dibacakan oleh Dads di dekat telinga bayi setelah lahir sebagai bentuk ikhtiar memohon perlindungan dari mara bahaya secara batiniah.'
    }
  },
  {
    id: 'bayi-1-3',
    title: 'Bayi 1 - 3 Bulan',
    category: 'bayi',
    ageRange: 'Bayi 1 - 3 Bulan',
    summary: 'Senyum sosial pertama! Bayi mulai bisa memandang wajah Moms, merespons suara, dan mencoba memperkuat otot lehernya.',
    bgColor: 'bg-brand-cream/60',
    textColor: 'text-amber-800',
    ringkasan: 'Selamat! Bayi manis Moms kini mulai terjaga lebih lama di siang hari. Rentang usianya yang menginjak 1 hingga 3 bulan diwarnai dengan pencapaian yang mengharukan: ia mulai bisa tersenyum balik saat diajak bercanda (social smile), menatap lekat keindahan wajah Moms, dan mengeluarkan suara "oooh" atau "aaah" (cooing) yang menggemaskan. Nikmatilah momen ikatan batin ini dengan rajin mengajaknya mengobrol.',
    fokusPoin: [
      'Membangun ikatan batin (bonding) kuat lewat suara, tatapan mata, dan sentuhan hangat.',
      'Melatih otot leher dan dada bayi secara perlahan lewat latihan tummy time.',
      'Mengenali perbedaan tangisan bayi apakah karena lapar, popok penuh, atau mengantuk.',
      'Melanjutkan imunisasi wajib bayi sesuai jadwal anjuran bidan/dokter.'
    ],
    perluDilakukan: [
      'Latih tummy time (tengkurap) saat bayi dalam kondisi terjaga, setidaknya 2-3 kali sehari selama 1-3 menit di atas permukaan datar yang aman.',
      'Ajak bayi berkomunikasi secara interaktif. Tirukan suara gumamannya dan tatap matanya secara lembut.',
      'Peluk bayi secara hangat (menggunakan metode skin-to-skin jika memungkinkan) untuk meregulasi emosinya.',
      'Periksa popok bayi sesering mungkin (setiap 2-3 jam sekali) agar bokongnya bebas dari ruam popok.'
    ],
    perluDipersiapkan: [
      'Matras bermain (playmat) yang datar, empuk, dan aman untuk latihan tummy time.',
      'Mainan berstimulasi warna kontras tinggi (biasanya kartu hitam putih) untuk melatih fokus pandangan matanya.',
      'Jadwal kalender kontrol rutin dan imunisasi dasar bayi usia 2 dan 3 bulan (seperti BCG, DPT-HB-Hib-1, Polio).'
    ],
    makananDisarankan: [
      { nama: 'ASI Eksklusif On Demand', manfaat: 'ASI adalah satu-satunya asupan nutrisi dan daya tahan terlengkap untuk mengoptimalkan pembelahan sel otak bayi.' }
    ],
    halDihindari: [
      'Memaksa bayi tidur tengkurap tanpda pengawasan aktif orang dewasa karena meningkatkan risiko SIDS (Sindrom Kematian Bayi Mendadak).',
      'Mengguncang tubuh bayi terlalu keras (shaken baby syndrome) yang dapat mencederai pembuluh darah otak.',
      'Membunyikan mainan bersuara bising ekstrem terlalu dekat dengan daun telinga bayi yang sensitif.'
    ],
    kapanKonsultasi: [
      'Bayi tidak merespons suara keras secara terkejut atau tidak fokus melirik objek yang bergerak lambat di depannya.',
      'Hingga lewat usia 3 bulan belum bisa menegakkan kepalanya sedikit pun saat dicoba tengkurap.',
      'Bayi mengabaikan senyuman Moms dan tidak membuat kontak mata sama sekali.'
    ]
  },
  {
    id: 'bayi-4-6',
    title: 'Bayi 4 - 6 Bulan',
    category: 'bayi',
    ageRange: 'Bayi 4 - 6 Bulan',
    summary: 'Persiapan menuju petualangan makan pertama! Bayi mulai belajar tengkurap-telentang sendiri dan menunjukkan minat pada piring Moms.',
    bgColor: 'bg-brand-lavender/50',
    textColor: 'text-purple-800',
    ringkasan: 'Masa yang paling ditunggu-tunggu segera tiba! Pada rentang usia 4 hingga 6 bulan, si kecil sedang sibuk mengeksplorasi kemampuan fisiknya secara aktif. Ia kini bisa berguling dari posisi telentang ke tengkurap sendiri, meraih mainan di hadapannya dengan gegas, serta memasukkan semua benda ke dalam mulutnya (fase oral). Di fase ini pula, ia akan sering menatap piring makan Moms dengan pandangan berair penuh rasa penasaran—tanda ia mulai siap makan!',
    fokusPoin: [
      'Mengamati kesiapan fisik dan psikologis bayi untuk menerima Makanan Pendamping ASI (MPASI).',
      'Menstimulasi perkembangan motorik kasar seperti berguling mandiri dan bertumpu pada lengan.',
      'Menjaga kebersihan mainan bayi karena si kecil senang memasukkan benda apa pun ke mulut.',
      'Melakukan konsultasi dengan dokter anak jika Moms berencana memulai MPASI sedikit lebih awal.'
    ],
    perluDilakukan: [
      'Dukung stimulasi berguling dengan meletakkan mainan menarik sedikit di luar jangkauannya agar ia termotivasi bergerak.',
      'Latih keseimbangan bayi duduk dengan menyangga punggungnya menggunakan bantal hangat.',
      'Ajak si kecil bermain cilukba untuk mengenali konsep keberadaan (object permanence).',
      'Kenali tanda kesiapan MPASI: bayi bisa menegakkan kepala dengan tegak, duduk tegak dengan bantuan minimal, serta reflex menjulurkan lidah berkurang.'
    ],
    perluDipersiapkan: [
      'Peralatan makan bayi berstandar food grade (mangkok kecil, sendok berbahan silikon lembut, celemek makan/bib).',
      'Kursi makan bayi (high chair) untuk membentuk kebiasaan makan disiplin (feeding rules) sejak dini.',
      'Pencatat bahan makanan sederhana untuk mengenali riwayat alergi keluarga jika ada.'
    ],
    makananDisarankan: [
      { nama: 'ASI Eksklusif (Hingga Genap 6 Bulan)', manfaat: 'Tetap menjadi sumber nutrisi mutlak utama sebelum perjalanan makanan padat dimulai.' },
      { nama: 'Puree Tunggal Buah Lembut (Opsional, Menjelang 6 Bulan)', manfaat: 'Bisa dicoba saat memulai perkenalan rasa pertama dengan tekstur yang sangat encer sesuai nasihat dokter.' }
    ],
    halDihindari: [
      'Membiasakan menyuapkan makanan bertekstur padat/kasar terlalu dini (di bawah 6 bulan tanpa indikasi dari dokter anak).',
      'Meninggalkan bayi sendirian di atas tempat tidur tanpa pembatas karena ia bisa berguling mendadak.',
      'Menggunakan baby walker beroda karena berisiko tinggi mencederai otot paha bayi dan rawan terguling.'
    ],
    kapanKonsultasi: [
      'Belum bisa menggenggam benda dengan tangannya sendiri atau tidak menunjukkan minat pada lingkungannya.',
      'Lehernya masih lemas dan tidak sanggup menyangga kepalanya tegak saat ditarik perlahan ke posisi duduk.',
      'Tidak mengeluarkan suara berceloteh pendek seperti babbles ("ba-ba", "da-da").'
    ]
  },
  {
    id: 'bayi-7-9',
    title: 'Bayi 7 - 9 Bulan',
    category: 'bayi',
    ageRange: 'Bayi 7 - 9 Bulan',
    summary: 'Memulai petualangan tekstur MPASI! Bayi mulai bisa duduk tegak sendiri, merangkak meraba lantai, dan memahami namanya.',
    bgColor: 'bg-brand-mint/40',
    textColor: 'text-teal-700',
    ringkasan: 'Selamat, si kecil kini resmi menjadi penjelajah kuliner! Di usia 7 hingga 9 bulan, MPASI sudah menjadi bagian rutinitas hariannya yang seru. Bayi Moms mulai belajar menyukai aneka jenis rasa sayur dan protein. Secara fisik, otot punggungnya makin kuat sehingga dapat duduk sendiri tanpa pegangan, dan ia mulai aktif menjelajah ruang dengan merangkak atau mengesot. Pastikan lantai rumah Moms tetap bersih dan aman dari kerikil kecil ya!',
    fokusPoin: [
      'Menaikkan tekstur MPASI secara bertahap (dari saring halus ke saring kasar/bubur lembek).',
      'Menstimulasi koordinasi tangan dan mata lewat genggaman makanan (finger food).',
      'Memastikan keamanan seluruh area rumah (baby proofing) agar bayi bebas merangkak.',
      'Membangun jadwal rutinitas makan, tidur, dan bermain yang konsisten setiap harinya.'
    ],
    perluDilakukan: [
      'Sajikan MPASI 2-3 kali sehari ditambah selingan buah atau finger food sehat seperti potongan melon lembut.',
      'Sediakan finger food sehat seukuran jari bayi untuk melatih motorik halus menjimpit objek.',
      'Ajak bayi membaca buku bergambar tebal bersama-sama untuk merangsang reseptor bahasanya.',
      'Pasang pengaman sudut tajam meja dan penutup lubang stopkontak listrik di lantai bawah.'
    ],
    perluDipersiapkan: [
      'Peralatan baby-proofing: pelindung siku meja, pagar pembatas tangga jikalau ada lantai bertingkat.',
      'Mainan yang bisa ditekan, berbunyi lembut, atau mainan tumpuk balok sederhana.',
      'Saringan kawat stainless steel berkualitas baik untuk melumat makanan bayi buatan rumah secara alami.'
    ],
    makananDisarankan: [
      { nama: 'Hati Ayam & Daging Saring', manfaat: 'Sangat kaya zat besi hewani alami untuk mencegah defisiensi kecerdasan otak bayi.' },
      { nama: 'Bubur Mpasi 4 Bintang Saring', manfaat: 'Perpaduan seimbang karbohidrat, protein hewani, protein nabati, dan sedikit sayuran sehat.' },
      { nama: 'Pepaya & Alpukat Iris', manfaat: 'Finger food berserat ramah pencernaan bayi yang sedang belajar mengunyah.' },
      { nama: 'Kaldu Tulang Homemade', manfaat: 'Menambahkan rasa gurih nikmat alami sekaligus mineral penting bagi tulang si kecil.' }
    ],
    halDihindari: [
      'Membiasakan makan sambil digendong memutari komplek atau di depan layar HP/TV (menghindari screen time berlebih).',
      'Menambahkan garam dan gula berlebih pada masakan MPASI sebelum si kecil genap berusia 1 tahun.',
      'Menolak menaikkan tekstur bayi karena terlalu takut bayi tersedak ringan (muntah atau gagging adalah refleks belajar yang wajar).'
    ],
    kapanKonsultasi: [
      'Anak sama sekali menolak MPASI dalam waktu lama hingga berat badannya mendatar atau menurun pada kurva pertumbuhan KIA.',
      'Muncul reaksi alergi hebat seperti ruam merah menyebar, bengkak, atau diare berdarah sesaat setelah mencoba makanan baru.',
      'Bayi belum mampu duduk sendiri walau sudah ditopang dengan bantal lembut di punggung bawahnya.'
    ]
  },
  {
    id: 'bayi-10-12',
    title: 'Bayi 10 - 12 Bulan',
    category: 'bayi',
    ageRange: 'Bayi 10 - 12 Bulan',
    summary: 'Mendekati ulang tahun pertama! Si kecil mulai belajar merambat berdiri, mengucapkan kata penuh arti, dan meniru kebiasaan orang dewasa.',
    bgColor: 'bg-brand-cream/60',
    textColor: 'text-amber-800',
    ringkasan: 'Sungguh satu tahun yang luar biasa hampir terlewati! Di fase usia 10-12 bulan, si kecil bukan lagi bayi mungil yang pasif. Ia kini sedang giat melatih keseimbangan kakinya untuk berjalan sendiri dengan berpegangan pada furnitur sekeliling (cruising atau merambat). Kemampuan bicaranya juga makin interaktif; ia mungkin sudah lancar melambaikan tangan "bye-bye", bertepuk tangan riang, dan berseru "Mama" atau "Papa" dengan penuh kesadaran.',
    fokusPoin: [
      'Menyiapkan transisi tekstur MPASI mendekati tekstur makanan meja keluarga (nasi lembek dan lauk cincang).',
      'Membantu stimulasi berdiri lepas genggaman tangan hingga langkah pertamanya.',
      'Melatih pengenalan kosa kata bermakna pertama lewat nyanyian dan dongeng interaktif.',
      'Memelihara jadwal imunisasi ulang tahun pertama (seperti imunisasi campak rubella MR).'
    ],
    perluDilakukan: [
      'Biarkan anak sesekali tidak memakai alas kaki (barefoot) saat latihan berjalan di atas permukaan rumput atau ubin bersih untuk melatih saraf keseimbangan kakinya.',
      'Ajak anak bergabung di meja makan bersama ayah dan ibu untuk meniru cara makan keluarga.',
      'Bacakan dongeng dengan intonasi ekspresif serta tunjuk objek yang digambarkan di dalam buku.',
      'Rayakan pencapaian kecil bicaranya dengan merespons balik setiap celetukannya dengan konsisten.'
    ],
    perluDipersiapkan: [
      'Buku cerita bergambar besar dengan cerita sehari-hari yang berulang sederhana.',
      'Sepatu latihan jalan bersol lembut dan tidak selip ketika anak mulai berjalan di luar rumah.',
      'Pagar tangga yang kokoh sebab anak gemar sekali memanjat naik jeruji pembatas.'
    ],
    makananDisarankan: [
      { nama: 'Nasi Tim Lembek dengan Lauk Utuh', manfaat: 'Melatih kemampuan otot motorik pengunyahan rahang pipi untuk persiapan kelancaran bicara.' },
      { nama: 'Potongan Mangga / Keju Lembut', manfaat: 'Camilan bernutrisi tinggi zat kalsium, lemak baik, dan vitamin C pencegah sariawan.' },
      { nama: 'Sup Cakar Ayam', manfaat: 'Mengandung kolagen alami dan kalsium tinggi untuk meningkatkan kekokohan tulang anak.' }
    ],
    halDihindari: [
      'Memberikan jajanan instan orang dewasa yang tinggi pengawet, garam gurih sintetik, atau pemanis buatan.',
      'Memaksa memakaikan sepatu bersol keras yang kaku pada kaki anak yang sedang berkembang.',
      'Memberikan minuman teh, minuman manis kemasan, atau soda.'
    ],
    kapanKonsultasi: [
      'Anak tidak mampu bertumpu pada kaki atau lemas saat dicoba diberdirikan berpegangan.',
      'Belum bisa menirukan gestur tubuh sederhana (seperti bertepuk tangan atau melambai).',
      'Tidak merespons saat dipanggil namanya dari arah samping atau belakang.'
    ],
    doaTradisi: {
      judul: 'Doa Syukur Milad & Mohon Keberkahan Umur',
      teksArab: 'اللَّهُمَّ أَكْثِرْ مَالَهُ وَوَلَدَهُ وَبَارِكْ لَهُ فِيمَا أَعْطَيْتَهُ',
      teksLatin: 'Allahumma aktsir maa lahuu wa waladahuu wa baarik lahuu fii maa a\'thaitahu.',
      arti: '"Ya Allah, perbanyaklah harta dan anaknya, serta berkahilah baginya apa yang Engkau berikan kepadanya."',
      keterangan: 'Saat si kecil mendekati usia satu tahun, doa syukur ini dibaca sembari menatap penuh kasih, memohon keberkahan usia, jasmani yang sehat, dan akhlak yang mulia di masa datang.'
    }
  },
  {
    id: 'anak-1-2',
    title: 'Anak 1 - 2 Tahun',
    category: 'balita',
    ageRange: 'Anak 1 - 2 Tahun',
    summary: 'Toddler yang aktif mengeksplorasi kata! Fase belajar makan sendiri, berjalan mandiri, dan kemunculan amukan rasa frustrasi pertama (tantrum).',
    bgColor: 'bg-brand-lavender/50',
    textColor: 'text-purple-800',
    ringkasan: 'Selamat datang di dunia toddler (batita) yang dinamis, Moms & Dads! Fase usia 1-2 tahun adalah lompatan besar dalam kemandirian anak. Ia mulai bersikeras melakukan segalanya sendiri, mulai dari memegang sendok, memilih mainan, hingga berlari lari keliling halaman. Di fase ini pula, karena keterbatasan kosa katanya untuk mengungkapkan keinginan, anak kerap meluapkan rasa frustrasinya lewat tangisan kencang atau berguling di lantai (tantrum). Pelajari cara merespons emosinya dengan penuh ketenangan.',
    fokusPoin: [
      'Membiasakan anak makan sendiri secara mandiri walau awalnya berantakan.',
      'Mengembangkan perbendaharaan kata melalui aktivitas interaksi sehari-hari.',
      'Menetapkan batasan tegas bebas dari paparan gawai (screen time) di bawah usia 18-24 bulan.',
      'Mengasuh dengan sabar dan empati tanpa kekerasan saat anak mengalami tantrum.'
    ],
    perluDilakukan: [
      'Terapkan batasan "No Screen Time" (kecuali video call singkat dengan keluarga dengan pendampingan orang tua) demi kesehatan saraf matanya.',
      'Berikan anak sereal, nasi, dan sayuran potong di piring plastiknya dan biarkan ia menyendok makanannya sendiri untuk melatih sensorik motoriknya.',
      'Bicaralah dengan kosa kata yang benar, hindari menggunakan bahasa cadel (misal gunakan kata "minum" bukan "mikum" atau "mimik").',
      'Hadir di samping anak saat ia mengamuk, peluk dengan tenang bila ia bersedia, dan hindari ikut membentaknya.'
    ],
    perluDipersiapkan: [
      'Peralatan makan anti pecah yang lucu untuk menambah selera makan mandirinya.',
      'Mainan susun bentuk geometri (puzzle kayu sederhana, balok bangunan) untuk melatih kognisi spasial.',
      'Buku-buku edukatif berbahan tebal (board book) tentang kosakata hewan, buah, dan benda rumah tangga.'
    ],
    makananDisarankan: [
      { nama: 'Susu Uht Organik / Air Putih', manfaat: 'Susu cair atau ASI kelanjutan sebagai sumber pelengkap kalsium pertumbuhan tulangnya.' },
      { nama: 'Lauk Meja Keluarga (Sama dengan Orang Tua)', manfaat: 'Sudah bisa mengkonsumsi masakan rumah penuh rasa bumbu hangat asalkan tidak pedas ekstrem.' },
      { nama: 'Buah Potong Segar (Apel, Pir, Jeruk)', manfaat: 'Kaya akan vitamin C segar alami untuk pertahanan imunitas anak aktif.' }
    ],
    halDihindari: [
      'Melarang balita menyentuh makanannya dengan dalih takut kotor; eksplorasi taktil tekstur makanan sangat baik bagi otaknya.',
      'Memberikan gadget/HP sebagai jalan pintas menenangkan anak yang sedang menangis atau rewel.',
      'Mengecap anak dengan label negatif seperti "anak nakal, rewel, pembuat masalah".'
    ],
    kapanKonsultasi: [
      'Anak belum bisa mengucapkan satu kata bermakna pun (seperti "mau", "makan", "nasi") saat menginjak usia 18 bulan.',
      'Belum bisa berjalan tegak secara mandiri tanpa pegangan pada usia 18 bulan.',
      'Tidak memahami instruksi verbal sederhana dari Moms (seperti "tolong ambil bolanya").'
    ]
  },
  {
    id: 'anak-2-3',
    title: 'Anak 2 - 3 Tahun',
    category: 'balita',
    ageRange: 'Anak 2 - 3 Tahun',
    summary: 'Waktunya menyapih popok (toilet training)! Kosa kata bertambah hebat, emosi makin kompleks, dan imajinasinya tumbuh subur.',
    bgColor: 'bg-brand-mint/40',
    textColor: 'text-teal-700',
    ringkasan: 'Menginjak usia 2 hingga 3 tahun, anak Moms menjelma menjadi komunikator kecil yang cerdas! Rasa ingin tahunya sangat besar, ditandai dengan pertanyaan "apa ini?" atau "mengapa?" yang diulang-ulang. Ini adalah masa ideal untuk mulai melatih anak buang air di toilet secara mandiri (toilet training) serta memperkenalkannya pada aturan sosialisasi dasar di luar rumah.',
    fokusPoin: [
      'Memulai proses toilet training secara sabar, konsisten, dan menyenangkan.',
      'Melatih anak meluapkan emosi amuknya lewat kata-kata sederhana daripada fisik.',
      'Mengembangkan imajinasi anak lewat seni menggambar, mewarnai, dan bermain imajinatif (pretend play).',
      'Membatasi durasi menonton layar (maksimal 1 jam sehari dengan tayangan ramah anak).'
    ],
    perluDilakukan: [
      'Perhatikan tanda siap toilet training: anak merasa tidak nyaman saat popok basah, menahan pipis 2 jam, atau bisa melepas celana sendiri.',
      'Terapkan toilet training dengan metode sounding (dibisiki saat tidur atau diberi tahu berulang dengan cerita bergambar). Tapaki proses tanpa memarahinya jika ia mengompol di lantai.',
      'Beri ruang anak untuk melukis dengan krayon tebal atau bermain lilin plastisin yang aman untuk merangsang kekuatan otot jari jarinya.',
      'Gunakan metode disiplin positif: beri pujian tulus saat ia mau merapikan mainannya kembali.'
    ],
    perluDipersiapkan: [
      'Potty chair (pispot khusus balita) yang lucu dan nyaman diletakkan di kamar mandi.',
      'Celana dalam katun tebal (training pants) dengan motif menarik kesukaan anak.',
      'Kertas gambar tebal, pensil warna/krayon berukuran besar bebas toksik (non-toxic).'
    ],
    makananDisarankan: [
      { nama: 'Ikan Air Tawar & Sayuran Berwarna', manfaat: 'Kandungan zat DHA dan beta-karoten yang baik untuk mengasah ketajaman mata serta daya konsentrasi anak.' },
      { nama: 'Puding Selingan Susu', manfaat: 'Camilan manis berenergi sehat guna menggantikan kalori yang terbakar sepanjang hari bermain.' },
      { nama: 'Telur Dadar Sayur Iris', manfaat: 'Menu sarapan kaya protein hewani gampang dicerna dan mengandung serat lembut.' }
    ],
    halDihindari: [
      'Memulai toilet training dengan metode paksaan atau hukuman bersuara menakutkan karena rawan memicu sembelit kronis.',
      'Menertawakan imajinasi atau teman khayalan anak secara kasar.',
      'Membiarkan anak menonton sendirian tanpa pengawasan aktif dari pendamping.'
    ],
    kapanKonsultasi: [
      'Anak belum mampu merangkai 2-3 kata pendek menjadi sebuah kalimat penjelas (misalnya "mau makan nasi").',
      'Menunjukkan ketakutan ekstrem berulang yang mengganggu nafsu makan atau kualitas tidurnya di malam hari.',
      'Belum bisa meniru gerakan melompat dengan bertumpu kedua kakinya bersamaan.'
    ]
  },
  {
    id: 'anak-3-5',
    title: 'Anak 3 - 5 Tahun',
    category: 'balita',
    ageRange: 'Anak 3 - 5 Tahun',
    summary: 'Persiapan mendaftar sekolah usia dini! Anak sangat pandai bersosialisasi dengan teman sebaya, mahir berbicara runtut, dan makin mandiri.',
    bgColor: 'bg-brand-cream/60',
    textColor: 'text-amber-800',
    ringkasan: 'Selamat Moms & Dads, si kecil kini menjelma menjadi anak prasekolah (preschooler) yang mandiri! Anak usia 3 hingga 5 tahun biasanya dipenuhi dengan antusiasme sosial yang menggelora: ia senang bermain dengan teman sebaya, berbagi kebaikan (meski tetap perlu dibimbing), menceritakan cerita panjang lebar secara runtut, serta mengekspresikan hobi kegemarannya. Ini adalah masa pondasi emas pembentukan karakter budi pekerti serta kesiapan mental bersekolah.',
    fokusPoin: [
      'Membimbing kesiapan bersekolah dasar/PAUD lewat keterampilan kemandirian praktis.',
      'Melatih adab sopan santun komunikasi dua arah yang santun dan penuh pengertian.',
      'Membiasakan perilaku hidup bersih dan sehat (mencuci tangan dengan sabun, menyikat gigi mandiri).',
      'Mengarahkan penyaluran emosi negatif lewat media seni, mengobrol, maupun olahraga ceria.'
    ],
    perluDilakukan: [
      'Latih anak menggunakan sepatu ber-velcro sendiri, merapikan ransel kecilnya, serta pergi ke toilet sekolah secara mandiri.',
      'Beri ia kesempatan memecahkan masalah kecil pribadi (seperti memilih kaos kaki yang ingin dipakai).',
      'Terapkan jadwal tidur malam yang teratur (pukul 8-9 malam) demi kelancaran pelepasan hormon pertumbuhan tidurnya.',
      'Bermainlah di taman terbuka hijau secara bebas minimal 2-3 kali seminggu untuk menyalurkan energi berlebih sekaligus mengasah kepekaan motorik kasarnya.'
    ],
    perluDipersiapkan: [
      'Peralatan mewarnai dinding, buku gunting-tempel kertas origami ramah anak yang tumpul.',
      'Sikat gigi berbulu ekstra halus berperekat khusus serta pasta gigi ber-fluoride rasa buah favoritnya.',
      'Ransel mungil berserta kotak bekal anti bocor untuk latihan bekal makan bersekolah.'
    ],
    makananDisarankan: [
      { nama: 'Keju, Tempe, & Tahu', manfaat: 'Kandungan kalsium dan fitoestrogen yang melimpah mendorong laju pertumbuhan tinggi badan anak secara optimal.' },
      { nama: 'Olahan Daging Cincang Bulat', manfaat: 'Protein utuh pembentuk jaringan otot yang bugar dan meminimalisir risiko stunting.' },
      { nama: 'Susu Kelapa / Yogurt Aneka Berry', manfaat: 'Pencegah alami radikal bebas polusi sekaligus penambah bakteri sehat usus.' }
    ],
    halDihindari: [
      'Membiasakan memanjakan anak dengan melakukan semua kebutuhannya tanpa pernah melatihnya mencoba sendiri.',
      'Membanding-bandingkan kecepatan tumbuh kembang anak dengan anak tetangga atau teman sekolahnya yang dapat menurunkan kepercayaan dirinya.',
      'Memaksakan target akademis calistung (baca-tulis-hitung) berat pada anak usia dini tanpa metode belajar bermain yang asyik.'
    ],
    kapanKonsultasi: [
      'Anak tampak kesulitan berinteraksi atau berteman sama sekali (cenderung mengisolasi diri secara ekstrem atau agresif tanpa kontrol).',
      'Logat bicaranya sangat tidak jelas (artikulasi balita cadel berat atau gagap parah) sehingga sulit dipahami oleh orang luar.',
      'Tidak mampu memegang krayon dengan jemari tangannya untuk sekadar mencoret-coret lembar gambar.'
    ]
  }
];
