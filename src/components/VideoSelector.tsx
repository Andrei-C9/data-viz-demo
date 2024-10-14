import React, { useState } from 'react';

interface VideoSelectorProps {
  onVideoSelect: (videoId: string) => void;
}

const VideoSelector: React.FC<VideoSelectorProps> = ({ onVideoSelect }) => {
  const [videoId, setVideoId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (videoId) {
      onVideoSelect(videoId);
    }
  };

  return (
    <div className="bg-next-gray-800 rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-semibold mb-6 text-next-white">Select Mux Video</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="videoId" className="block text-sm font-medium text-next-gray-300">
            Mux Playback ID
          </label>
          <input
            type="text"
            id="videoId"
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
            className="mt-1 block w-full rounded-md bg-next-gray-700 border-next-gray-600 text-next-white shadow-sm focus:border-next-blue focus:ring focus:ring-next-blue focus:ring-opacity-50"
            placeholder="Enter Mux Playback ID"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-next-blue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          Select Video
        </button>
      </form>
    </div>
  );
};

export default VideoSelector;