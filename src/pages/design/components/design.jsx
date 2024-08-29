import React from 'react';
import NewsPage from '../../../components/newsPage';
import { blog1, blog2, blog3 } from '../../../assets';

const designArticles = [
    {
        title: "The Changing Landscape of Political Journalism",
        content: "Adipisci atque debitis eos fugiat, pariatur quae...",
        author: "Jane Doe",
        category: "Politics",
        date: "Aug 19",
        readTime: "5 min",
        image: blog1, // Add another image
    },
    {
        title: "The Changing Landscape of Political Journalism",
        content: "Adipisci atque debitis eos fugiat, pariatur quae...",
        author: "Jane Doe",
        category: "Politics",
        date: "Aug 19",
        readTime: "5 min",
        image: blog2, // Add another image
    },
    {
        title: "The Changing Landscape of Political Journalism",
        content: "Adipisci atque debitis eos fugiat, pariatur quae...",
        author: "Jane Doe",
        category: "Politics",
        date: "Aug 19",
        readTime: "5 min",
        image: blog3, // Add another image
    },
    {
        title: "The Changing Landscape of Political Journalism",
        content: "Adipisci atque debitis eos fugiat, pariatur quae...",
        author: "Jane Doe",
        category: "Politics",
        date: "Aug 19",
        readTime: "5 min",
        image: blog1, // Add another image
    },
    {
        title: "News Needs to Meet Its Audiences Where They Are",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        author: "Dave Rogers",
        category: "Politics",
        date: "Jun 14",
        readTime: "3 min",
        image: blog3, // Add image for each article
    },
];

const popularPosts = [
    {
        title: "Understanding Modern Political Campaigns",
        author: "Alice Smith",
        category: "Politics",
        date: "Jul 21",
        readTime: "4 min",
    },
    {
        title: "How Social Media Shapes Political Discourse",
        author: "John Doe",
        category: "Politics",
        date: "Aug 25",
        readTime: "6 min",
    },
    {
        title: "How Social Media Shapes Political Discourse",
        author: "John Doe",
        category: "Politics",
        date: "Aug 25",
        readTime: "6 min",
    },
    {
        title: "How Social Media Shapes Political Discourse",
        author: "John Doe",
        category: "Politics",
        date: "Aug 25",
        readTime: "6 min",
    },
    
];

const DesignPage = () => {
    return (
        <NewsPage
            articles={designArticles} // Articles for the main section
            popularPosts={popularPosts} // Articles for the popular posts section
            sectionTitle="Design"
            popularPostsTitle="Popular Posts"
        />
    );
}

export default DesignPage;
