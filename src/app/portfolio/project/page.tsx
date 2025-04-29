'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NFTMarketplace = () => {
  return (
    <div className="min-h-screen bg-[#2B2B2B] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2B2B2B]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
            <span className="text-2xl font-bold">NFT Marketplace</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#marketplace" className="hover:text-purple-500 transition-colors">
              Marketplace
            </Link>
            <Link href="#rankings" className="hover:text-purple-500 transition-colors">
              Rankings
            </Link>
            <Link href="#connect" className="hover:text-purple-500 transition-colors">
              Connect Wallet
            </Link>
            <button className="bg-[#A259FF] text-white px-6 py-3 rounded-2xl hover:bg-purple-700 transition-colors flex items-center space-x-2">
              <Image src="/images/user.svg" alt="User" width={20} height={20} />
              <span>Sign Up</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
              Discover Digital Art & Collect NFTs
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
            </p>
            <button className="bg-[#A259FF] text-white px-8 py-4 rounded-2xl hover:bg-purple-700 transition-colors flex items-center space-x-2">
              <Image src="/images/rocket.svg" alt="Rocket" width={20} height={20} />
              <span>Get Started</span>
            </button>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-bold">240k+</h3>
                <p className="text-gray-300">Total Sale</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">100k+</h3>
                <p className="text-gray-300">Auctions</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">20k+</h3>
                <p className="text-gray-300">Artists</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/images/hero_nft.png"
              alt="Featured NFT"
              width={600}
              height={600}
              className="rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#3B3B3B] p-6 rounded-b-2xl">
              <h3 className="text-2xl font-bold mb-2">Space Walking</h3>
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/avatar.png"
                  alt="Artist"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span>Animakid</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Collection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2B2B2B]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Trending Collection</h2>
            <p className="text-lg text-gray-300 mb-12">
              Checkout our weekly updated trending collection.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'DSGN Animals', image: '/images/collection1.png' },
              { title: 'Magic Mushrooms', image: '/images/collection2.png' },
              { title: 'Disco Machines', image: '/images/collection3.png' },
            ].map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[#3B3B3B] rounded-2xl overflow-hidden"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  width={330}
                  height={330}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/images/avatar.png"
                      alt="Artist"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span>MrFox</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Creators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Top Creators</h2>
              <p className="text-lg text-gray-300">
                Checkout Top Rated Creators on the NFT Marketplace
              </p>
            </div>
            <button className="border-2 border-[#A259FF] text-white px-8 py-3 rounded-2xl hover:bg-[#A259FF] transition-colors">
              View Rankings
            </button>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 12 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[#3B3B3B] rounded-2xl p-6 flex items-center space-x-4"
              >
                <div className="relative">
                  <div className="absolute -top-2 -left-2 bg-[#2B2B2B] rounded-full w-8 h-8 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <Image
                    src="/images/avatar.png"
                    alt={`Creator ${index + 1}`}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Artist {index + 1}</h3>
                  <p className="text-sm text-gray-400">
                    Total Sales: <span className="text-white">34.53 ETH</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2B2B2B]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Browse Categories</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Art',
                image: '/images/categories/art.png',
                icon: '/images/categories/art-icon.svg'
              },
              { 
                title: 'Collectibles',
                image: '/images/categories/collectibles.png',
                icon: '/images/categories/collectibles-icon.svg'
              },
              { 
                title: 'Music',
                image: '/images/categories/music.png',
                icon: '/images/categories/music-icon.svg'
              },
              { 
                title: 'Photography',
                image: '/images/categories/photography.png',
                icon: '/images/categories/photography-icon.svg'
              },
              { 
                title: 'Video',
                image: '/images/categories/video.png',
                icon: '/images/categories/video-icon.svg'
              },
              { 
                title: 'Utility',
                image: '/images/categories/utility.png',
                icon: '/images/categories/utility-icon.svg'
              },
              { 
                title: 'Sport',
                image: '/images/categories/sport.png',
                icon: '/images/categories/sport-icon.svg'
              },
              { 
                title: 'Virtual Worlds',
                image: '/images/categories/virtual-worlds.png',
                icon: '/images/categories/virtual-worlds-icon.svg'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[#3B3B3B] rounded-2xl overflow-hidden cursor-pointer group"
              >
                <div className="relative h-[240px]">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-white/10">
                    <Image
                      src={category.icon}
                      alt={`${category.title} icon`}
                      width={100}
                      height={100}
                      className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-center">{category.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-[#3B3B3B] rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">Join our weekly digest</h2>
              <p className="text-lg text-gray-300 mb-8">
                Get exclusive promotions & updates straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="flex-1 px-6 py-4 rounded-2xl text-black"
                />
                <button className="bg-[#A259FF] text-white px-8 py-4 rounded-2xl hover:bg-purple-700 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/subscribe.jpg"
                alt="Subscribe"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3B3B3B] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
              <span className="text-2xl font-bold">NFT Marketplace</span>
            </div>
            <p className="text-gray-300 mb-4">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className="text-gray-300">Join our community</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Explore</h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="#marketplace">Marketplace</Link></li>
              <li><Link href="#rankings">Rankings</Link></li>
              <li><Link href="#connect">Connect a wallet</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-6">Join Our Newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 px-6 py-4 rounded-2xl text-black"
              />
              <button className="bg-[#A259FF] text-white px-8 py-4 rounded-2xl hover:bg-purple-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © NFT Market. Use this template freely.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NFTMarketplace;

