import * as React from "react";
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";

export default function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ backgroundColor: match ? "#3A4256" : "white", color: match ? 'white' : '#3A4256' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}