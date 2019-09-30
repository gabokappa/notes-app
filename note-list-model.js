(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype.create = function(string) {
    var note = new Note(string);
    this.list.push(note);
  };

  NoteList.prototype.showList = function() {
    this.list.forEach(function(note){
      return note.text;
    });
  };

  exports.NoteList = NoteList;
})(this);
