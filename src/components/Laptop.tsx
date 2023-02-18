import { Suspense } from "react";
import { Model } from "./Scene";

const Laptop = () => {
  return (
    <Suspense fallback={null}>
      <Model />
    </Suspense>
  );
};

export default Laptop;
