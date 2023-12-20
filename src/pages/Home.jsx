import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="relative w-full h-screen flex justify-center">
      {loading ? (
        <div className="text-center flex justify-center items-center">
          <BarLoader
            color={"#0072ff"} // Replace with your desired color
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat officiis molestias sequi quidem quae. Optio nostrum necessitatibus unde assumenda dolores.
        </h1>
      )}
    </section>
  );
};

export default Home;
