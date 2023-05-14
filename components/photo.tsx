import Image from "next/image";
import { Suspense } from "react";
import { Character } from "~/lib/getData";
import { shimmer, toBase64 } from "~/lib/lazy";
import Images from "./Images";
import Link from "next/link";

export default function Photo({ photo, name }: { photo: Character; name: any }) {
  return (
    <>
      <Suspense fallback={<h1>Wait Gambar</h1>}>
        {/* <Image
          src={photo.photoUrl}
          height={400}
          width={400}
          className="w-fit object-cover aspect-auto"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 475))}`}
          alt=""
        /> */}
        <Images photo={photo.photoUrl} />
      </Suspense>
      <h1>
        <Link href={`/gallery/chara/${name}`}>{photo.name}</Link>
      </h1>
    </>
  );
}
