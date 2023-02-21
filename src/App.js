import React, { useState } from "react";
import { EmojiPicker, Emoji } from "react-emoji-search";
const App = () => {
  const [emoji, setEmoji] = useState();
  return (
    <div>
      {/* <EmojiPicker set="google" /> */}

      {/* <EmojiPicker set="google" emojiSize={24} emojiSpacing={8} /> */}
      {/* <EmojiPicker emojiVersion={12.0} /> */}
      {/* <EmojiPicker onEmojiClick={(emoji) => setEmoji(emoji)} /> */}
      <EmojiPicker
        onEmojiClick={(emoji) => setEmoji(emoji)}
        set="google"
        styles={{
          backgroundColor: "#2e4960",
          indicatorColor: "#b04c2d",
          fontColor: "lightgrey",
          searchBackgroundColor: "#263d51",
          tabsFontColor: "#8cdce4",
          searchFontColor: "lightgrey",
          skinTonePickerBackgroundColor: "#284155",
        }}
      />

      <Emoji />
      <Emoji unicode={emoji} set="google" size={50} />
    </div>
  );
};

export default App;
