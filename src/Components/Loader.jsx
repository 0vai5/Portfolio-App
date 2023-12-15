import React from "react";
import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="rounded-full w-20 h-10 border-2 border-opacity-20 border-blue-200 border-t-blue-500 animate-spin" />
      </div>
    </Html>
  );
};

export default Loader;
