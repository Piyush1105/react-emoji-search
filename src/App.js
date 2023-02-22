import React, { useState } from "react";
import "./App.css";
import { EmojiPicker, Emoji } from "react-emoji-search";
const App = () => {
  const [emoji, setEmoji] = useState();
  const [colorMode, setColorMode] = useState("light");
  const modeToggle = () => {
    colorMode === "light" ? setColorMode("dark") : setColorMode("light");
  };

  return (
    <>
      <div className={`main-container background-${colorMode}`}>
        <button
          className={`btn btn-1 btn-1e btn-1e-${colorMode}`}
          onClick={modeToggle}
        >
          Color Mode {colorMode}
        </button>
        <Emoji unicode={emoji} set="google" size={50} />
        <div style={{ maxHeight: 600, maxWidth: 700 }}>
          {/* <EmojiPicker set="google" /> */}

          {/* <EmojiPicker set="google" emojiSize={24} emojiSpacing={8} /> */}
          {/* <EmojiPicker emojiVersion={12.0} /> */}
          {/* <EmojiPicker onEmojiClick={(emoji) => setEmoji(emoji)} /> */}

          <EmojiPicker
            onEmojiClick={(emoji) => setEmoji(emoji)}
            set="google"
            // styles={{
            //   backgroundColor: "#2e4960",
            //   indicatorColor: "#b04c2d",
            //   fontColor: "lightgrey",
            //   searchBackgroundColor: "#263d51",
            //   tabsFontColor: "#8cdce4",
            //   searchFontColor: "lightgrey",
            //   skinTonePickerBackgroundColor: "#284155",
            // }}
            mode={colorMode}
          />
        </div>
      </div>
    </>
  );
};

export default App;
