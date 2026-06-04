import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
  /** Deklarasi state **/
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [selectedTag, setSelectedTag] = useState("");

  /*Inisialisasi DataForm*/
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    /*Tambah state lain beserta default value*/
  });

  /*Inisialisasi Handle perubahan nilai input form*/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /** Deklarasi Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const _selectedTag = dataForm.selectedTag.toLowerCase();

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = _selectedTag
      ? framework.tags.includes(_selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Framework Explorer
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Temukan framework terbaik untuk proyek pengembangan perangkat lunak
            Anda berikutnya. Cari berdasarkan nama atau filter berdasarkan
            kategori.
          </p>
        </div>

        {/* Search & Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center max-w-3xl mx-auto">
          {/* Input Search */}
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              name="searchTerm"
              placeholder="Cari nama atau deskripsi framework..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
              onChange={handleChange}
            />
          </div>

          {/* Select Filter */}
          <div className="relative w-full md:w-64">
            <select
              name="selectedTag"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white appearance-none cursor-pointer text-gray-700"
              onChange={handleChange}
            >
              <option value="">Semua Kategori</option>
              {allTags.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            {/* Custom Arrow Icon for Select */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Empty State jika tidak ada data */}
        {filteredFrameworks.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">
              Pencarian tidak menemukan hasil apapun.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("");
              }}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium hover:underline"
            >
              Reset Pencarian
            </button>
          </div>
        )}

        {/* Card Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group"
            >
              {/* Card Header & Content */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-600 px-3 py-1 text-xs font-semibold rounded-md border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-auto pt-5 border-t border-gray-100 flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>
                    Oleh:{" "}
                    <span className="font-semibold text-gray-700">
                      {item.details.developer}
                    </span>
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    {item.details.releaseYear}
                  </span>
                </div>

                <a
                  href={item.details.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-gray-50 hover:bg-blue-600 text-blue-600 hover:text-white font-medium py-2.5 rounded-lg transition-colors duration-200 text-sm border border-transparent hover:border-blue-600"
                >
                  Kunjungi Website Oficial
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
