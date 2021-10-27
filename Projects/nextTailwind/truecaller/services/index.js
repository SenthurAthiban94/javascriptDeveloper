import {API} from './../config';

export const fetchPosts = (urlPath)=>{
        return fetch(`${API.postsUrl}${urlPath}`).then(res=>res.json()).catch(err=>{
            console.log(err);
            return {
              posts: [],
              found: 0,
            };
        });
}

export const fetchCategories = ()=>{
    return fetch(API.categoriesUrl).then(res=>res.json()).then((data)=>{
        data.categories = [{
            ID: 0,
            name: 'All Categories',
            slug: '',
            value: ''
          },...data.categories];

        return data;
    }).catch(err=>{
        console.log(err);
        return {
            categories: [],
            found: 0,
        };
    });
};

export const fetchPostDetails = (slug)=>{
    return fetch(`${API.postDetailsUrl}slug:${slug}/?fields=featured_image,title,author,content,date`).then(res=>res.json()).catch(err=>{
        console.log(err);
        return false;
    });
}