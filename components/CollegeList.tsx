"use client";

import { useState } from "react";
import Image from "next/image";

const collegeImages: Record<string, string> = {
  "NIT Warangal": "https://tse3.mm.bing.net/th/id/OIP.t9wsFitjLQA1fVHDN9HdvQHaFx?pid=Api&P=0&h=180",
  "IIT Hyderabad": "https://tse4.mm.bing.net/th/id/OIP.HmYjWjoiiKC1qhim50Em3gHaDq?pid=Api&P=0&h=180",
  "IIIT Hyderabad": "https://tse4.mm.bing.net/th/id/OIP.xvFo4c5zoS8J-c26VMJP-wHaE7?pid=Api&P=0&h=180",
  "BITS Pilani": "https://tse4.mm.bing.net/th/id/OIP.CAqpEwA2SpIVCanmyciX0AHaHa?pid=Api&P=0&h=180",
  "JNTUH": "https://tse4.mm.bing.net/th/id/OIP.KJ5q6UoSknhHBuMgsm-4bgHaDt?pid=Api&P=0&h=180",
  "Osmania University": "https://tse2.mm.bing.net/th/id/OIP.KGCzGdmVU8-CgiNMJ6YkQQHaEX?pid=Api&P=0&h=180",
  "CBIT": "https://tse3.mm.bing.net/th/id/OIP.eCpklgtQyzjLwEAadDP-lQHaE8?pid=Api&P=0&h=180",
  "VNR VJIET": "https://tse2.mm.bing.net/th/id/OIP.nQmp_QUFNSWYpwTDBBZpCgHaEL?pid=Api&P=0&h=180",
  "Vasavi College of Engineering": "https://tse2.mm.bing.net/th/id/OIP.KfIrmfMU9qjS1CvLr1FTEQHaE8?pid=Api&P=0&h=180",
  "Gokaraju Rangaraju Institute of Engineering and Technology": "https://tse3.mm.bing.net/th/id/OIP.If6uU5eP3-VaDMeGTh6V1QHaE7?pid=Api&P=0&h=180",
  "KL University": "https://tse2.mm.bing.net/th/id/OIP.KjlwxJEVZGgL9DwW41qNMgHaEc?pid=Api&P=0&h=180",
  "Andhra University": "https://tse1.mm.bing.net/th/id/OIP.N2TskQivSaYp3TwRP9HDHAHaEA?pid=Api&P=0&h=180",
  "SRM University AP": "https://tse1.mm.bing.net/th/id/OIP.99T8pcNojLhNwTrsFgSEgwHaDv?pid=Api&P=0&h=180",
  "IIT Madras": "https://tse2.mm.bing.net/th/id/OIP.huSKW93AcVOIUDnQAtGsVwHaEO?pid=Api&P=0&h=180",
  "IIT Bombay": "https://tse3.mm.bing.net/th/id/OIP.4hkb8pWOMX61NgCUJOq6bAHaDh?pid=Api&P=0&h=180",
  "IIT Delhi": "https://tse4.mm.bing.net/th/id/OIP.z4nSloSeac4nCp4R7hLSnQHaFj?pid=Api&P=0&h=180",
  "NIT Trichy": "https://tse1.mm.bing.net/th/id/OIP.Pr6sPOhLOmmbsx7iqcL-NAHaDW?pid=Api&P=0&h=180",
  "VIT Vellore": "https://tse3.mm.bing.net/th/id/OIP.2n0zTMSMJQFjW8MwkDYa5QHaEp?pid=Api&P=0&h=180",
  "Manipal Institute of Technology": "https://tse1.mm.bing.net/th/id/OIP.5pEdL6OD335HdyVdCN7NTwHaFe?pid=Api&P=0&h=180",
  "Vaagdevi College of Engineering": "https://tse2.mm.bing.net/th/id/OIP.Vdamr0HR5w5j45rvWvgSIAHaDg?pid=Api&P=0&h=180",
};

const collegeLogos: Record<string, string> = {
  "NIT Warangal": "https://tse3.mm.bing.net/th/id/OIP.e2GPbnYnnP4C5ajYVCHRUAHaFQ?pid=Api&P=0&h=180",
  "IIT Hyderabad": "https://tse1.mm.bing.net/th/id/OIP.Ic_7XU8OWjH8AsA3u0ugfgHaFj?pid=Api&P=0&h=180",
  "IIIT Hyderabad": "https://tse4.mm.bing.net/th/id/OIP.CAqpEwA2SpIVCanmyciX0AHaHa?pid=Api&P=0&h=180",
  "BITS Pilani": "https://tse4.mm.bing.net/th/id/OIP.TZXRRsuq1BCB_4QAdJxu9wHaHa?pid=Api&P=0&h=180",
  "JNTUH": "https://tse4.mm.bing.net/th/id/OIP.emJcUHFDlmxaHocoh2tImQHaGA?pid=Api&P=0&h=180",
  "Osmania University": "https://tse1.mm.bing.net/th/id/OIP.i851-HfPMm_5NOmHfSSO7wHaEK?pid=Api&P=0&h=180",
  "CBIT": "https://tse2.mm.bing.net/th/id/OIP.NHC-Z2UjsNsZIh8Rf8Y_6QHaHa?pid=Api&P=0&h=180",
  "VNR VJIET": "https://tse1.mm.bing.net/th/id/OIP.S7xL-FhIkTRbXZ5TKgcNBQAAAA?pid=Api&P=0&h=180",
  "Vasavi College of Engineering": "https://tse3.mm.bing.net/th/id/OIP._RuhQoIgit5e9Sjir5o05QAAAA?pid=Api&P=0&h=180",
  "Gokaraju Rangaraju Institute of Engineering and Technology": "https://tse2.mm.bing.net/th/id/OIP.257wm3L7x2sxgEzbmDwOdwAAAA?pid=Api&P=0&h=180",
  "KL University": "https://tse2.mm.bing.net/th/id/OIP.1WawZtprI8sA-3scFkbxOQHaC_?pid=Api&P=0&h=180",
  "Andhra University": "https://tse4.mm.bing.net/th/id/OIP.Sp5UaSQlqrxwSj9Wr8e0XQHaHq?pid=Api&P=0&h=180",
  "SRM University AP": "https://tse1.mm.bing.net/th/id/OIP.BED3ZXL4WhOxXzH2aSCpvAAAAA?pid=Api&P=0&h=180",
  "IIT Madras": "https://tse2.mm.bing.net/th/id/OIP.jZ0WvEgE3PeO3YstaOHNZgHaHa?pid=Api&P=0&h=180",
  "IIT Bombay": "https://tse2.mm.bing.net/th/id/OIP.JeJHgoAzF8fBUrMNmHA-hAHaEK?pid=Api&P=0&h=180",
  "IIT Delhi": "https://tse2.mm.bing.net/th/id/OIP.VthU2wByV5ZH72DVWvUkYQHaHz?pid=Api&P=0&h=180",
  "NIT Trichy": "https://tse1.mm.bing.net/th/id/OIP.GkzhERI2x4DSOzNDVj1e5wHaHU?pid=Api&P=0&h=180",
  "VIT Vellore": "https://tse2.mm.bing.net/th/id/OIP.EnmHisVnrgrchtgbxOYAdgHaCN?pid=Api&P=0&h=180",
  "Manipal Institute of Technology": "https://tse2.mm.bing.net/th/id/OIP.NSFjYfp7n9QUjzxT6EEO9wHaHa?pid=Api&P=0&h=180",
  "Vaagdevi College of Engineering": "https://tse2.mm.bing.net/th/id/OIP.75-U-1YR4lUOb4ZQCfBEvwAAAA?pid=Api&P=0&h=180",
};

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
  imageUrl?: string | null;
  logoUrl?: string | null;
};

export default function CollegeList({
  colleges,
}: {
  colleges: College[];
}) {
  const [search, setSearch] = useState("");
  const [selectedColleges, setSelectedColleges] = useState<string[]>([]);

  const handleCompareSelection = (collegeName: string) => {
    setSelectedColleges((prev) => {
      if (prev.includes(collegeName)) {
        return prev.filter((name) => name !== collegeName);
      }

      if (prev.length < 2) {
        return [...prev, collegeName];
      }

      return prev;
    });
  };

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="🔍 Search colleges..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 mb-8 rounded-xl border border-gray-300 shadow-sm"
      />

      {selectedColleges.length === 2 && (
        <div className="mb-8 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            College Comparison
          </h2>

          <table className="w-full border border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Feature</th>
                <th className="border p-2">
                  {selectedColleges[0]}
                </th>
                <th className="border p-2">
                  {selectedColleges[1]}
                </th>
              </tr>
            </thead>

            <tbody>
              {["fees", "rating", "placementRate", "avgPackage"].map(
                (field) => {
                  const college1 = colleges.find(
                    (c) => c.name === selectedColleges[0]
                  );

                  const college2 = colleges.find(
                    (c) => c.name === selectedColleges[1]
                  );

                  return (
                    <tr key={field}>
                      <td className="border p-2 font-semibold">
                        {field}
                      </td>

                      <td className="border p-2">
                        {String(
                          college1?.[
                            field as keyof typeof college1
                          ]
                        )}
                      </td>

                      <td className="border p-2">
                        {String(
                          college2?.[
                            field as keyof typeof college2
                          ]
                        )}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredColleges.map((college) => (
          <div
            key={college.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
           <img
  src={
    collegeImages[college.name] ||
    "/college-placeholder.jpg"
  }
  alt={college.name}
  className="w-full h-52 object-cover"
/>

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedColleges.includes(
                      college.name
                    )}
                    onChange={() =>
                      handleCompareSelection(college.name)
                    }
                  />
                  Compare
                </label>
              </div>

              <div className="flex items-center gap-3 mb-4">
  <img
  src={
    collegeLogos[college.name] ||
    "/logo-placeholder.png"
  }
  alt="College Logo"
  className="w-12 h-12 rounded-full border"
 />

                <h2 className="text-xl font-bold">
                  {college.name}
                </h2>
              </div>

              <p className="mb-2">📍 {college.location}</p>

              <p className="mb-2">
                💰 Fees: ₹
                {college.fees.toLocaleString("en-IN")}
              </p>

              <p className="mb-2">
                ⭐ Rating: {college.rating}
              </p>

              <p className="mb-2">
                🎯 Placement: {college.placementRate}%
              </p>

              <p className="mb-2">
                📈 Avg Package: ₹{college.avgPackage} LPA
              </p>

              <p className="mt-3 text-gray-600">
                {college.description}
              </p>

              {college.website && (
                <a
                  href={college.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  🌐 Visit Official Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}