
import React from 'react';
import Link from 'next/link';

const templates = [
  {
    name: 'Backend',
    description:
      'The backend is the server-side of an application that handles data processing, business logic, database interactions, and API communication to support frontend functionality.',
    icon: '/path-to-agoric-icon.png',
    url: '/templates/backend', 
  },
  {
    name: 'Next.js',
    description:
      'Next.js is a React framework that enables server-side rendering, static site generation, and optimized performance for building fast, scalable web applications.',
    icon: '/path-to-akash-icon.png',
    url: '/templates/next-js', 
  },
];

const Templates = () => {
  return (
    <section className="bg-[#0c0d0e] text-white py-10 h-screen pt-40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Find your Template</h2>
        <p className="text-center text-lg mb-10">
          Jumpstart your app development <br /> process with our pre-built solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {templates.map((template, index) => (
            <Link key={index} href={template.url} passHref> 
              <div
                className="bg-[#1F1F23] rounded-3xl p-4 py-16 shadow-lg border-[0.5px] border-[#FFFFFF] flex flex-col items-center cursor-pointer hover:bg-[#17171b] transition-colors"
              >
                <h3 className="text-2xl font-semibold mb-2 ">{template.name}</h3>
                <p className="text-gray-400 text-center">{template.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
