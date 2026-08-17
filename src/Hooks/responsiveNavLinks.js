import { useEffect, useState } from "react";
import { navBarLinks } from "../Constants/navigationLinks";

const useResponsiveNavLinks = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    const navLinks = navBarLinks.filter((link) => {
        if (windowWidth >= 1024) {
            return link.priority >= 1;
        }

        if (windowWidth >= 768) {
            return link.priority <= 3;
        }

        if (windowWidth >= 480) {
            return link.priority <= 2;
        }

        return link.priority === 1;
    });

    const sideBarLinks = navBarLinks.filter((link) => {
        if (windowWidth >= 768) {
            return link.priority > 3;
        }

        if (windowWidth >= 450) {
            return link.priority > 2;
        }

        return link.priority > 1;
    });

    return {
        navLinks,
        sideBarLinks,
        windowWidth
    }
}

export default useResponsiveNavLinks;