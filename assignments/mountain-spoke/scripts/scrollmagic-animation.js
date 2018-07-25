//set up ScrollMagic
    var controller = new ScrollMagic.Controller({
            globalSceneOptions: { triggerHook: 'onLeave'
        }
  });


  //pin the navigation
    var pin = new ScrollMagic.Scene({
            triggerElement: '#navbar'
        })
            .setPin('#navbar', {pushFollowers: false}).addTo(controller);


    var scene = new ScrollMagic.Scene({
            triggerElement: '#navbar'
        })
            .setTween("#navbar", 0.5, {backgroundColor: "green", scale: 2.5}).addTo(controller);




