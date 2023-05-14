"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Reload() {
  const router = useRouter();

  const handleClick = () => {
    router.refresh();
  };

  return (
    <div>
      <button onClick={handleClick}>Reload</button>
    </div>
  );
}
