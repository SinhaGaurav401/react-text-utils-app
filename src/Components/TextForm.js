import React, {useState} from 'react'

function Button(props) {
  const [property] = useState({
    class: props.class,
    title: props.title,
    btnEvent: props.btnEvent
  });

  return (
    <>
      <button className={property.class} onClick={property.btnEvent}>{property.title}</button>
    </>
  );
}

export default function TextForm(props) {
    const [text, setText] = useState('');

    function changeText(event) {
      setText(event.target.value);
    }

    const handleUp = (event) => {
      let newText = text.toUpperCase();
      setText(newText);
    }
    
    function handleLo(event) {
      let newText = text.toLowerCase();
      setText(newText);
    }
    
    const handleSpeakClick = () => {
      let message = new SpeechSynthesisUtterance();
      message.text = text;
      window.speechSynthesis.speak(message);
    }
    
    const clearText = () => {
      setText("");
    }

  return (
    <>
      <div class="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" onChange={changeText} id="myBox" rows="8" value={text}></textarea>
          </div>
          <button onClick={handleUp} className="btn btn-primary mx-1">Convert to Uppercase</button>
          <button onClick={handleLo} className="btn btn-primary mx-1">Convert to Lowercase</button>
          <button onClick={handleSpeakClick} className="btn btn-success mx-1">Speak Words</button>
          <button onClick={clearText} className="btn btn-danger mx-1">Clear</button>
          {/* <Button class='btn btn-primary' btnEvent={handleUp} title='Convert to Uppercase' /> */}
      </div>
      <div className="container my-3">
          <p>{text.split(" ").length} words present.</p>
          <p>It will take {0.08 * text.split(" ").length} minutes to read.</p>
          <h3>Preview Text: </h3>
          <div className="container mb-3">
            <p>{text}</p>
          </div>
      </div>
    </>
  )
}
