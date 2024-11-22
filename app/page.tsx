'use client'

import Image from 'next/image'
import { Github, Linkedin, Mail, Phone, Code, Briefcase, FileText, Send, GraduationCap, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export default function Home() {
  const [formStatus, setFormStatus] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const body = Object.fromEntries(formData)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      const responseBody = await response.text();
      console.log('Response body:', responseBody);

      if (response.ok) {
        setFormStatus('Message sent successfully!')
        formRef.current?.reset()
      } else {
        setFormStatus(`Failed to send message. Status: ${response.status}. ${responseBody}`)
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('An error occurred. Please try again later.')
    }
  }

  return (
    <div className="space-y-16">
      <motion.section 
        id="hero" 
        className="flex flex-col items-center justify-center min-h-screen text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/alvinmutebi.jpg?height=200&width=200"
          alt="Alvin Mutebi"
          width={200}
          height={200}
          className="rounded-full neo-brutalist-box mb-8"
        />
        <h1 className="text-6xl font-bold mb-4 bg-primary p-4 neo-brutalist-box text-text-dark">Alvin Mutebi</h1>
        <p className="text-2xl mb-8 bg-background-light dark:bg-background-dark p-2 neo-brutalist-box text-text-light dark:text-text-dark">Software Developer | Web3 Enthusiast | Blockchain Expert | AWS Certified</p>
        <div className="flex space-x-4">
          <a href="https://github.com/alvienzo720" target="_blank" rel="noopener noreferrer" className="text-text-light dark:text-text-dark hover:text-primary">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/alvin-mutebi-a5356815b" target="_blank" rel="noopener noreferrer" className="text-text-light dark:text-text-dark hover:text-primary">
            <Linkedin size={32} />
          </a>
          <a href="mailto:mutebialvinalvienzo@gmail.com" className="text-text-light dark:text-text-dark hover:text-primary">
            <Mail size={32} />
          </a>
          <a href="tel:+256786829438" className="text-text-light dark:text-text-dark hover:text-primary">
            <Phone size={32} />
          </a>
        </div>
      </motion.section>

      <motion.section 
        id="about" 
        className="neo-brutalist-box bg-primary p-8 text-text-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center"><Code className="mr-2" />About Me</h2>
        <p className="text-lg">
          I'm a passionate software developer with expertise in Web2, Web3, blockchain technologies, and full-stack development. 
          With a strong background in Python,Javascript, TypeScript, and Solidity, I've worked on various projects ranging from 
          APIs to front ends  while handling integrations of APIs to smart contracts for decentralized applications on diffrent protocols like Uniwasp, Celo, Solana, Compound and most EVM compatible chains.
        </p>
      </motion.section>

      <motion.section 
        id="experience" 
        className="neo-brutalist-box bg-background-light dark:bg-background-dark p-8 text-text-light dark:text-text-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center"><Briefcase className="mr-2" />Work Experience</h2>
        <div className="space-y-8">
          <div className="neo-brutalist-box bg-primary p-4 text-text-dark">
            <h3 className="text-2xl font-bold">Web3 Trainer</h3>
            <p className="text-lg">Code3Camp | January 2024 - August 2024</p>
            <ul className="list-disc list-inside mt-2">
              <li>Guided developers through Web3 fundamentals</li>
              <li>Taught smart contract development using Solidity and Motoko</li>
              <li>Led comprehensive sessions on DeFi</li>
              <li>Conducted hands-on workshops on blockchain technologies</li>
            </ul>
          </div>
          <div className="neo-brutalist-box bg-primary p-4 text-text-dark">
            <h3 className="text-2xl font-bold">Software Developer</h3>
            <p className="text-lg">Ngeni Labs | January 2023 - August 2024</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed efficient trading bots using TypeScript, Express, and Node.js</li>
              <li>Deployed RESTful APIs using TypeScript, Node.js, Python, and Django</li>
              <li>Handled API integrations to multiple front-ends</li>
               <li>Wrote unit tests for diffrennt APIs before production</li>
              <li>Implemented smart contracts on various protocols</li>
            </ul>
          </div>
          <div className="neo-brutalist-box bg-primary p-4 text-text-dark">
            <h3 className="text-2xl font-bold">Backend Developer</h3>
            <p className="text-lg">CodeIT Institute of Technology | September 2021 - November 2022</p>
            <ul className="list-disc list-inside mt-2">
              <li>Pioneered blockchain-based student database in Python on AWS</li>
              <li>Implemented various smart contracts for an NFT market place and handled integrations with Next js</li>
              <li>Administered and maintained vital system databases</li>
              <li>Streamlined deployment and management of Linux EC2 instances</li>
            </ul>
          </div>
          <div className="neo-brutalist-box bg-primary p-4 text-text-dark">
            <h3 className="text-2xl font-bold">Full Stack Software Developer</h3>
            <p className="text-lg">Kuko Store | March 2018 - Jan 2021</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed and deployed Kuko store website and CRM using Python Django Framework</li>
              <li>Handled API integrations ftom backend to front-ends seamlessly</li>
              <li>Increased store efficiency using Redis for in-memory data storage and caching</li>
              <li>Integrated online payments (PayPal and Visa) into websites</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="education" 
        className="neo-brutalist-box bg-primary p-8 text-text-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center"><GraduationCap className="mr-2" />Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold">CodeIT Institute of Technology</h3>
            <p>Certificate in Python, Blockchain, AWS</p>
            <p className="text-sm">September 2021</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Nkumba University</h3>
            <p>Bachelor of Information Technology</p>
            <p className="text-sm">November 2017</p>
          </div>
        </div>
      </motion.section>

     <motion.section 
        id="certificates" 
        className="neo-brutalist-box bg-background-light dark:bg-background-dark p-8 text-text-light dark:text-text-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center"><Award className="mr-2" />Certificates</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://www.credly.com/badges/ce407768-6d21-4918-a03c-80d5c26ef398/public_url" target="_blank" rel="noopener noreferrer" className="hover:text-primary">AWS Certified Cloud Practitioner</a></li>
          <li><a href="https://adscerts.com/scholar/550A2AB75681B73" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Google Africa Developer Training Program (Google Cloud)</a></li>
          <li><a href="https://www.credly.com/badges/4ceab31b-6f16-4d93-85cb-29ff06574dcc?source=linked_in_profile" target="_blank" rel="noopener noreferrer" className="hover:text-primary">PCEP – Certified Entry-Level Python Programmer</a></li>
          <li><a href="https://drive.google.com/file/d/1jiIkqMTquM12-LpH4vlxzYMZS9M-2koK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Software Engineering Virtual Experience J.P. Morgan Chase & Co</a></li>
          <li><a href="https://drive.google.com/file/d/13-a3cddjKXF_JcevfY1ndUqjSliBPZ67/view" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Python AWS Blockchain Software Engineering (CODEIT)</a></li>
          <li><a href="https://www.freecodecamp.org/certification/alvinmutebi/responsive-web-design" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Responsive Web Design Free Code Camp</a></li>
          <li><a href="https://www.freecodecamp.org/certification/alvinmutebi/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer" className="hover:text-primary">JavaScript Algorithms and Data Structures</a></li>
          <li><a href="https://credsverse.com/credentials/76a48830-1274-4a40-bf3b-88348e158539" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Certificate of Participation in Software Testing Bootcamp</a></li>
        </ul>
      </motion.section>

      <motion.section 
        id="projects" 
        className="neo-brutalist-box bg-primary p-8 text-text-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center"><FileText className="mr-2" />Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="neo-brutalist-box bg-background-light dark:bg-background-dark p-4 text-text-light dark:text-text-dark">
            <Image
              src="/Nftminited.jpeg?height=200&width=300"
              alt="Mintograph"
              width={300}
              height={200}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Mintograph NFT bot</h3>
            <p>Telegram bot developed for EVM using TypeScript, Express, and Node.js. to mint, transfer NFTs</p>
          </div>
          <div className="neo-brutalist-box bg-background-light dark:bg-background-dark p-4 text-text-light dark:text-text-dark">
            <Image
              src="/goodstuff.png??height=200&width=300"
              alt="Blockchain Student Database"
              width={300}
              height={200}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Solana Meme Coin Rug Filter</h3>
            <p>Typescript Project to help meme traders on solana to get best tokens to trade without being rugged</p>
          </div>
          <div className="neo-brutalist-box bg-background-light dark:bg-background-dark p-4 text-text-light dark:text-text-dark">
            <Image
              src="/tekeka.png?height=200&width=300"
              alt="Uniswap V3 Telegram Bot"
              width={300}
              height={200}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Teleka Sacco Manger version 2.0 </h3>
            <p>This is a project built on SAAS Python Django Framework to help manage small Savings And Credit Cooperatives handle their records keeping on the go without difficulty</p>
          </div>
          <div className="neo-brutalist-box bg-background-light dark:bg-background-dark p-4 text-text-light dark:text-text-dark">
            <Image
              src="/ekibanna.png?height=200&width=300"
              alt="Kuko Store E-commerce Platform"
              width={300}
              height={200}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Ekibna BAckend API DJango RESTful</h3>
            <p>Backend API For Ekibiina Group App which aims at reducing physical records keeping among savings groups</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="neo-brutalist-box bg-background-light dark:bg-background-dark p-8 text-text-light dark:text-text-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 flex items-center"><Send className="mr-2" />Contact Me</h2>
        <form 
          ref={formRef} 
          className="space-y-4" 
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-bold">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 neo-brutalist-box bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-bold">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 neo-brutalist-box bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-bold">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full p-2 neo-brutalist-box bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark" required></textarea>
          </div>
          <button type="submit" className="neo-brutalist-button bg-primary text-text-dark hover:bg-opacity-80">Send Message</button>
        </form>
        {formStatus && <p className="mt-4 text-center font-bold">{formStatus}</p>}
      </motion.section>
    </div>
  )
}