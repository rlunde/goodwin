import React from 'react';

const Home = () => (
  <div className="main-wrapper">

    <section className="main">
      <div className="messages">
        <h3 className="msg--date">Yesterday - 08:17</h3>
        <div className="msg msg--them">
          <blockquote>Hi there. This is Goodwin, a coders companion with an attitude. To get started, ask me what I know.</blockquote>
        </div>
        <div className="msg msg--me">
          <blockquote>If you said anything yesterday, it would be here</blockquote>
        </div>
      </div>
      <div className="messages">
        <h3 className="msg--date">Today - 19:44</h3>
        {/* today's messages will go here */}
      </div>
      <form>
        <input className="chat-input" type="text" placeholder="Your message" />
        <div className="msg-send">put a send button here</div>
      </form>
    </section>
  </div>
);

export default Home;
