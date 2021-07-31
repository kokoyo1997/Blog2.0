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
                <Route path={["/photos","/articles","/article"]}>
                    <ContentList />
                </Route>

                <Route path="/search">
                    <Search />
                </Route>

                <Route path="/todo">
                    <Todo />
                </Route>

                <Route path="/games">
                    <Game />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
                
            </Switch>
        </div>
    )
}

export default Main;