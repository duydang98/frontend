import React from 'react';
import { Link } from 'react-router-dom';
function Blog(props) {
    return (
        <div id="content"> 
            <div className="page-title">
                <div className="container">
                    <div className="page-title-inner">
                        <h3>Blog</h3>
                        <div className="breadcumb"> <Link to="/">Home</Link><span> / </span><span>Blog</span></div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        <div className="container">
            <div className="blog">
                <div className="row">
                    <div className="col-md-8 blog-content">
                        <div className="row">

                            <div className="col-md-12 blog-block">
                                <div className="inner">
                                    <div className="blog-image">
                                      <i className="fa fa-image"></i>
                                        <a href="/"><img src="images/blog-1.jpg" alt="" className="img-responsive"/></a>
                                    </div>
                                    <h3 className="blog-post-title"><a href="/">Mauris dictum facilisis condimentum</a></h3>
                                    <div className="blog-meta">July 28, 2014<span>|</span><a href="/">23 Comments</a></div>
                                    <p>
                                        Morbi ultricies porttitor varius. In hac habitasse platea dictumst. Vestibulum convallis blandit augue quis sagittis. Quisque semper velit dui, sit amet cursus arcu interdum sit amet. Maecenas augue dui, suscipit non fringilla sed, congue vitae purus. Aenean non aliquam mi.
                                    </p>
                                    
                                </div>
                            </div>
                    
                        
                    </div>
          
                </div>
            </div>
        </div>

    </div>
    </div>
    );
}

export default Blog;