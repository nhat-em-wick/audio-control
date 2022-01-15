const process = document.querySelector('.process')
const processBar = document.querySelector('.process-bar')
const processCircle = document.querySelector('.process-circle')


function dragProcessPlayMusic() {
  let isReadyToDrag = false
  const left = process.getBoundingClientRect().left 
  const width = process.getBoundingClientRect().width
  const min = left
  const max = process.getBoundingClientRect().width + left
  process.addEventListener('mousedown', (e) => {
    isReadyToDrag = true
  const clientX = e.clientX

    if(isReadyToDrag && clientX >= min && clientX <= max) {
      const percent = (clientX - left) / width
      processBar.style.width = percent * 100 + '%'
      processCircle.style.left = percent * 100 + '%'
    }
  })
  
  document.addEventListener('mousemove', (e) => {
  const clientX = e.clientX

    if(isReadyToDrag && clientX >= min && clientX <= max) {
      const percent = (clientX - left) / width
      processBar.style.width = percent * 100 + '%'
      processCircle.style.left = percent * 100 + '%'
    }
  })
  
  document.addEventListener('mouseup', () => {
    isReadyToDrag = false
  })
}
dragProcessPlayMusic()


const volume = document.querySelector('.volume')
const processBarVolume = document.querySelector('.process-bar__volume')
const processCircleVolume = document.querySelector('.process-circle__volume')

function dragVolume () {
  let isReadyToDrag = false
  const top = volume.getBoundingClientRect().top 
  const bottom =  volume.getBoundingClientRect().bottom 
  const height = volume.getBoundingClientRect().height
  
  
  volume.addEventListener('mousedown', (e) => {
    isReadyToDrag = true
    const clientY = e.clientY
    
    if(isReadyToDrag && clientY >= top && clientY <= bottom) {
      const percent = (bottom - clientY) / height
      processBarVolume.style.height = percent * 100 + '%'
      processCircleVolume.style.bottom = percent * 100 + '%'
    }
  })
  
  document.addEventListener('mousemove', (e) => {
    
    const clientY = e.clientY
    
    if(isReadyToDrag && clientY >= top && clientY <= bottom) {
      const percent = (bottom - clientY) / height
      processBarVolume.style.height = percent * 100 + '%'
      processCircleVolume.style.bottom = percent * 100 + '%'
    }
  })
  
  document.addEventListener('mouseup', () => {
    isReadyToDrag = false
  })
}

dragVolume()
