export default function HelloWorld() {
  const contohData = {
    nama: "Sun Goku",
    nim: "20554040040",
    tanggal: "2002-22-21",
  };
  return (
    <>
      <img src="img/cyberpunk.png" width="100%"/>
      <h1>Hello World</h1>
      <p>Selamat Belajar React Js</p>
      <GretingBinjai />
      <QuoteText />
      <UserCard nama="Hidayatul" nim="2055301055" tanggal="12-03-2026" />
      <UserCard {...contohData} />
    </>
  );
}

function GretingBinjai() {
  return (
    <div>
      <small>Salam Dari binjai</small>
      <small>Salam</small>
    </div>
  );
}

function QuoteText() {
  const text = "Mulutmu Harimaumu";
  const text2 = "Aku ingin jadi macan";
  return (
    <div>
      <hr />
      <p>{text.toLowerCase()}</p>
      <p>{text2.toUpperCase()}</p>
    </div>
  );
}

function UserCard(props) {
  return (
    <div>
      <hr />
      <h3>Nama: {props.nama}</h3>
      <p>NIM: {props.nim}</p>
      <p>Tanggal: {props.tanggal}</p>
    </div>
  );
}
