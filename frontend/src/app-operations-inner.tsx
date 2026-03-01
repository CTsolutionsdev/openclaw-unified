"use client";

export default function OperationsInner() {
  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center space-y-4 p-8">
            <h1 className="text-2xl font-bold">Agent Operations</h1>
            <p className="text-muted-foreground max-w-md">
              Connect to your OpenClaw Gateway to manage agents, chat in real-time,
              handle exec approvals, and monitor cron jobs.
            </p>
            <p className="text-sm text-muted-foreground">
              Configure your Gateway URL in Settings → Operations to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
