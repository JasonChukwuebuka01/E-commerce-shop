import React, { useState } from 'react'
import blogList from "../utilis/blogdata";
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';



const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]


const SingleBlog = () => {

    const [blog, setBlog] = useState(blogList);

    const { id } = useParams();

    const result = blog.filter(b => b.id === Number(id));


    return (
        <div>
            <PageHeader
                title={"Single Blog Page"}
                curPage={"Blog / Blog Details"}
            />

            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">


                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map(item => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>

                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className="lab-ul">
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName}>{val.text}</i></li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                        Lorem Ipsum has been the industry's standard dummy
                                                                        text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing
                                                                        and typesetting industry. Lorem Ipsum has been the industry's standard
                                                                        dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the
                                                                        printing and typesetting industry. Lorem Ipsum has been the industry's
                                                                        standard dummy text ever since the 1500s,
                                                                    </p>
                                                                    <blockquote>
                                                                        <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd
                                                                            porta monetize covalent leadership after without resource.
                                                                        </p>
                                                                        <cite>
                                                                            <a href="#">...Mellisa Hunter</a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                        Lorem Ipsum has been the industry's standard dummy
                                                                        text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing
                                                                        and typesetting industry. Lorem Ipsum has been the industry's standard
                                                                        dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the
                                                                        printing and typesetting industry. Lorem Ipsum has been the industry's
                                                                    </p>
                                                                    <img src="/images/blog/single/01.jpg" alt="" />
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                                        Lorem Ipsum has been the industry's standard dummy
                                                                        text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing
                                                                        and typesetting industry. Lorem Ipsum has been the industry's standard
                                                                        dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the
                                                                        printing and typesetting industry. Lorem Ipsum has been the industry's
                                                                        standard dummy text ever since the 1500s,
                                                                    </p>

                                                                    <div className="video-thumb">
                                                                        <img src="/images/blog/single/02.jpg" alt="" />
                                                                        <a href="https://youtu.be/--VcGI9iPvw?si=fES_tCgbysPE5zpy"
                                                                            className='video-button popup'
                                                                            target='_blank'
                                                                        >
                                                                            <i className="icofont-ui-play"></i>
                                                                        </a>
                                                                    </div>

                                                                    <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd
                                                                        porta monetize covalent leadership after without resource.
                                                                    </p>
                                                                    <div className="tags-section">
                                                                        <ul className="tags lab-ul">
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>

                                                                        </ul>
                                                                        <ul className="lab-ul social-icons">
                                                                            {
                                                                                socialList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>

                                            <div className="navigations-part">
                                                <div className="left">
                                                    <a href="#" className='prev'>
                                                        <i className="icofont-double-left"></i>Previous Blog
                                                    </a>
                                                    <a href="#" className='title'>
                                                        Typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s
                                                    </a>
                                                </div>

                                                <div className="right">
                                                    <a href="#" className='prev'>
                                                        <i className="icofont-double-right"></i>Next Blog
                                                    </a>
                                                    <a href="#" className='title'>
                                                        Typesetting industry. Lorem Ipsum has been the industry's
                                                        standard dummy text ever since the 1500s
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="col-lg-4 col-12">
                            <aside>
                                <Tags />
                                <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog