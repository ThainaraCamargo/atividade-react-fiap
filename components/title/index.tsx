import { CSSProperties } from "react";

interface TitleProps {
    children: React.ReactNode;
    style?:CSSProperties;
}
const Title = ({children, style}: TitleProps) => {
    return (
        <h1 style={style}>{children}</h1>
    )
}

export default Title;