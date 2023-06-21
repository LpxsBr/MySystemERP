import { getSession } from "next-auth/react"
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Navbar() {

    const [user, setUser] = useState()

    const session = getSession();

    useEffect(() => {
        session.then((data) => setUser(data))
    }, [session])

    const style = {
        display: 'flex',
        backgroundColor: '#000',
        height: '100px',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '70%'
    }

    const styleLoggedNav = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    }

    const img = {
        borderRadius: 50
    }

    return (
        <header style={style}>
            <nav>
                <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>LOGO</Link>
            </nav>
            <nav className="nav">
                {!user
                    ?

                    <ul>
                        <Link href="#">Home</Link>
                        <Link href="#">Login</Link>
                    </ul>
                    :
                    <ul style={styleLoggedNav}>
                        <img style={img} alt="avatar" src={user?.user.image} height={40} width={40} />
                        <span>{user?.user.name}</span>
                    </ul>
                }
            </nav>
        </header>
    )
}