import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

function generateFakeAccelerationData(dataPoints: number) {
  const data = [];
  for (let i = 0; i < dataPoints; i++) {
    const time = i / 10; // 10 data points per second
    const acceleration = 10 * Math.sin(time / 10) + Math.random() * 2 - 1; // Simulated acceleration data
    data.push({ time, acceleration });
  }
  return data;
}

// Simulate mmpose extraction result
function simulateMmposePoseExtraction(duration: number) {
  // ... (keep existing function)
}

export const appRouter = t.router({
  getSensorData: t.procedure
    .input(z.number().min(1).max(3600))
    .query(({ input }) => {
      const data = generateFakeAccelerationData(input);
      if (data.length === 0) {
        throw new Error("No sensor data generated");
      }
      return data;
    }),
  startPoseExtraction: t.procedure
    .input(z.object({ videoId: z.string() }))
    .mutation(async ({ input }) => {
      // Simulate a delay for processing
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      const poseData = simulateMmposePoseExtraction(120); // 2 minutes of pose data
      
      return {
        status: 'completed',
        message: 'Pose extraction completed successfully using simulated mmpose',
        poseData
      };
    }),
});

export type AppRouter = typeof appRouter;