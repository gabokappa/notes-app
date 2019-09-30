(function(exports) {
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

})(this);
