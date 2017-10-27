import React,{Component} from 'react' ;
import CharacterList from './CharacterList';

class App extends Component {
    render(){
        return(
            <div>
                <h3>SuperSuqad</h3>
                <CharacterList />
            </div>
        )
    }
}

export default App;