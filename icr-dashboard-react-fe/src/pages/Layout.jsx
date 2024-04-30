import React from 'react'
import { Navbar } from '../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return (
        <section className='flex w-full bg-offWhite min-h-screen'>
            <nav className='flex min-h-screen bg-white'>
                <Navbar />
            </nav>
            <main className='px-12 w-full overflow-x-hidden'>
                <Outlet />
            </main>

        </section>
    )
}

export default Layout
