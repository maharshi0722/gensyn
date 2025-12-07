"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Page() {
  const [open, setOpen] = useState(false);

  return (<div
  className={`min-h-screen text-gray-900 ${manrope.className}`}
  style={{
    background: `
      radial-gradient(circle at top center, rgba(0,120,255,0.08), transparent 70%),
      #ffffff
    `,
  }}
>


      {/* NAVBAR */}
  {/* NAVBAR */}
<nav className="w-full bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* LOGO ADDED HERE */}
    <div className="flex items-center gap-3">
      <img
        src="/logo.jpeg"
        alt="Logo"
        className="w-12 h-12 rounded-md object-cover"
      />
      <span className="text-2xl font-extrabold tracking-tight text-gray-900">
        GENSYN
      </span>
    </div>

    {/* Desktop menu */}
    <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
      <a href="#rlswarm" className="hover:text-blue-600 transition">RL Swarm</a>
      <a href="#blockassist" className="hover:text-blue-600 transition">BlockAssist</a>
      <a href="#judge" className="hover:text-blue-600 transition">Judge</a>
      <a href="#codeassist" className="hover:text-blue-600 transition">CodeAssist</a>
    </div>

    {/* Mobile hamburger */}
    <button className="md:hidden" onClick={() => setOpen(!open)}>
      <div className="space-y-1">
        <span className="block w-6 h-[2px] bg-gray-900"></span>
        <span className="block w-6 h-[2px] bg-gray-900"></span>
        <span className="block w-6 h-[2px] bg-gray-900"></span>
      </div>
    </button>

  </div>
</nav>


      {/* HERO */}
      <section className="text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900"
        >
          The Gensyn Testnet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed"
        >
          A decentralized AI compute network bringing persistent identity,
          verifiable training, and collaborative intelligence to the world,
          enabling trustless coordination across a global machine intelligence network.
        </motion.p>

        {/* Social */}
        <div className="flex justify-center gap-6 mt-10">
          <Social icon="/linkedin.svg" link="https://www.linkedin.com/company/gensynai/" />
          <Social icon="/github.svg" link="https://github.com/gensyn-ai" />
          <Social icon="/x.svg" link="https://x.com/gensynai" />
        </div>

        {/* QUIZ BUTTON */}
        <div className="mt-10">
          <a
            href="https://gensyn-quiz-drab.vercel.app/"
            target="_blank"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm"
          >
            Take the Gensyn Quiz →
          </a>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Phase title="RL Swarm" description="Collaborative reinforcement learning over a decentralized network." link="https://github.com/gensyn-ai/rl-swarm/blob/main/README.md" />
        <Phase title="BlockAssist" description="AI assistant trained from Minecraft gameplay." link="https://github.com/gensyn-ai/blockassist/blob/main/README.md" />
        <Phase title="Judge" description="Verifiable AI evaluation linked with RL Swarm." link="https://github.com/gensyn-ai/rl-swarm" />
        <Phase title="CodeAssist" description="On-device coding assistant that adapts to your workflow." link="https://docs.gensyn.ai/testnet/codeassist/getting-started" />
        <Phase title="Phase 0" description="Genesis tracking of participation and RL Swarm activity." />
      </section>

      {/* TEAM */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold mb-12 text-gray-900">Team Behind Gensyn</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {[
            ["IMG_1.JPG", "Ben Fielding", "Co-founder & CEO", "https://x.com/fenbielding"],
            ["IMG_2.JPG", "Harry Grieve", "Co-founder & CTO", "https://x.com/_grieve"],
            ["IMG_3.JPG", "Jeffrey Amico", "COO", "https://x.com/_jamico"],
            ["IMG_4.JPG", "Frank Wan", "Finance", "https://x.com/thefrankwan"],
            ["IMG_5.JPG", "Austin Virts", "Office Manager", "https://x.com/austinvirts"],
            ["blazy.jpg", "Blazy", "Core Team", "https://x.com/blazyeth/"],
            ["emily.jpg", "Emily Donald", "Core Team", "https://x.com/eaodonald"],
            ["cxf.jpg", "X_", "Core Team", "https://x.com/cxf_0886"],
            ["blave.jpeg", "Steve Glasper", "Brand Lead", "https://www.linkedin.com/in/steveglasper/?originalSubdomain=uk"],
            ["IMG_6.JPG", "Gasoline", "Moderator", "https://x.com/gasoline2255"],
            ["IMG_7.JPG", "Sunnyceekay", "Moderator", "https://x.com/sunnyceekay"],
            ["IMG_8.JPG", "Xailong", "Moderator", "https://x.com/xailong_6969"],
            ["IMG_9.JPG", "Jovar", "Moderator", "https://x.com/KBekhtiev"],
            ["IMG_10.JPG", "Sanjay", "Moderator", "https://x.com/S4Sanjay_das"],
            ["IMG_11.JPG", "FabsMac", "Moderator", "https://x.com/FabsMac"],
            ["sam.jpg", "Samurai Kai", "Moderator", "https://x.com/SamuraiKai1"],
            ["kumo.jpg", "Kumo", "Moderator", "https://x.com/Kumoooo_co"],
          ].map(([img, name, role, x], i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
              <a href={x} target="_blank">
                <img src={`/${img}`} className="w-28 h-28 rounded-full border object-cover shadow-md" />
              </a>
              <h3 className="font-bold mt-3 text-gray-900 text-sm">{name}</h3>
              <p className="text-gray-500 text-xs">{role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white py-6 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a href="https://docs.gensyn.ai/" className="hover:text-blue-600">Docs</a>
            <span>·</span>
            <a href="https://docs.gensyn.ai/litepaper" className="hover:text-blue-600">Litepaper</a>
          </div>

          <div>Gensyn © 2025 • Decentralized AI Infrastructure</div>

          <div>
            Created by{" "}
            <a href="https://x.com/Maharsh42439943" className="font-semibold hover:text-blue-600">
              Maharshi Patel
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* COMPONENTS */
function Phase({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {link && (
        <a href={link} target="_blank" className="text-blue-600 text-sm hover:underline">
          Full Guide →
        </a>
      )}
    </motion.div>
  );
}

function Social({ icon, link }) {
  return (
    <a href={link} target="_blank">
      <img
        src={icon}
        className="w-6 h-6 hover:scale-125 transition duration-300"
      />
    </a>
  );
}
