import Header from './layoutElements/header'
import Footer from './layoutElements/footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
