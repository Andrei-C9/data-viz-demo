'use client';

import React from 'react';
import SensorDataUpload from '../../components/SensorDataUpload';

export default function UploadSensorDataPage() {
  const handleSensorDataUpload = (data: any) => {
    // Here you would typically process the uploaded data
    console.log('Uploaded sensor data:', data);
    // For now, we'll just show an alert
    alert('Sensor data uploaded successfully. This would typically update the app state.');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-next-blue">Upload Sensor Data</h1>
      <SensorDataUpload onUpload={handleSensorDataUpload} />
    </div>
  );
}