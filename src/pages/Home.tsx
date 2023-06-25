import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Featured from "../components/Featured"
import Authors from "../components/Authors"
import NewBook from "../components/NewBook"
import RentBookShelf from "../components/RentBookShelf"
import Blogs from "../components/Blogs"

const Home = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <Featured/>
            <Authors/>
            <NewBook/>
            <RentBookShelf/>
            <Blogs/>
        </>
    )
}

export default Home