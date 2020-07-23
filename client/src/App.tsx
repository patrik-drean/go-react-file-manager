import React, { useState } from 'react'
import { FileList } from './components/FileList/FileList'
import { FilePreview } from './components/FilePreview/FilePreview'
import firstPhoto from './first-photo.jpg'
import secondPhoto from './second-photo.jpg'
import testVideo from './test.mp4'
import './App.css'

function App() {
  const [files, setFiles] = useState([firstPhoto, secondPhoto, testVideo])
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
