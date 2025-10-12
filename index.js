let playlistSongs = ''

function createSongHTML() {

    playlists.forEach((playlist) => {
        const playlistId = playlist.id;
        const playlistImage = playlist.image;
        const playlistName = playlist.name;
        const artistName = playlist.artistName;
        const albumName = playlist.albumName;
        const dateAdded = playlist.dateAdded;
        const duration = playlist.duration;
        
        playlistSongs+= `
         <div class="the-actual-playlist-main">

            <div class="the-actual-playlist-main-borderbox">

                <div class="image-and-title-author-div">

                <div class="image-of-the-playlist-song">
                    <img class="image-of-the-playlist-song-PNG" src="${playlistImage}">
                </div>
                
                <div class="the-title-and-author-text">
                    <div class="the-title-text">
                    <p class="the-title-text-TXT">
                        ${playlistName}
                    </p>
                    </div>

                    <div class="the-author-text">
                    <p class="the-author-text-TXT">
                        ${artistName}
                    </p>
                    </div>
                </div>

                </div>

                

                <div class="the-album-text-of-author">
                <p class="the-album-text-of-author-TXT">
                    ${albumName}
                </p>
                </div>

                <div class="the-date-added-of-song">
                <p class="the-date-added-of-song-TXT">
                    ${dateAdded};
                </p>
                </div>

                <div class="the-duration-of-the-song">
                <p class="the-duration-of-the-song-TXT">
                    ${duration}
                </p>
                </div>

            </div>

        </div>
    `
    }) 

    
    document.querySelector(".js-main-playlist-html").innerHTML = playlistSongs;
};

createSongHTML();




