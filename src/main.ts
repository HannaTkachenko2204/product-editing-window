import { ProductEditingWindow } from './components/ProductEditingWindow';
import './styles/product-editing-window.scss';

const app = document.getElementById('app');
if (app) {
  app.appendChild(ProductEditingWindow());
}