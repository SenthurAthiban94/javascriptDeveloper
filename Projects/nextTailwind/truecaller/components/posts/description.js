import Banner from './../common/banner';
import Avatar from './../posts/avatar';
import md from './../../utils/mdRenderer';

const PostDetails = ({ title = false, author={}, content=false, date=false, featured_image=false })=>{
    return <>
        <Banner src={featured_image}/>
        <div className="container mx-auto my-4 sm:my-10 px-6 md:px-28 lg:px-64">
            <h1 className="text-2xl sm:text-5xl font-bold" dangerouslySetInnerHTML={{__html:md(title)}}></h1>
            <div className="py-4">
                <Avatar author={author.name} picture={author.avatar_URL} date={date}/>
            </div>
            <div className="dynamic-content py-4" dangerouslySetInnerHTML={{__html:md(content)}}></div>
        </div>
    </>
}
export default PostDetails;