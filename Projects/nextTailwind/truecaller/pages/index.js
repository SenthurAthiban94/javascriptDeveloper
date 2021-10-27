import Head from 'next/head'
import Banner from './../components/common/banner';
import PostsListing from './../components/posts/listing';
import { fetchPosts, fetchCategories} from './../services';
import {useState} from 'react';


const Posts = ({isSSR = false,found = 0, categories=[], posts=[]})=>{
    const [contentRef, setContentRef] = useState(null);
    const getTargetRef = (ref)=>{
      setContentRef(ref);
    }
    return (
        <>
            <Head>
                <title>Blog - Home | Truecaller is the leading global platform for verifying contacts and blocking unwanted communication.</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <meta name="description" content="280 million people trust Truecaller on a daily basis..."/>
                <link rel="canonical" href="/"/>
                <meta property="og:title" content="Home - Blog | Truecaller"/>
                <meta property="og:description" content="280 million people trust Truecaller on a daily basis..."/>
                <meta property="og:image" content="/assets/logo/logo512.png"/>
                <meta property="og:url" content="/"/>
            </Head>
            <Banner src="/assets/banner/homeBanner.jpg" title="The Truecaller Blog" scrollAction={contentRef}/>
            <PostsListing sectionTitle="Latest articles"
              passRef={getTargetRef}
              isSSR={isSSR} 
              data={{
                categories,
                posts,
                found
              }} />
        </>
      )
}

export async function getServerSideProps({query}) {
  const {posts, found} = await fetchPosts(`?fields=slug,categories,post_thumbnail,title,date&number=20&page=${query.page || 1}${query.category ? `&category=${query.category}` : ''}`);
  const {categories=[]} = await fetchCategories();
  return {
      props: {
          posts,
          found,
          categories,
          isSSR:true
      },
  }
}

export default Posts;