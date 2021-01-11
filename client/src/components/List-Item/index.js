import React from 'react';
import './style.css';

export default function ListItem() {
  return (
    <li>
      <header className="list-header">
        <div className="title-author">
          <h3>Harry Potter</h3>
          <label>Written by: JK Rowling</label>
        </div>
        <div className="view-save-buttons">
          <button>View</button>
          <button>Save</button>
        </div>
      </header>
      <div>
        <img className="book-image" src="https://via.placeholder.com/150" alt="book" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sapien et ligula ullamcorper malesuada proin libero. Phasellus egestas tellus rutrum tellus pellentesque. Egestas dui id ornare arcu odio ut sem. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Turpis massa tincidunt dui ut ornare lectus. Augue eget arcu dictum varius duis at consectetur. Tincidunt praesent semper feugiat nibh sed pulvinar. Ut consequat semper viverra nam libero justo laoreet. Non diam phasellus vestibulum lorem sed risus. Nibh venenatis cras sed felis eget velit. Fermentum iaculis eu non diam phasellus. Ultricies mi quis hendrerit dolor magna eget est lorem. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Lectus sit amet est placerat in egestas erat imperdiet. Tincidunt lobortis feugiat vivamus at augue eget arcu. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Dui vivamus arcu felis bibendum ut tristique et egestas. Nunc vel risus commodo viverra maecenas accumsan lacus. Pharetra sit amet aliquam id diam.
        </p>
      </div>
    </li>
  )
}