const bookPages = [
    // Page 0: Front Cover
    `
    <div class="page hard front-cover" style="position: relative; overflow: hidden; background-color: #1a365d;">
        
        <!-- Top Half Image -->
        <div style="position: absolute; top:0; left:0; width:100%; height:60%; background: url('cover-bg.jpg') center/cover;"></div>
        
        <!-- Smooth gradient transition from image to solid color -->
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to bottom, rgba(26,54,93,0.1) 0%, rgba(26,54,93,0.85) 45%, rgba(26,54,93,1) 60%);"></div>
        
        <div class="cover-content" style="position: relative; z-index: 10; height: 100%; display: flex; flex-direction: column; padding: 40px 20px; text-align: center;">
            
            <div style="margin-top: auto;">
                <div style="display: inline-block; background-color: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: white; padding: 6px 16px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 15px; backdrop-filter: blur(4px);">
                    Panduan Belajar Mandiri Murid
                </div>
                
                <h2 style="color: #cbd5e0; font-family: var(--font-serif); font-size: 1rem; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 5px;">Bahasa Indonesia</h2>
                
                <h1 style="font-family: var(--font-display); font-size: clamp(2.5rem, 8vw, 3.5rem); color: #fff; margin: 0 0 10px 0; line-height: 1.1; letter-spacing: 1px; text-shadow: 0 4px 10px rgba(0,0,0,0.3);">TEKS<br>BERITA</h1>
                
                <div style="height: 3px; background: #ecc94b; width: 50px; margin: 15px auto;"></div>
                
                <p style="color: #e2e8f0; font-size: clamp(1rem, 4vw, 1.15rem); font-style: italic; line-height: 1.5; font-weight: 300;">Menyajikan Informasi yang<br>Faktual, Aktual, dan Menarik</p>
            </div>
            
            <!-- Author Section at Bottom -->
            <div style="margin-top: auto; padding-top: 20px;">
                <span style="display:block; margin-bottom: 8px; color: #a0aec0; font-size: 0.75rem; letter-spacing: 1px; text-transform: uppercase;">Fase F • Kelas XI • Tahun Pelajaran 2026/2027</span>
                <span style="font-size: 0.8rem; color: #cbd5e0;">Disusun oleh</span><br>
                <strong style="font-size: 1.2rem; letter-spacing: 0.5px; color: #fff; font-family: var(--font-sans); display: inline-block; margin: 2px 0;">Orisa Satifa Alqaf</strong><br>
                <span style="font-size: 0.85rem; color: #a0aec0;">SMA Muhammadiyah 2 Yogyakarta<br>2026</span>
            </div>
            
        </div>
    </div>
    `,
    
    // Page 1: Inside Cover / Blank
    `
    <div class="page hard">
        <div class="page-content" style="display: flex; justify-content: center; align-items: center; opacity: 0.1;">
            <i class="ph ph-book-open" style="font-size: 5rem;"></i>
        </div>
    </div>
    `,
    
    // Page 2: Petunjuk Penggunaan (ii)
    `
    <div class="page">
        <div class="page-content">
            <h1>Petunjuk Penggunaan</h1>
            <p>Agar kamu bisa belajar dengan nyaman menggunakan E-Book interaktif ini, yuk kenali tombol-tombol yang ada di layar:</p>
            
            <h4 style="margin-top: 15px; margin-bottom: 5px;"><i class="ph ph-list-dashes"></i> Tombol Tiga Garis (Daftar Isi)</h4>
            <p>Tombol ini terletak di bagian atas. Klik tombol ini untuk membuka Daftar Isi. Kamu bisa melompat ke bab mana saja dengan cepat tanpa harus membalik halaman satu per satu.</p>
            
            <h4 style="margin-top: 15px; margin-bottom: 5px;"><i class="ph ph-info"></i> Tombol Tanda Seru (Informasi)</h4>
            <p>Tombol ini berisi profil singkat penyusun dan tujuan dibuatnya e-book ini.</p>
            
            <h4 style="margin-top: 15px; margin-bottom: 5px;"><i class="ph ph-arrows-left-right"></i> Membalik Halaman</h4>
            <p>Gunakan tombol "Sebelumnya" dan "Selanjutnya" di bawah layar. Alternatifnya, kamu juga bisa langsung <strong>mengusap (swipe) layar</strong> ke kiri atau ke kanan seperti membaca buku sungguhan!</p>
            
            <h4 style="margin-top: 15px; margin-bottom: 5px;"><i class="ph ph-pencil-simple"></i> Interaksi Coba Sendiri</h4>
            <p>Di beberapa bab, kamu akan menemukan kotak berwarna oranye berisi tugas ringan. Jangan dilewati ya, ini akan membantu menguji pemahamanmu!</p>
            
            <div class="page-footer"><span></span><span>ii</span></div>
        </div>
    </div>
    `,
    
    // Page 3: Kata Pengantar (iii)
    `
    <div class="page">
        <div class="page-content">
            <h1>Kata Pengantar</h1>
            <p>Puji syukur kami panjatkan atas selesainya penyusunan E-Book Teks Berita ini. E-book ini disusun sebagai bahan belajar mandiri bagi murid kelas XI (Fase F) pada mata pelajaran Bahasa Indonesia di SMA Muhammadiyah 2 Yogyakarta, sebagai pendamping pembelajaran berbasis proyek (Project Based Learning) dengan prinsip pembelajaran mendalam yang berkesadaran, bermakna, dan menggembirakan.</p>
            <p>Isi e-book disusun runtut: mengenal teks berita, memahami unsur ADIKSIMBA dan strukturnya, menguasai kaidah kebahasaan, membedakan fakta dan opini, menyusun naskah berita, hingga menyajikannya dalam bentuk vlog berita. Di sejumlah bab tersedia kotak Coba Sendiri dan Tugas Pendalaman agar kamu langsung berlatih, bukan hanya membaca.</p>
            <p>Di tengah derasnya arus informasi, kemampuan menyampaikan dan menilai berita secara akurat, objektif, dan beretika menjadi bekal penting. Kami berharap e-book ini membantumu menjadi penyampai dan penerima informasi yang cerdas serta bertanggung jawab.</p>
            <p>Kritik dan saran untuk penyempurnaan e-book ini sangat kami harapkan. Selamat belajar dan berkarya.</p>
            <br>
            <p style="text-align: right;">Yogyakarta, 2026<br><strong>Penyusun</strong></p>
            <div class="page-footer"><span></span><span>iii</span></div>
        </div>
    </div>
    `,
    
    // Page 4: Daftar Isi (iv)
    `
    <div class="page">
        <div class="page-content">
            <h1>Daftar Isi</h1>
            <ul style="list-style: none; line-height: 1.5; padding: 0;">
                <li style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span>Petunjuk Penggunaan</span> <span>ii</span></li>
                <li style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span>Kata Pengantar</span> <span>iii</span></li>
                <li style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span>Daftar Isi</span> <span>iv</span></li>
                <li style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span><strong>Pemantik</strong></span> <span>v</span></li>
                <li style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span><strong>BAB 1</strong> Mengenal Teks Berita</span> <span>1</span></li>
                <li style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span><strong>BAB 2</strong> Unsur Berita: ADIKSIMBA</span> <span>3</span></li>
                <li style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span><strong>BAB 3</strong> Struktur Teks Berita</span> <span>5</span></li>
                <li style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span><strong>BAB 4</strong> Kaidah Kebahasaan Teks Berita</span> <span>7</span></li>
                <li style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span><strong>BAB 5</strong> Fakta, Opini, dan Kebenaran Informasi</span> <span>9</span></li>
                <li style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span><strong>BAB 6</strong> Langkah Menyusun Naskah Berita</span> <span>10</span></li>
                <li style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span><strong>BAB 7</strong> Menyajikan Berita dalam Bentuk Vlog</span> <span>12</span></li>
                <li style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span><strong>BAB 8</strong> Latihan dan Refleksi</span> <span>14</span></li>
                <li style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span>Penutup dan Daftar Pustaka</span> <span>16</span></li>
            </ul>
            <div class="page-footer"><span></span><span>iv</span></div>
        </div>
    </div>
    `,
    
    // Page 5: Pemantik (v)
    `
    <div class="page">
        <div class="page-content" style="padding: 20px;">
            <h1 style="border:none; margin-bottom:10px; font-size:1.5rem; text-align:center; color: var(--primary-color);">Pemantik: Yuk, Simak Kabar Berikut!</h1>
            <p style="text-align:center; margin-bottom: 20px; font-size: 0.9rem; color: #4a5568;">
                Perhatikan kedua bentuk berita di bawah ini. Apa informasi utama yang kamu tangkap dari keduanya?
            </p>
            
            <div style="margin-bottom: 25px;">
                <p style="font-weight: 600; margin-bottom: 10px; border-left: 3px solid #e53e3e; padding-left: 10px;">1. Video Berita</p>
                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); background-color: #000;">
                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/DUeQPtwYPCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <a href="https://youtu.be/DUeQPtwYPCk?si=f97usXzxOz4MEgW-" target="_blank" style="display: inline-flex; align-items: center; gap: 5px; margin-top: 10px; font-size: 0.85rem; color: #e53e3e; text-decoration: none; font-weight: bold;">
                    <i class="ph ph-arrow-square-out"></i> Buka di YouTube
                </a>
            </div>
            
            <div style="margin-bottom: 15px;">
                <p style="font-weight: 600; margin-bottom: 10px; border-left: 3px solid #38a169; padding-left: 10px;">2. Teks Berita</p>
                <div style="background-color: #f7fafc; padding: 15px; border-radius: 8px; font-size: 0.9rem;">
                    <h3 style="text-align: center; margin-bottom: 10px;">Indonesia Gempur Pertahanan Thailand</h3>
                    <p style="margin-bottom: 8px;"><strong>Jakarta, CNN Indonesia</strong> -- Timnas Indonesia menggempur Thailand selama babak pertama, tetapi belum bisa mencetak gol pada final FIFA ASEAN Cup 2026, Senin (5/10).</p>
                    <p style="margin-bottom: 8px;">Thailand langsung menguasai permainan. Pertahanan Indonesia dikepung. Barisan pertahanan Garuda tidak panik. Serangan War Elephant pun dengan mudah dipatahkan.</p>
                    <p style="margin-bottom: 0;">Dominasi Thailand itu tak bertahan lima menit. Setelahnya giliran Kevin Diks dan kawan-kawan menguasai permainan. Serangan demi serangan dibangun dan membuat bek Thailand keteteran.</p>
                </div>
            </div>
            
            <div class="block-alert warning" style="margin-top: 15px;">
                <div class="block-title">Mari Berdiskusi</div>
                1. Berdasarkan video dan teks berita di atas, informasi utama apa yang sedang disampaikan?<br><br>
                2. Menurutmu, apa perbedaan paling mencolok saat menerima informasi melalui tontonan video berita dibandingkan dengan sekadar membaca teks?
            </div>
            
            <div class="page-footer"><span>Pemantik</span><span>v</span></div>
        </div>
    </div>
    `,
    
    // Page 6: BAB 1 (p1)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 1: Mengenal Teks Berita</h1>
            <p>Dari mana kamu biasanya mendapat kabar tentang peristiwa di sekitarmu: media sosial, televisi, atau grup percakapan? Tidak semua kabar layak dipercaya. Bab ini mengajakmu mengenal teks berita sebagai sumber informasi yang bisa dipertanggungjawabkan.</p>
            
            <h3>A. Pengertian Teks Berita</h3>
            <p><strong>Teks berita</strong> adalah teks yang menyampaikan informasi tentang peristiwa atau keadaan yang <strong>baru terjadi (aktual)</strong> dan <strong>benar-benar ada (faktual)</strong> kepada khalayak melalui media, misalnya surat kabar, laman daring, televisi, radio, dan video di media digital.</p>
            
            <h3>B. Fungsi Teks Berita</h3>
            <ul style="margin-left: 20px; margin-bottom: 12px;">
                <li><strong>Menginformasikan:</strong> memberi tahu masyarakat tentang apa yang terjadi.</li>
                <li><strong>Mendidik:</strong> menambah wawasan dan kepekaan terhadap persoalan di sekitar.</li>
                <li><strong>Mengawasi:</strong> membantu masyarakat memantau keadaan sosial dan kebijakan.</li>
            </ul>
            
            <div class="block-alert tip">
                <div class="block-title">Tahukah Kamu?</div>
                Wartawan menilai layak tidaknya sebuah peristiwa menjadi berita dengan memakai nilai berita, antara lain kebaruan, kedekatan dengan pembaca, dampak yang ditimbulkan, ketokohan, dan keunikan peristiwa.
            </div>
            
            <div class="page-footer"><span>BAB 1 Mengenal Teks Berita</span><span>1</span></div>
        </div>
    </div>
    `,
    
    // Page 5: BAB 1 Lanjutan (p2)
    `
    <div class="page">
        <div class="page-content">
            <h3>C. Ciri-Ciri Teks Berita</h3>
            <div class="table-wrapper">
                <table>
                    <tr><th>Ciri</th><th>Penjelasan</th></tr>
                    <tr><td>Aktual</td><td>Mengenai peristiwa yang baru atau masih hangat dibicarakan.</td></tr>
                    <tr><td>Faktual</td><td>Berdasar kenyataan yang dapat dibuktikan, bukan rekaan.</td></tr>
                    <tr><td>Objektif</td><td>Disampaikan apa adanya, tanpa dicampuri pendapat pribadi penulis.</td></tr>
                    <tr><td>Akurat</td><td>Data, nama, waktu, dan tempat ditulis dengan tepat.</td></tr>
                    <tr><td>Penting & Menarik</td><td>Bermanfaat atau layak diketahui banyak orang.</td></tr>
                </table>
            </div>
            
            <div class="block-alert warning">
                <div class="block-title">Coba Sendiri</div>
                Sebutkan tiga sumber tempat kamu biasa memperoleh kabar. Menurutmu, mana yang paling dapat dipercaya, dan mengapa?
            </div>
            
            <h3>D. Tugas Pendalaman</h3>
            <p style="font-size: 0.9em;">Kerjakan tugas ringan berikut di buku tulis atau lembar terpisah (±10-15 menit).</p>
            <div class="essay-question">
                <p>1. Cari <strong>satu berita terbaru</strong> dari media yang kredibel. Catat judul, sumber, dan tanggal terbitnya.</p>
                <button class="btn-jawab" onclick="window.toggleAnswer(this)"><i class="ph ph-pencil-simple"></i> Jawab</button>
                <div class="answer-box">
                    <textarea id="bab1-tugas1" placeholder="Ketik jawaban..."></textarea>
                    <button class="btn-simpan" onclick="window.saveAnswer('bab1-tugas1', this)"><i class="ph ph-floppy-disk"></i> Simpan</button>
                </div>
            </div>
            <div class="essay-question">
                <p>2. Lengkapi tabel berikut berdasarkan berita yang kamu pilih.</p>
                <button class="btn-jawab" onclick="window.toggleAnswer(this)"><i class="ph ph-table"></i> Isi Tabel ADIKSIMBA</button>
                <div class="answer-box">
                    <div class="table-wrapper" style="margin: 10px 0;">
                        <table>
                            <tr><th>Unsur Berita</th><th>Penjelasan / Kutipan Teks</th></tr>
                            <tr><td>Apa (Peristiwa yang terjadi)</td><td style="padding: 0;"><textarea id="bab1-tugas2-apa" class="extra-input" style="width: 100%; border: none; background: transparent; resize: vertical; min-height: 40px; padding: 8px; outline: none;" placeholder="..."></textarea></td></tr>
                            <tr><td>Di mana (Lokasi kejadian)</td><td style="padding: 0;"><textarea id="bab1-tugas2-dimana" class="extra-input" style="width: 100%; border: none; background: transparent; resize: vertical; min-height: 40px; padding: 8px; outline: none;" placeholder="..."></textarea></td></tr>
                            <tr><td>Kapan (Waktu kejadian)</td><td style="padding: 0;"><textarea id="bab1-tugas2-kapan" class="extra-input" style="width: 100%; border: none; background: transparent; resize: vertical; min-height: 40px; padding: 8px; outline: none;" placeholder="..."></textarea></td></tr>
                            <tr><td>Siapa (Pihak yang terlibat)</td><td style="padding: 0;"><textarea id="bab1-tugas2-siapa" class="extra-input" style="width: 100%; border: none; background: transparent; resize: vertical; min-height: 40px; padding: 8px; outline: none;" placeholder="..."></textarea></td></tr>
                            <tr><td>Mengapa (Alasan/Sebab)</td><td style="padding: 0;"><textarea id="bab1-tugas2-mengapa" class="extra-input" style="width: 100%; border: none; background: transparent; resize: vertical; min-height: 40px; padding: 8px; outline: none;" placeholder="..."></textarea></td></tr>
                            <tr><td>Bagaimana (Proses kejadian)</td><td style="padding: 0;"><textarea id="bab1-tugas2-bagaimana" class="extra-input" style="width: 100%; border: none; background: transparent; resize: vertical; min-height: 40px; padding: 8px; outline: none;" placeholder="..."></textarea></td></tr>
                        </table>
                    </div>
                    <button class="btn-simpan" onclick="window.saveAnswer('bab1-tugas2-dummy', this)"><i class="ph ph-floppy-disk"></i> Simpan Tabel</button>
                </div>
            </div>
            
            <div class="essay-question">
                <p style="margin-top: 10px; margin-bottom: 5px;">3. Tulis 2-3 kalimat mengapa teks itu berita, bukan opini.</p>
                <button class="btn-jawab" onclick="window.toggleAnswer(this)"><i class="ph ph-pencil-simple"></i> Jawab</button>
                <div class="answer-box">
                    <textarea id="bab1-tugas2" placeholder="Ketik analisis untuk no 3..."></textarea>
                    <button class="btn-simpan" onclick="window.saveAnswer('bab1-tugas2', this)"><i class="ph ph-floppy-disk"></i> Simpan Analisis</button>
                </div>
            </div>
            
            <div class="page-footer"><span>BAB 1 Mengenal Teks Berita</span><span>2</span></div>
        </div>
    </div>
    `,
    
    // Page 6: BAB 2 (p3)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 2: Unsur Berita: ADIKSIMBA</h1>
            <p>Berita yang baik menjawab pertanyaan-pertanyaan dasar pembacanya. Dalam bahasa Indonesia, enam pertanyaan itu disingkat <strong>ADIKSIMBA</strong>. Dalam bahasa Inggris dikenal sebagai 5W + 1H.</p>
            
            <h3>A. Enam Unsur Berita</h3>
            <div class="table-wrapper">
                <table>
                    <tr><th>Unsur</th><th>Pertanyaan bantu</th><th>Yang dicari</th><th>5W+1H</th></tr>
                    <tr><td><strong>A</strong>pa</td><td>Peristiwa apa yang terjadi?</td><td>Kejadian utama</td><td>What</td></tr>
                    <tr><td><strong>Di</strong> mana</td><td>Di mana kejadiannya?</td><td>Tempat</td><td>Where</td></tr>
                    <tr><td><strong>K</strong>apan</td><td>Kapan kejadiannya?</td><td>Waktu</td><td>When</td></tr>
                    <tr><td><strong>Si</strong>apa</td><td>Siapa yang terlibat?</td><td>Pelaku/tokoh</td><td>Who</td></tr>
                    <tr><td><strong>M</strong>engapa</td><td>Apa penyebabnya?</td><td>Sebab/latar belakang</td><td>Why</td></tr>
                    <tr><td><strong>Ba</strong>gaimana</td><td>Bagaimana prosesnya?</td><td>Kronologi/cara</td><td>How</td></tr>
                </table>
            </div>
            
            <div class="block-alert" style="border-left-color: #dd6b20; background-color: #fffaf0;">
                <div class="block-title" style="color: #dd6b20;">Penting</div>
                Contoh berita di e-book ini bersifat fiktif dan dibuat untuk latihan. Nama sekolah, tokoh, dan peristiwanya tidak merujuk pada kejadian atau orang yang sebenarnya.
            </div>
            
            <div class="page-footer"><span>BAB 2 Unsur Berita</span><span>3</span></div>
        </div>
    </div>
    `,
    
    // Page 7: BAB 2 Lanjutan (p4)
    `
    <div class="page">
        <div class="page-content">
            <h3>B. Contoh Berita dan Pembedahan</h3>
            <p><strong>Class Meeting SMA Nusantara Jaya Dibuka, 600 Siswa Ikuti Enam Cabang Lomba</strong></p>
            <p>SMA Nusantara Jaya membuka kegiatan class meeting di lapangan sekolah pada Senin (21/9/2026). Kegiatan yang diikuti sekitar 600 siswa kelas X dan XI itu digelar untuk mengisi waktu menjelang pembagian rapor semester ganjil.</p>
            <p>"Kami ingin siswa mengisi waktu dengan kegiatan positif," kata Kepala SMA, Ratna Wulandari. Ketua OSIS, Aditya Pratama, mengatakan bahwa panitia membentuk 18 tim. Setelah upacara pembukaan selesai, para siswa mengikuti pertandingan pertama. Enam cabang yang dilombakan ialah futsal, bola voli, tarik tambang, estafet, cerdas cermat, dan lomba poster.</p>
            <p>Ratna berharap kegiatan ini mempererat kebersamaan. Class meeting berlangsung hingga Jumat (25/9) dan ditutup dengan pengumuman juara.</p>
            
            <div class="table-wrapper">
                <table>
                    <tr><th>Unsur</th><th>Informasi dalam berita</th></tr>
                    <tr><td>Apa</td><td>Pembukaan class meeting dengan enam cabang lomba</td></tr>
                    <tr><td>Di mana</td><td>Lapangan SMA Nusantara Jaya</td></tr>
                    <tr><td>Kapan</td><td>Senin, 21 September 2026 (sampai Jumat)</td></tr>
                    <tr><td>Siapa</td><td>Kepala sekolah, Ketua OSIS, 600 siswa</td></tr>
                    <tr><td>Mengapa</td><td>Mengisi waktu menjelang pembagian rapor</td></tr>
                    <tr><td>Bagaimana</td><td>Dibuka dengan upacara, lalu siswa bertanding, ditutup pengumuman</td></tr>
                </table>
            </div>
            
            <div class="page-footer"><span>BAB 2 Unsur Berita</span><span>4</span></div>
        </div>
    </div>
    `,
    
    // Page 8: BAB 3 (p5)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 3: Struktur Teks Berita</h1>
            <p>Seperti bangunan, berita punya kerangka. Kerangka ini membantu pembaca menangkap inti peristiwa dengan cepat, bahkan jika hanya sempat membaca paragraf pertama.</p>
            
            <h3>A. Empat Bagian Teks Berita</h3>
            <div class="block-alert tip" style="border-left-color: #38a169; background-color: #e6fffa;">
                <div class="block-title" style="color: #2c7a7b;">JUDUL</div>
                Kepala berita yang ringkas, jelas, dan menarik. Judul harus mencerminkan isi berita dan tidak menyesatkan.
            </div>
            
            <div class="block-alert tip" style="border-left-color: #e53e3e; background-color: #fff5f5;">
                <div class="block-title" style="color: #c53030;">TERAS BERITA (LEAD)</div>
                Paragraf pembuka yang memuat informasi paling penting, biasanya unsur apa, siapa, kapan, dan di mana.
            </div>
            
            <div class="block-alert tip" style="border-left-color: #805ad5; background-color: #faf5ff;">
                <div class="block-title" style="color: #6b46c1;">TUBUH BERITA</div>
                Bagian isi yang menguraikan peristiwa lebih rinci: penyebab, kronologi, keterangan narasumber, dan data pendukung.
            </div>
            
            <div class="block-alert tip" style="border-left-color: #3182ce; background-color: #ebf8ff;">
                <div class="block-title" style="color: #2b6cb0;">EKOR BERITA (PENUTUP)</div>
                Bagian akhir yang berisi tindak lanjut, harapan, atau informasi tambahan. Bagian ini tidak selalu ada.
            </div>
            
            <div class="page-footer"><span>BAB 3 Struktur Teks Berita</span><span>5</span></div>
        </div>
    </div>
    `,
    
    // Page 9: BAB 3 Lanjutan (p6)
    `
    <div class="page">
        <div class="page-content">
            <h3>B. Piramida Terbalik</h3>
            <p>Banyak berita disusun dengan pola <strong>piramida terbalik</strong>: informasi terpenting diletakkan paling atas, lalu makin ke bawah makin bersifat pelengkap. Jika berita perlu dipersingkat, redaktur cukup memotong bagian bawah tanpa menghilangkan inti.</p>
            
            <h3>C. Struktur pada Contoh Berita Bab 2</h3>
            <div class="table-wrapper">
                <table>
                    <tr><th>Bagian</th><th>Kutipan atau isi</th></tr>
                    <tr><td>Judul</td><td>Class Meeting SMA Nusantara Jaya Dibuka, 600 Siswa Ikuti...</td></tr>
                    <tr><td>Teras berita</td><td>SMA Nusantara Jaya membuka kegiatan class meeting di lapangan sekolah pada Senin (21/9/2026) ...</td></tr>
                    <tr><td>Tubuh berita</td><td>Kutipan Kepala Sekolah, keterangan Ketua OSIS, urutan kegiatan...</td></tr>
                    <tr><td>Ekor berita</td><td>Ratna berharap kegiatan ini mempererat kebersamaan ... ditutup dengan pengumuman juara</td></tr>
                </table>
            </div>
            
            <div class="block-alert warning">
                <div class="block-title">Coba Sendiri</div>
                Menurutmu, apakah judul contoh di atas sudah mencerminkan isi berita? Tulis alasannya dalam satu kalimat.
            </div>
            
            <div class="essay-question" style="margin-top:10px;">
                <p style="margin-bottom: 10px;"><strong>Tugas:</strong> Susunlah lima kalimat acak berikut agar membentuk struktur teks berita yang benar (Piramida Terbalik):</p>
                <div style="background-color: #f7fafc; border: 1px solid #cbd5e0; border-radius: 6px; padding: 12px 15px; margin-bottom: 15px; font-size: 0.9em; line-height: 1.5; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);">
                    <ol style="margin: 0; padding-left: 20px;">
                        <li style="margin-bottom: 5px;">Pustakawan Sri mengatakan diskon hingga 50%.</li>
                        <li style="margin-bottom: 5px;">Kegiatan 2 hari.</li>
                        <li style="margin-bottom: 5px;">Bazar Buku Murah Digelar di SMA.</li>
                        <li style="margin-bottom: 5px;">SMA menggelar bazar buku (23/9).</li>
                        <li style="margin-bottom: 0;">Siswa dapat memilih buku fiksi.</li>
                    </ol>
                </div>
                <button class="btn-jawab" onclick="window.toggleAnswer(this)"><i class="ph ph-pencil-simple"></i> Jawab</button>
                <div class="answer-box">
                    <textarea id="bab3-tugas" placeholder="Susunan urutan yang benar..."></textarea>
                    <button class="btn-simpan" onclick="window.saveAnswer('bab3-tugas', this)"><i class="ph ph-floppy-disk"></i> Simpan</button>
                </div>
            </div>
            
            <div class="page-footer"><span>BAB 3 Struktur Teks Berita</span><span>6</span></div>
        </div>
    </div>
    `,
    
    // Page 10: BAB 4 (p7)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 4: Kaidah Kebahasaan</h1>
            <p>Bahasa berita harus lugas, baku, dan jelas. Ada tiga kaidah kebahasaan yang paling menonjol, yaitu kalimat langsung dan tidak langsung, konjungsi kronologis, dan kata kerja mental.</p>
            
            <h3>A. Kalimat Langsung dan Tidak Langsung</h3>
            <p>Berita sering mengutip ucapan narasumber. Kutipan itu dapat ditulis sebagai kalimat langsung atau tidak langsung.</p>
            <div class="table-wrapper">
                <table>
                    <tr><th>Jenis</th><th>Ciri</th><th>Contoh</th></tr>
                    <tr><td>Langsung</td><td>Diapit tanda petik dua; menirukan ucapan asli</td><td>"Kami berharap semua kelas ikut serta," ujar Ketua OSIS.</td></tr>
                    <tr><td>Tidak langsung</td><td>Tanpa tanda petik; biasanya memakai kata bahwa</td><td>Ketua OSIS mengatakan bahwa mereka berharap semua kelas ikut serta.</td></tr>
                </table>
            </div>
            
            <div class="block-alert tip">
                <div class="block-title">Cara Mengubah Kalimat Langsung Menjadi Tidak Langsung</div>
                1. Hilangkan tanda petik dua.<br>2. Tambahkan kata "bahwa".<br>3. Sesuaikan kata ganti (kami menjadi mereka).<br>4. Sesuaikan keterangan waktu (besok menjadi keesokan harinya).
            </div>
            
            <h3>B. Konjungsi Kronologis</h3>
            <p>Kata penghubung yang menunjukkan <strong>urutan waktu</strong> kejadian (sebelum, setelah, kemudian, lalu, akhirnya). Membantu pembaca mengikuti peristiwa dari awal sampai akhir.</p>
            
            <div class="page-footer"><span>BAB 4 Kaidah Kebahasaan</span><span>7</span></div>
        </div>
    </div>
    `,
    
    // Page 11: BAB 4 Lanjutan (p8)
    `
    <div class="page">
        <div class="page-content">
            <h3>C. Kata Kerja Mental</h3>
            <p>Kata kerja mental menyatakan <strong>proses berpikir atau perasaan</strong> yang tidak tampak, misalnya menduga, menilai, menganggap, berharap, menyadari, memperkirakan. Dalam berita, kata kerja ini menandai pandangan narasumber (bukan fakta yang dapat diukur).</p>
            <div class="table-wrapper">
                <table>
                    <tr><th>Kaidah</th><th>Contoh</th></tr>
                    <tr><td>Konjungsi kronologis</td><td><strong>Setelah</strong> rapat usai, panitia membereskan kursi.</td></tr>
                    <tr><td>Kata kerja mental</td><td>Warga <strong>memperkirakan</strong> jalan akan segera diperbaiki.</td></tr>
                </table>
            </div>
            
            <h3>D. Bahasa yang Lugas dan Objektif</h3>
            <ul style="margin-left: 20px; margin-bottom: 12px;">
                <li>Gunakan kata baku dan kalimat efektif.</li>
                <li>Hindari kata bernada menilai dari penulis ("sangat memuaskan", "luar biasa").</li>
                <li>Hindari kata ganti orang pertama (saya, kami) untuk pendapat penulis.</li>
            </ul>
            
            <div class="block-alert warning">
                <div class="block-title">Coba Sendiri</div>
                <ol style="margin-left: 20px; padding: 0; margin-bottom: 0;">
                    <li style="margin-bottom: 8px;">Ubah kalimat langsung berikut menjadi tidak langsung:<br><em>"Saya akan mengumpulkan laporan besok," kata wali kelas.</em></li>
                    <li>Sebutkan konjungsi kronologis pada kalimat berikut:<br><em>"Setelah pengumuman dibacakan, siswa bersorak gembira."</em></li>
                </ol>
            </div>
            
            <div class="essay-question">
                <button class="btn-jawab" onclick="window.toggleAnswer(this)"><i class="ph ph-pencil-simple"></i> Jawab</button>
                <div class="answer-box">
                    <textarea id="bab4-coba" placeholder="Tulis jawabanmu..."></textarea>
                    <button class="btn-simpan" onclick="window.saveAnswer('bab4-coba', this)"><i class="ph ph-floppy-disk"></i> Simpan</button>
                </div>
            </div>
            
            <div class="page-footer"><span>BAB 4 Kaidah Kebahasaan</span><span>8</span></div>
        </div>
    </div>
    `,
    
    // Page 12: BAB 5 (p9)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 5: Fakta, Opini, dan Kebenaran</h1>
            <p>Berita yang baik memisahkan dengan jelas antara <strong>fakta</strong> dan <strong>opini</strong>. Kepekaan ini juga membantumu menyaring kabar yang beredar di media sosial.</p>
            
            <h3>A. Membedakan Fakta dan Opini</h3>
            <div class="table-wrapper">
                <table>
                    <tr><th>Jenis</th><th>Ciri</th><th>Contoh</th></tr>
                    <tr><td>Fakta</td><td>Dapat dibuktikan dengan data, angka, nama, tanggal</td><td>Lomba poster diikuti 18 tim pada Senin (21/9).</td></tr>
                    <tr><td>Opini</td><td>Pendapat atau penilaian seseorang</td><td>Lomba poster terlihat sangat menarik.</td></tr>
                </table>
            </div>
            
            <div class="block-alert tip">
                <div class="block-title">Penanda Kalimat Opini:</div>
                • Kata kerja mental: menduga, menilai, menganggap.<br>
                • Kata sifat bernilai: bagus, buruk, menarik.<br>
                • Kata kemungkinan: seharusnya, sebaiknya, barangkali.<br>
                <em>Catatan: Kalimat opini boleh muncul jika jelas milik narasumber.</em>
            </div>
            
            <h3>B. Lima Langkah Memeriksa Informasi</h3>
            <ol style="margin-left: 20px; margin-bottom: 12px;">
                <li><strong>Periksa sumbernya.</strong> Apakah kredibel?</li>
                <li><strong>Periksa tanggalnya.</strong> Berita lama sering didaur ulang.</li>
                <li><strong>Baca seluruh isi,</strong> jangan hanya judul.</li>
                <li><strong>Bandingkan</strong> dengan sumber lain.</li>
                <li><strong>Periksa foto/video</strong> (awas manipulasi).</li>
            </ol>
            
            <div style="background-color: #ebf8ff; border-left: 4px solid #3182ce; border-radius: 4px 8px 8px 4px; padding: 20px; margin-top: 25px; margin-bottom: 10px; text-align: center;">
                <p style="color: #2b6cb0; font-weight: 600; margin-bottom: 15px; font-size: 0.95rem;">Selamat kamu sudah berhasil menyelesaikan materi sampai pada BAB 5. Sekarang saatnya menguji pemahamanmu melalui kuis interaktif berikut.</p>
                <a href="https://wordwall.net/id/resource/120606698?wwmethod=link" target="_blank" style="display: inline-block; background-color: #3182ce; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 2px 4px rgba(49, 130, 206, 0.3);">
                    <i class="ph ph-game-controller" style="margin-right: 5px; font-size: 1.2em; vertical-align: middle;"></i> Mulai Kuis Interaktif
                </a>
            </div>
            
            <div class="page-footer"><span>BAB 5 Fakta & Opini</span><span>9</span></div>
        </div>
    </div>
    `,
    
    // Page 13: BAB 6 (p10)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 6: Langkah Menyusun Naskah</h1>
            <p>Sekarang saatnya menjadi reporter. Naskah yang baik lahir dari data yang lengkap.</p>
            
            <h3>A. Wawancara Sederhana</h3>
            <div class="table-wrapper">
                <table>
                    <tr><th>Tahap</th><th>Yang dilakukan</th></tr>
                    <tr><td>Persiapan</td><td>Tentukan narasumber, siapkan 5-7 pertanyaan (ADIKSIMBA), siapkan alat rekam.</td></tr>
                    <tr><td>Pelaksanaan</td><td>Beri salam, ajukan pertanyaan runtut, catat kutipan penting.</td></tr>
                    <tr><td>Sesudah</td><td>Ucapkan terima kasih, konfirmasi kutipan.</td></tr>
                </table>
            </div>
            
            <h3>B. Tujuh Langkah Menulis Naskah</h3>
            <ol style="margin-left: 20px; font-size: 0.9em; line-height: 1.4;">
                <li><strong>Pilih Topik Aktual:</strong> Peristiwa baru di lingkunganmu.</li>
                <li><strong>Kumpulkan Data:</strong> Lakukan wawancara/observasi secara teliti.</li>
                <li><strong>Rangkum Fakta:</strong> Pisahkan fakta dari pendapat pribadi.</li>
                <li><strong>Tulis Judul dan Teras:</strong> Buat ringkas (Piramida Terbalik).</li>
                <li><strong>Kembangkan Tubuh:</strong> Uraikan kronologi dan kutipan narasumber.</li>
                <li><strong>Periksa Kaidah Kebahasaan:</strong> Gunakan kalimat langsung/tidak langsung yang baku.</li>
                <li><strong>Revisi:</strong> Minta masukan teman sebelum naskah jadi.</li>
            </ol>
            
            <div class="page-footer"><span>BAB 6 Menyusun Naskah</span><span>10</span></div>
        </div>
    </div>
    `,
    
    // Page 14: BAB 6 Lanjutan & AI (p11)
    `
    <div class="page">
        <div class="page-content">
            <h3>C. Kerangka Naskah</h3>
            <p>Sebelum menulis penuh, isilah kerangka berikut:</p>
            <div class="table-wrapper">
                <table style="font-size: 0.85em;">
                    <tr><td width="35%">Topik berita</td><td></td></tr>
                    <tr><td>Narasumber</td><td></td></tr>
                    <tr><td>Apa dan di mana</td><td></td></tr>
                    <tr><td>Kapan dan siapa</td><td></td></tr>
                    <tr><td>Mengapa & bagaimana</td><td></td></tr>
                </table>
            </div>
            
            <h3>D. Memanfaatkan AI sebagai Teman Berpikir</h3>
            <p>AI dapat membantumu menyusun pertanyaan wawancara atau memeriksa naskahmu. Gunakan <em>prompt</em> yang spesifik.</p>
            <div class="table-wrapper">
                <table style="font-size: 0.85em;">
                    <tr><th>Kebutuhan</th><th>Contoh Prompt</th></tr>
                    <tr><td>Menyusun pertanyaan</td><td>"Buatkan 6 pertanyaan wawancara untuk [narasumber] tentang [peristiwa], mencakup 5W+1H."</td></tr>
                    <tr><td>Memeriksa naskah</td><td>"Ini naskah beritaku: [naskah]. Tunjukkan kalimat yang terkesan opini penulis dan beri saran perbaikannya."</td></tr>
                </table>
            </div>
            
            <div class="block-alert warning">
                <div class="block-title">Penting</div>
                Jangan meminta AI mengarang peristiwa atau kutipan narasumber (halusinasi). Berita harus berdasarkan kejadian nyata!
            </div>
            
            <div class="page-footer"><span>BAB 6 Menyusun Naskah</span><span>11</span></div>
        </div>
    </div>
    `,
    
    // Page 15: BAB 7 (p12)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 7: Menyajikan Vlog Berita</h1>
            <p>Naskah yang sudah jadi dapat disajikan sebagai vlog berita (video blog). Selain menarik, vlog melatih keterampilan berbicara, kerja sama, dan literasi digital.</p>
            
            <h3>A. Tiga Bentuk Penyajian</h3>
            <ul style="margin-left: 20px; font-size: 0.9em; margin-bottom: 12px;">
                <li><strong>Monolog presenter:</strong> Bicara langsung ke kamera.</li>
                <li><strong>Wawancara dialogis:</strong> Mewawancarai narasumber langsung di video.</li>
                <li><strong>Voiceover:</strong> Suara narasi mengiringi cuplikan video kejadian.</li>
            </ul>
            
            <h3>B. Pembagian Peran Kelompok</h3>
            <div class="table-wrapper">
                <table style="font-size: 0.8em;">
                    <tr><th>Peran</th><th>Tanggung jawab utama</th></tr>
                    <tr><td>Penulis Naskah</td><td>Menyusun naskah berita</td></tr>
                    <tr><td>Periset Fakta</td><td>Memastikan akurasi data</td></tr>
                    <tr><td>Juru Kamera</td><td>Mengambil video</td></tr>
                    <tr><td>Presenter</td><td>Membacakan berita</td></tr>
                    <tr><td>Editor</td><td>Menyunting video menjadi produk akhir</td></tr>
                </table>
            </div>
            
            <h3>C. Etika Vlog Berita</h3>
            <ul style="margin-left: 20px; font-size: 0.9em;">
                <li>Minta izin sebelum merekam wajah seseorang.</li>
                <li>Cantumkan sumber (kredit) jika memakai musik/foto orang lain.</li>
                <li>Hindari penyebaran hoaks dan SARA.</li>
            </ul>
            
            <div class="page-footer"><span>BAB 7 Menyajikan Vlog</span><span>12</span></div>
        </div>
    </div>
    `,
    
    // Page 18: BAB 8 Latihan & Refleksi (p13)
    `
    <div class="page">
        <div class="page-content" style="text-align: center; display: flex; flex-direction: column; justify-content: center; height: 100%;">
            <h1 style="border: none; margin-bottom: 5px; color: var(--primary-color);">BAB 8</h1>
            <h2 style="margin-bottom: 30px; font-size: 1.8rem; color: var(--primary-color);">Latihan & Refleksi</h2>
            
            <div style="font-size: 4rem; color: var(--primary-color); margin-bottom: 20px;">
                <i class="ph ph-exam"></i>
            </div>
            
            <p style="margin-bottom: 30px; font-size: 0.95rem; line-height: 1.6; text-align: justify;">
                Kamu telah menyelesaikan semua materi tentang Teks Berita! Sekarang saatnya menguji pemahamanmu dan melakukan refleksi. Semua soal pilihan ganda, uraian, dan refleksi telah disatukan di dalam Lembar Kerja.
            </p>
            
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSewgQyrVvpRcjMKVT1Hl6U_KO9bCz-2GS5HwCn5LU132ZQsOg/viewform?usp=sharing&ouid=107196496726358442623" target="_blank" style="display: inline-block; background-color: #d69e2e; color: white; padding: 12px 24px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 1.1rem; box-shadow: 0 4px 6px rgba(214, 158, 46, 0.4); margin: 0 auto; transition: transform 0.2s;">
                Mulai Kerjakan Evaluasi <i class="ph ph-arrow-square-out" style="vertical-align: middle;"></i>
            </a>
            <p style="margin-top: 10px; font-size: 0.75rem; color: #a0aec0; font-style: italic;">*Akan membuka tab/aplikasi baru</p>
            
            <div class="page-footer"><span>BAB 8 Latihan & Refleksi</span><span>13</span></div>
        </div>
    </div>
    `,
    
    // Page 19: BAB 8 Latihan & Refleksi - Selesai (p14)
    `
    <div class="page">
        <div class="page-content" style="text-align: center; display: flex; flex-direction: column; justify-content: center; height: 100%;">
            
            <div style="font-size: 4.5rem; color: #38a169; margin-bottom: 20px;">
                <i class="ph ph-check-circle"></i>
            </div>
            
            <h2 style="margin-bottom: 20px; font-size: 1.4rem; color: #2d3748;">Sudah Selesai Mengerjakan?</h2>
            
            <p style="margin-bottom: 20px; font-size: 0.95rem; line-height: 1.6; text-align: justify;">
                Pastikan kamu sudah menekan tombol <strong>Kirim (Submit)</strong> di Google Form sebelum melanjutkan ya!
            </p>
            
            <p style="margin-bottom: 30px; font-size: 0.95rem; line-height: 1.6; text-align: justify;">
                Jika sudah, kamu boleh membalik halaman ini untuk membaca salam penutup.
            </p>
            
            <div class="page-footer"><span>BAB 8 Latihan & Refleksi</span><span>14</span></div>
        </div>
    </div>
    `,
    
    // Page 20: Penutup & Daftar Pustaka (p17)
    `
    <div class="page">
        <div class="page-content">
            <h1 style="border:none; margin-bottom:5px; font-size:1.5rem;">Penutup</h1>
            <p>Menjadi penyampai berita berarti memegang tanggung jawab: memastikan setiap informasi benar, lengkap, dan disajikan dengan santun. Teruslah mengamati lingkunganmu, berpikir kritis sebelum percaya, dan berani menyampaikan kabar yang bermanfaat.</p>
            
            <h1 style="border:none; margin-top:30px; margin-bottom:5px; font-size:1.5rem;">Daftar Pustaka</h1>
            <p style="font-size: 0.85em; line-height: 1.4;">
                Marwati, H., & Waskitaningtyas, K. (2021). <em>Cerdas Cergas Berbahasa dan Bersastra Indonesia untuk SMA/SMK Kelas XI</em>. Jakarta: Kemendikbudristek.<br><br>
                Kementerian Pendidikan Dasar dan Menengah RI. (2025). Panduan Pembelajaran dan Asesmen.<br><br>
                Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI. Capaian Pembelajaran Bahasa Indonesia Fase F.
            </p>
            
            <p style="text-align: center; font-style: italic; margin-top: 30px; color: var(--accent-color);">— Selamat belajar dan berkarya —</p>
            
            <div class="page-footer"><span>Penutup</span><span>18</span></div>
        </div>
    </div>
    `,
    
    // Page 23: Catatan (p18)
    `
    <div class="page">
        <div class="page-content">
            <h1>Catatan Tambahan</h1>
            <p>Gunakan halaman ini untuk menuliskan intisari atau ide-ide penting yang kamu dapatkan selama mempelajari E-Book Teks Berita ini.</p>
            <div class="essay-question" style="margin-top: 20px; height: 100%;">
                <textarea id="catatan-tambahan" placeholder="Tulis catatanmu di sini..." style="height: 350px; width: 100%;"></textarea>
                <button class="btn-simpan" style="margin-top: 10px; width: 100%;" onclick="window.saveAnswer('catatan-tambahan', this)"><i class="ph ph-floppy-disk"></i> Simpan Catatan</button>
            </div>
            <div class="page-footer"><span>Catatan</span><span>18</span></div>
        </div>
    </div>
    `,
    
    // Page 24: Inside Back Cover
    `
    <div class="page hard">
        <div class="page-content" style="display: flex; justify-content: center; align-items: center; opacity: 0.1;">
            <i class="ph ph-bookmark-simple" style="font-size: 5rem;"></i>
        </div>
    </div>
    `,
    
    // Page 22: Back Cover
    `
    <div class="page hard back-cover">
        <div class="cover-content" style="background: linear-gradient(135deg, #1a365d 0%, #0f172a 100%);">
            <h2 style="font-family: var(--font-display); color: white; border: none;">TEKS BERITA</h2>
            <p style="color: #cbd5e0; font-style: italic; margin-bottom: 20px;">Menyajikan Informasi yang Faktual, Aktual, dan Menarik</p>
            
            <div style="margin-top: auto; font-size: 0.9rem; color: #a0aec0; text-align: center;">
                <p>E-Book Interaktif<br>Bahasa Indonesia Kelas XI</p>
                <div style="margin-top: 20px;">
                    <i class="ph ph-qr-code" style="font-size: 3rem; color: white;"></i>
                </div>
            </div>
        </div>
    </div>
    `
];
