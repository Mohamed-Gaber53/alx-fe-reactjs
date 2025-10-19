// src/App.jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsComponent from './components/PostsComponent';

// إنشاء عميل React Query
const queryClient = new QueryClient();

function App() {
  return (
    // تغليف التطبيق داخل QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div className="app-container" style={{ padding: '20px' }}>
        <h1>📘 React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
