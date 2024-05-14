import React, {FC, useState} from 'react';
import './App.css';
import UsersComponent from "./components/UsersComponent";
import PostsComponent from "./components/PostsComponent";
import {getAllPostOfUser} from "./services/dummy.api.sevices";

import {IPostModel} from "./models/IPostModel";

 const App: FC = () => {
     const [posts,setPosts] = useState<IPostModel[]>([])
     const lift = (postId:number) =>{
         getAllPostOfUser(postId).then(({data:{posts}}) =>{
             setPosts(posts)
         })
     }
  return (
      <div className={'App'}>
          <div className={'users'}>
              <UsersComponent lift={lift}/>
          </div>
          <div className={'posts'}>
              <PostsComponent posts={posts} />
          </div>
      </div>
  );
 }

export default App;
