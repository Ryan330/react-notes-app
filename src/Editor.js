//React Init
import React from "react";




//Notes Editor
class Editor extends React.Component {
    render() {
        return (
            <div className="mainPageContainerRight">

                <textarea value={this.props.note.content}/>
            
            </div>
        );
    }
}


export default Editor;