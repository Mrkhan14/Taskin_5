// Core
import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { toast } from 'react-toastify';
// Constants
import { LIMIT } from '../constants';
// Components
import PostCard from '../components/card/PostCard';
import Loading from '../components/Loading';

export class PostsPage extends Component {
   state = {
      posts: [],
      loading: false,
      total: 0,
      search: '',
      activePage: 1,
      limit: LIMIT,
      allPosts: [],
      filteredPosts: [],
   };

   async getAllPosts() {
      try {
         this.setState({ loading: true });
         let { data } = await axios.get('https://fakestoreapi.com/products');
         this.setState({
            allPosts: data,
            filteredPosts: data,
            total: data.length,
         });
      } catch (err) {
         toast.error('Error');
      } finally {
         this.setState({ loading: false });
      }
   }

   getPaginatedPosts() {
      const { activePage, limit, filteredPosts } = this.state;
      const startIndex = (activePage - 1) * limit;
      const paginatedPosts = filteredPosts.slice(
         startIndex,
         startIndex + limit
      );
      return paginatedPosts;
   }

   componentDidMount() {
      this.getAllPosts();
   }

   handleSearch = e => {
      const searchValue = e.target.value.toLowerCase();
      const filteredPosts = this.state.allPosts.filter(post =>
         post.title.toLowerCase().includes(searchValue)
      );
      this.setState({
         search: searchValue,
         activePage: 1,
         total: filteredPosts.length,
         filteredPosts: filteredPosts,
      });
   };

   getPage = page => {
      const { activePage } = this.state;
      const newActivePage =
         page === '+' ? activePage + 1 : page === '-' ? activePage - 1 : page;
      this.setState({ activePage: newActivePage });
   };

   render() {
      const { loading, total, search, activePage, limit } = this.state;
      const paginatedPosts = this.getPaginatedPosts();

      const pagesQuantity = Math.ceil(total / limit);

      return (
         <Fragment>
            <section>
               <div className='container'>
                  <h1>Posts Page ({total})</h1>
                  <input
                     value={search}
                     onChange={this.handleSearch}
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
                        {paginatedPosts.map(post => (
                           <PostCard key={post.id} {...post} />
                        ))}
                     </div>
                  )}

                  <button
                     className={`${activePage === 1 ? 'disabled' : ''}`}
                     onClick={() => this.getPage('-')}
                  >
                     Previous
                  </button>
                  {Array(pagesQuantity)
                     .fill(1)
                     .map((_, i) => (
                        <button
                           key={i}
                           className={
                              i + 1 === activePage
                                 ? 'bg-primary text-light'
                                 : ''
                           }
                           onClick={() => this.getPage(i + 1)}
                        >
                           {i + 1}
                        </button>
                     ))}
                  <button
                     className={`${
                        activePage === pagesQuantity ? 'disabled' : ''
                     }`}
                     onClick={() => this.getPage('+')}
                  >
                     Next
                  </button>
               </div>
            </section>
         </Fragment>
      );
   }
}

export default PostsPage;
