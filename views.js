exports.notification_all = {
  map: function(doc) {
    if(doc.type && doc.type == 'notification') {
      emit([doc.displayed, doc.subscriber], doc);
    }
  }
};
