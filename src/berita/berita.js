import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Berita() {
    const IsiBerita=[{
        "id" : "Boruto",
        "judul": "Sang Anak Hokage",
        "isi": "Anak hokage ke-7 Naruto Uzumaki yaitu Boruto Uzimaki"
    },
    {
        "id" : "Sarada",
        "judul": "Anak Sasuke",
        "isi": "Anak Sasuke Uchiha yitu Sarada Uchiha"
    },
    {
        "id" : "Mitsuki",
        "judul": "Anak Sanin Legendaris",
        "isi": "Anak dari salah satu Sanin Legendaris Orochimari yaitu Mitsuki"
    },
    {
        "id" : "Kawaki",
        "judul": "Cloning Gagal Momoshiki",
        "isi": "Hasil cloning yang digagalkan yaitu Kawaki"
    }
    ];

    const ListBerita = IsiBerita.map((ItemBerita) =>
        <div key={ItemBerita.id}>
            <h3>{ItemBerita.judul}</h3>
            <p>{ItemBerita.isi}</p>
        </div>
    );
    return(
        <div>
            <h2>Berita Hari Ini</h2>
            {ListBerita}
        </div>
    );
}

export default Berita;