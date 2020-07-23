import React from 'react'
import ReactPlayer from 'react-player'
import './FilePreview.css'

type Props = {
  selectedFile: string
}

export function FilePreview(props: Props) {
  const { selectedFile } = props

  const isJpgFile = (file: string) => {
    return file.slice(-3) === 'jpg'
  }

  return (
    <div className="file-preview">
      {isJpgFile(selectedFile) ? (
        <img
          src={selectedFile}
          className="file-preview-item"
          alt="selected-file"
        />
      ) : (
        <ReactPlayer
          url={selectedFile}
          className="file-preview-item"
          controls
        />
      )}
    </div>
  )
}
