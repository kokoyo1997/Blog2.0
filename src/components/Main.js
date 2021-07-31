import Search from "./Search";
import {Switch,Route} from 'react-router-dom';
import ContentList from "./ContentList";
import Todo from "./Todo";
import Game from "./Game";
import About from "./About";
import Home from "./Home";
function Main(){
    return (
        <div className="flex flex-grow box-border">
            <Switch>
                <Route path={[`${process.env.PUBLIC_URL}/photos`,`${process.env.PUBLIC_URL}/articles`,`${process.env.PUBLIC_URL}/article`]}>
                    <ContentList />
                </Route>

                <Route path={`${process.env.PUBLIC_URL}/search`}>
                    <Search />
                </Route>

                <Route path={`${process.env.PUBLIC_URL}/todo`}>
                    <Todo />
                </Route>

                <Route path={`${process.env.PUBLIC_URL}/games`}>
                    <Game />
                </Route>

                <Route path={`${process.env.PUBLIC_URL}/about`}>
                    <About />
                </Route>

                <Route path={`${process.env.PUBLIC_URL}`}>
                    <Home />
                </Route>
                
            </Switch>
        </div>
    )
}

export default Main;