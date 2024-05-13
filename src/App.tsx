import UsersComponent from "./components/UsersComponent";
import PostsComponent from "./components/PostsComponent";
import {getAllPostOfUser} from "./services/jpg.api.services";
import {useState} from "react";
import {IPostModel} from "./models/IPostModel";


const App = () => {
    const [posts,setPosts] = useState<IPostModel[]>([])
    const lift = (postId:number) => {
        getAllPostOfUser(postId).then(({data})=>{
            setPosts(data)})
    }
  return (
    <div className={'all'}>
        <div className={'users'}>
            <UsersComponent  lift={lift}/>
        </div>
        <div className={'posts'}>
            <PostsComponent posts={posts}/>
        </div>
    </div>
  )
}

export default App;
