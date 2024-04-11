"use client";

import { LockIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const LinkEncoded = () => {
  const router = useRouter();
  const [clickCount, setClickCount] = useState(0);

  const redirectEncoded = () => {
    setClickCount((prevCount) => prevCount + 1);

    setTimeout(() => {
      setClickCount(0);
    }, 2000);
  };

  useEffect(() => {
    if (clickCount > 3) {
      router.push("/confirmations");
    }
  }, [clickCount]);

  return (
    <button onClick={() => redirectEncoded()} className="absolute z-40 right-2 top-2">
      <LockIcon height={20} className="stroke-primary fill-white/80" />
    </button>
  );
};

export default LinkEncoded;
