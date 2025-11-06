import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface BackendHealthCheckProps {
  url: string;
}

export const BackendHealthCheck = ({ url }: BackendHealthCheckProps) => {
  const [status, setStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [lastCheck, setLastCheck] = useState<Date | null>(null);

  const checkHealth = async () => {
    setStatus('checking');
    try {
      const response = await fetch(`${url}/health`, {
        method: 'GET',
        signal: AbortSignal.timeout(5000),
      });
      
      if (response.ok) {
        setStatus('online');
      } else {
        setStatus('offline');
      }
    } catch (error) {
      console.error('Backend health check failed:', error);
      setStatus('offline');
    }
    setLastCheck(new Date());
  };

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 30000); // Check every 30s
    return () => clearInterval(interval);
  }, [url]);

  if (!import.meta.env.DEV) return null;

  return (
    <Alert className="mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {status === 'checking' && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === 'online' && <CheckCircle2 className="h-4 w-4 text-green-600" />}
          {status === 'offline' && <XCircle className="h-4 w-4 text-red-600" />}
          
          <AlertDescription className="mb-0">
            <strong>Backend Status:</strong> {status}
            {' • '}
            <span className="text-xs text-muted-foreground">{url}</span>
          </AlertDescription>
        </div>
        
        <button
          onClick={checkHealth}
          className="text-xs px-2 py-1 rounded hover:bg-accent"
          disabled={status === 'checking'}
        >
          Refresh
        </button>
      </div>
    </Alert>
  );
};
