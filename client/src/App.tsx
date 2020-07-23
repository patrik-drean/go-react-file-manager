import React, { useState } from 'react'
import { FileList } from './components/FileList/FileList'
import { FilePreview } from './components/FilePreview/FilePreview'
import firstPhoto from './1-photo.jpg'
import secondPhoto from './2-photo.jpg'
import video from './0-video.mp4'
import './App.css'

function App() {
  const [files, setFiles] = useState([firstPhoto, secondPhoto, video])
  const [selectedFile, setSelectedFile] = useState(firstPhoto)

  return (
    <div className="app">
      <FileList
        files={files}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      <FilePreview selectedFile={selectedFile} />
    </div>
  )
}

export default App
