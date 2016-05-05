const Comments = new Mongo.Collection('comments');

Meteor.methods({
  'comments.getPostComments'(postId) {

    return Comments.find({postId});
  },

  'comments.create'(comment) {
    Comments.insert(comment);
  }
});
