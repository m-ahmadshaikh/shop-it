import React from 'react';
import { Carousel } from 'react-responsive-carousel';
function Carousels() {
  return (
    <div>
      <Carousel
        infiniteLoop
        animationHandler={(props, state) => {
          const transitionTime = props.transitionTime + 'ms';
          const transitionTimingFunction = 'ease-in-out';

          let slideStyle = {
            position: 'absolute',
            display: 'block',
            zIndex: -2,
            minHeight: '100%',
            opacity: 0,
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            transitionTimingFunction: transitionTimingFunction,
            msTransitionTimingFunction: transitionTimingFunction,
            MozTransitionTimingFunction: transitionTimingFunction,
            WebkitTransitionTimingFunction: transitionTimingFunction,
            OTransitionTimingFunction: transitionTimingFunction,
          };

          slideStyle = {
            ...slideStyle,
            WebkitTransitionDuration: transitionTime,
            MozTransitionDuration: transitionTime,
            OTransitionDuration: transitionTime,
            transitionDuration: transitionTime,
            msTransitionDuration: transitionTime,
          };

          return {
            slideStyle,
            selectedStyle: { ...slideStyle, opacity: 1, position: 'relative' },
            prevStyle: { ...slideStyle },
          };
        }}
        autoPlay
        selectedItem={0}
        transitionTime={200}
        showThumbs={false}>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1536584754829-12214d404f32.jpeg?alt=media&token=1ef366cf-dccd-49a7-90eb-c7f1fd2e2463"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1516820827855-3ea1bd6f79ea.jpeg?alt=media&token=af7b2df1-70a5-40c1-938b-b045ae9e8c53"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Carousels;
