import Image from "next/image";
import { nasaApi } from "@/lib/nasa";

export default async function Home() {
  const apod = await nasaApi.getApod();

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">NASA Astronomy Picture of the Day</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">{apod.title}</h2>
          <div className="relative w-full h-96 mb-4">
            <Image
              src={apod.url}
              alt={apod.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-gray-700">{apod.explanation}</p>
          <p className="text-sm text-gray-500 mt-4">Date: {apod.date}</p>
        </div>
      </main>
    </div>
  );
}
