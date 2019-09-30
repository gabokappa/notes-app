(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype.create = function(string) {
    this.list.push(new Note(string));
  };

  NoteList.prototype.returnNotes = function() {
    return this.list;
  };

  exports.NoteList = NoteList;
})(this);
