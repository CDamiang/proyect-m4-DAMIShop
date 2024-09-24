'use client';

import Link from 'next/link';
import style from './Hero.module.css';
import Button from '../Button/Button';
import Image from 'next/image';
import img_1 from '../../assets/img_1.jpg';
import img_2 from '../../assets/img_2.jpg';
import img_3 from '../../assets/img_3.jpg'; // Añade más imágenes si es necesario
import { useEffect, useState } from 'react';

const images = [img_1, img_2, img_3]; // Array de imágenes

const Hero = () => {
  const [page, setPage] = useState<number>(0); // Inicializa con 0 para mostrar la primera imagen

  useEffect(() => {
    const int = setInterval(() => {
      setPage((prev) => (prev + 1) % images.length); // Cambia la imagen al siguiente índice
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(int);
  }, []);

  const handlePrevPage = () => {
    setPage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextPage = () => {
    setPage((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className={
        'container relative flex h-[calc(100vh-70px)] w-screen flex-col justify-center items-center'
      }
    >
      <div className="absolute w-full h-full">
        <Image
          className="w-full h-full object-cover object-center"
          sizes="100vw"
          fill
          alt="Image"
          src={images[page]} // Usa la imagen correspondiente según el estado
        />

        <div className="absolute bottom-2 rounded-lg left-1/2 -translate-x-1/2 text-base md:text-2xl">
          <Link href="/products">
            <Button className="">Ver productos</Button>
          </Link>
        </div>
        {/* left arrow*/}
        <div
          onClick={handlePrevPage}
          className="z-10 absolute bottom-1/2 left-4 text-2xl font-semibold"
        >
          <span className="text-primary inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-blue-300">
            &lt;-
          </span>
        </div>
        {/* right arrow*/}
        <div
          onClick={handleNextPage}
          className="z-10 absolute bottom-1/2 right-4 text-2xl font-semibold"
        >
          <span className="text-primary inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-blue-300">
            -&gt;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <h1>Hero</h1>
      <Link href="/products">
        <Button className="mt-10">Ver productos</Button>
      </Link> */
}
