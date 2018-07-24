//React Init
import React from "react";




//Notes List
class List extends React.Component {
    render() {
        //Create Note
        let notes = this.props.allNotes.map(note => {
            return (
                <li className="mainPageContainerLeft" key={note.id}>

                    <a href="#" onClick={() => {
                        this.props.handleSelection(note.id);
                    }}>
                        {note.title}
                    </a>

                    <hr></hr>
                </li>
            )
        });

        return (
            <div className="mainPageContainerLeft">
                <ul>

                    {notes}

                </ul>
            </div>    
        );
    }
}


export default List;