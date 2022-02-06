import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Berita(props) {
    const { ID } = props
    const KontenBerita = [{
        "id": "Boruto",
        "judul": "Sang Anak Hokage",
        "isi": "Anak hokage ke-7 Naruto Uzumaki yaitu Boruto Uzimaki",
        "gambar": "Boruto.jpg"
    },
    {
        "id": "Sarada",
        "judul": "Anak Sasuke",
        "isi": "Anak Sasuke Uchiha yitu Sarada Uchiha",
        "gambar": "Sarada.jpg"
    },
    {
        "id": "Mitsuki",
        "judul": "Anak Sanin Legendaris",
        "isi": "Anak dari salah satu Sanin Legendaris Orochimari yaitu Mitsuki",
        "gambar": "Mitsuki.jpg"
    },
    {
        "id": "Kawaki",
        "judul": "Cloning Gagal Momoshiki",
        "isi": "Hasil cloning yang digagalkan yaitu Kawaki",
        "gambar": "Kawaki.png"
    }
    ];
    return (
        <div>
            <div className='container'>
                <center>
                    <h1>Berita Hari Ini</h1>
                    <div id="Berita">
                        <div className="IsiBerita">
                            <InfoBerita ID={ID} />
                        </div>
                    </div>
                </center>
            </div>
        </div>
    );

    function InfoBerita(props) {
        const { ID } = props
        var JudulBerita = []
        var IsiBerita = []
        var Gambar = []
        var kode

        if (ID == "Boruto") {
            kode = 0
        }
        else if (ID == "Sarada") {
            kode = 1
        }
        else if (ID == "Mitsuki") {
            kode = 2
        }
        else if (ID == "Kawaki") {
            kode = 3
        }

        JudulBerita.push(KontenBerita[kode].judul)
        IsiBerita.push(KontenBerita[kode].isi)
        Gambar.push(KontenBerita[kode].gambar)

        return (
            <div>
                <img src={Gambar} />
                <h1>{JudulBerita}</h1>
                <div>{IsiBerita}</div>
            </div>
        );

    }

}

export default Berita;