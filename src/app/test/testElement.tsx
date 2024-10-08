"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function TestElement() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })  // Menggunakan useInView dari Framer Motion

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }} // Animasikan berdasarkan apakah elemen terlihat
            transition={{ duration: 2 }}
            style={{ height: "100vh" }} // Tinggi untuk uji scrolling
        >
            <h1>Fade In on Scroll with Framer Motion</h1>
        </motion.div>
    )
}
