import Hal1 from "../page/Hal1";
import Hal2 from "../page/Hal2";
import {Route, Switch} from 'react-router-dom'
export default function App(){
    return (
        <Switch>
            <Route exact path ="/" component={Hal1} />
            <Route path ="/hal2" component={Hal2} />
        </Switch>
      );
}