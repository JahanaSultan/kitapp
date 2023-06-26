import { createContext } from "react";

export const langs={
    az:{
        "home":"Ana Səhifə",
        "about":"Haqqımızda",
        "contact":"Əlaqə",
        "login":"Daxil ol",
        "register":"Qeydiyyat",
        "logout":"Çıxış",
        "search":"Axtar",
        "blog":"Blog",
    },
    en:{
        "home":"Home",
        "about":"About",
        "contact":"Contact",
        "login":"Login",
        "register":"Register",
        "logout":"Logout",
        "search":"Search",
        "blog":"Blog",
    }
}

const LangContext = createContext(langs.az);

export default LangContext;