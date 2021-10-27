import DropDown from "../common/dropdown";
import Head from 'next/head';
import Link from 'next/link';
import Pagination from '../common/pagination';
import Card from "../common/card";
import { useRef, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { fetchPosts, fetchCategories } from "../../services";

const ListPosts = ({passRef=false, sectionTitle = '', isSSR=false, data = {}, })=>{
    const contentRef = useRef(null);
    const router = useRouter();
    const initialState = isSSR ? {
        posts: data.posts,
        found: data.found,
    }: {
        posts: [],
        found: 0,
    }
    const [postsData, setPostsData] = useState(initialState);
    const [page, setPage] = useState(router.query.page || 1);
    const [categories, setCategories] = useState(data.categories || []);
    const [categorySelected, setCategory] = useState(data.categories?.[0] || false);

    useEffect(async ()=>{
        if(!isSSR){
            const {categories=[]} = await fetchCategories();
            setCategories(categories);
        }
        passRef && passRef(contentRef);
    },[]);

    useEffect(()=>{
        const {category} = router.query;
        let filteredCategory = category && categories ? categories.find(cat=>cat.slug===category) : categories[0];
        setCategory(filteredCategory);
    },[categories]);

    useEffect(()=>{
        refetchPosts();
    },[page]);

    useEffect(()=>{
        setPage(1);
    },[categorySelected])

    const handlePageChange = (page)=>{
        contentRef.current.scrollIntoView({ behavior: 'smooth' ,block: "start", inline: "nearest"});
        setPage(page);
    }

    const handleCategoryChange = async (selectedCategory)=>{
        const { category, page=1, ...restQueries} = router.query;
        router.push({
            pathname: '/',
            query: { 
                ...restQueries,
                ...(selectedCategory.slug ? {category: selectedCategory.slug} : {})
            },
        }, undefined, { shallow: true });
        setCategory(selectedCategory);
        refetchPosts(selectedCategory.slug);
    }
    const refetchPosts = async (category)=>{
        const { posts, found } = await fetchPosts(`?fields=slug,categories,post_thumbnail,title,date&number=20&page=${page}${category ? `&category=${category}` : ''}`);
        setPostsData({
            posts,
            found
        });
    }
    const navigateTo = (slug)=>router.push(`/posts/${slug}`);

    return <div className="container mx-auto px-4 sm:px-10 pt-20 pb-10 grid gap-6" ref={contentRef}>
            <Head>
                {   categorySelected && categorySelected.slug ? (
                        <>
                            <title>{categorySelected.name} Blog | Truecaller is the leading global platform for verifying contacts and blocking unwanted communication.</title>
                            <meta name="description" content={categorySelected.description}/>
                            <link rel="canonical" href={categorySelected.feed_url}/>
                            <meta property="og:title" content={`${categorySelected.name} Blog | Truecaller is the leading global platform for verifying contacts and blocking unwanted communication.`}/>
                            <meta property="og:description" content={categorySelected.description}/>
                            <meta property="og:image" content="/assets/logo/logo512.png"/>
                            <meta property="og:url" content={categorySelected.feed_url}/>
                        </>
                    ) : ''
                }
            </Head>
            <h2 className="text-txtPrimary my-4 text-6xl font-bold">{sectionTitle}</h2>
            <div className="grid grid-cols-4 gap-4">
                {
                    categories.length && 
                    <div className="col-start-1 col-end-6 sm:col-end-2 mb-6">
                        <DropDown options={categories} onChange={handleCategoryChange} initialOption={categorySelected}/>
                    </div>
                } 
                {
                    postsData.found > 0 && 
                    <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 col-span-5">
                    {
                        postsData.posts.map(p=><Link key={p.slug} href={`/posts/${p.slug}`} passHref>
                            <a><Card 
                            title={p.title}
                            slug={p.slug}
                            category={p.categories}
                            date={p.date}
                            thumbnail={p.post_thumbnail?.URL}
                        /></a>
                        </Link>)
                    }
                    </div>
                }
            </div>
            {
                !postsData.found>0 && <div className="flex my-6 text-3xl text-gray-500 items-center justify-center">
                    No Posts Found!
                </div>
            }
            <Pagination total={postsData.found} currentPage={Number(page)} onChange={handlePageChange} />
        </div>
}

export default ListPosts