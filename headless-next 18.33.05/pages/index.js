import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

//Components
import BlogList from './blog/blog-landing.js';

export default function Home() {
   return (
      <main className="wrapper">
         <BlogList />
      </main>
   )
}