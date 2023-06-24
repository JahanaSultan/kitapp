import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Featured from "../components/Featured"
import Authors from "../components/Authors"
import NewBook from "../components/NewBook"

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <Featured/>
            <Authors/>
            <NewBook/>
        </>
    )
}

export default Home