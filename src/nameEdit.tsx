import * as React from 'react';

interface Props {
    initialUserName: string;
    onNameUpdated: (newName: string) => void;
}
interface State {
    editingName: string;

}

export class NameEditComponent extends React.Component <Props, State> {
    constructor (props:Props) {
        super(props);
        this.state = {editingName : this.props.initialUserName}
    }

    
    onChange = (event) => {
            this.setState({editingName : event.target.value});
    }

    onNameSubmit = (e) => {
        this.props.onNameUpdated (this.state.editingName);
    }
    public render(){
        return(
            <>
                <div>
                    <label>Update name: </label>
                    <input value={this.state.editingName} onChange={this.onChange}/>
                    <button className="btn btn-default" onClick={this.onNameSubmit}>Change</button>
                </div>
            </>
        );
    }
}

    



