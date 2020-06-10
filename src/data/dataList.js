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
  { value: 'S00', label: 'S00-Belum mendatangi sekolah (default)' },
  { value: 'S01', label: 'S01-Gagal meminta jadwal bertemu Kepsek' },
  { value: 'S02', label: 'S02-Berhasil meminta jadwal bertemu Kepsek' },
  { value: 'S03', label: 'S03-Sekolah menolak ikut pelatihank' },
  { value: 'S04', label: 'S04-Sekolah bersedia ikut pelatihan' },
  { value: 'S05', label: 'S05-Sekolah selesai sesi pelatihan' },
  { value: 'S06', label: 'S06-Sekolah menolak registrasi' },
  { value: 'S07', label: 'S07-Sekolah melakukan registrasi & pembayaran' },
  { value: 'S08', label: 'S08-Pembayaran sudah divalidasi' },
  { value: 'S09', label: 'S09-Sekolah menerima voucher' },
  { value: 'S10', label: 'S10-JDN mengajukan invoice ke Klassku' },
  { value: 'S11', label: 'S11-Klassku melakukan pembayaran ke JDN' },
  { value: 'S12', label: 'S12-JDN melakukan pembayaran ke Area Leader' }
];


export { SCHOOLS_DUMMY };
export { filterStatusData };
