import './Map.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className="main-content">
    <div className="map-base active">
      <div className="footsteps footsteps-1">
        <div className="footstep left"></div>
        <div className="footstep right"></div>
        <div className="scroll-name">
          <p>Severus Snape</p>
        </div>
      </div>
      <div className="footsteps footsteps-2">
        <div className="footstep left"></div>
        <div className="footstep right"></div>
        <div className="scroll-name">
          <p>Harry Potter</p>
        </div>
      </div>
      <div className="map-flap flap--1">
        <div className="map-flap__front"></div>
        <div className="map-flap__back"></div>
      </div>
      <div className="map-flap flap--2">
        <div className="map-flap__front"></div>
        <div className="map-flap__back"></div>
      </div>
      <div className="map-side side-1">
        <div
          className="front"
          // style="--image: url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/8.png')"
          style={{
            backgroundImage:
              'url("https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/8.png")',
          }}
        ></div>
        <div className="back"></div>
      </div>
      <div className="map-side side-2">
        <div
          className="front"
          style={{
            backgroundImage:
              'url("https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/18.png")',
          }}
          // style="--image: url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/18.png')"
        ></div>
        <div className="back"></div>
      </div>
      <div className="map-side side-3">
        <div
          className="front"
          style={{
            backgroundImage:
              "url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/7.png')",
          }}
          // style="--image: url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/7.png')"
        ></div>
        <div className="back"></div>
      </div>
      <div className="map-side side-4">
        <div
          className="front"
          style={{
            backgroundImage:
              "url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/10.png')",
          }}
          // style="--image: url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/10.png')"
        ></div>
      </div>
      <div className="map-side side-5">
        <div
          className="front"
          style={{
            backgroundImage:
              "url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/6.png')",
          }}
          // style="--image: url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/6.png')"
        ></div>
        <div className="back"></div>
      </div>
      <div className="map-side side-6">
        <div
          className="front"
          style={{
            backgroundImage:
              "url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/11.png')",
          }}
          // style="--image: url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/11.png')"
        ></div>
        <div className="back"></div>
      </div>
    </div>
  </div>
);