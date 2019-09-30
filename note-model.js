(function(exports) {
  function Note(string) {
    this.text = string;
  };

  Note.prototype.showNoteText = function() {
    return this.text;
  };
  exports.Note = Note;
})(this);
