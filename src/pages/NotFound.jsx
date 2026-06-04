export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        {/* Status Code */}
        <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">
          404
        </h1>
        
        {/* Pesan Error */}
        <div className="bg-white px-2 text-sm rounded rotate-12 absolute transform -translate-y-12 translate-x-12 inline-block shadow-sm border border-blue-200">
          Halaman Tidak Ditemukan
        </div>

        <h2 className="mt-8 text-3xl font-bold text-gray-800 md:text-4xl">
          Ups! Sepertinya Anda tersesat.
        </h2>
        
        <p className="mt-4 text-gray-500 text-lg">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>

        {/* Tombol Kembali */}
        <a
          href="/"
          className="mt-8 inline-block rounded bg-blue-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}