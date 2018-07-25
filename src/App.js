//React Init
import React from "react";

//Content Init
//Notes List
import List from "./List";

//Search Bar
import SearchBar from "./SearchBar";

//Notes Editor
import Editor from "./Editor";




//Application
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectID: -1,
            notes: [
                {
                    id: 1000,
                    timestamp: new Date(),
                    title: "Test Title 1",
                    content: "Test Content 1"
                },
                {
                    id: 1001,
                    timestamp: new Date(),
                    title: "Test Title 2",
                    content: "Test Content 2"
                }
            ]
        };
    }
    render() {
        return (
            <div>
                {/*Header Content*/}
                <header className="customHeader">

                    {/*Title*/}
                    <div className="customHeaderLeft">

                        <h1>React Notes App</h1>

                    </div>


                    {/*Search Bar*/}
                    <SearchBar/>

                </header>


                {/*Main Page Content*/}
                <div className="mainPageContainer">

                    {/*Notes List*/}
                    <List allNotes={this.state.notes} handleSelection={this.selectNote}/>

                    {/*Notes Editor*/}
                    <Editor note={this.getNote()}/>

                </div>


                {/*Footer Content*/}
                <footer className="customFooter">

                    <div className="customFooterLeft customText">

                        Ryan Miller

                    </div>

                </footer>

            </div>
        );
    }


    //Update Note Function
    updateNote = (noteContent) => {
        let theNote = this.getNote();

        let updatedNote = {
            ...theNote,
            content: noteContent
        };

        //Set Note
        let notesArrayUpdate = [
            ...this.getNoteFiltered(),
            updatedNote
        ];

        this.setState({
            notes: notesArrayUpdate
        });
    }


    //Select Filter Note
    getNoteFiltered = () => {
        let notesFiltered = this.state.notes.filter(note => note.id !== this.state.selectedID);

        return (notesFiltered);
    }


    //Click Note Function
    getNote = () => {
        let theNote = this.state.notes.find(note => note.id === this.state.selectedID);

        if (!theNote) {
            theNote = this.state.notes[0];
        }

        return theNote;
    }


    //Select Note Function
    selectNote = (noteID) => {
        console.log(noteID);

        this.setState({
            selectID: noteID
        });
    }
}


export default App;