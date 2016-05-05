const Comments = new Mongo.Collection('comments');

if (Meteor.isServer) {
  Meteor.methods({
    'comments.getPostComments'(postId) {

      return Comments.find({postId});
    },

    'comments.create'(comment) {
      Comments.insert(comment);
    }
  });
}
