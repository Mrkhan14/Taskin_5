// Core
import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// Components
import Loading from '../components/Loading';
// Function
export class PostPage extends Component {
   state = {
      post: null,
      loading: false,
   };
   async getPost() {
      let postId = window.location.pathname.split('/').at(-1);
      try {
         this.setState({ loading: true });
         let { data } = await axios.get(
            `https://fakestoreapi.com/products/${postId}`
         );
         this.setState({ post: data });
      } catch (err) {
         toast.error('Error');
      } finally {
         this.setState({ loading: false });
      }
   }
   componentDidMount() {
      this.getPost();
   }
   render() {
      const { post, loading } = this.state;
      return (
         <Fragment>
            <section>
               <div className='container'>
                  {loading ? (
                     <Loading heightStyle='90vh' classStyle='bg-primary' />
                  ) : (
                     <Fragment>
                        <Link
                           to='/posts'
                           className='d-block w-25 mt-3 border p-3'
                        >
                           Go back
                        </Link>
                        <div className='post-img'>
                           <img src={post?.image} alt='' />
                        </div>
                        <div className='product-Title'>{post?.title}</div>
                        <div className='product-category my-2'>
                           {post?.category}
                        </div>
                        <div className='product-price'>
                           Price: <span>{post?.price}$</span>
                        </div>
                        <div className='product-price'>
                           Count: <span>{post?.rating?.count}</span>
                        </div>
                        <div className='product-price'>
                           Rate: <span>{post?.rating?.rate}</span>
                        </div>
                        <div className='product-description'>
                           {post?.description}
                        </div>
                     </Fragment>
                  )}
               </div>
            </section>
         </Fragment>
      );
   }
}
export default PostPage;
