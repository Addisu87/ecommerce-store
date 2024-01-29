"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/app/components/preview-modal";

const ModalProvider = () => {
  // Remove hydration error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
