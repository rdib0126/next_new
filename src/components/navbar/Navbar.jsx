'use client'
import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import DarkMode from '../DarkMode/DarkMode';

const links = [
    {
        id: 1,
        title: 'Home',
        url: "/",
    },
    {
        id: 2,
        title: 'Portfolio',
        url: "/portfolio",
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard',
    },
];

const Navbar = () => {
  return (
    <div className={styles.container }>
        <Link href='/' className={styles.logo }>Das</Link>
        <div className={styles.links }>
        <DarkMode />
        {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
        <button onClick={() => {
            console.log('logout')
        }} className={styles.logout }>Logout</button>
        </div>
    </div>
  )
}

export default Navbar