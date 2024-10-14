import React, { useState } from 'react';

interface SensorDataUploadProps {
  onUpload: (data: any) => void;
}

const SensorDataUpload: React.FC<SensorDataUploadProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target?.result as string);
          onUpload(data);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="bg-next-gray-800 rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-semibold mb-6 text-next-white">Upload Sensor Data</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="sensorData" className="block text-sm font-medium text-next-gray-300">
            Sensor Data File (JSON)
          </label>
          <input
            type="file"
            id="sensorData"
            accept=".json"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-next-gray-300
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-next-blue file:text-white
                       hover:file:bg-blue-600"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-next-blue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          disabled={!file}
        >
          Upload Sensor Data
        </button>
      </form>
    </div>
  );
};

export default SensorDataUpload;