const SCHOOLS_DUMMY = [
  {
    npsn: '20257280',
    schoolName: 'SD Cahaya Singapore Montessori',
    district: 'Sukmajaya',
    city: 'Depok',
    status: 'S00-Belum mendatangi sekolah (default)'
  },
  {
    npsn: '20228733',
    schoolName: 'SD GANESA SATRIA',
    district: 'Sukmajaya',
    city: 'Depok',
    status: 'S03-Sekolah menolak ikut pelatihan'
  }
];


const filterStatusData = [
  { value: 'S0', label: 'S0-Belum mendatangi sekolah (default)' },
  { value: 'S1', label: 'S1-Sudah mendatangi sekolah tapi belum berhasil bertemu Kepsek' },
  { value: 'S2b', label: 'S2b-Gagal meminta jadwal bertemu Kepsek' },
  { value: 'S2a', label: 'S2a-Berhasil bertemu dg Kepsek tapi belum sepakat dg waktu pelatihan' },
  { value: 'S3b', label: 'S3b-Sekolah menolak ikut pelatihan' },
  { value: 'S3a', label: 'S3a-Sekolah bersedia ikut pelatihan' },
  { value: 'S4', label: 'S4-Sekolah selesai sesi pelatihan' },
  { value: 'S5b', label: 'S5b-Sekolah menolak registrasi' },
  { value: 'S5a', label: 'S5a-Sekolah melakukan registrasi & pembayaran' },
  { value: 'S6', label: 'S6-Pembayaran sudah divalidasi' },
  { value: 'S7', label: 'S7-Sekolah menerima voucher' },
  { value: 'S8', label: 'S8-JDN mengajukan invoice ke Klassku' },
  { value: 'S9', label: 'S9-Klassku melakukan pembayaran ke JDN' },
  { value: 'S10', label: 'S10-JDN melakukan pembayaran ke Area Leader' }

];

const SUB_STATUS = [
  {key: "f1", value:"Catatan Progress Sekolah"},
  {key: "f2", value:"Alasan Gagal Meminta Jadwal Bertemu Kepsek"},
  {key: "f3", value:"Alasan Sekolah Menolak Pelatihan"},
  {key: "f4", value:"Nama Kepala Sekolah (Pastikan Nama Lengkap disertai Title : Ridwan Rais S,Pd)"},
  {key: "f5", value:"Nomor Handphone Kepala Sekolah (input dengan angka 0)"},
  {key: "f6", value:"Alamat Email Kepala Sekolah"},
  {key: "f7", value:"Nomor Telepon Sekolah (Cantumkan Kode Area Telp, contoh : 021-8327676XX)"},
  {key: "f8", value:"Foto Selfie dengan Kepala Sekolah"},
  {key: "f9", value:"Foto Papan Nama Sekolah"},
  {key: "f10", value:"Alamat dan Geo Tag Sekolah (Copy dari Applikasi Geo Tag)"},
  {key: "f11", value:"Tanggal Leader Recall Status S2a"},
  {key: "f12", value:"Aktual Jumlah Murid"},
  {key: "f13", value:"Aktual Jumlah Guru"},
  {key: "f14", value:"Aplikasi yang digunakan oleh Guru dan/atau Murid dalam interaksi Belajar Mengajar selama 3 bulan terakhir ini"},
  {key: "f15", value:"Foto Formulir Kesediaan Sekolah utk Pelatihan"},
  {key: "f16", value:"Jumlah Guru yang akan mengikuti Pelatihan Aplikasi Klassku"},
  {key: "f17", value:"Jumlah Peserta lainnya (Non Guru) yang akan mengikuti Pelatihan Aplikasi Klassku"},
  {key: "f18", value:"Aktual Tanggal Pelatihan Klassku (masukkan tanggal dan jam pelatihan berlangsung)"},
  {key: "f19", value:"Aktual Jumlah Peserta Yang Hadir Saat Pelatihan"},
  {key: "f20", value:"Foto Daftar Hadir Peserta yang sdh ditandatangani"},
  {key: "f21", value:"Foto Kegiatan Pelatihan"},
  {key: "f22", value:"Foto Kuitansi/Nota Biaya Konsumsi Peserta"},
  {key: "f23", value:"Nama PJ yang ditunjukkan Kepala Sekolah (Pastikan Nama Lengkap disertai Title : Ridwan Rais S,Pd)"},
  {key: "f24", value:"Nomor Handphone PJ Sekolah (input dengan angka 0)"},
  {key: "f25", value:"Alamat Email PJ Sekolah"},
  {key: "f26", value:"Alasan Sekolah Menolak Registrasi"},
  {key: "f27", value:"Keberadaan Fasilitas Sekolah (Observasi)"},
  {key: "f28", value:"Jumlah outlet di kantin dalam lingkungan sekolah"},
  {key: "f29", value:"Kesediaan Pihak Sekolah untuk menerima Promosi/Iklan di Sekolah (Ya/Tidak)"},
  {key: "f30", value:"Aturan Khusus Pihak Sekolah dalam menerima Promosi/Iklan di Sekolah"}
]


export { SCHOOLS_DUMMY };
export { filterStatusData };
export { SUB_STATUS };