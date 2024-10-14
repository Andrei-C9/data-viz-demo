'use client';

import React, { useState, useEffect } from 'react';
import { trpc } from '../utils/trpc';
import VideoPlayer from '../components/VideoPlayer';
import PoseVisualization from '../components/PoseVisualization';
import SensorDataChart from '../components/SensorDataChart';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(0);
  const [player, setPlayer] = useState(null);
  const [extractionStatus, setExtractionStatus] = useState('');
  const [poseData, setPoseData] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState('DS00Spx1CV902MCtPj5WknGlR102V5HFkDe');
  const { data: sensorData, isLoading, error } = trpc.getSensorData.useQuery(1200, {
    retry: 3,
    retryDelay: 1000,
  });
  const startPoseExtraction = trpc.startPoseExtraction.useMutation();

  useEffect(() => {
    if (player) {
      const handleTimeUpdate = () => {
        setCurrentTime(player.currentTime);
      };
      player.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        player.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [player]);

  const handlePlayerReady = (event) => {
    setPlayer(event.target);
  };

  const handleStartPoseExtraction = async () => {
    setExtractionStatus('Processing... This may take a few moments.');
    try {
      const result = await startPoseExtraction.mutateAsync({ videoId: selectedVideo });
      setExtractionStatus(result.message);
      setPoseData(result.poseData);
    } catch (error) {
      setExtractionStatus('Error: ' + error.message);
    }
  };

  if (isLoading) return <div className="text-2xl font-semibold text-next-blue">Loading...</div>;
  if (error) return <div className="text-2xl font-semibold text-red-500">Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <section className="bg-next-gray-800 rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-semibold mb-6 text-next-white">Video Playback</h2>
        <VideoPlayer onPlayerReady={handlePlayerReady} playbackId={selectedVideo} />
        <div className="mt-6">
          <button
            onClick={handleStartPoseExtraction}
            className="bg-next-blue hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Start Pose Extraction
          </button>
          {extractionStatus && (
            <p className="mt-4 text-sm text-next-gray-200">{extractionStatus}</p>
          )}
        </div>
        <div className="mt-4 text-center">
          <p className="text-next-white text-lg">
            Current Time: <span className="font-bold">{currentTime.toFixed(2)}</span> seconds
          </p>
        </div>
      </section>
      <section className="bg-next-gray-800 rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-semibold mb-6 text-next-white">Pose Visualization</h2>
        <PoseVisualization poseData={poseData} currentTime={currentTime} />
      </section>
      <section className="bg-next-gray-800 rounded-lg shadow-xl p-6 col-span-2">
        <h2 className="text-2xl font-semibold mb-6 text-next-white">Sensor Data</h2>
        <SensorDataChart sensorData={sensorData} currentTime={currentTime} />
      </section>
    </div>
  );
}