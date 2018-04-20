import * as React from 'react';
import { HelloComponent } from './hello';
import {NameEditComponent} from './nameEdit'

interface Props {

}
interface State {
    userName : string;
}

export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { userName: "nombre inicial" };
    }

    setUserNameState = (newName : string) => {
       this.setState({ userName: newName });
    }

    
    public render() {
        return (
            <>
                <HelloComponent userName={this.state.userName} />
                <NameEditComponent 
                    initialUserName = {this.state.userName} 
                    onNameUpdated = {this.setUserNameState}
                />
            </>
        )
    }
}



/*
export const App = () => 
    <HelloComponent userName = "John" />
    */