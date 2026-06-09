import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.deleteMany();

  await prisma.college.createMany({
    data: [
      {
        name: "NIT Warangal",
        location: "Warangal",
        fees: 625000,
        rating: 4.5,
        placementRate: 92,
        avgPackage: 14,
        description: "One of India's top NITs.",
        website: "https://tse3.mm.bing.net/th/id/OIP.t9wsFitjLQA1fVHDN9HdvQHaFx?pid=Api&P=0&h=180",
        imageUrl: "https://tse3.mm.bing.net/th/id/OIP.t9wsFitjLQA1fVHDN9HdvQHaFx?pid=Api&P=0&h=180"
        ,logoUrl:"https://tse3.mm.bing.net/th/id/OIP.e2GPbnYnnP4C5ajYVCHRUAHaFQ?pid=Api&P=0&h=180"
      },
      {
        name: "IIT Hyderabad",
        location: "Hyderabad",
        fees: 850000,
        rating: 4.8,
        placementRate: 96,
        avgPackage: 22,
        description: "Premier IIT institution.",
        website: "https://www.iith.ac.in"
        ,imageUrl:"https://tse4.mm.bing.net/th/id/OIP.HmYjWjoiiKC1qhim50Em3gHaDq?pid=Api&P=0&h=180"
        ,logoUrl:"https://tse1.mm.bing.net/th/id/OIP.Ic_7XU8OWjH8AsA3u0ugfgHaFj?pid=Api&P=0&h=180"
      },
      {
        name: "IIIT Hyderabad",
        location: "Hyderabad",
        fees: 1200000,
        rating: 4.9,
        placementRate: 98,
        avgPackage: 28,
        description: "Known for Computer Science excellence.",
        website: "https://www.iiit.ac.in",
        imageUrl: "https://tse4.mm.bing.net/th/id/OIP.xvFo4c5zoS8J-c26VMJP-wHaE7?pid=Api&P=0&h=180",
       logoUrl:"https://tse4.mm.bing.net/th/id/OIP.CAqpEwA2SpIVCanmyciX0AHaHa?pid=Api&P=0&h=180"

      },
      {
        name: "BITS Pilani",
        location: "Pilani",
        fees: 2400000,
        rating: 4.8,
        placementRate: 95,
        avgPackage: 21,
        description: "One of India's best private engineering colleges.",
        website: "https://www.bits-pilani.ac.in",
        imageUrl:"https://tse4.mm.bing.net/th/id/OIP.CAqpEwA2SpIVCanmyciX0AHaHa?pid=Api&P=0&h=180"
      },
      {
        name: "JNTUH",
        location: "Hyderabad",
        fees: 180000,
        rating: 4.2,
        placementRate: 78,
        avgPackage: 6,
        description: "Leading state university in Telangana.",
        website: "https://jntuh.ac.in"
      },
      {
        name: "Osmania University",
        location: "Hyderabad",
        fees: 120000,
        rating: 4.1,
        placementRate: 72,
        avgPackage: 5,
        description: "Historic public university.",
        website: "https://www.osmania.ac.in"
      },
      {
        name: "CBIT",
        location: "Hyderabad",
        fees: 560000,
        rating: 4.3,
        placementRate: 85,
        avgPackage: 7,
        description: "Top private engineering college in Telangana.",
        website: "https://www.cbit.ac.in"
      },
      {
        name: "VNR VJIET",
        location: "Hyderabad",
        fees: 600000,
        rating: 4.4,
        placementRate: 88,
        avgPackage: 8,
        description: "Known for placements and academics.",
        website: "https://vnrvjiet.ac.in"
      },
      {
        name: "Vasavi College of Engineering",
        location: "Hyderabad",
        fees: 550000,
        rating: 4.3,
        placementRate: 84,
        avgPackage: 7,
        description: "Well-known autonomous engineering college.",
        website: "https://www.vce.ac.in"
      },
      {
        name: "Gokaraju Rangaraju Institute of Engineering and Technology",
        location: "Hyderabad",
        fees: 520000,
        rating: 4.2,
        placementRate: 80,
        avgPackage: 6.5,
        description: "Popular engineering institution in Hyderabad.",
        website: "https://www.griet.ac.in"
      },
      {
        name: "KL University",
        location: "Vijayawada",
        fees: 950000,
        rating: 4.4,
        placementRate: 90,
        avgPackage: 8,
        description: "Leading private university in Andhra Pradesh.",
        website: "https://www.kluniversity.in"
      },
      {
        name: "Andhra University",
        location: "Visakhapatnam",
        fees: 150000,
        rating: 4.2,
        placementRate: 75,
        avgPackage: 5,
        description: "One of India's oldest universities.",
        website: "https://www.andhrauniversity.edu.in"
      },
      {
        name: "SRM University AP",
        location: "Amaravati",
        fees: 1100000,
        rating: 4.4,
        placementRate: 87,
        avgPackage: 8.5,
        description: "Modern private university.",
        website: "https://srmap.edu.in"
      },
      {
        name: "IIT Madras",
        location: "Chennai",
        fees: 900000,
        rating: 5.0,
        placementRate: 99,
        avgPackage: 24,
        description: "Top-ranked engineering institute in India.",
        website: "https://www.iitm.ac.in"
      },
      {
        name: "IIT Bombay",
        location: "Mumbai",
        fees: 920000,
        rating: 5.0,
        placementRate: 99,
        avgPackage: 25,
        description: "World-class technical institute.",
        website: "https://www.iitb.ac.in"
      },
      {
        name: "IIT Delhi",
        location: "New Delhi",
        fees: 910000,
        rating: 4.9,
        placementRate: 99,
        avgPackage: 23,
        description: "Premier engineering and research institute.",
        website: "https://home.iitd.ac.in"
      },
      {
        name: "NIT Trichy",
        location: "Tiruchirappalli",
        fees: 650000,
        rating: 4.8,
        placementRate: 95,
        avgPackage: 15,
        description: "Top-performing NIT in India.",
        website: "https://www.nitt.edu"
      },
      {
        name: "VIT Vellore",
        location: "Vellore",
        fees: 800000,
        rating: 4.5,
        placementRate: 92,
        avgPackage: 9,
        description: "Leading private engineering university.",
        website: "https://vit.ac.in"
      },
      {
        name: "Manipal Institute of Technology",
        location: "Manipal",
        fees: 1700000,
        rating: 4.6,
        placementRate: 91,
        avgPackage: 10,
        description: "Renowned private engineering institute.",
        website: "https://www.manipal.edu/mit.html"
      },
      {
        name: "Vaagdevi College of Engineering",
        location: "Warangal",
        fees: 380000,
        rating: 4.0,
        placementRate: 78,
        avgPackage: 4.5,
        description: "Autonomous engineering college in Warangal.",
        website: "https://vaagdevi.edu.in"
      }
    ]
  });

  console.log("✅ Seed data added successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });