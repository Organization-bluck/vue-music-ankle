import storage from 'good-storage'

const FAVORITE_KEY = '__favorite__'
const FAVORITE_MAX_LEN = 200

function insetArrar(arr,val,compare,maxLen){
	const index = arr.findIndex(compare)
	if(index == 0){
		retrun
	}
	if(index > 0){
		arr.splice(index,1)
	}
	arr.unshift(val)
	if(maxLen && arr.length > maxLen){
		arr.pop();
	}
}

function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

export function saveFavorite(song){
	let songs = storage.get(FAVORITE_KEY,[]);
	insetArrar(songs,song,(item) => {
		return song.song_id === item.song_id
	},FAVORITE_MAX_LEN)
	storage.set(FAVORITE_KEY,songs)
	return songs;
}

export function deleteFavorite(song){
	let songs = storage.get(FAVORITE_KEY,[]);
	deleteFromArray(songs,(item) => {
		return song.song_id === item.song_id
	})
	storage.set(FAVORITE_KEY,songs)
	return songs;
}

// 加载本地收藏
export function loadFavorite(){
	return storage.get(FAVORITE_KEY,[])
}
