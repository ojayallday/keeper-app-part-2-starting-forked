import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />

      {notes.map((noteitems) => (
        <Note
          key={noteitems.key}
          title={noteitems.title}
          content={noteitems.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
