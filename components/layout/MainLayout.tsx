import type { NextPage } from 'next'

import Footer from '../Footer'
import Navbar from '../Navbar'

type Props ={
    children: JSX.Element
}

const MainLayout: NextPage<Props> = ({children}) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout