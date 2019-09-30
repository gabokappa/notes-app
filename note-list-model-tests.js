(function(exports) {

  var assert = {
     isTrue: function(assertion) {
       if (!assertion) {
         throw new Error('Assertion failed: ' + assertion + " is not truthy");
       } else {
         console.log("You've earned a gold star")
       }
     }
   };


  function testNoteListHasAnArray() {
    var noteList = new NoteList();

    if (noteList.list.length !== 0) {
      throw new Error("Error array doesn't match");
  } else {
    console.log("You have a gold star")
  }
};
  testNoteListHasAnArray();

  function testNoteListRetainsObject() {
    var noteList = new NoteList();
    noteList.create("test one");

    if (noteList.list[0].text !== "test one") {
      throw new Error("Error array doesn't match");
  } else {
    console.log("You have a gold star")
  }
};
  testNoteListRetainsObject();

  function testNoteListReturnsNotes() {
    var noteList = new NoteList();
    noteList.create('note one');
    noteList.create('note two');

  assert.isTrue(typeof noteList.returnNotes()[1] === 'object');
  assert.isTrue(noteList.returnNotes()[1].showNoteText() === 'note two');
  assert.isTrue(noteList.returnNotes().length === 2);

};
  testNoteListReturnsNotes();


})(this);
