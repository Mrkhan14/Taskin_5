import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';

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
            `https://jsonplaceholder.typicode.com/posts/${postId}`
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
                     <Loading heightStyle='300px' classStyle='bg-primary' />
                  ) : (
                     <Fragment>
                        <div className=''>
                           <h1>{post?.title}</h1>
                           <p>{post?.body}</p>
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
