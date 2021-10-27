import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from '../_error';
import PostDetails from './../../components/posts/description';
import {fetchPostDetails} from './../../services';
import { useEffect, useState } from 'react';

const PostDetailsPage = ({isSSR=false,data=false})=>{
    const router = useRouter();
    const { slug = false} = router.query; 
    const [postData, setPostData] = useState(data || {});
    if(!slug) return <ErrorPage/>

    useEffect(async ()=>{
        if(!isSSR && router.query){
            const postData = await fetchPostDetails(router.query.slug);
            postData && setPostData(postData);
        }
    },[]);

    return (
        <>
            <Head>
                {   
                    postData ? (
                        <>
                            <title>{postData.title} | Truecaller Blog.</title>
                            <link rel="canonical" href={`/posts/${router.query.slug}`}/>
                            {postData.featured_image && <meta property="og:image" content={postData.featured_image}/>}
                            <meta property="og:title" content={`${postData.title} | Truecaller Blog.`}/>
                        </>
                    ) : ''
                }
            </Head>
            <PostDetails 
                title={postData.title}
                featured_image={postData.featured_image}
                author={postData.author}
                content={postData.content}
                date={postData.date}
            />
        </>
      )
}

export async function getServerSideProps({query, res}) {
    if(!query.slug) return res.writeHead(404);
    const data = await fetchPostDetails(query.slug);
    return {
        props: {
            data,
            isSSR: true,
        }
    }
}

export default PostDetailsPage;