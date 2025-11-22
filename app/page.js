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

  return (
    <div
      className={`min-h-screen text-white relative overflow-hidden ${manrope.className}`}
      style={{
        backgroundColor: "#821e1eff",
      }}
    >
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(27,15,10,0.85)" }}
      ></div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="w-full bg-[#1B0F0A]/80 backdrop-blur border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-extrabold text-lg tracking-wider">GENSYN</div>

            <div className="hidden md:flex gap-6 text-sm text-gray-300">
              <a href="#rlswarm" className="hover:text-orange-400 transition">
                RL Swarm
              </a>
              <a
                href="#blockassist"
                className="hover:text-orange-400 transition"
              >
                BlockAssist
              </a>
              <a href="#judge" className="hover:text-orange-400 transition">
                Judge
              </a>
              <a
                href="#codeassist"
                className="hover:text-orange-400 transition"
              >
                CodeAssist
              </a>
            </div>

            {/* Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)}>
                <div className="space-y-1">
                  <span className="block w-6 h-[2px] bg-white"></span>
                  <span className="block w-6 h-[2px] bg-white"></span>
                  <span className="block w-6 h-[2px] bg-white"></span>
                </div>
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden absolute top-full left-0 w-full bg-[#1B0F0A]/95 backdrop-blur-md px-6 py-4 space-y-4 text-sm text-gray-300 border-t border-gray-800">
              <a
                href="#rlswarm"
                onClick={() => setOpen(false)}
                className="block hover:text-orange-400"
              >
                RL Swarm
              </a>
              <a
                href="#blockassist"
                onClick={() => setOpen(false)}
                className="block hover:text-orange-400"
              >
                BlockAssist
              </a>
              <a
                href="#judge"
                onClick={() => setOpen(false)}
                className="block hover:text-orange-400"
              >
                Judge
              </a>
              <a
                href="#codeassist"
                onClick={() => setOpen(false)}
                className="block hover:text-orange-400"
              >
                CodeAssist
              </a>
            </div>
          )}
        </nav>

        {/* Hero */}
        <section className="text-center px-6 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            The Gensyn Testnet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto text-gray-400 text-lg"
          >
            A decentralized AI compute network bringing persistent identity,
            verifiable training, and collaborative intelligence to the world
            enabling trustless coordination between nodes, models, and humans
            across a global machine intelligence network.
          </motion.p>

          {/* Social */}
          <div className="flex justify-center gap-6 mt-10">
            <Social
              icon="/linkedin.svg"
              link="https://www.linkedin.com/company/gensynai/"
            />
            <Social icon="/github.svg" link="https://github.com/gensyn-ai" />
            <Social icon="/x.svg" link="https://x.com/gensynai" />
          </div>
        </section>

        {/* Applications */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Phase
            id="rlswarm"
            title="RL Swarm"
            description="Collaborative reinforcement learning over a decentralized network of nodes."
            link="https://github.com/gensyn-ai/rl-swarm/blob/main/README.md"
          />
          <Phase
            id="blockassist"
            title="BlockAssist"
            description="AI assistant trained from Minecraft gameplay for local decentralized learning."
            link="https://github.com/gensyn-ai/blockassist/blob/main/README.md"
          />
          <Phase
            id="judge"
            title="Judge"
            description="Verifiable AI evaluation framework linked with RL Swarm."
            link="https://github.com/gensyn-ai/rl-swarm"
          />
          <Phase
            id="codeassist"
            title="CodeAssist"
            description="On-device coding assistant that learns from your programming behavior."
            link="https://docs.gensyn.ai/testnet/codeassist/getting-started"
          />
          <Phase
            id="phase0"
            title="Phase 0"
            description="Genesis phase tracking participation and on-chain RL Swarm activity."
          />
        </section>

        {/* ✅ Team Section (Circular) */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold mb-12">Team Behind Gensyn</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {[
              [
                "IMG_1.JPG",
                "Ben Fielding",
                "Co-founder & CEO",
                "https://x.com/fenbielding",
              ],
              [
                "IMG_2.JPG",
                "Harry Grieve",
                "Co-founder & CTO",
                "https://x.com/_grieve",
              ],
              ["IMG_3.JPG", "Jeffrey Amico", "COO", "https://x.com/_jamico"],
              [
                "IMG_4.JPG",
                "Frank Wan",
                "Finance",
                "https://x.com/thefrankwan",
              ],
              [
                "IMG_5.JPG",
                "Austin Virts",
                "Office Manager",
                "https://x.com/austinvirts",
              ],

              [
                "IMG_6.JPG",
                "Gasoline",
                "Moderator",
                "https://x.com/gasoline2255",
              ],
              [
                "IMG_7.JPG",
                "Sunnyceekay",
                "Moderator",
                "https://x.com/sunnyceekay",
              ],
              [
                "IMG_8.JPG",
                "Xailong",
                "Moderator",
                "https://x.com/xailong_6969",
              ],
              ["IMG_9.JPG", "Jovar", "Moderator", "https://x.com/KBekhtiev"],
              [
                "IMG_10.JPG",
                "Sanjay",
                "Moderator",
                "https://x.com/S4Sanjay_das",
              ],
              ["IMG_11.JPG", "FabsMac", "Moderator", "https://x.com/FabsMac"],
              [
                "IMG_12.JPG",
                "Samurai Kai",
                "Moderator",
                "https://x.com/SamuraiKai1",
              ],
              ["IMG_13.JPG", "Kumo", "Moderator", "https://x.com/Kumoooo_co"],
              ["IMG_14.JPG", "Blazy", "Core Team", "https://x.com/blazyeth/"],
            ].map(([img, name, role, x], i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-3"
              >
                <a href={x} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`/${img}`}
                    alt={name}
                    className="w-28 h-28 rounded-full object-cover border-2 border-gray-700 shadow-lg hover:border-orange-500 transition"
                  />
                </a>

                <div className="min-h-[70px] flex flex-col justify-center">
                  <h3 className="font-semibold text-sm">{name}</h3>
                  <p className="text-gray-400 text-xs">{role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="border-t border-gray-800 text-gray-500 py-6 text-sm">
          <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-4 text-center">
            <div className="flex gap-4 text-gray-400">
              <a
                href="https://docs.gensyn.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition"
              >
                Docs
              </a>

              <span className="text-gray-600">|</span>

              <a
                href="https://docs.gensyn.ai/litepaper"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition"
              >
                Litepaper
              </a>
            </div>
            <div className="text-white">
              Gensyn © 2025 • Decentralized AI Infrastructure
            </div>

            <div className="text-white">
              Created by{" "}
              <a
                href="https://x.com/Maharsh42439943"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Maharshi Patel
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function Phase({ title, description, link, id }) {
  return (
    <motion.div
      id={id}
      whileHover={{ scale: 1.03 }}
      className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition"
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 text-sm hover:underline"
        >
          Full Guide →
        </a>
      )}
    </motion.div>
  );
}

function Social({ icon, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={icon}
        className="w-6 h-6 hover:scale-125 transition duration-300"
      />
    </a>
  );
}
