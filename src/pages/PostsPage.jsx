import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';
import PostCard from '../components/card/PostCard';
import Loading from '../components/Loading';
import { LIMIT } from '../constants';

export class PostsPage extends Component {
   state = {
      posts: [],
      loading: false,
      total: 0,
      search: '',
      activePage: 1,
   };
   async getPosts(search = '', page = 1) {
      try {
         this.setState({ loading: true });
         let { data } = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
            { params: { q: search, _page: page, _limit: LIMIT } }
         );
         let { data: allData } = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
            { params: { q: search } }
         );
         this.setState({ posts: data, total: allData.length });
      } catch (err) {
         toast.error('Error');
      } finally {
         this.setState({ loading: false });
      }
   }
   componentDidMount() {
      this.getPosts();
   }
   render() {
      const { posts, loading, total, search, activePage } = this.state;
      const handleSearch = e => {
         this.getPosts(e.target.value);
         this.setState({ search: e.target.value, activePage: 1 });
      };
      const getPage = page => {
         const { activePage } = this.state;
         const newActivePage =
            page === '+'
               ? activePage + 1
               : page === '-'
               ? activePage - 1
               : page;
         this.setState({ activePage: newActivePage });
         this.getPosts(search, newActivePage);
      };
      const pagesQuantity = Math.ceil(total / LIMIT);
      return (
         <Fragment>
            <section>
               <div className='container'>
                  <h1>Posts Page ({total})</h1>
                  <input
                     value={search}
                     onChange={handleSearch}
                     type='text'
                     className='form-control'
                     placeholder='Searching...'
                  />
                  {loading ? (
                     <Loading
                        heightStyle='400px'
                        classStyle='bg-success w-100'
                     />
                  ) : (
                     <div className='post-cart w-100'>
                        {posts.map(post => (
                           <PostCard key={post.id} {...post} />
                        ))}
                     </div>
                  )}

                  <button
                     className={`${activePage === 1 ? 'disabled' : ''}`}
                     onClick={() => getPage('-')}
                  >
                     Previous
                  </button>
                  {Array(pagesQuantity)
                     .fill(1)
                     .map((_, i) => (
                        <button
                           className={
                              i + 1 === activePage
                                 ? 'bg-primary text-light'
                                 : ''
                           }
                           onClick={() => getPage(i + 1)}
                        >
                           {i + 1}
                        </button>
                     ))}
                  <button
                     className={`${
                        activePage === pagesQuantity ? 'disabled' : ''
                     }`}
                     onClick={() => getPage('+')}
                  >
                     Nex
                  </button>
               </div>
            </section>
         </Fragment>
      );
   }
}

export default PostsPage;
