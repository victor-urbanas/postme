export const Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
  Meteor.methods({
    'posts.getAllPublicPosts'() {

      return Posts.find({public: true}, {sort: {createdAt: -1}}).fetch();
    },

    'posts.getBestPublicPosts'() {

      return Posts.find({public: true}, {sort: {rating: -1}}).fetch();
    },

    'posts.getUserPublicPosts'(id) {

      return Posts.find({authorId: id, public: true}, {sort: {createdAt: -1}}).fetch();
    },

    'posts.getUserPrivatePosts'(id) {

      return Posts.find({authorId: id, public: false}, {sort: {createdAt: -1}}).fetch();
    },

    'posts.getUserPost'(userId, postId) {

      return Posts.findOne({_id: postId, authorId: userId});
    },

    'posts.create'(post) {
      Posts.insert(post);
    },

    'posts.update'(id, $set) {
      Posts.update({_id: id}, {$set});
    },

    'posts.delete'(id) {
      Posts.remove({_id: id});
    },

    'posts.get'(id) {
      const post = Posts.findOne({_id: id, $or: [{public: true}, {authorId: Meteor.userId()}]});
      post && Object.assign(post, {comments: Meteor.call('comments.getPostComments', id)});

      return post;
    }
  });
}
