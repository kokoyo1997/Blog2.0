import Search from "./Search";
import {Switch,Route} from 'react-router-dom';
import ContentList from "./ContentList";
import Todo from "./Todo";
import Game from "./Game";
import About from "./About";
import Home from "./Home";
import {REPO} from "../assets/common";
function Main(){
    return (
        <div className="flex flex-grow box-border">
            <Switch>
                <Route path={[`${REPO}/photos`,`${REPO}/articles`,`${REPO}/article`]}>
                    <ContentList />
                </Route>

                <Route path={`${REPO}/search`}>
                    <Search />
                </Route>

                <Route path={`${REPO}/todo`}>
                    <Todo />
                </Route>

                <Route path={`${REPO}/games`}>
                    <Game />
                </Route>

                <Route path={`${REPO}/about`}>
                    <About />
                </Route>

                <Route path={`${REPO}`}>
                    <Home />
                </Route>
                
            </Switch>
        </div>
    )
}

export default Main;