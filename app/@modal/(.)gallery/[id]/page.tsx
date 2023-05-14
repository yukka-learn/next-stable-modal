import Modal from "~/components/modal";
import Photo from "~/components/photo";
import Reload from "~/components/reload";
import { getData, getDataSingle, getDataSingleName } from "~/lib/getData";

export async function generateStaticParams() {
  const posts = await getData();

  return posts.map((post) => ({
    id: post._id,
  }));
}

export default async function GalleryModalPage({ params: { id } }: { params: { id: string } }) {
  const photo = await getDataSingle(id);
  console.log("HIT MODAL PAGE");

  return (
    <Modal>
      <h1 className="text-xl font-bold mb-2">Gallery Modal</h1>
      <Photo photo={photo} name={[]} />
    </Modal>
  );1
}
