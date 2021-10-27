import Link from 'next/link';

const Header = ({logo, logotitle='Truecaller', logoalt = 'Truecaller', children})=>{
    return <>
            <header className="py-6 px-8 h-20 bg-primary text-secondary shadow-md fixed w-full z-20">
                {logo ? <Link href="/">
                    <img className="cursor-pointer w-36 h-full"
                        src={logo}
                        title={logotitle}
                        alt={logoalt}
                        height="100"
                        width="100"
                    /> 
                </Link> : null}
        </header>
        <main className="pt-20">
            {children}
        </main>
    </>
}
export default Header;