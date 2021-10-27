const Footer = ({company = 'True Software Scandinavia AB'})=>{
    return <footer className="p-8 h-20 text-white bg-bgSecondary">
        <div className="container mx-auto text-xs flex justify-center md:justify-start">
            &copy; {company}
        </div>
    </footer>
}
export default Footer;