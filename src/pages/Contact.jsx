import React, { useEffect, useRef, useState } from "react";
import { BarLoader } from "react-spinners";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../Components/Alert";
import Footer from "../Components/Footer";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({ name: "", email: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ovais",
          from_email: form.email,
          to_email: "rovais53@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        resetForm();
        showAlert({
          show: true,
          text: "Thank you for your message 😃",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          resetForm();
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);

        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: "danger",
        });
      });
  };

  return (
    <>
      <section className="relative flex lg:flex-row flex-col max-container justify-center h-[100vh] gap-6">
        {alert.show && <Alert {...alert} />}
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
          <>
            <div className="flex-1 min-w-[50%] flex flex-col ">
              <h1 className="head-text">Get in Touch</h1>

              <div className="px-15" >
                <form
                  className="w-full flex flex-col gap-7 mt-14"
                  onSubmit={handleSubmit}
                >
                  <label className="text-black-500 font-semibold">
                    Name
                    <br />
                    <input
                      type="text"
                      className="input"
                      placeholder="Asad"
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="text-black-500 font-semibold">
                    Email
                    <br />
                    <input
                      type="email"
                      className="input"
                      placeholder="example@gmail.com"
                      required
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="text-black-500 font-semibold">
                    Message
                    <br />
                    <textarea
                      className="textarea"
                      placeholder="What do you want to say?"
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </label>
                  <button type="submit" className="btn" disabled={isLoading}>
                    {isLoading ? "Sending.." : "Send Something"}
                  </button>
                </form>
              </div>
            </div>
            {/* <div>
              <img src="https://th.bing.com/th/id/R.282f4411d07dec117a72f573bd7fc49b?rik=7i3tsCos%2f1w%2bMg&pid=ImgRaw&r=0" alt="" />
            </div> */}
          </>
        )}
      </section>
      {!loading && (
        <>
          <hr className="border-slate-200" />
          <Footer />
        </>
      )}
    </>
  );
};

export default Contact;
