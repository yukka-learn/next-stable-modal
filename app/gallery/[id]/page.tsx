import Image from "next/image";
import { getData, getDataSingle } from "~/lib/getData";

export async function generateStaticParams() {
  const posts = await getData();

  return posts.map((post) => ({
    id: post._id,
  }));
}

export default async function GalleryDetailsPage({ params: { id } }: { params: { id: string } }) {
  const data = await getDataSingle(id);
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Gallery Details</h1>
      <Image
        src={data.photoUrl}
        height={400}
        width={400}
        className="w-fit object-cover aspect-auto"
        alt=""
      />
      <h2>{data.name}</h2>
    </div>
  );
}
