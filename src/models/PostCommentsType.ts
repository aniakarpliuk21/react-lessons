import {IPostModel} from "./IPostModel";
import {ICommentModel} from "./ICommentModel";

export type PostCommentsType = IPostModel & {comments:ICommentModel[]}