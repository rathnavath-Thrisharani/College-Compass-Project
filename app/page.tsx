import CollegeList from "@/components/CollegeList";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placementRate: number;
  avgPackage: number;
  description: string;
  website: string | null;
  imageUrl: string | null;
  logoUrl: string | null;
};

async function getColleges(): Promise<College[]> {
  const res = await fetch("http://localhost:3000/api/colleges", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const colleges = await getColleges();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-extrabold text-slate-900 leading-tight">
              Find Your Perfect
              <span className="block text-blue-600">
                Engineering College
              </span>
            </h1>

            <p className="mt-6 text-xl text-slate-600">
              Discover, compare and explore India's top engineering colleges
              with placements, fees, ratings and more.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
                Explore Colleges
              </button>

              <button className="bg-white px-6 py-3 rounded-xl shadow hover:shadow-lg transition">
                Compare Colleges
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.t9wsFitjLQA1fVHDN9HdvQHaFx?pid=Api&P=0&h=180"
              alt="College Campus"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-blue-600">20+</h2>
            <p className="text-gray-600">Top Colleges</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-green-600">10+</h2>
            <p className="text-gray-600">Cities</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-600">4.5+</h2>
            <p className="text-gray-600">Average Rating</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-orange-600">90%</h2>
            <p className="text-gray-600">Placement Success</p>
          </div>
        </div>
      </section>

      {/* College Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-slate-800">
          Explore Colleges
        </h2>

        <CollegeList colleges={colleges} />
      </section>
    </main>
  );
}