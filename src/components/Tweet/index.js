import React from 'react';

import { ReplySharp, Chat, Favorite } from '../../styles/icons';
import './styles.css';

export default function index() {
  return (
    <div className="containerTweet">
      <div className="retweeted">
        <ReplySharp className="replySharpTweet" />
        Você retweetou
      </div>

      <div className="body">
        <div className="avatarTweet"></div>

        <div className="content">
          <div className="headerTweet">
            <strong>WChaves</strong>
            <span>@wchaves</span>
            <div className="dot"></div>
            <time>14 de jul</time>
          </div>

          <p className="description">Tenha fé!!</p>

          <div className="imageContent"></div>

          <div className="icons">
            <div className="status">
              <Chat className="chatTweet" />
              16
            </div>
            <div className="status">
              <ReplySharp className="replySharpTweet" />
              25
            </div>
            <div className="status">
              <Favorite className="favoriteTweet" />
              541
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
