(function(exports) {
  function testNotesTextStoresString() {
    var note = new Note("JavaScript is GREAT!");

    if (note.text !== "JavaScript is GREAT!") {
      throw new Error("Text doesn't match look at your code.");
    } else {
      console.log("You have a gold star")
    }
  };

  testNotesTextStoresString();

  function testNotesTextReturnsText() {
    var note = new Note("JavaScript is GREAT!");

    if (note.showNoteText() !== "JavaScript is GREAT!") {
      throw new Error("Text doesn't match look at your code.");
    } else {
      console.log("You have a gold star")
    }
  };

  testNotesTextReturnsText();
})(this);

// (function(exports) {
//   function testNotesTextReturnsText() {
//     var note = new Note("JavaScript is GREAT!");
//
//     if (note.showNoteText() !== "JavaScript is GREAT!") {
//       throw new Error("Text doesn't match look at your code.");
//     } else {
//       console.log("You have a gold star")
//     }
//   };
//
//   testNotesTextReturnsText();
// })(this);
