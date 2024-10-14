'use client';

import React from 'react';
import VideoSelector from '../../components/VideoSelector';

export default function SelectVideoPage() {
  const handleVideoSelect = (videoId: string) => {
    // Here you would typically update the global state or make an API call
    console.log('Selected video:', videoId);
    // For now, we'll just show an alert
    alert(`Video with ID ${videoId} selected. This would typically update the app state.`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-next-blue">Select Video</h1>
      <VideoSelector onVideoSelect={handleVideoSelect} />
    </div>
  );
}