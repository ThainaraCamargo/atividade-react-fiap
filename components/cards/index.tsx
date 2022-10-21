import styles from './style.module.css';

interface CardProps {
    children: React.ReactNode;
    href: string;
}

const Card = ({children, href}: CardProps ) => {

    return(
        <a className={styles.container} href={href}> 
            {children}
        </a>
    )
}

export default Card;