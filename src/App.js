import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let yturl = "";

var Preview = React.createClass({
    render() {
      return (
        <div id="video-preview">
          <iframe width="420" height="315" src={yturl} hidden={yturl.length === 0}> </iframe>
        </div>
      )
    }
  });


var List = React.createClass({
vidpreview: function(url)
{
    yturl = url;
    this.forceUpdate()
},
    render() {
      return (
        <div className="row">
          {this.props.list.map( video =>
            <div className="col-xs-6 col-md-3">
              <a href="" className="thumbnail" onMouseOver={() => this.vidpreview(video.yt)}>
                <img src={video.thumbnail}/>
              </a>
            </div>
          )}
          <Preview vid={yturl} />
        </div>
      )
    }
  });

class App extends Component {
  render() {
    let video = {
          "videos": [
            {
              "title": "Video1",
              "yt": "https://www.youtube.com/embed/wD0jwTyf6t8?autoplay=1",
              "thumbnail": "https://i.ytimg.com/vi/wD0jwTyf6t8/maxresdefault.jpg",
            },
            {
              "title": "Video2",
              "yt": "https://www.youtube.com/embed/Lb4IcGF5iTQ?autoplay=1",
              "thumbnail": "https://i.ytimg.com/vi/Lb4IcGF5iTQ/maxresdefault.jpg"
            }
          ]
        }
    return (
        <List list={video.videos} />
    );
  }
}

export default App;
