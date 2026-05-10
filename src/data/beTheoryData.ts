export interface BeTheoryTopic {
  id: string;
  category: 'Fundamental Backend' | 'Basic Logic Backend' | 'Spring Boot' | 'DevOps' | 'Dockerize';
  title: string;
  description: string;
  fullTheory: string;
  codeSnippet: string;
}

export const beTheoryData: BeTheoryTopic[] = [
  // SECTION 1: FUNDAMENTAL BACKEND (1-30)
  {
    id: 'BE-001',
    category: 'Fundamental Backend',
    title: 'Client-Server Architecture',
    description: 'Pilar utama komunikasi web modern.',
    fullTheory: 'Client (browser/mobile) mengirim request ke Server (backend). Server memproses logika dan database, lalu mengirim response (JSON/HTML). Backend bertugas menjaga keamanan dan integritas data.',
    codeSnippet: 'Request -> Server -> Response'
  },
  {
    id: 'BE-002',
    category: 'Fundamental Backend',
    title: 'HTTP Methods',
    description: 'GET, POST, PUT, DELETE.',
    fullTheory: 'Metode HTTP menentukan aksi yang dilakukan pada resource. GET untuk membaca, POST untuk membuat, PUT untuk memperbarui, dan DELETE untuk menghapus.',
    codeSnippet: 'GET /api/users\nPOST /api/users'
  },
  {
    id: 'BE-003',
    category: 'Fundamental Backend',
    title: 'RESTful API Principles',
    description: 'Standar desain API kelas dunia.',
    fullTheory: 'REST harus Stateless, menggunakan URL yang konsisten, dan memisahkan urusan antara client dan server secara total.',
    codeSnippet: 'GET /api/v1/orders'
  },
  {
    id: 'BE-004',
    category: 'Fundamental Backend',
    title: 'Authentication',
    description: 'Mengetahui identitas pengguna.',
    fullTheory: 'Proses memverifikasi identitas pengguna menggunakan kredensial seperti username dan password.',
    codeSnippet: 'login(user, pass);'
  },
  {
    id: 'BE-005',
    category: 'Fundamental Backend',
    title: 'Authorization',
    description: 'Mengetahui hak akses pengguna.',
    fullTheory: 'Memeriksa apakah pengguna yang sudah login diizinkan melakukan aksi tertentu berdasarkan Role (Admin/User).',
    codeSnippet: 'if (user.isAdmin) { ... }'
  },
  {
    id: 'BE-006',
    category: 'Fundamental Backend',
    title: 'JSON Data Format',
    description: 'Bahasa universal pertukaran data.',
    fullTheory: 'Format data ringan berbasis teks yang mudah dibaca oleh manusia dan mesin untuk pertukaran data API.',
    codeSnippet: '{ "status": "success" }'
  },
  {
    id: 'BE-007',
    category: 'Fundamental Backend',
    title: 'Statelessness',
    description: 'Server tidak menyimpan session.',
    fullTheory: 'Tiap request harus membawa semua informasi yang dibutuhkan agar server tidak perlu mengingat status client.',
    codeSnippet: 'Auth: Bearer <TOKEN>'
  },
  {
    id: 'BE-008',
    category: 'Fundamental Backend',
    title: 'CORS Security',
    description: 'Akses domain yang aman.',
    fullTheory: 'Mencegah script berbahaya dari domain luar untuk mengakses API Anda tanpa izin resmi dari server.',
    codeSnippet: 'Allow-Origin: frontend.com'
  },
  {
    id: 'BE-009',
    category: 'Fundamental Backend',
    title: 'HTTP Status Codes',
    description: 'Pesan hasil dari server.',
    fullTheory: 'Kode 2xx berarti sukses, 4xx kesalahan klien (Input salah), 5xx kesalahan server (Crash).',
    codeSnippet: 'Res: 400 Bad Request'
  },
  {
    id: 'BE-010',
    category: 'Fundamental Backend',
    title: 'Web Server vs App Server',
    description: 'Nginx vs Tomcat/Node.',
    fullTheory: 'Web server melayani file statis, App server menjalankan logika program dinamis yang kompleks.',
    codeSnippet: 'Nginx -> Tomcat'
  },
  {
    id: 'BE-011',
    category: 'Fundamental Backend',
    title: 'Content-Type Header',
    description: 'Mendefinisikan format data.',
    fullTheory: 'Memberitahu server atau klien bahwa data yang dikirim adalah JSON, XML, atau Form-Data.',
    codeSnippet: 'Content-Type: application/json'
  },
  {
    id: 'BE-012',
    category: 'Fundamental Backend',
    title: 'Request Body vs Query',
    description: 'Cara mengirim paket data.',
    fullTheory: 'Query string digunakan untuk filter di URL, Request Body digunakan untuk kirim data besar (seperti form pendaftaran).',
    codeSnippet: 'POST ... body: { name: "x" }'
  },
  {
    id: 'BE-013',
    category: 'Fundamental Backend',
    title: 'API Versioning',
    description: 'v1, v2, v3 strategi.',
    fullTheory: 'Memastikan perubahan kode tidak merusak aplikasi lama dengan memisahkan versi di URL atau header.',
    codeSnippet: 'GET /api/v1/users'
  },
  {
    id: 'BE-014',
    category: 'Fundamental Backend',
    title: 'Idempotency',
    description: 'Request berulang, hasil tetap sama.',
    fullTheory: 'Prinsip keamanan di mana jika request dikirim berkali-kali (karena lag), pengaruhnya di server tetap satu kali saja.',
    codeSnippet: 'PUT is idempotent'
  },
  {
    id: 'BE-015',
    category: 'Fundamental Backend',
    title: 'Path Variables',
    description: 'Identitas di dalam URL.',
    fullTheory: 'Menggunakan bagian dari URL sebagai variabel untuk mencari resource tertentu secara spesifik.',
    codeSnippet: 'GET /users/{id}'
  },
  {
    id: 'BE-016',
    category: 'Fundamental Backend',
    title: 'HATEOAS',
    description: 'API yang bisa dieksplorasi.',
    fullTheory: 'Memberikan link navigasi dalam respon JSON agar klien tahu apa langkah selanjutnya (Next actions).',
    codeSnippet: '"_links": { "self": "/u/1" }'
  },
  {
    id: 'BE-017',
    category: 'Fundamental Backend',
    title: 'Reverse Proxy',
    description: 'Tameng di depan server.',
    fullTheory: 'Bertindak sebagai perantara untuk menyembunyikan alamat asli server backend demi keamanan.',
    codeSnippet: 'Browser -> Nginx -> Server'
  },
  {
    id: 'BE-018',
    category: 'Fundamental Backend',
    title: 'Load Balancing',
    description: 'Pembagi beban trafik.',
    fullTheory: 'Membagikan ribuan request user ke beberapa server agar tidak ada satu server yang kepanasan (Crash).',
    codeSnippet: 'S1, S2, S3 <- LB'
  },
  {
    id: 'BE-019',
    category: 'Fundamental Backend',
    title: 'HTTPS (SSL/TLS)',
    description: 'Enkripsi jalur data.',
    fullTheory: 'Mengacak data saat terkirim di internet agar tidak bisa disadap oleh peretas di tengah jalan.',
    codeSnippet: 'Server: 443 (Tersertifikasi)'
  },
  {
    id: 'BE-020',
    category: 'Fundamental Backend',
    title: 'SQL vs NoSQL',
    description: 'Tabel vs Dokumen.',
    fullTheory: 'SQL untuk data terstruktur dan relasional. NoSQL (MongoDB) untuk data fleksibel dan skalabilitas tinggi.',
    codeSnippet: 'SELECT vs db.find()'
  },
  {
    id: 'BE-021',
    category: 'Fundamental Backend',
    title: 'TTL (Time To Live)',
    description: 'Durasi hidup data cache.',
    fullTheory: 'Menentukan berapa lama data disimpan di memori sebelum dianggap kadaluarsa dan harus diambil ulang.',
    codeSnippet: 'expire_after: 3600s'
  },
  {
    id: 'BE-022',
    category: 'Fundamental Backend',
    title: 'Message Queues',
    description: 'Antrian perintah asinkron.',
    fullTheory: 'Menyimpan perintah (seperti kirim email) di antrian agar server bisa balas user dengan cepat.',
    codeSnippet: 'App -> Queue -> Worker'
  },
  {
    id: 'BE-023',
    category: 'Fundamental Backend',
    title: 'Webhooks',
    description: 'Notifikasi otomatis antar server.',
    fullTheory: 'Server A mengirim data ke Server B segera setelah ada peristiwa terjadi tanpa perlu Server B bertanya.',
    codeSnippet: 'HTTP POST callback'
  },
  {
    id: 'BE-024',
    category: 'Fundamental Backend',
    title: 'OpenAPI / Swagger',
    description: 'Dokumentasi interaktif.',
    fullTheory: 'Membuat halaman web otomatis agar developer lain bisa mencoba API Anda secara langsung dan mudah.',
    codeSnippet: '@Schema(description = "User")'
  },
  {
    id: 'BE-025',
    category: 'Fundamental Backend',
    title: 'Rate Limiting',
    description: 'Membatasi jumlah request.',
    fullTheory: 'Mencegah hacker membombardir server dengan jutaan request per detik agar server tetap stabil.',
    codeSnippet: 'max_request: 100/min'
  },
  {
    id: 'BE-026',
    category: 'Fundamental Backend',
    title: 'Cookies vs Tokens',
    description: 'Menyimpan status login.',
    fullTheory: 'Cookies disimpan di browser, Token (JWT) dikelola oleh aplikasi. JWT lebih disukai untuk sistem yang skalabel.',
    codeSnippet: 'Bearer eyJhbG...'
  },
  {
    id: 'BE-027',
    category: 'Fundamental Backend',
    title: 'XSS Prevention',
    description: 'Cegah injeksi skrip.',
    fullTheory: 'Membersihkan input user agar tidak berisi kode JavaScript jahat yang bisa mencuri data pengguna lain.',
    codeSnippet: 'sanitize(userInput)'
  },
  {
    id: 'BE-028',
    category: 'Fundamental Backend',
    title: 'CSRF Protection',
    description: 'Cegah request palsu.',
    fullTheory: 'Menambahkan kode unik (Token) di setiap form agar server tahu request datang dari situs asli, bukan jebakan.',
    codeSnippet: '_csrf_token = uuid'
  },
  {
    id: 'BE-029',
    category: 'Fundamental Backend',
    title: 'SQL Injection',
    description: 'Cegah manipulasi database.',
    fullTheory: 'Jangan pernah gabung teks user ke SQL. Gunakan Parameterized Queries untuk menjamin keamanan database.',
    codeSnippet: 'WHERE id = ? (Safe)'
  },
  {
    id: 'BE-030',
    category: 'Fundamental Backend',
    title: 'Global Exception Handler',
    description: 'Pusat penanganan error.',
    fullTheory: 'Menangkap semua error sistem di satu tempat agar user selalu terima pesan yang sopan, bukan kode error mentah.',
    codeSnippet: '@ControllerAdvice'
  },

  // SECTION 2: BASIC LOGIC BACKEND (31-60)
  {
    id: 'BE-031',
    category: 'Basic Logic Backend',
    title: 'Sorting Logic',
    description: 'Mengurutkan ribuan data.',
    fullTheory: 'Algoritma untuk menyusun data (nama, harga) secara rapi agar user mudah mencari informasi di aplikasi.',
    codeSnippet: 'Array.sort()'
  },
  {
    id: 'BE-032',
    category: 'Basic Logic Backend',
    title: 'Binary Search',
    description: 'Pencarian super cepat.',
    fullTheory: 'Teknik mencari data di list terurut dengan membelah data menjadi dua terus menerus. Sangat efisien.',
    codeSnippet: 'while (left <= right)'
  },
  {
    id: 'BE-033',
    category: 'Basic Logic Backend',
    title: 'Hash Map Collisions',
    description: 'Menangani kunci ganda.',
    fullTheory: 'Logika tentang bagaimana komputer menyimpan data jika dua kata kunci menghasilkan alamat memori yang sama.',
    codeSnippet: 'Linked List in Bucket'
  },
  {
    id: 'BE-034',
    category: 'Basic Logic Backend',
    title: 'Linked List logic',
    description: 'Data berantai.',
    fullTheory: 'Struktur data di mana setiap data menunjuk ke data berikutnya. Sangat fleksibel untuk tambah data di tengah.',
    codeSnippet: 'node.next = newNode'
  },
  {
    id: 'BE-035',
    category: 'Basic Logic Backend',
    title: 'Recursion Base Case',
    description: 'Titik henti perulangan.',
    fullTheory: 'Setiap fungsi yang memanggil dirinya sendiri wajib punya titik henti agar komputer tidak hang (Stack Overflow).',
    codeSnippet: 'if (n == 0) return 1'
  },
  {
    id: 'BE-036',
    category: 'Basic Logic Backend',
    title: 'Stacks (LIFO)',
    description: 'Tumpukan terakhir, keluar pertama.',
    fullTheory: 'Logika piring tumpuk. Digunakan untuk fungsi Undo/Redo atau navigasi kembali di aplikasi.',
    codeSnippet: 'stack.push() / pop()'
  },
  {
    id: 'BE-037',
    category: 'Basic Logic Backend',
    title: 'Bitwise Operations',
    description: 'Logika biner 0 dan 1.',
    fullTheory: 'Operasi langsung pada level bit untuk performa maksimal dan efisiensi ruang penyimpanan di database.',
    codeSnippet: 'a & b (AND)'
  },
  {
    id: 'BE-038',
    category: 'Basic Logic Backend',
    title: 'Logic Gates in Code',
    description: 'AND, OR, NOT.',
    fullTheory: 'Pondasi segala keputusan di backend. Mengatur alur logika apakah user boleh lanjut atau berhenti.',
    codeSnippet: 'if (isOk && hasPerm)'
  },
  {
    id: 'BE-039',
    category: 'Basic Logic Backend',
    title: 'Big O Notation',
    description: 'Skalabilitas kode.',
    fullTheory: 'Mengukur seberapa lambat kode Anda jika data bertambah dari 100 menjadi 100 juta.',
    codeSnippet: 'O(n) - Linear Time'
  },
  {
    id: 'BE-040',
    category: 'Basic Logic Backend',
    title: 'Stack vs Heap',
    description: 'Manajemen memori.',
    fullTheory: 'Stack untuk variabel lokal yang cepat. Heap untuk objek besar yang hidup lebih lama di memori server.',
    codeSnippet: 'int a; // Stack\nUser u; // Heap'
  },
  {
    id: 'BE-041',
    category: 'Basic Logic Backend',
    title: 'Tree DFS Search',
    description: 'Pencarian mendalam.',
    fullTheory: 'Menyisir struktur hierarki (kategori pohon) dengan masuk ke cabang terdalam dulu sebelum pindah.',
    codeSnippet: 'recursive(node.child)'
  },
  {
    id: 'BE-042',
    category: 'Basic Logic Backend',
    title: 'Graph Theory',
    description: 'Hubungan antar titik.',
    fullTheory: 'Digunakan untuk rekomendasi pertemanan atau mencari rute terdekat di peta (Google Maps logic).',
    codeSnippet: 'Nodes & Edges'
  },
  {
    id: 'BE-043',
    category: 'Basic Logic Backend',
    title: 'Dynamic Programming',
    description: 'Ingat hasil lama.',
    fullTheory: 'Menyimpan hasil perhitungan sebelumnya agar tidak dihitung ulang, menghemat waktu proses CPU secara masif.',
    codeSnippet: 'memo[n] = result'
  },
  {
    id: 'BE-044',
    category: 'Basic Logic Backend',
    title: 'Greedy Algorithms',
    description: 'Ambil yang terbaik sekarang.',
    fullTheory: 'Strategi mengambil keputusan terbaik di setiap langkah tanpa peduli masa depan. Cepat tapi belum tentu optimal.',
    codeSnippet: 'findMax(local)'
  },
  {
    id: 'BE-045',
    category: 'Basic Logic Backend',
    title: 'Regular Expressions',
    description: 'Pencarian pola teks.',
    fullTheory: 'Bahasa khusus untuk memvalidasi format email, nomor telepon, atau mencari kata tertentu dalam ribuan teks.',
    codeSnippet: '/^[a-z]+$/'
  },
  {
    id: 'BE-046',
    category: 'Basic Logic Backend',
    title: 'String Efficiency',
    description: 'StringBuilder logic.',
    fullTheory: 'Jangan gabung teks di dalam loop pakai tanda plus (+). Gunakan StringBuilder agar hemat memori server.',
    codeSnippet: 'sb.append("txt")'
  },
  {
    id: 'BE-047',
    category: 'Basic Logic Backend',
    title: 'File I/O Stream',
    description: 'Baca tulis file.',
    fullTheory: 'Membaca data dari disk sepotong demi sepotong agar RAM server tidak penuh saat buka file ukuran GB.',
    codeSnippet: 'InputStream.read()'
  },
  {
    id: 'BE-048',
    category: 'Basic Logic Backend',
    title: 'Stream Processing',
    description: 'Filter data bergaya fungsional.',
    fullTheory: 'Cara modern memproses koleksi data dengan gaya deklaratif (Filter, Map, Reduce) yang bersih dan efisien.',
    codeSnippet: 'list.stream().filter()'
  },
  {
    id: 'BE-049',
    category: 'Basic Logic Backend',
    title: 'Parallel vs Concurrent',
    description: 'Banyak tugas sekaligus.',
    fullTheory: 'Concurrent: bergantian sangat cepat. Parallel: benar-benar dikerjakan di waktu yang sama oleh CPU berbeda.',
    codeSnippet: 'Multi-core processing'
  },
  {
    id: 'BE-050',
    category: 'Basic Logic Backend',
    title: 'Thread Safety',
    description: 'Cegah tabrakan data.',
    fullTheory: 'Memastikan data tidak rusak saat diakses oleh dua proses yang berjalan bersamaan di server.',
    codeSnippet: 'synchronized(obj) { ... }'
  },
  {
    id: 'BE-051',
    category: 'Basic Logic Backend',
    title: 'Deadlock logic',
    description: 'Saling tunggu selamanya.',
    fullTheory: 'Kondisi di mana dua proses saling menunggu satu sama lain, mengakibatkan server "Freeze" total.',
    codeSnippet: 'A waits B, B waits A'
  },
  {
    id: 'BE-052',
    category: 'Basic Logic Backend',
    title: 'Race Condition',
    description: 'Balapan update data.',
    fullTheory: 'Bug yang terjadi jika hasil akhir tergantung pada urutan siapa yang lebih duluan selesai eksekusi.',
    codeSnippet: 'Update x = x + 1'
  },
  {
    id: 'BE-053',
    category: 'Basic Logic Backend',
    title: 'Data Validation logic',
    description: 'Filter input kotor.',
    fullTheory: 'Logika untuk memastikan data yang masuk ke sistem sesuai aturan bisnis (Misal: Umur tidak boleh minus).',
    codeSnippet: 'if (age < 0) throw Err'
  },
  {
    id: 'BE-054',
    category: 'Basic Logic Backend',
    title: 'Business Isolation',
    description: 'Pisahkan logika inti.',
    fullTheory: 'Memisahkan aturan bisnis (Misal: Perhitungan pajak) dari cara simpan ke database agar kode mudah diganti.',
    codeSnippet: 'Logic != Database'
  },
  {
    id: 'BE-055',
    category: 'Basic Logic Backend',
    title: 'DTO Pattern',
    description: 'Kurir data.',
    fullTheory: 'Objek sederhana khusus untuk membawa data antar layer tanpa membawa logika bisnis yang berat.',
    codeSnippet: 'class UserDTO { name; }'
  },
  {
    id: 'BE-056',
    category: 'Basic Logic Backend',
    title: 'Value Objects',
    description: 'Data berdasarkan nilai.',
    fullTheory: 'Objek yang identitasnya ditentukan oleh isinya (Misal: Warna "Merah"). Jika isinya sama, objek dianggap sama.',
    codeSnippet: 'email = new Email("x")'
  },
  {
    id: 'BE-057',
    category: 'Basic Logic Backend',
    title: 'Entity vs Model',
    description: 'Data DB vs Data Logik.',
    fullTheory: 'Entity mewakili baris di tabel database. Model mewakili data yang sedang diproses oleh alur logika aplikasi.',
    codeSnippet: '@Entity vs Class'
  },
  {
    id: 'BE-058',
    category: 'Basic Logic Backend',
    title: 'Factory Pattern',
    description: 'Pusat pembuatan objek.',
    fullTheory: 'Memberikan satu pintu untuk membuat objek kompleks tanpa perlu tahu cara membuatnya di banyak tempat.',
    codeSnippet: 'Factory.get("SMS")'
  },
  {
    id: 'BE-059',
    category: 'Basic Logic Backend',
    title: 'Strategy Pattern',
    description: 'Pilih taktik saat jalan.',
    fullTheory: 'Memilih alur logika saat aplikasi berjalan (Misal: Pilih metode bayar kartu atau tunai di tengah jalan).',
    codeSnippet: 'exec(cardPayStrategy)'
  },
  {
    id: 'BE-060',
    category: 'Basic Logic Backend',
    title: 'Observer Pattern',
    description: 'Langganan notifikasi.',
    fullTheory: 'Satu proses memberitahu banyak proses lain secara otomatis saat ada perubahan terjadi (Broadcast).',
    codeSnippet: 'subject.notifyAll()'
  },

  // SECTION 3: SPRING BOOT (61-90)
  {
    id: 'BE-061',
    category: 'Spring Boot',
    title: 'IoC Container',
    description: 'Wadah manajemen objek.',
    fullTheory: 'Spring yang bertanggung jawab membuat dan mengatur instansi objek aplikasi Anda secara otomatis.',
    codeSnippet: 'Spring Context'
  },
  {
    id: 'BE-062',
    category: 'Spring Boot',
    title: 'Dependency Injection',
    description: 'Suntikan objek otomatis.',
    fullTheory: 'Memberikan objek yang dibutuhkan ke dalam sebuah class tanpa class tersebut harus membuatnya sendiri.',
    codeSnippet: '@Autowired private Svc s;'
  },
  {
    id: 'BE-063',
    category: 'Spring Boot',
    title: 'Constructor Injection',
    description: 'Suntikan via konstruktor.',
    fullTheory: 'Cara terbaik menyuntikkan dependensi karena menjamin objek tidak null dan lebih mudah di-test.',
    codeSnippet: 'public Svc(Repo r) { .. }'
  },
  {
    id: 'BE-064',
    category: 'Spring Boot',
    title: '@Component vs @Service',
    description: 'Identitas bean Spring.',
    fullTheory: '@Component adalah umum. @Service menunjukkan class berisi logika bisnis utama aplikasi Anda.',
    codeSnippet: '@Service class MyBiz { }'
  },
  {
    id: 'BE-065',
    category: 'Spring Boot',
    title: '@Repository vs @Controller',
    description: 'Layer DB vs Layer API.',
    fullTheory: 'Repository untuk akses data. Controller untuk menerima request dari internet (Entry point).',
    codeSnippet: '@Repository interface R { }'
  },
  {
    id: 'BE-066',
    category: 'Spring Boot',
    title: 'Bean Lifecycle',
    description: 'Siklus hidup objek.',
    fullTheory: 'Urutan kejadian sejak objek dibuat, diisi datanya, hingga dihancurkan oleh sistem Spring.',
    codeSnippet: '@PostConstruct / @PreDestroy'
  },
  {
    id: 'BE-067',
    category: 'Spring Boot',
    title: 'Application Context',
    description: 'Pusat integrasi Spring.',
    fullTheory: 'Otak besar Spring yang memegang semua informasi konfigurasi dan bean aplikasi dalam satu tempat.',
    codeSnippet: 'context.getBean("name")'
  },
  {
    id: 'BE-068',
    category: 'Spring Boot',
    title: 'Auto-configuration',
    description: 'Konfigurasi tanpa mikir.',
    fullTheory: 'Spring Boot mendeteksi apa yang ada di library Anda dan melakukan setup otomatis (Misal: Konek DB otomatis).',
    codeSnippet: 'Magic of Spring Boot'
  },
  {
    id: 'BE-069',
    category: 'Spring Boot',
    title: 'Component Scanning',
    description: 'Pencarian bean otomatis.',
    fullTheory: 'Spring menyisir seluruh folder folder Anda untuk mencari label seperti @Service agar bisa dikelola.',
    codeSnippet: '@ComponentScan("com.app")'
  },
  {
    id: 'BE-070',
    category: 'Spring Boot',
    title: 'Spring Starters',
    description: 'Paket dependensi praktis.',
    fullTheory: 'Sekumpulan library yang sudah dikelompokkan (e.g., Web, JPA) agar Anda tidak perlu pusing pilih versi manual.',
    codeSnippet: 'spring-boot-starter-web'
  },
  {
    id: 'BE-071',
    category: 'Spring Boot',
    title: 'Properties & YAML',
    description: 'File setting aplikasi.',
    fullTheory: 'Tempat menaruh alamat database, password, atau port aplikasi agar tidak tercampur di kode program.',
    codeSnippet: 'server.port = 8080'
  },
  {
    id: 'BE-072',
    category: 'Spring Boot',
    title: 'Spring Data JPA',
    description: 'Akses DB gaya modern.',
    fullTheory: 'Memungkinkan query database cukup dengan membuat interface, tanpa perlu menulis SQL yang panjang.',
    codeSnippet: 'repo.findAll()'
  },
  {
    id: 'BE-073',
    category: 'Spring Boot',
    title: 'Transaction Management',
    description: 'Keamanan data transaksi.',
    fullTheory: 'Memastikan proses simpan ke banyak tabel berhasil semua atau gagal semua (Rollback) demi integritas data.',
    codeSnippet: '@Transactional void do() { }'
  },
  {
    id: 'BE-074',
    category: 'Spring Boot',
    title: 'Spring Security Chains',
    description: 'Rantai filter keamanan.',
    fullTheory: 'Setiap request harus lewat "Satpam" Spring untuk dicek tokennya sebelum boleh masuk ke controller.',
    codeSnippet: 'SecurityFilterChain filter'
  },
  {
    id: 'BE-075',
    category: 'Spring Boot',
    title: 'JWT in Spring',
    description: 'Token login mandiri.',
    fullTheory: 'Menggunakan token berisi identitas user agar server tidak perlu simpan data session di RAM.',
    codeSnippet: 'Bearer eyJhbGci...'
  },
  {
    id: 'BE-076',
    category: 'Spring Boot',
    title: 'Spring Actuator',
    description: 'Dashboard kesehatan sistem.',
    fullTheory: 'Endpoint khusus (/health) untuk mengecek apakah aplikasi masih sehat atau sudah mati di server.',
    codeSnippet: 'GET /actuator/health'
  },
  {
    id: 'BE-077',
    category: 'Spring Boot',
    title: 'Spring WebFlux',
    description: 'Backend gaya reaktif.',
    fullTheory: 'Teknik menangani trafik jutaan user dengan sedikit thread (Non-blocking) untuk efisiensi RAM maksimal.',
    codeSnippet: 'Mono<User> findUser()'
  },
  {
    id: 'BE-078',
    category: 'Spring Boot',
    title: 'Spring Cloud Config',
    description: 'Konfigurasi pusat cloud.',
    fullTheory: 'Menyimpan konfigurasi banyak server di satu tempat pusat agar mudah diatur saat rilis besar.',
    codeSnippet: 'Config Server Client'
  },
  {
    id: 'BE-079',
    category: 'Spring Boot',
    title: 'Spring Cloud Gateway',
    description: 'Gerbang masuk trafik.',
    fullTheory: 'Satu pintu masuk untuk ribuan microservices yang bertugas mengatur rute dan keamanan masuk.',
    codeSnippet: 'Gateway Route Filter'
  },
  {
    id: 'BE-080',
    category: 'Spring Boot',
    title: 'Feign Client',
    description: 'Komunikasi antar server.',
    fullTheory: 'Memanggil API dari server lain semudah memanggil fungsi biasa di dalam kode aplikasi Anda.',
    codeSnippet: '@FeignClient("users")'
  },
  {
    id: 'BE-081',
    category: 'Spring Boot',
    title: 'Resilience4j',
    description: 'Penahan beban error.',
    fullTheory: 'Memutus koneksi sementara (Circuit Breaker) jika server lawan lambat agar aplikasi kita tidak ikut hang.',
    codeSnippet: '@CircuitBreaker'
  },
  {
    id: 'BE-082',
    category: 'Spring Boot',
    title: '@MockBean Test',
    description: 'Tes dengan objek palsu.',
    fullTheory: 'Mengganti database asli dengan data bohongan saat melakukan tes agar proses tes sangat cepat.',
    codeSnippet: '@MockBean private Repo r;'
  },
  {
    id: 'BE-083',
    category: 'Spring Boot',
    title: 'Profiles (Dev vs Prod)',
    description: 'Pengaturan beda lingkungan.',
    fullTheory: 'Menggunakan settingan berbeda untuk komputer koding (Dev) dan server asli (Prod) secara otomatis.',
    codeSnippet: '@Profile("prod")'
  },
  {
    id: 'BE-084',
    category: 'Spring Boot',
    title: '@Async Methods',
    description: 'Tugas di latar belakang.',
    fullTheory: 'Menjalankan fungsi (Misal: Kirim SMS) di jalur berbeda agar user tidak harus menunggu loading selesai.',
    codeSnippet: '@Async void sendSms() { }'
  },
  {
    id: 'BE-085',
    category: 'Spring Boot',
    title: 'Scheduling',
    description: 'Tugas rutin terjadwal.',
    fullTheory: 'Menjalankan fungsi setiap waktu tertentu (Misal: Kirim laporan harian setiap jam 12 malam).',
    codeSnippet: '@Scheduled(cron = "...")'
  },
  {
    id: 'BE-086',
    category: 'Spring Boot',
    title: '@Valid Validation',
    description: 'Cek input otomatis.',
    fullTheory: 'Memeriksa apakah data yang dikirim user (Email, Nama) sudah benar formatnya secara otomatis.',
    codeSnippet: 'public (@Valid User u)'
  },
  {
    id: 'BE-087',
    category: 'Spring Boot',
    title: '@ControllerAdvice',
    description: 'Manajer error global.',
    fullTheory: 'Menangkap kegagalan di seluruh controller aplikasi agar response error seragam dan bersih.',
    codeSnippet: 'interceptException(e)'
  },
  {
    id: 'BE-088',
    category: 'Spring Boot',
    title: 'Spring AOP',
    description: 'Logika titipan.',
    fullTheory: 'Menitipkan logika (Log, Auth) ke banyak fungsi sekaligus tanpa menulis ulang kode di tiap fungsi.',
    codeSnippet: '@Aspect class Logger { }'
  },
  {
    id: 'BE-089',
    category: 'Spring Boot',
    title: 'Bean Scopes',
    description: 'Jangka waktu hidup objek.',
    fullTheory: 'Mengatur apakah satu objek dipakai rame-rame (Singleton) atau satu user dapat satu objek baru (Session).',
    codeSnippet: '@Scope("prototype")'
  },
  {
    id: 'BE-090',
    category: 'Spring Boot',
    title: 'Health Indicators',
    description: 'Detail status kesehatan.',
    fullTheory: 'Memberikan info apakah koneksi DB, Disk, atau RAM masih cukup untuk menjalankan aplikasi.',
    codeSnippet: 'Health.up().build()'
  },

  // SECTION 4: DEVOPS (91-120)
  {
    id: 'BE-091',
    category: 'DevOps',
    title: 'CI/CD Pipeline',
    description: 'Otomasi rilis koding.',
    fullTheory: 'Proses otomatis dari koding selesai, tes otomatis, hingga aplikasi terpasang di server tanpa klik manual.',
    codeSnippet: 'Push -> Test -> Deploy'
  },
  {
    id: 'BE-092',
    category: 'DevOps',
    title: 'Continuous Integration',
    description: 'Tes gabungan tiap detik.',
    fullTheory: 'Memastikan tiap baris kode baru dari developer tidak merusak fitur lama dengan menjalankan tes otomatis.',
    codeSnippet: 'mvn test on Commit'
  },
  {
    id: 'BE-093',
    category: 'DevOps',
    title: 'Continuous Deployment',
    description: 'Update server instan.',
    fullTheory: 'Menerbitkan aplikasi versi terbaru ke server segera setelah lolos dari semua tahap pengujian otomatis.',
    codeSnippet: 'Auto deploy to Prod'
  },
  {
    id: 'BE-094',
    category: 'DevOps',
    title: 'GitHub Actions',
    description: 'Otomasi via GitHub.',
    fullTheory: 'Platform untuk menjalankan skrip build dan rilis langsung saat Anda melakukan "Push" ke GitHub.',
    codeSnippet: '.github/workflows/ci.yml'
  },
  {
    id: 'BE-095',
    category: 'DevOps',
    title: 'Jenkins Pipelines',
    description: 'Robot rilis legendaris.',
    fullTheory: 'Aplikasi server khusus untuk mengatur alur kerja rilis software yang sangat kompleks dan aman.',
    codeSnippet: 'node { stage("build") }'
  },
  {
    id: 'BE-096',
    category: 'DevOps',
    title: 'GitLab CI',
    description: 'Otomasi dari GitLab.',
    fullTheory: 'Sistem otomasi bawaan GitLab yang mengelola build dan deployment lewat file konfigurasi YAML sederhana.',
    codeSnippet: '.gitlab-ci.yml'
  },
  {
    id: 'BE-097',
    category: 'DevOps',
    title: 'Infrastructure as Code',
    description: 'Server dalam baris kode.',
    fullTheory: 'Membangun ribuan server AWS/Google Cloud cukup dengan naskah kode (Terraform), bukan klik manual.',
    codeSnippet: 'terraform apply'
  },
  {
    id: 'BE-098',
    category: 'DevOps',
    title: 'Ansible Config',
    description: 'Pengaturan masif server.',
    fullTheory: 'Memberi perintah ke ratusan server sekaligus untuk update OS atau install aplikasi secara serentak.',
    codeSnippet: 'ansible-playbook setup.yml'
  },
  {
    id: 'BE-099',
    category: 'DevOps',
    title: 'AWS EC2 Basics',
    description: 'Sewa komputer virtual.',
    fullTheory: 'Layanan sewa server di awan (Cloud) untuk menjalankan aplikasi backend Anda dengan biaya sewa bulanan.',
    codeSnippet: 'Virtual Machine in Cloud'
  },
  {
    id: 'BE-100',
    category: 'DevOps',
    title: 'Managed RDS',
    description: 'Database di awan.',
    fullTheory: 'Layanan database yang diurus otomatis oleh cloud (AWS/GCP), mulai dari backup hingga update keamanan.',
    codeSnippet: 'AWS Relational DB Svc'
  },
  {
    id: 'BE-101',
    category: 'DevOps',
    title: 'Prometheus Monitoring',
    description: 'Cek kesehatan server.',
    fullTheory: 'Aplikasi yang memonitor statistik server (CPU/RAM) dan lapor jika server kepanasan atau sedang overload.',
    codeSnippet: 'scrape_interval: 15s'
  },
  {
    id: 'BE-102',
    category: 'DevOps',
    title: 'Grafana Dashboards',
    description: 'Grafik performa cantik.',
    fullTheory: 'Menampilkan data statistik server dalam bentuk grafik warna-warni agar tim bisa pantau kondisi aplikasi.',
    codeSnippet: 'Query: sum(http_err)'
  },
  {
    id: 'BE-103',
    category: 'DevOps',
    title: 'ELK Stack logging',
    description: 'Pencarian log masif.',
    fullTheory: 'Teknik mengumpulkan jutaan baris catatan (Log) aplikasi ke satu tempat agar mudah dicari saat ada masalah.',
    codeSnippet: 'Logstash -> ES -> Kibana'
  },
  {
    id: 'BE-104',
    category: 'DevOps',
    title: 'Distributed Tracing',
    description: 'Lacak alur request.',
    fullTheory: 'Melacak satu request user yang masuk ke sistem dan melihat berapa lama waktu yang habis di tiap layanan.',
    codeSnippet: 'Trace-ID: uuid-789'
  },
  {
    id: 'BE-105',
    category: 'DevOps',
    title: 'Blue-Green Deploy',
    description: 'Rilis dua server.',
    fullTheory: 'Menjalankan server lama (Blue) dan baru (Green) secara bersamaan sebelum memindahkan user ke yang baru.',
    codeSnippet: 'Switch Load Balancer'
  },
  {
    id: 'BE-106',
    category: 'DevOps',
    title: 'Canary Release logic',
    description: 'Uji coba fitur kecil.',
    fullTheory: 'Membuka fitur baru hanya untuk 5% user untuk melihat apakah ada bug sebelum dilepas ke 100% user.',
    codeSnippet: '5% user see v2'
  },
  {
    id: 'BE-107',
    category: 'DevOps',
    title: 'K8s Rolling Update',
    description: 'Ganti pod perlahan.',
    fullTheory: 'Memperbarui aplikasi satu per satu di Kubernetes agar layanan tidak pernah mati total saat update.',
    codeSnippet: 'kubectl rollout status'
  },
  {
    id: 'BE-108',
    category: 'DevOps',
    title: 'Static Code Analysis',
    description: 'Cek kualitas koding.',
    fullTheory: 'Software otomatis (SonarQube) yang memeriksa apakah kode Anda kotor, ada bug tersembunyi, atau celah keamanan.',
    codeSnippet: 'Analysis by SonarQube'
  },
  {
    id: 'BE-109',
    category: 'DevOps',
    title: 'Dependency Scanning',
    description: 'Cek library berbahaya.',
    fullTheory: 'Memastikan library yang Anda gunakan (seperti Spring/Jackson) tidak punya celah keamanan yang bisa diretas.',
    codeSnippet: 'Security Scan: Clear'
  },
  {
    id: 'BE-110',
    category: 'DevOps',
    title: 'Docker Image Registry',
    description: 'Gudang penyimpanan image.',
    fullTheory: 'Tempat menaruh paket aplikasi (Image) agar server deployment bisa mendownloadnya dengan lancar.',
    codeSnippet: 'docker push registry.com'
  },
  {
    id: 'BE-111',
    category: 'DevOps',
    title: 'SSL (Let\'s Encrypt)',
    description: 'Sertifikat keamanan gratis.',
    fullTheory: 'Layanan publik untuk mendapatkan gembok hijau (HTTPS) pada website Anda secara otomatis dan gratis.',
    codeSnippet: 'certbot renew'
  },
  {
    id: 'BE-112',
    category: 'DevOps',
    title: 'Cloud DNS (Route53)',
    description: 'Manajer alamat domain.',
    fullTheory: 'Mengatur bagaimana namadomain.com diarahkan ke alamat IP server backend Anda di cloud.',
    codeSnippet: 'A Record -> 12.34.56.78'
  },
  {
    id: 'BE-113',
    category: 'DevOps',
    title: 'Cloud CDN',
    description: 'Pengiriman data tercepat.',
    fullTheory: 'Menyebarkan file website Anda ke ribuan server di seluruh dunia agar user bisa buka web dengan sangat kencang.',
    codeSnippet: 'Edge Locations Caching'
  },
  {
    id: 'BE-114',
    category: 'DevOps',
    title: 'Secret Management',
    description: 'Brankas password cloud.',
    fullTheory: 'Menyimpan password database secara aman agar tidak terlihat oleh siapapun termasuk developer aplikasi.',
    codeSnippet: 'Vault: READ secret/db'
  },
  {
    id: 'BE-115',
    category: 'DevOps',
    title: 'Backup/Restore logic',
    description: 'Jaminan keamanan data.',
    fullTheory: 'Strategi menyimpan cadangan data setiap hari agar jika server kena hack/kebakaran, data masih bisa diselamatkan.',
    codeSnippet: 'Daily Backup Policy'
  },
  {
    id: 'BE-116',
    category: 'DevOps',
    title: 'Disaster Recovery',
    description: 'Rencana darurat sistem.',
    fullTheory: 'Persiapan server cadangan di kota/negara lain yang siap nyala seketika jika server utama di Jakarta mati total.',
    codeSnippet: 'Failover to Region B'
  },
  {
    id: 'BE-117',
    category: 'DevOps',
    title: 'Horizontal Scaling',
    description: 'Tambah jumlah server.',
    fullTheory: 'Memperbanyak jumlah server (dari 1 jadi 10) untuk menangani jutaan user sekaligus secara bersamaan.',
    codeSnippet: 'Scale: 1 -> 10 nodes'
  },
  {
    id: 'BE-118',
    category: 'DevOps',
    title: 'Vertical Scaling',
    description: 'Tambah tenaga server.',
    fullTheory: 'Membesarkan kapasitas satu server (Tambah RAM/CPU) untuk menangani beban yang makin berat.',
    codeSnippet: 'RAM: 4GB -> 32GB'
  },
  {
    id: 'BE-119',
    category: 'DevOps',
    title: 'Chaos Engineering',
    description: 'Uji daya tahan sistem.',
    fullTheory: 'Sengaja mematikan server secara acak untuk melatih sistem agar tetap hidup dan tidak panik saat ada masalah asli.',
    codeSnippet: 'Simian Army: Kill Node'
  },
  {
    id: 'BE-120',
    category: 'DevOps',
    title: 'Target SLO (Objective)',
    description: 'Target janji layanan.',
    fullTheory: 'Janji kualitas layanan ke user, misal: "Aplikasi ini dijamin nyala 99.9% waktu dalam setahun".',
    codeSnippet: 'Uptime target: 99.9%'
  },

  // SECTION 5: DOCKERIZE (121-150)
  {
    id: 'BE-121',
    category: 'Dockerize',
    title: 'Docker Image Layers',
    description: 'Lapisan tumpukan paket.',
    fullTheory: 'Docker image dibangun dari lapisan (layers). Setiap baris kode di Dockerfile akan membuat lapisan baru yang tersimpan permanen.',
    codeSnippet: 'Each line = new layer'
  },
  {
    id: 'BE-122',
    category: 'Dockerize',
    title: 'Dockerfile Practices',
    description: 'Aturan bikin image rapi.',
    fullTheory: 'Menyusun perintah Dockerfile agar proses build cepat dan ukuran image sekecil mungkin agar hemat bandwith.',
    codeSnippet: 'COPY package.json first'
  },
  {
    id: 'BE-123',
    category: 'Dockerize',
    title: 'FROM: Base Image',
    description: 'Pondasi sistem operasi.',
    fullTheory: 'Instruksi awal untuk menentukan sistem operasi dasar apa yang akan dipakai (Misal: Linux Ubuntu atau Alpine).',
    codeSnippet: 'FROM openjdk:17-alpine'
  },
  {
    id: 'BE-124',
    category: 'Dockerize',
    title: 'COPY vs ADD logic',
    description: 'Pindah file ke container.',
    fullTheory: 'COPY digunakan untuk memindahkan file biasa. ADD bisa digunakan untuk download file dari internet atau buka file ZIP.',
    codeSnippet: 'COPY src/ /app/src/'
  },
  {
    id: 'BE-125',
    category: 'Dockerize',
    title: 'RUN vs CMD instructions',
    description: 'Build vs Start-up.',
    fullTheory: 'RUN dijalankan saat sedang MEMBANGUN image. CMD dijalankan saat KONTAINER baru saja dinyalakan.',
    codeSnippet: 'RUN npm install'
  },
  {
    id: 'BE-126',
    category: 'Dockerize',
    title: 'ENTRYPOINT logic',
    description: 'Perintah utama abadi.',
    fullTheory: 'Menentukan aplikasi utama apa yang harus jalan di kontainer. Perintah ini tidak mudah diganti saat kontainer jalan.',
    codeSnippet: 'ENTRYPOINT ["java", "-jar"]'
  },
  {
    id: 'BE-127',
    category: 'Dockerize',
    title: 'Docker Volumes logic',
    description: 'Penyimpanan data abadi.',
    fullTheory: 'Memetakan folder di dalam kontainer ke folder nyata di PC Anda agar data (seperti Database) tidak terhapus.',
    codeSnippet: '-v /my/data:/data'
  },
  {
    id: 'BE-128',
    category: 'Dockerize',
    title: 'Docker Bridges networking',
    description: 'Kabel virtual kontainer.',
    fullTheory: 'Mode jaringan standar di mana kontainer bisa saling berbicara menggunakan IP internal khusus Docker.',
    codeSnippet: 'Network: 172.17.0.x'
  },
  {
    id: 'BE-129',
    category: 'Dockerize',
    title: 'Docker Compose YAML',
    description: 'Naskah banyak kontainer.',
    fullTheory: 'File teks berisi daftar aplikasi apa saja yang mau dinyalakan bareng (App, DB, Redis) agar praktis.',
    codeSnippet: 'docker-compose up'
  },
  {
    id: 'BE-130',
    category: 'Dockerize',
    title: 'Multi-stage builds',
    description: 'Diet ukuran image.',
    fullTheory: 'Proses membuang file sampah (seperti source code/compiler) setelah aplikasi jadi, sehingga image akhir super ringan.',
    codeSnippet: 'FROM maven... COPY binary'
  },
  {
    id: 'BE-131',
    category: 'Dockerize',
    title: 'Docker Hub Push/Pull',
    description: 'Simpan unduh image.',
    fullTheory: 'Mengunggah image buatan Anda ke internet agar orang lain atau server kantor bisa mengunduh dan memakainya.',
    codeSnippet: 'docker push user/app:v1'
  },
  {
    id: 'BE-132',
    category: 'Dockerize',
    title: 'Docker Exec command',
    description: 'Masuk ke dalam kontainer.',
    fullTheory: 'Perintah untuk "masuk" ke dalam kontainer yang sedang jalan untuk mengecek file atau memperbaiki error.',
    codeSnippet: 'docker exec -it c_id sh'
  },
  {
    id: 'BE-133',
    category: 'Dockerize',
    title: 'Port Exposure mapping',
    description: 'Buka pintu akses luar.',
    fullTheory: 'Menghubungkan port di dalam kontainer ke port komputer Anda agar aplikasi bisa dibuka di browser lokal.',
    codeSnippet: '-p 8080:80'
  },
  {
    id: 'BE-134',
    category: 'Dockerize',
    title: 'Docker ENV Vars',
    description: 'Variabel rahasia kontainer.',
    fullTheory: 'Cara memasukkan settingan rahasia (Password/ID) ke dalam kontainer tanpa harus menulisnya di kode Dockerfile.',
    codeSnippet: '-e DB_PASS=secret123'
  },
  {
    id: 'BE-135',
    category: 'Dockerize',
    title: 'Restart Policies',
    description: 'Hidupkan otomatis.',
    fullTheory: 'Instruksi agar Docker otomatis menghidupkan kembali kontainer yang mati karena crash atau setelah PC restart.',
    codeSnippet: '--restart = always'
  },
  {
    id: 'BE-136',
    category: 'Dockerize',
    title: 'Docker Logs tracking',
    description: 'Melihat catatan aplikasi.',
    fullTheory: 'Melihat apa yang diketik aplikasi Anda di dalam kontainer untuk melacak jika ada error atau pesan sukses.',
    codeSnippet: 'docker logs -f c_id'
  },
  {
    id: 'BE-137',
    category: 'Dockerize',
    title: 'Alpine Linux logic',
    description: 'OS Linux paling mungil.',
    fullTheory: 'Versi sistem operasi rahasia yang sangat kecil (hanya 5MB) yang sering dipakai sebagai pondasi image Docker.',
    codeSnippet: 'base: alpine-linux'
  },
  {
    id: 'BE-138',
    category: 'Dockerize',
    title: 'Distroless Images',
    description: 'Image tanpa OS.',
    fullTheory: 'Image paling aman karena tidak berisi aplikasi OS apapun (seperti bash/curl) kecuali aplikasi Anda sendiri.',
    codeSnippet: 'Safe from hackers'
  },
  {
    id: 'BE-139',
    category: 'Dockerize',
    title: 'Docker Swarm Basics',
    description: 'Pasukan kontainer.',
    fullTheory: 'Teknik mengatur banyak server Docker agar bekerja sebagai satu tim besar yang kuat dan tahan banting.',
    codeSnippet: 'docker swarm init'
  },
  {
    id: 'BE-140',
    category: 'Dockerize',
    title: 'K8s Pods Concept',
    description: 'Satuan terkecil Kubernetes.',
    fullTheory: 'Wadah terkecil di Kubernetes yang berisi satu atau lebih kontainer aplikasi yang saling berkaitan erat.',
    codeSnippet: 'Smallest unit in K8s'
  },
  {
    id: 'BE-141',
    category: 'Dockerize',
    title: 'K8s Deployments logic',
    description: 'Pusat perintah rilis.',
    fullTheory: 'Cara memberitahu Kubernetes berapa banyak jumlah kontainer yang harus jalan dan versi aplikasi ke berapa.',
    codeSnippet: 'kind: Deployment'
  },
  {
    id: 'BE-142',
    category: 'Dockerize',
    title: 'K8s Services logic',
    description: 'Alamat stabil kontainer.',
    fullTheory: 'Memberikan satu nama/alamat tetap bagi sekumpulan kontainer agar bisa diakses layanan lain dengan mudah.',
    codeSnippet: 'kind: Service'
  },
  {
    id: 'BE-143',
    category: 'Dockerize',
    title: 'K8s ConfigMaps',
    description: 'Settingan luar pod.',
    fullTheory: 'Menyimpan konfigurasi aplikasi (Seperti alamat API) di luar kontainer agar mudah diganti tanpa hapus aplikasi.',
    codeSnippet: 'Config in YAML'
  },
  {
    id: 'BE-144',
    category: 'Dockerize',
    title: 'K8s Secrets storage',
    description: 'Penyimpanan password.',
    fullTheory: 'Tempat menyimpan password dan kunci rahasia di Kubernetes dalam bentuk yang terenkripsi dan aman.',
    codeSnippet: 'Encrypted Secrets'
  },
  {
    id: 'BE-145',
    category: 'Dockerize',
    title: 'K8s Ingress entry',
    description: 'Pintu gerbang cloud.',
    fullTheory: 'Pusat pengaturan rute internet dari dunia luar masuk ke dalam ribuan aplikasi di dalam cluster Kubernetes.',
    codeSnippet: 'Route: a.com -> svc'
  },
  {
    id: 'BE-146',
    category: 'Dockerize',
    title: 'Helm Charts usage',
    description: 'Toko aplikasi k8s.',
    fullTheory: 'Template paket siap pakai untuk menginstal aplikasi kompleks di Kubernetes cukup dengan satu perintah.',
    codeSnippet: 'helm install redis'
  },
  {
    id: 'BE-147',
    category: 'Dockerize',
    title: 'Resource Limits logic',
    description: 'Batasan jatah RAM/CPU.',
    fullTheory: 'Membatasi agar satu aplikasi yang rakus tidak menghabiskan seluruh tenaga server dan mematikan aplikasi lain.',
    codeSnippet: 'limits: cpu: 500m'
  },
  {
    id: 'BE-148',
    category: 'Dockerize',
    title: 'Docker Build Cache',
    description: 'Memori pembangunan cepat.',
    fullTheory: 'Docker mengingat perintah lama saat build. Jika kode tidak berubah, proses build akan selesai secepat kilat.',
    codeSnippet: 'Using cache layer'
  },
  {
    id: 'BE-149',
    category: 'Dockerize',
    title: 'Docker Prune cleanup',
    description: 'Sapu bersih sampah.',
    fullTheory: 'Perintah sakti untuk menghapus semua kontainer mati dan image sampah yang memenuhi memori harddisk server.',
    codeSnippet: 'docker system prune'
  },
  {
    id: 'BE-150',
    category: 'Dockerize',
    title: 'Rootless Containers',
    description: 'Keamanan tanpa admin.',
    fullTheory: 'Menjalankan semua kontainer tanpa izin "Admin" (Root) agar jika aplikasi diretas, peretas tidak bisa kuasai seluruh server.',
    codeSnippet: 'User-level Isolation'
  }
];

beTheoryData.sort((a, b) => a.id.localeCompare(b.id));
