(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype.create = function(string) {
    var note = new Note(string);
    this.list.push(note);
  };

  exports.NoteList = NoteList;
})(this);
