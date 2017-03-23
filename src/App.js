import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import videolist from './video.json';

let yturl = "";
var ytdesc = "";
var ytitle = "";
var Preview = React.createClass({
    render() {
      return (
          <div id="video-preview">
            <iframe width="420" height="315" src={yturl}> </iframe>
            <h3>{ytitle}</h3>
            <h5>{ytdesc}</h5>          
          </div>
      )
    }
  });


var List = React.createClass({
vidpreview: function(url,title,desc)
{
    var autoplay = "?autoplay=1";
    yturl = url + "";
    ytdesc = desc;
    ytitle = title;
    this.forceUpdate()
},
    render() {
      return (
        <div>
        <div className="row">
          {this.props.list.map( video =>
            <div className="col-xs-6 col-md-3" key={video.id}>
              <a href={'/video/' + video.id} className="thumbnail" onMouseOver={() => this.vidpreview(video.yt,video.title, video.desc)}>
                <img src={video.thumbnail} id="yt-thumb" alt={video.desc}/>
              </a>
                    <h4>{video.title} </h4>
            </div>
          )}
          </div>
            <div className="content">
              <Preview vid={yturl} />
            </div>
        </div>
      )
    }
  });

class App extends Component {
  render() {
    return (
        <List list={videolist} />
    );
  }
}

export default App;
