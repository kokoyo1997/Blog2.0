import Photos from "./Photos";
import Sidebar from "./Sidebar";
import {Switch,Route} from 'react-router-dom';
import Articles from "./Articles";
import Article from "./Article";
import Reads from "./Reads";
import Read from "./Read";
import { SLOGAN } from "../assets/common";
// import {REPO} from "../assets/common"

function ContentList(){
    
    return (
        <div className="xl:flex container mx-auto flex-grow my-6 space-x-10 px-4">
            <Switch>
                <Route path={[`/albums/:zone`,`/albums`]}>
                    <Photos />
                    <Sidebar slogan={SLOGAN.PHOTO}/>
                </Route>
                <Route path={`/articles`}>
                    <Articles />
                    <Sidebar slogan={SLOGAN.ARTICLE}/>
                </Route>
                <Route path={`/article/:id`}>
                    <Article />
                    <Sidebar slogan={SLOGAN.ARTICLE}/>
                </Route>
                <Route path={`/reads`}>
                    <Reads />
                    <Sidebar slogan={SLOGAN.READ}/>
                </Route>
                <Route path={`/read/:id`}>
                    <Read />
                    <Sidebar slogan={SLOGAN.READ}/>
                </Route>
            </Switch>
        </div>
    );
}
export default ContentList;