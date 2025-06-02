import CampaignList from './components/CampaignList';
import MessageGenerator from './components/MessageGenerator';

function App() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">LinkedIn Outreach Dashboard</h1>
      <CampaignList />
      <MessageGenerator />
    </div>
  );
}

export default App;