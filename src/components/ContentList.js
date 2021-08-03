import Photos from "./Photos";
import Sidebar from "./Sidebar";
import {Switch,Route} from 'react-router-dom';
import Articles from "./Articles";
import Article from "./Article";
// import {REPO} from "../assets/common"

function ContentList(){
    
    return (
        <div className="flex container mx-auto flex-grow my-6 space-x-10 px-4">
            <Switch>
                <Route path={`/photos`}>
                    <Photos />
                    <Sidebar />
                </Route>
                <Route path={`/articles`}>
                    <Articles />
                    <Sidebar />
                </Route>
                <Route path={`/article/:id`}>
                    <Article />
                    <Sidebar />
                </Route>
            </Switch>
        </div>
    );
}
export default ContentList;