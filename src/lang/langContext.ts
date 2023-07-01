import { createContext } from "react";

export const langs = {
    az: {
        "home": "Ana Səhifə",
        "about": "Haqqımızda",
        "contact": "Əlaqə",
        "login": "Daxil ol",
        "register": "Qeydiyyat",
        "logout": "Çıxış",
        "search": "Axtar",
        "blog": "Blog",
        "shop": "Mağaza",
        "header": {
            "h1": "Kitab Rəfinizi",
            "h1_2": "Yeniləyin",
            "p": "Kitablarınızı bizə gətirin və ya bizimlə əlaqə saxlayın və ",
            "p2": "kitablarınızı yeniləyin"
        },
        "heading":{
            "featured_h1": "Ən Çox Oxunanlar",
            "featured_p": "Ən çox oxunan kitablarımızı kəşf edin",
            "writers_h1": "Ayın Yazarları",
            "writers_p": "Ayın yazarlarını kəşf edin",
            "rent":"Kitab Kirayəsi",
            "rent_p":"Kitab kirayəsi və kitablarınızı rəfə qoyun",
            "blogs":"Bloglar",
            "blogs_p":"Kitablar haqqında yazılmış blogları oxuyun"
        },
        "button":{
            "explore": "Kəşf Et",
            "seemore": "Daha Çox Gör",
            "readmore": "Daha Çox Oxu",
            "reccomendatiton": "Bütün Təkliflər"
        },
        "reccomendation": {
            "h1": "Kitab",
            "h1_2": "Tövsiyyələri",
            "h2": "Həftəlik"
        }
    },
    en: {
        "home": "Home",
        "about": "About",
        "contact": "Contact",
        "login": "Login",
        "register": "Register",
        "logout": "Logout",
        "search": "Search",
        "blog": "Blog",
        "shop": "Shop",
        "header": {
            "h1": "Get Your New",
            "h1_2": "Book Collections",
            "p": "Bring your books to us or contact us and ",
            "p2": "renew your books"
        },
        "heading":{
            "featured_h1": "Featured Books",
            "featured_p": "Explore our most featured books",
            "writers_h1": "Writers of the Month",
            "writers_p": "Explore writers of the month",
            "rent":"Rent Bookshelf",
            "rent_p":"Rent a bookshelf and put your books on it",
            "blogs":"Blogs",
            "blogs_p":"Read blogs about books"
        },
        "button":{
            "explore": "Explore More",
            "seemore": "See More",
            "readmore": "Read More", 
            "reccomendatiton": "See All Reccomendations"
        },
        "reccomendation": {
            "h1": "Book",
            "h1_2": "Reccomendations",
            "h2": "Of The Week"
        }
    }
}

const LangContext = createContext(langs.az);

export default LangContext;