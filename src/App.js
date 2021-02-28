import React, { useState } from 'react';

function App() {
  return <div>

    <Folder
      name="Desktop"
      isOpen={false} >

      <Folder
        name="Music">
        <File
          name="all_star.mp4" />
        <File
          name="express_file.mp4" />
      </Folder> {/*end music folder */}

      <File
        name="dogs.jpg" />

      <File
        name="cats.png" />
    </Folder> {/*end desktop folder*/}

    <Folder
      name="Applications" />




  </div>

}


const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  console.log(setIsOpen)

  const { name, children } = props;

  const handleClick = () => {
    console.log('click JUST happened')
    setIsOpen(!isOpen);
  }

  const caretDirection = isOpen ? 'down' : 'right';

  // console.log(props)
  return <div>
    <span onClick={handleClick}>
      <i className="brown folder icon"></i>
      <i className={`caret ${caretDirection} icon`}></i>

    </span>{name}

    <div style={{ marginLeft: '17px' }}>
      {isOpen ? children : null}
    </div>

  </div>

}


const File = (props) => {

  const { name } = props;
  const fileExtension = name.split('.')[1]
  const fileIcons = {
    mp4: 'file audio outline',
    jpg: 'file image outline',
    png: 'file image'

  };

  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>

    {name}</div>
}

export default App;
