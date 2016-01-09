if (Meteor.isServer) {
  Meteor.startup(function(){
    if (Images.find().count()) {
      Images.insert(
        {
          img_src: "water.jpg",
          img_alt: "Water from ON1"
        }
      );

      Images.insert(
        {
          img_src: "Bridge.jpg",
          img_alt: "Bridge from ON1"
        }
      );

      Images.insert(
        {
          img_src: "sky.jpg",
          img_alt: "sky from ON1"
        }
      );
    };
  });
}
