import {
  FaGithub,
  FaInstagram,
  FaTelegram
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold gradient-text mb-10">
          Contact
        </h2>

        <div className="card-bg rounded-3xl p-10 glow">
          <p className="text-lg">
            Ashutosh Kumar (Harry)
          </p>

          <p className="mt-3">
            📍 Patna, Bihar, India
          </p>

          <p className="mt-3">
            📧 ashukr3384@gmail.com
          </p>

          <div className="flex justify-center gap-8 mt-8 text-3xl">
            <a href="https://github.com/SIDHIMUSIC" target="_blank">
              <FaGithub />
            </a>

            <a href="https://instagram.com/harryashu_" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://t.me/SANATANI_BACHA" target="_blank">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
