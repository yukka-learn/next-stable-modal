import Link from "next/link";
import { getData } from "~/lib/getData";


export default async function GalleryPage() {
  const data = await getData();
  return (
    <div>
      <h1 className="font-bold text-xl mb-4">Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.map((character) => (
          <div key={character._id}>
            <h1>
              <Link href={`/gallery/${character._id}`}>{character.name}</Link>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
