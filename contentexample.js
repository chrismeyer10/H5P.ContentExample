//import {show} from './message.js';

// If the H5P not initialized, initialize!
var H5P = H5P || {};

//1. Entry point
H5P.ContentExample = (function ($) {

  // 2. Constructor
  function ContentExample(options, id)
  {
    this.options = $.extend(true, {},
      {
        titelExample: 'Titel...'
      },options
    );
    // Keep provided id.
    this.id = id;
  }
  // 3. Attach()-function
  ContentExample.prototype.attach = function ($container)
  {
    //show("hi");
    var self = this;
    $container.height(200);
    // Create Button-Element
    var button_example = document.createElement('button');
    button_example.className = "example_button_class";

    // Text for content headline
    var text = document.createTextNode(self.options.titelExample);
    button_example.appendChild(text);

    // append()-function to add container to content-type
    $container.append(button_example);
  };

  return ContentExample;
})(H5P.jQuery);
