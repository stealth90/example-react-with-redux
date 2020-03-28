import { combineReducers } from "redux";

const songsReducer = () => {
	return [
		{ title: "No Scrumbs", duration: "4:05" },
		{ title: "Macarena", duration: "2:30" },
		{ title: "All Start", duration: "3:15" },
		{ title: "I Want It", duration: "1:45" }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
