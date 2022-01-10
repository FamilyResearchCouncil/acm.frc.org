import Header from './fullWidthComponents/header'
import Footer from './fullWidthComponents/footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
