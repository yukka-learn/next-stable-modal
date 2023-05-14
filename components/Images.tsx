"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import blur from "../public/blur.png";
import { Blurhash } from "react-blurhash";

export default function Images({ photo }: { photo: any }) {
  const [currentImageUrl, setCurrentImageUrl] = useState(blur);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(true);

  useEffect(() => {
    setCurrentImageUrl(photo);
  }, [photo.photoUrl]);

  return (
    <>
      {isImageLoaded ? (
        <Image src={currentImageUrl} height={200} width={200} alt="" />
      ) : (
        <Blurhash
          hash={"L5H2EC=PM+yV0g-mq.wG9c010J}I"}
          width={200}
          height={200}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
    </>
  );
}
