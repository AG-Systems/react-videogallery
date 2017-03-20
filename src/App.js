import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

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
              <a href="" className="thumbnail" onMouseOver={() => this.vidpreview(video.yt,video.title, video.desc)}>
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
  var video = [
            {
              "title": "Video1",
              "yt": "https://www.youtube.com/embed/wD0jwTyf6t8",
              "desc": "The bmw 330ci is a great car",
              "thumbnail": "https://i.ytimg.com/vi/wD0jwTyf6t8/maxresdefault.jpg",
              "id": 1,
            },
            {
              "title": "Video2",
              "yt": "https://www.youtube.com/embed/Lb4IcGF5iTQ",
              "desc": "Mark Zuckerberg talks about how he built his success",
              "thumbnail": "https://i.ytimg.com/vi/Lb4IcGF5iTQ/maxresdefault.jpg",
              "id": 2,
            },
            {
              "title": "Reflex gaming",
              "yt": "https://www.youtube.com/embed/Khf-kI7j9Eo",
              "desc": "A quick little preview",
              "thumbnail": "https://i.ytimg.com/vi/Khf-kI7j9Eo/maxresdefault.jpg",
              "id": 3,
            },
            {
              "title": "Adam LZ x Drifting: My Story",
              "yt": "https://www.youtube.com/embed/LhfqBU8Hw_w",
              "desc": "The story behind going from BMX to drifting",
              "thumbnail": "https://i.ytimg.com/vi/LhfqBU8Hw_w/maxresdefault.jpg",
              "id": 4,
            },
            {
              "title": "2017 Nissan GTR",
              "yt": "https://www.youtube.com/embed/QeviPeovW2U",
              "desc": "Nissan GTR",
              "thumbnail": "https://i.ytimg.com/vi/QeviPeovW2U/maxresdefault.jpg",
              "id": 5,
            },
            {
              "title": "Music Video",
              "yt": "https://www.youtube.com/embed/c2w06WoWoR0",
              "desc": "Some rap video",
              "thumbnail": "https://i.ytimg.com/vi/c2w06WoWoR0/maxresdefault.jpg",
              "id": 6,
            }
          ]
    return (
        <List list={video} />
    );
  }
}

export default App;
