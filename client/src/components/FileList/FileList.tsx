import React from 'react'
import './FileList.css'

type Props = {
  setSelectedFile: (_: string) => void
  selectedFile: string
  files: string[]
}

export function FileList(props: Props) {
  const { files, setSelectedFile } = props
  return (
    <div className="file-list">
      <div className="file-list-header">Files Available</div>
      {files.map((file, index) => (
        <div className="file-list-item" onClick={(e) => setSelectedFile(file)}>
          {index + 1}: {file}
        </div>
      ))}
    </div>
  )
}
