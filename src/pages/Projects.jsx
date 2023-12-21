import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { projects } from "../constants/index";
import CTA from "../Components/CTA";
import { arrow } from "../assets/icons";
import Footer from "../Components/Footer";


const Projects = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="max-container">
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15VW",
          }}
        >
          <BarLoader color="#ff0f7b" loading={loading} />
        </div>
      )}

      {!loading && (
        <>
          <h1 className="head-text">
            My
            <span className="blue-gradient_text font-semibold drop-shadow">
              {" "}
              Projects
            </span>
          </h1>
          <div className="text-slate-500 mt-5 flex flex-col gap-3">
            <p>
              I've ventured into numerous projects over the years, but these
              hold a special place in my heart. Several of them are open-source
              initiatives. If you find something intriguing, delve into the
              codebase and contribute your ideas for further enhancements. Your
              collaboration is immensely valued!
            </p>
          </div>
          <div className="flex flex-wrap my-20 gap-16">
            {projects.map((project) => (
              <div className="lg:w-[400px] w-full" key={project.name}>
                <div className="block-container w-12 h-12">
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={project.iconUrl}
                      alt="threads"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-col">
                  <h4 className="text-2xl font-poppins font-semibold">
                    {project.name}
                  </h4>
                  <p className="mt-2 text-slate-500">{project.description}</p>
                  <div className="mt-5 flex items-center gap-2 font-poppins">
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600"
                    >
                      Live Link
                    </Link>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-slate-200" />

          <CTA />
          <hr className="border-slate-200" />
          <Footer />
        </>
      )}
    </section>
  );
};

export default Projects;
