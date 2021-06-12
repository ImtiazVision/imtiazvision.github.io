// creating an array called sounds

const sounds = ['Applause','Boo','Gasp','Tada','Victory','Wrong'] 

// Looping through each elements of the array

sounds.forEach(sound => {
  //creating a button variable & set it to document.createElement('button)
  const btn = document.createElement('button')
  // then we will give that button a class
  btn.classList.add('btn')
  // then set the innerText to the sound itself from the array element above (const sounds = []). These elements from the above array will be the innerText of the button
  btn.innerText = sound

  // we are going to add an event listener when we click on the button
  btn.addEventListener('click', () => {
    stopSongs()

    document.getElementById(sound).play()
  })

  // we gonna insert these array elements and style them. We are gonna get the buttons container and append child and pass in button variable
  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  // forEach loops through each sound
  sounds.forEach(sound => {
    // creating a variable called song
    const song = document.getElementById(sound)

    // we pause the sound and reset the current time to 0 so that it will stop playing once we click on other sounds

    song.pause()
    song.currentTime = 0;
  })
}

// This project gives us little glimpses of HTML5 audio API