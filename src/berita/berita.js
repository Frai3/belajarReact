import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Berita(props) {
    const {ID} = props
    const KontenBerita=[{
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

    const ListBerita = KontenBerita.map((ItemBerita) =>
    <div key={ItemBerita.id}>
        <h3>{ItemBerita.judul}</h3>
        <p>{ItemBerita.isi}</p>
    </div>
    );

    return(
        <div>
            <h2>Berita Hari Ini</h2>
            <InfoBerita ID={ID}/>
        </div>
    );

    function InfoBerita(props) {
        const {ID} = props
        return(
            <div>
                <p>InfoBerita</p>
                <CheckID ID={ID} />
            </div>
        )
    }

    function CheckID(props) {
        const {ID} = props
        var JudulBerita = []
        var IsiBerita = []
        
        if(ID == "Boruto"){
            JudulBerita.push(KontenBerita[0].judul)
            IsiBerita.push(KontenBerita[0].isi)
            return(
                <div>
                    <div>{JudulBerita}</div>
                    <div>{IsiBerita}</div>
                </div>
            );
        }
        else if(ID == "Sarada"){
            JudulBerita.push(KontenBerita[1].judul)
            IsiBerita.push(KontenBerita[1].isi)
            return(
                <div>
                    <div>{JudulBerita}</div>
                    <div>{IsiBerita}</div>
                </div>          
            );
        }
    }

}

export default Berita;