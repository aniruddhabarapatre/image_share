Images = new Mongo.Collection("images");
console.log(Images.find().count());

if (Meteor.isClient) {

  Template.images.helpers({
    images:Images.find()
  });

  Template.images.events({
    'click .js-image': function (event) {
      alert('hello');
    },
    'click .js-del-image': function (event) {
      var image_id = this._id;
      $("#"+image_id).hide("slow", function() {
        Images.remove({"_id":image_id});
      });
    }
  });
}