export default function TailwindCSS() {
  return (
    <div>
      <div>
        <h1 className="border m-4">Belajar Tailwind CSS</h1>
        <button className="bg-blue-500 text-white px-4 py-2 mx-4 rounded shadow-lg">
          Click Me
        </button>
      </div>
      {/* ini untuk menampilkan function spacing  */}
      <div>
        <Spacing/>
      </div>

      {/* ini untuk menampilkan function Typographi  */}
      <div>
        <Typography/>
      </div>

    </div>
  );
}

function Spacing() {
  return (
    <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
      <h2 className="text-lg font-semibold">Card Title</h2>
      <p className="mt-2 text-gray-600">
        Ini adalah contoh penggunaan padding dan margin di Tailwind.
      </p>
    </div>
  );
}

function Typography(){
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-600">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}
