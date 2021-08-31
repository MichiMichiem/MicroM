import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'; 
import Navigation from './components/navigation.jsx';
import Dashboard from './views/dashboard.jsx';

export default function App() {
  return (
     <Dashboard/>
  );
}


