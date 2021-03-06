export const playing = state => state.playing;
export const playList = state => state.playList;
export const sequenceList = state => state.sequenceList;
export const mode = state => state.mode;
export const isShowMusicList = state => state.isShowMusicList;
export const currentIndex = state => state.currentIndex;
export const currentSongLink = state => state.currentSongLink;
export const scrolltop = state => state.scrolltop;
export const currentSongMeg = (state) => {
	return state.playList[state.currentIndex] || {}
}

export const favoriteList = state => state.favoriteList;
