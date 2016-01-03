if (Meteor.isClient) {
  var img_data = [
    {
      img_src: "water.jpg",
      img_alt: "Water from ON1"
    },
    {
      img_src: "Bridge.jpg",
      img_alt: "Bridge from ON1"
    },
    {
      img_src: "sky.jpg",
      img_alt: "sky from ON1"
    }
  ];

  Template.images.helpers({images:img_data});
}

if (Meteor.isServer) {
  console.log("I am server");
}
